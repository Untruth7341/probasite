// Worker: отдаёт статичный сайт и маленький API /api/visitor.
// Cloudflare сам определяет по запросу город посетителя и дата-центр,
// который обработал запрос (request.cf) — на обычном хостинге такого нет.
const VALENCIA = { lat: 39.4699, lon: -0.3763 };

function distanceKm(lat1, lon1, lat2, lon2) {
  const r = (d) => (d * Math.PI) / 180;
  const a = Math.sin(r(lat2 - lat1) / 2) ** 2 +
    Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(r(lon2 - lon1) / 2) ** 2;
  return Math.round(6371 * 2 * Math.asin(Math.sqrt(a)));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/visitor') {
      const cf = request.cf || {};
      const lat = parseFloat(cf.latitude), lon = parseFloat(cf.longitude);
      const body = {
        city: cf.city || null,
        country: cf.country || null,
        colo: cf.colo || null,
        distanceKm: Number.isFinite(lat) && Number.isFinite(lon)
          ? distanceKm(lat, lon, VALENCIA.lat, VALENCIA.lon) : null,
      };
      return new Response(JSON.stringify(body), {
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
