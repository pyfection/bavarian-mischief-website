/* sections.jsx — page sections for Bavarian Mischief */

const { useT, useLang, LOCALES } = window.BM_I18N;

// Render a translated string that may contain inline HTML (<strong>, <em>, <b>, <br>, <span class="am">).
// All _html strings come from i18n.js — never from user input.
const Html = ({ as: As = "span", html, ...rest }) =>
  React.createElement(As, { ...rest, dangerouslySetInnerHTML: { __html: html } });

function useReveal() {
  /* Reveals are now handled by scroll-driven CSS (animation-timeline: view()).
     No JS needed — kept as a no-op so callers/exports stay stable. */
}

/* small inline glyphs (simple shapes only) */
const Hat = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 17c2.2.9 11.8.9 14 0-.5-3.2-1.3-6-2.4-7.6-.9-1.3-1.7-2.4-2.6-2.4-1 0-1.2 1.2-2 1.2s-1-1.2-2-1.2c-.9 0-1.7 1.1-2.6 2.4C6.3 11 5.5 13.8 5 17Z" fill="var(--green)" stroke="var(--green-deep)" strokeWidth="1.2"/>
    <path d="M4 17.2c3 1.3 13 1.3 16 0" stroke="var(--brown)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16.5 8.5c1.3-1.8 1.6-3.6 1.2-5.2-.1-.4.4-.6.6-.2.9 1.7 1 4 .2 6.4" fill="#f3ece0" stroke="var(--cream-dim)" strokeWidth=".6"/>
  </svg>
);
const Star = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1l1.8 8.2L22 12l-8.2 1.8L12 22l-1.8-8.2L2 12l8.2-1.8z" fill="currentColor"/></svg>
);

