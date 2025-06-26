// lib/metrics.ts or at the top of your API route file
import { Registry, collectDefaultMetrics, Counter, Gauge } from 'prom-client';

// Create a global registry
const register = new Registry();

// Collect default system metrics (e.g., memory usage, event loop lag, etc.)
collectDefaultMetrics({ register });

// Custom Counter for HTTP GET requests
export const httpRequestCounter = new Counter({
  name: 'app_requests_total',
  help: 'The total number of processed requests',
  labelNames: ['method', 'endpoint'],
});

// Custom Gauge for uptime
export const uptimeGauge = new Gauge({
  name: 'app_uptime_seconds',
  help: 'Application uptime in seconds',
});

// Register custom metrics
register.registerMetric(httpRequestCounter);
register.registerMetric(uptimeGauge);

// Export the registry for use in your handler
export { register };
