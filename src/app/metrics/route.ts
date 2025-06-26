import {
  register,
  httpRequestCounter,
  uptimeGauge,
  trackIP
} from '@/lib/metrics';

export async function GET(req: Request) {
  // Track request
  httpRequestCounter.inc({ method: 'GET', endpoint: '/metrics' });
  uptimeGauge.set(process.uptime());

  // Estimate active IPs (via headers)
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() || // handle multiple IPs
    req.headers.get('x-real-ip') ||
    'unknown';

  if (ip !== 'unknown') {
    trackIP(ip);
  }

  const metrics = await register.metrics();

  return new Response(metrics, {
    headers: {
      'Content-Type': 'text/plain; version=0.0.4; charset=utf-8',
    },
  });
}
