CREATE TABLE IF NOT EXISTS signups (
  email       TEXT PRIMARY KEY,
  created_at  TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_agent  TEXT,
  ip_country  TEXT
);

CREATE INDEX IF NOT EXISTS idx_signups_created_at ON signups(created_at);
