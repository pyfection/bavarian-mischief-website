// Bavarian Mischief — signup endpoint (Cloudflare Worker + D1)
// POST { email: string } -> 200 { ok: true } | 4xx { ok: false, error }

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const corsHeaders = (origin, allowed) => {
  const allow = allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
};

const json = (status, body, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const cors = corsHeaders(origin, allowed);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json(405, { ok: false, error: "method_not_allowed" }, cors);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json(400, { ok: false, error: "bad_json" }, cors);
    }

    const email = String(payload?.email || "").trim().toLowerCase();
    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
      return json(400, { ok: false, error: "invalid_email" }, cors);
    }

    const ua = (request.headers.get("User-Agent") || "").slice(0, 500);
    const country = request.cf?.country || null;

    try {
      await env.DB.prepare(
        "INSERT OR IGNORE INTO signups (email, user_agent, ip_country) VALUES (?, ?, ?)"
      ).bind(email, ua, country).run();
    } catch (e) {
      return json(500, { ok: false, error: "db_error" }, cors);
    }

    return json(200, { ok: true }, cors);
  },
};
