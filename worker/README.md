# Signup Worker

Cloudflare Worker that receives `POST { email }` from the marketing site's
"Sign me up" form and stores it in a D1 database.

## One-time setup

From this `worker/` directory:

```sh
# 1. Log in (opens browser)
npx wrangler login

# 2. Create the D1 database — note the database_id it prints
npx wrangler d1 create bavarian-mischief-signups

# 3. Paste the database_id into wrangler.toml (replace REPLACE_WITH_DATABASE_ID)

# 4. Create the table on the remote DB
npm run db:init

# 5. Deploy
npm run deploy
```

The deploy URL looks like `https://bavarian-mischief-signup.<your-handle>.workers.dev`.
Update `SIGNUP_URL` in `../sections.jsx` with that URL, commit, push.

## Day-to-day

```sh
# List recent signups
npm run db:list

# Stream live logs
npm run tail

# Re-deploy after code changes
npm run deploy
```

## Schema

`schema.sql` defines a single `signups` table keyed by email (so duplicate
submissions silently no-op via `INSERT OR IGNORE`).
