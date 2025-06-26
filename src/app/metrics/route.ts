// app/api/metrics/route.ts or wherever your endpoint lives
import { register, httpRequestCounter, uptimeGauge } from '@/lib/metrics'; // adjust path

export async function GET(request: Request) {
  console.log(request.method, request.url);
  // Update metrics
  httpRequestCounter.inc({ method: 'GET', endpoint: '/metrics' });
  uptimeGauge.set(process.uptime());

  // Expose metrics in Prometheus text format
  const metrics = await register.metrics();

  return new Response(metrics, {
    headers: {
      'Content-Type': 'text/plain; version=0.0.4; charset=utf-8',
    },
  });
}