/* ---------------- LANG SWITCHER ---------------- */
function LangSwitch() {
  const [lang, setLang] = useLang();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <React.Fragment key={l.code}>
          {i > 0 && <span className="lang-sep" aria-hidden="true">·</span>}
          <button
            type="button"
            className={"lang-opt" + (l.code === lang ? " is-active" : "")}
            aria-pressed={l.code === lang}
            onClick={() => setLang(l.code)}
          >
            {l.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a className="brand" href="#top">
        <span className="mark"><Hat s={26} /></span>
        Bavarian <b>Mischief</b>
      </a>
      <div className="nav-links">
        <a href="#teem">{t("nav.games")}</a>
        <a href="#films">{t("nav.films")}</a>
        <a href="#books">{t("nav.books")}</a>
        <a href="#studio">{t("nav.studio")}</a>
        <a className="navcta" href="#follow">{t("nav.follow")}</a>
        <LangSwitch />
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ variant }) {
  const t = useT();
  return (
    <header className="hero" id="top" data-hv={variant} data-screen-label="Hero">
      <div className="glow"></div>
      {variant === "stage" && <div className="hero-stage-floor"></div>}
      <div className="hero-inner">
        <img className="hero-logo" src="assets/logo.png" alt="Bavarian Mischief — Indie Studio" />
        {variant !== "split" ? (
          <React.Fragment>
            <p className="hero-sub">{t("hero.sub")}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#teem">{t("hero.ctaPlay")}</a>
              <a className="btn btn-ghost" href="#films">{t("hero.ctaSee")}</a>
            </div>
          </React.Fragment>
        ) : (
          <div className="hero-side">
            <div className="label">{t("hero.splitLabel")}</div>
            <h3 className="hand" style={{ fontSize: 52, color: "var(--cream)", margin: "6px 0 10px" }}>Teem</h3>
            <p style={{ color: "var(--cream-dim)", fontSize: 16 }}>{t("hero.splitDesc")}</p>
            <div className="hero-cta" style={{ marginTop: 22 }}>
              <a className="btn btn-primary" href="#teem">{t("hero.splitCta")}</a>
            </div>
          </div>
        )}
      </div>

      {variant === "ticker" && (
        <div className="hero-ticker">
          <div className="track">
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {t("hero.ticker_html").map((line, j) => (
                  <Html key={j} html={line} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="hero-scroll">
        <span>{t("hero.scroll")}</span>
        <span className="arrow"></span>
      </div>
    </header>
  );
}

/* ---------------- TEEM ---------------- */
function Teem({ accent, alt }) {
  const t = useT();
  return (
    <section className="teem section-pad" id="teem" data-screen-label="Teem / Games">
      <div className="wrap teem-grid">
        <div className="reveal">
          <div className="teem-meta">
            <span className="pill live">{t("teem.pills.live")}</span>
            <span className="pill">{t("teem.pills.browser")}</span>
            <span className="pill">{t("teem.pills.mobile")}</span>
            <span className="pill">{t("teem.pills.strategy")}</span>
          </div>
          <div className="eyebrow">{t("teem.eyebrow")}</div>
          <h2 className="teem-title">Teem</h2>
          <p className="teem-desc">{t("teem.desc")}</p>
          <ul className="teem-feats">
            {t("teem.feats").map((f, i) => (
              <li key={i}><span className="b">◆</span> {f}</li>
            ))}
          </ul>
          <div className="teem-cta">
            <a className="btn btn-primary" href="https://teem.bavarianmischief.com" target="_blank" rel="noopener">{t("teem.ctaPlay")}</a>
            <a className="btn btn-green is-soon" href="#" onClick={(e)=>e.preventDefault()} aria-disabled="true">{t("teem.ctaMobile")} <span className="soon">{t("teem.comingSoon")}</span></a>
          </div>
        </div>
        <div className="reveal">
          <LifeBoard accent={accent} alt={alt} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FILMS ---------------- */
function Films() {
  const t = useT();
  const cards = t("films.cards");
  return (
    <section className="section-pad" id="films" data-screen-label="Films">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{t("films.eyebrow")}</div>
          <Html as="h2" className="section-title" html={t("films.title_html")} />
          <p className="section-lead">{t("films.lead")}</p>
        </div>
        <div className="films-grid">
          <a className="film-feature reveal" href="#follow" style={{ backgroundImage: "linear-gradient(to top, rgba(8,8,6,.94), rgba(8,8,6,.15) 58%, rgba(8,8,6,.05)), url('assets/beni.png')", backgroundSize: "cover", backgroundPosition: "center 18%" }}>
            <span className="badge">{t("films.featBadge")}</span>
            <h3>{t("films.featTitle")}</h3>
            <p>{t("films.featDesc")}</p>
          </a>
          <div className="film-side">
            {cards.map((c, i) => (
              <div className="film-card reveal" key={i}>
                <div className="k">{c.k}</div>
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKS ---------------- */
function Books() {
  const t = useT();
  return (
    <section className="books section-pad" id="books" data-screen-label="Books">
      <div className="wrap books-grid">
        <div className="reveal">
          <div className="books-meta">
            <span className="pill">{t("books.pills.hist")}</span>
            <span className="pill">{t("books.pills.coming")}</span>
            <span className="pill">{t("books.pills.year")}</span>
          </div>
          <div className="eyebrow">{t("books.eyebrow")}</div>
          <h2 className="books-title">Paiuvaria</h2>
          <div className="books-byline">{t("books.byline")}</div>
          {t("books.paras").map((p, i) => (
            <p className="books-desc" key={i}>{p}</p>
          ))}
          <p className="books-tag"><em>{t("books.tag")}</em></p>
          <div className="books-cta">
            <a className="btn btn-primary is-soon" href="#" onClick={(e)=>e.preventDefault()} aria-disabled="true">{t("books.ctaSample")} <span className="soon">{t("books.comingSoon")}</span></a>
            <a className="btn btn-ghost is-soon" href="#" onClick={(e)=>e.preventDefault()} aria-disabled="true">{t("books.ctaPreorder")} <span className="soon">{t("books.comingSoon")}</span></a>
          </div>
        </div>
        <div className="reveal book-cover-wrap">
          <img className="book-cover" src="assets/paiuvaria-cover.jpg" alt="Paiuvaria — a Roman youth gazing over an alpine valley toward distant mountains and ruins" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDIO ---------------- */
function Studio() {
  const t = useT();
  const icons = ["◆", "✦", "❋", "▲"];
  const values = t("studio.values").map((v, i) => ({ ic: icons[i] || "✦", ...v }));
  return (
    <section className="studio section-pad" id="studio" data-screen-label="Studio">
      <div className="wrap studio-grid">
        <div className="studio-copy reveal">
          <div className="eyebrow">{t("studio.eyebrow")}</div>
          <Html as="h2" className="section-title" html={t("studio.title_html")} />
          <Html as="p" html={t("studio.para1_html")} />
          <Html as="p" html={t("studio.para2_html")} />
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.t}>
                <div className="ic">{v.ic}</div>
                <h5>{v.t}</h5>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="studio-art">
            <span className="placeholder-note">{t("studio.placeholder")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOLLOW ---------------- */
// Update this after `wrangler deploy` — see worker/README.md
const SIGNUP_URL = "https://bavarian-mischief-signup.antextides.workers.dev";

function Follow() {
  const t = useT();
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr(true); return; }
    setErr(false); setBusy(true);
    try {
      const r = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!r.ok) throw new Error("server");
      setDone(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="follow section-pad" id="follow" data-screen-label="Follow">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="eyebrow solo" style={{ justifyContent: "center", display: "flex" }}>{t("follow.eyebrow")}</div>
        <Html as="h2" className="section-title" style={{ textAlign: "center", marginTop: 14 }} html={t("follow.title_html")} />
        <p className="section-lead" style={{ margin: "16px auto 0", textAlign: "center" }}>{t("follow.lead")}</p>
        {!done ? (
          <form className="form" onSubmit={submit}>
            <input
              className={err ? "err" : ""}
              type="email" placeholder={t("follow.placeholder")}
              value={email} onChange={(e) => { setEmail(e.target.value); setErr(false); }}
              disabled={busy}
            />
            <button className="btn btn-primary" type="submit" disabled={busy}>
              {busy ? t("follow.sending") : t("follow.send")}
            </button>
          </form>
        ) : (
          <div className="ok">{t("follow.ok")}</div>
        )}
        <div className="socials">
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>{t("follow.socials.steam")} <span className="soon">{t("follow.comingSoon")}</span></a>
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>{t("follow.socials.youtube")} <span className="soon">{t("follow.comingSoon")}</span></a>
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>{t("follow.socials.discord")} <span className="soon">{t("follow.comingSoon")}</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const t = useT();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 36 }}>
          <span className="dash"></span><span className="hat"><Hat s={22} /></span><span className="dash"></span>
        </div>
        <div className="foot-grid">
          <div className="brand">Bavarian <b>Mischief</b></div>
          <small>{t("footer.copyright")}</small>
          <small className="madewith">{t("footer.made")}</small>
        </div>
      </div>
    </footer>
  );
}

window.BM = { Nav, Hero, Teem, Films, Books, Studio, Follow, Footer, useReveal, Hat, Star };
