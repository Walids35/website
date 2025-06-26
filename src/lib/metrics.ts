import { Registry, collectDefaultMetrics, Counter, Gauge } from 'prom-client';

const register = new Registry();
collectDefaultMetrics({ register });

// Request counter
export const httpRequestCounter = new Counter({
  name: 'app_requests_total',
  help: 'Total number of processed requests',
  labelNames: ['method', 'endpoint'],
});

// Uptime
export const uptimeGauge = new Gauge({
  name: 'app_uptime_seconds',
  help: 'Application uptime in seconds',
});

// Active IPs gauge (proxy for active users)
export const activeIPGauge = new Gauge({
  name: 'app_active_ips',
  help: 'Estimated number of active users based on unique IPs in the last 15 minutes',
});

// Track active IPs manually
const activeIPSet = new Set<string>();

// Every 15 minutes, reset the IP set
setInterval(() => {
  activeIPSet.clear();
  activeIPGauge.set(0); // reset gauge as well
}, 15 * 60 * 1000);

// Function to register an IP address
export function trackIP(ip: string) {
  if (!activeIPSet.has(ip)) {
    activeIPSet.add(ip);
    activeIPGauge.set(activeIPSet.size);
  }
}

// Register metrics
register.registerMetric(httpRequestCounter);
register.registerMetric(uptimeGauge);
register.registerMetric(activeIPGauge);

export { register };
