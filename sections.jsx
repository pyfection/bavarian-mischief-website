/* sections.jsx — page sections for Bavarian Mischief */

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

/* ---------------- NAV ---------------- */
function Nav() {
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
        <a href="#teem">Games</a>
        <a href="#films">Films</a>
        <a href="#studio">Studio</a>
        <a className="navcta" href="#follow">Follow ✦</a>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ variant }) {
  return (
    <header className="hero" id="top" data-hv={variant} data-screen-label="Hero">
      <div className="glow"></div>
      {variant === "stage" && <div className="hero-stage-floor"></div>}
      <div className="hero-inner">
        <img className="hero-logo" src="assets/logo.png" alt="Bavarian Mischief — Game Studio" />
        {variant !== "split" ? (
          <React.Fragment>
            <p className="hero-sub">An indie game &amp; film studio from the foothills of Bavaria — building clever little strategy worlds and animated tales for curious minds.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#teem">▶ Play Teem</a>
              <a className="btn btn-ghost" href="#films">See what's brewing</a>
            </div>
          </React.Fragment>
        ) : (
          <div className="hero-side">
            <div className="label">Now playing</div>
            <h3 className="hand" style={{ fontSize: 52, color: "var(--cream)", margin: "6px 0 10px" }}>Teem</h3>
            <p style={{ color: "var(--cream-dim)", fontSize: 16 }}>A living-cells strategy game for browser &amp; mobile. Grow colonies, outwit the grid.</p>
            <div className="hero-cta" style={{ marginTop: 22 }}>
              <a className="btn btn-primary" href="#teem">▶ Play free</a>
            </div>
          </div>
        )}
      </div>

      {variant === "ticker" && (
        <div className="hero-ticker">
          <div className="track">
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                <span>✦ <b>Teem</b> — out now on browser &amp; mobile</span>
                <span>✦ Animated Bavarian tales — <b>in the workshop</b></span>
                <span>✦ Strategy games with a mischievous streak</span>
                <span>✦ Made in the foothills, <b>with some Bavarian mischief</b></span>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="hero-scroll">
        <span>Scroll</span>
        <span className="arrow"></span>
      </div>
    </header>
  );
}

/* ---------------- TEEM ---------------- */
function Teem({ accent, alt }) {
  return (
    <section className="teem section-pad" id="teem" data-screen-label="Teem / Games">
      <div className="wrap teem-grid">
        <div className="reveal">
          <div className="teem-meta">
            <span className="pill live">Live now</span>
            <span className="pill">Browser</span>
            <span className="pill">Mobile</span>
            <span className="pill">Strategy</span>
          </div>
          <div className="eyebrow">Our first game</div>
          <h2 className="teem-title">Teem</h2>
          <p className="teem-desc">A pocket-sized strategy game where you nurture colonies of living cells. Inspired by the maths of Conway's Game of Life — every move ripples outward, and the grid is always one breath from chaos.</p>
          <ul className="teem-feats">
            <li><span className="b">◆</span> Plant, prune and steer self-organising cell colonies.</li>
            <li><span className="b">◆</span> Daily puzzle boards &amp; an endless sandbox.</li>
            <li><span className="b">◆</span> One-thumb friendly — play anywhere, no install.</li>
          </ul>
          <div className="teem-cta">
            <a className="btn btn-primary" href="#" onClick={(e)=>e.preventDefault()}>▶ Play in browser</a>
            <a className="btn btn-green" href="#" onClick={(e)=>e.preventDefault()}>Get it on mobile</a>
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
  return (
    <section className="section-pad" id="films" data-screen-label="Films">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">In the workshop</div>
          <h2 className="section-title">Tales told in <em>Bavarian</em> <span className="am">✦</span></h2>
          <p className="section-lead">We're crafting short animated films for children — playful, warm-hearted stories told in the Bavarian language, keeping the soul of a people alive for the next generation.</p>
        </div>
        <div className="films-grid">
          <a className="film-feature reveal" href="#follow" style={{ backgroundImage: "linear-gradient(to top, rgba(8,8,6,.94), rgba(8,8,6,.15) 58%, rgba(8,8,6,.05)), url('assets/beni.png')", backgroundSize: "cover", backgroundPosition: "center 18%" }}>
            <span className="badge">Coming soon</span>
            <h3>Da Beni</h3>
            <p>Beni the marmot showing his world.</p>
          </a>
          <div className="film-side">
            <div className="film-card reveal">
              <div className="k">Series · ages 4–9</div>
              <h4>Spoken in real Bavarian</h4>
              <p>Authentic language, written and voiced with native speakers — so little ones learn the words their grandparents grew up with.</p>
            </div>
            <div className="film-card reveal">
              <div className="k">Format</div>
              <h4>Bite-sized episodes</h4>
              <p>Hand-animated shorts, 4–6 minutes each. Built for bedtime, classrooms and curious afternoons.</p>
            </div>
            <div className="film-card reveal">
              <div className="k">Want a preview?</div>
              <h4>Join the workshop list</h4>
              <p>We'll send the first clip and behind-the-scenes sketches before anyone else.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDIO ---------------- */
function Studio() {
  const values = [
    { ic: "◆", t: "Small & scrappy", d: "A tiny team that ships real things, not roadmaps." },
    { ic: "✦", t: "Clever by design", d: "Simple rules, deep play — systems that surprise us too." },
    { ic: "❋", t: "Rooted in place", d: "Made by Bavarians, flavoured with its language and folklore." },
    { ic: "▲", t: "A little mischief", d: "If it doesn't make us grin, it doesn't ship." },
  ];
  return (
    <section className="studio section-pad" id="studio" data-screen-label="Studio">
      <div className="wrap studio-grid">
        <div className="studio-copy reveal">
          <div className="eyebrow">The studio</div>
          <h2 className="section-title">Made with some<br/><span className="am">Bavarian mischief</span></h2>
          <p>We're a pint-sized independent studio making <strong>strategy games</strong> and <strong>animated films</strong> from the foothills of the Alps. We like ideas that look simple on the surface and unfold into something deeper the longer you stay.</p>
          <p>Games are where we play with systems; film is where we tell stories. Both carry the same streak of <strong>warm, curious mischief</strong> — and a soft spot for the place and the language we come from.</p>
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
            <span className="placeholder-note">studio / team photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOLLOW ---------------- */
function Follow() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr(true); return; }
    setErr(false); setDone(true);
  };
  return (
    <section className="follow section-pad" id="follow" data-screen-label="Follow">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="eyebrow solo" style={{ justifyContent: "center", display: "flex" }}>Stay in the loop</div>
        <h2 className="section-title" style={{ textAlign: "center", marginTop: 14 }}>Get the first look <span className="am">✦</span></h2>
        <p className="section-lead" style={{ margin: "16px auto 0", textAlign: "center" }}>New game updates, film previews and the odd behind-the-scenes sketch. No spam — just mischief.</p>
        {!done ? (
          <form className="form" onSubmit={submit}>
            <input
              className={err ? "err" : ""}
              type="email" placeholder="you@example.com"
              value={email} onChange={(e) => { setEmail(e.target.value); setErr(false); }}
            />
            <button className="btn btn-primary" type="submit">Sign me up</button>
          </form>
        ) : (
          <div className="ok">✓ You're on the list. Servus &amp; welcome!</div>
        )}
        <div className="socials">
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>Steam <span className="soon">Coming soon</span></a>
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>YouTube <span className="soon">Coming soon</span></a>
          <a className="soc" href="#" onClick={(e)=>e.preventDefault()}>Discord <span className="soon">Coming soon</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="divider" style={{ marginBottom: 36 }}>
          <span className="dash"></span><span className="hat"><Hat s={22} /></span><span className="dash"></span>
        </div>
        <div className="foot-grid">
          <div className="brand">Bavarian <b>Mischief</b></div>
          <small>© 2026 Bavarian Mischief Game Studio</small>
          <small className="madewith">made with some mischief ✦</small>
        </div>
      </div>
    </footer>
  );
}

window.BM = { Nav, Hero, Teem, Films, Studio, Follow, Footer, useReveal, Hat, Star };
