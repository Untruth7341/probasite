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
  async fetch(request, env, ctx) {
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
    if (url.pathname === '/api/valencia') return valenciaNow(ctx);
    return env.ASSETS.fetch(request);
  },
};

// «Валенсия сейчас»: погода, температура моря и закат из бесплатного Open-Meteo.
// Ответ кэшируется в Cloudflare на 15 минут — внешний сервис дёргается редко,
// а посетители получают данные из ближайшего дата-центра.
async function valenciaNow(ctx) {
  const cache = caches.default;
  const key = new Request('https://cache.local/api/valencia-v1');
  const hit = await cache.match(key);
  if (hit) return hit;

  const q = `latitude=${VALENCIA.lat}&longitude=${VALENCIA.lon}&timezone=Europe%2FMadrid`;
  const [wx, sea] = await Promise.all([
    fetch(`https://api.open-meteo.com/v1/forecast?${q}&current=temperature_2m,weather_code,is_day&daily=sunset&forecast_days=1`).then(r => r.ok ? r.json() : null).catch(() => null),
    fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=39.45&longitude=-0.30&timezone=Europe%2FMadrid&current=sea_surface_temperature`).then(r => r.ok ? r.json() : null).catch(() => null),
  ]);
  const body = {
    temp: wx?.current?.temperature_2m ?? null,
    code: wx?.current?.weather_code ?? null,
    isDay: wx?.current?.is_day ?? 1,
    sunset: wx?.daily?.sunset?.[0]?.slice(11, 16) ?? null,
    sea: sea?.current?.sea_surface_temperature ?? null,
  };
  const res = new Response(JSON.stringify(body), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=900' },
  });
  if (body.temp != null) ctx.waitUntil(cache.put(key, res.clone()));
  return res;
}
