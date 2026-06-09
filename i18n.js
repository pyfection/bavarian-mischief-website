/* i18n.js — Bavarian Mischief translations.
 *
 * Add a new locale by adding a top-level key under STRINGS with the same shape
 * as `en`. Missing keys fall back to English.
 *
 * Some values are HTML strings (suffix _html) — they are rendered with
 * dangerouslySetInnerHTML and may contain <strong> / <em>. Keep them safe:
 * never interpolate user input into _html keys.
 */
(function () {
  const STRINGS = {
    en: {
      doc: { title: "Bavarian Mischief — Indie Studio" },
      nav: { games: "Games", films: "Films", books: "Books", studio: "Studio", follow: "Follow ✦" },
      hero: {
        sub: "An indie studio from the foothills of Bavaria — making games, film and books for curious minds, with a streak of Bavarian mischief.",
        ctaPlay: "▶ Play Teem",
        ctaSee: "See what's brewing",
        splitLabel: "Now playing",
        splitDesc: "A living-cells strategy game for browser & mobile. Grow colonies, outwit the grid.",
        splitCta: "▶ Play free",
        scroll: "Scroll",
        ticker_html: [
          "✦ <b>Teem</b> — out now on browser &amp; mobile",
          "✦ Animated Bavarian tales — <b>in the workshop</b>",
          "✦ Strategy games with a mischievous streak",
          "✦ Bavarian novels — <b>in the workshop</b>",
          "✦ Made in the foothills, <b>with some Bavarian mischief</b>",
        ],
      },
      teem: {
        pills: { live: "Live now", browser: "Browser", mobile: "Mobile", strategy: "Strategy" },
        eyebrow: "Our first game",
        desc: "A pocket-sized strategy game where you nurture colonies of living cells. Inspired by the maths of Conway's Game of Life — every move ripples outward, and the grid is always one breath from chaos.",
        feats: [
          "Plant, prune and steer self-organising cell colonies.",
          "Daily puzzle boards & an endless sandbox.",
          "One-thumb friendly — play anywhere, no install.",
        ],
        ctaPlay: "▶ Play in browser",
        ctaMobile: "Get it on mobile",
        comingSoon: "Coming soon",
      },
      films: {
        eyebrow: "In the workshop",
        title_html: "Tales told in <em>Bavarian</em> <span class=\"am\">✦</span>",
        lead: "We're crafting short animated films for children — playful, warm-hearted stories told in the Bavarian language, keeping the soul of a people alive for the next generation.",
        featBadge: "Coming soon",
        featTitle: "Da Beni",
        featDesc: "Beni the marmot showing his world.",
        cards: [
          { k: "Series · ages 4–9", h: "Spoken in real Bavarian", p: "Authentic language, written and voiced with native speakers — so little ones learn the words their grandparents grew up with." },
          { k: "Format", h: "Bite-sized episodes", p: "Hand-animated shorts, 4–6 minutes each. Built for bedtime, classrooms and curious afternoons." },
          { k: "Want a preview?", h: "Join the workshop list", p: "We'll send the first clip and behind-the-scenes sketches before anyone else." },
        ],
      },
      books: {
        pills: { hist: "Historical fiction", coming: "Coming of age", year: "476 AD" },
        eyebrow: "Our first book",
        byline: "by Matthias Schreiber",
        paras: [
          "The Western Roman Empire is breaking apart along the Danube frontier — where a crumbling fortress, shifting loyalties, and rumours of war make survival a daily bargain. Cassius is only a boy, but he's old enough to see that Rome's laws no longer reach its edges, and that faith — old and new — can unite a town or tear it in two.",
          "When violence finally spills over, Cassius is swept from the only home he has ever known and thrust into a dangerous journey through borderlands ruled by hunger, politics, and the sword. Taken under the protection of Severinus, a wandering holy man with a startling reputation, Cassius is drawn into a struggle far larger than any battlefield: keeping frightened people alive, holding a community together as it fractures, and choosing mercy when fear demands cruelty.",
          "As winter closes in and enemies gather, Cassius must grow faster than a child should — learning what it means to lead when there is no longer an empire to rely on, and discovering that the hardest fight is not against the invaders at the gates, but against despair within the walls.",
        ],
        tag: "A coming-of-age historical epic about faith, fallout, and the cost of building something new from the ruins of Rome.",
        ctaSample: "Read a sample",
        ctaPreorder: "Pre-order",
        comingSoon: "Coming soon",
      },
      studio: {
        eyebrow: "The studio",
        title_html: "Made with some<br/><span class=\"am\">Bavarian mischief</span>",
        para1_html: "We're a pint-sized independent studio making <strong>strategy games</strong>, <strong>animated films</strong> and <strong>novels</strong> from the foothills of the Alps. We like ideas that look simple on the surface and unfold into something deeper the longer you stay.",
        para2_html: "Games are where we play with systems; films and books are where we tell them. All three carry the same streak of <strong>warm, curious mischief</strong> — and a soft spot for the place and the language we come from.",
        values: [
          { t: "Small & scrappy", d: "A tiny team that ships real things, not roadmaps." },
          { t: "Clever by design", d: "Simple rules, deep play — systems that surprise us too." },
          { t: "Rooted in place", d: "Made by Bavarians, flavoured with its language and folklore." },
          { t: "A little mischief", d: "If it doesn't make us grin, it doesn't ship." },
        ],
        placeholder: "studio / team photo",
      },
      follow: {
        eyebrow: "Stay in the loop",
        title_html: "Get the first look <span class=\"am\">✦</span>",
        lead: "New game updates, film previews, book sneak-peeks and the odd behind-the-scenes sketch. No spam — just mischief.",
        placeholder: "you@example.com",
        send: "Sign me up",
        sending: "Sending…",
        ok: "✓ You're on the list. Servus & welcome!",
        socials: { steam: "Steam", youtube: "YouTube", discord: "Discord" },
        comingSoon: "Coming soon",
      },
      footer: {
        copyright: "© 2026 Bavarian Mischief",
        made: "made with some mischief ✦",
      },
    },

    de: {
      doc: { title: "Bavarian Mischief — Indie-Studio" },
      nav: { games: "Spiele", films: "Filme", books: "Bücher", studio: "Studio", follow: "Folgen ✦" },
      hero: {
        sub: "Ein Indie-Studio aus den bayerischen Voralpen — Spiele, Filme und Bücher für neugierige Köpfe, mit einer Prise bayerischem Schabernack.",
        ctaPlay: "▶ Teem spielen",
        ctaSee: "Schau, was sich tut",
        splitLabel: "Jetzt zu haben",
        splitDesc: "Ein Strategiespiel um lebende Zellen — fürs Handy und den Browser. Lass Kolonien wachsen, überliste das Gitter.",
        splitCta: "▶ Gratis spielen",
        scroll: "Scrollen",
        ticker_html: [
          "✦ <b>Teem</b> — jetzt im Browser und auf dem Handy",
          "✦ Animierte bayerische Geschichten — <b>in der Werkstatt</b>",
          "✦ Strategiespiele mit Schabernack",
          "✦ Bayerische Romane — <b>in der Werkstatt</b>",
          "✦ Aus den Voralpen, <b>mit etwas bayerischem Schabernack</b>",
        ],
      },
      teem: {
        pills: { live: "Jetzt live", browser: "Browser", mobile: "Handy", strategy: "Strategie" },
        eyebrow: "Unser erstes Spiel",
        desc: "Ein Strategiespiel im Westentaschenformat, in dem du Kolonien lebender Zellen heranziehst. Inspiriert von der Mathematik von Conways „Game of Life“ — jeder Zug zieht Kreise, und das Gitter ist immer nur einen Atemzug vom Chaos entfernt.",
        feats: [
          "Pflanze, beschneide und lenke selbstorganisierende Zellkolonien.",
          "Tägliche Rätselfelder und ein endloser Sandkasten.",
          "Einhandtauglich — überall spielbar, ganz ohne Installation.",
        ],
        ctaPlay: "▶ Im Browser spielen",
        ctaMobile: "Aufs Handy holen",
        comingSoon: "Demnächst",
      },
      films: {
        eyebrow: "In der Werkstatt",
        title_html: "Geschichten erzählt auf <em>Bairisch</em> <span class=\"am\">✦</span>",
        lead: "Wir machen kurze Animationsfilme für Kinder — verspielt, warmherzig und auf Bairisch erzählt, damit die Seele eines Volkes für die nächste Generation lebendig bleibt.",
        featBadge: "Demnächst",
        featTitle: "Da Beni",
        featDesc: "Das Murmeltier Beni zeigt seine Welt.",
        cards: [
          { k: "Serie · 4–9 Jahre", h: "Echtes Bairisch gesprochen", p: "Authentische Sprache, von Muttersprachlern geschrieben und gesprochen — so lernen die Kleinen die Wörter, mit denen ihre Großeltern aufgewachsen sind." },
          { k: "Format", h: "Episoden in Häppchen", p: "Handgezeichnete Kurzfilme, je 4–6 Minuten. Gemacht für die Bettkante, das Klassenzimmer und neugierige Nachmittage." },
          { k: "Vorschau gefällig?", h: "In die Werkstattliste eintragen", p: "Wir schicken den ersten Clip und Skizzen aus der Werkstatt vorab — vor allen anderen." },
        ],
      },
      books: {
        pills: { hist: "Historischer Roman", coming: "Coming-of-Age", year: "476 n. Chr." },
        eyebrow: "Unser erstes Buch",
        byline: "von Matthias Schreiber",
        paras: [
          "Das Weströmische Reich zerbricht an der Donaugrenze — wo eine verfallende Festung, wechselnde Loyalitäten und Kriegsgerüchte das Überleben zu einer täglichen Abwägung machen. Cassius ist noch ein Junge, aber alt genug, um zu sehen, dass Roms Gesetze die Ränder des Reichs nicht mehr erreichen und dass der Glaube — alt wie neu — eine Stadt einen oder entzweien kann.",
          "Als die Gewalt schließlich überkocht, wird Cassius aus dem einzigen Zuhause gerissen, das er je kannte, und auf eine gefährliche Reise durch Grenzlande geworfen, die von Hunger, Politik und dem Schwert beherrscht werden. Unter dem Schutz des wandernden Heiligen Severinus, einem Mann mit aufsehenerregendem Ruf, gerät Cassius in einen Kampf, der größer ist als jedes Schlachtfeld: verängstigte Menschen am Leben halten, eine zerbrechende Gemeinschaft zusammenhalten und Barmherzigkeit wählen, wo die Furcht nach Härte verlangt.",
          "Als der Winter naht und sich die Feinde sammeln, muss Cassius schneller wachsen, als ein Kind es sollte — er muss lernen, was Führung bedeutet, wenn es kein Reich mehr gibt, auf das man sich verlassen kann, und entdecken, dass der härteste Kampf nicht gegen die Belagerer vor den Toren geführt wird, sondern gegen die Verzweiflung innerhalb der Mauern.",
        ],
        tag: "Ein Coming-of-Age-Epos über Glauben, Trümmer und den Preis, aus den Resten Roms etwas Neues zu bauen.",
        ctaSample: "Leseprobe",
        ctaPreorder: "Vorbestellen",
        comingSoon: "Demnächst",
      },
      studio: {
        eyebrow: "Das Studio",
        title_html: "Gemacht mit etwas<br/><span class=\"am\">bayerischem Schabernack</span>",
        para1_html: "Wir sind ein winziges, unabhängiges Studio aus den Voralpen und machen <strong>Strategiespiele</strong>, <strong>Animationsfilme</strong> und <strong>Romane</strong>. Wir mögen Ideen, die an der Oberfläche schlicht wirken und beim Bleiben tiefer werden.",
        para2_html: "In Spielen spielen wir mit Systemen; in Filmen und Büchern erzählen wir sie. Alle drei tragen denselben Zug von <strong>warmem, neugierigem Schabernack</strong> — und ein Faible für den Ort und die Sprache, aus der wir kommen.",
        values: [
          { t: "Klein und beherzt", d: "Ein winziges Team, das echte Dinge liefert, keine Roadmaps." },
          { t: "Klug entworfen", d: "Einfache Regeln, tiefes Spiel — Systeme, die uns selbst überraschen." },
          { t: "Heimisch verwurzelt", d: "Von Bayern gemacht, gewürzt mit ihrer Sprache und Folklore." },
          { t: "Ein wenig Schabernack", d: "Wenn es uns nicht zum Schmunzeln bringt, wird's nichts." },
        ],
        placeholder: "Studio- / Teamfoto",
      },
      follow: {
        eyebrow: "Bleib auf dem Laufenden",
        title_html: "Den ersten Blick sichern <span class=\"am\">✦</span>",
        lead: "Neue Spiel-Updates, Filmvorschauen, Buch-Schnipsel und ab und zu eine Skizze aus der Werkstatt. Kein Spam — nur Schabernack.",
        placeholder: "du@beispiel.de",
        send: "Eintragen",
        sending: "Sende …",
        ok: "✓ Du bist auf der Liste. Servus & willkommen!",
        socials: { steam: "Steam", youtube: "YouTube", discord: "Discord" },
        comingSoon: "Demnächst",
      },
      footer: {
        copyright: "© 2026 Bavarian Mischief",
        made: "mit etwas Schabernack gemacht ✦",
      },
    },

    es: {
      doc: { title: "Bavarian Mischief — Estudio Indie" },
      nav: { games: "Juegos", films: "Películas", books: "Libros", studio: "Estudio", follow: "Síguenos ✦" },
      hero: {
        sub: "Un estudio indie a los pies de los Alpes bávaros — hacemos juegos, películas y libros para mentes curiosas, con un toque de travesura bávara.",
        ctaPlay: "▶ Jugar a Teem",
        ctaSee: "Mira qué se cuece",
        splitLabel: "Disponible ahora",
        splitDesc: "Un juego de estrategia de células vivas para navegador y móvil. Cultiva colonias, vence al tablero.",
        splitCta: "▶ Jugar gratis",
        scroll: "Desliza",
        ticker_html: [
          "✦ <b>Teem</b> — ya disponible en navegador y móvil",
          "✦ Cuentos animados en bávaro — <b>en el taller</b>",
          "✦ Juegos de estrategia con un toque travieso",
          "✦ Novelas bávaras — <b>en el taller</b>",
          "✦ Hecho a los pies de los Alpes, <b>con travesura bávara</b>",
        ],
      },
      teem: {
        pills: { live: "Disponible", browser: "Navegador", mobile: "Móvil", strategy: "Estrategia" },
        eyebrow: "Nuestro primer juego",
        desc: "Un juego de estrategia de bolsillo donde cultivas colonias de células vivas. Inspirado en las matemáticas del Juego de la Vida de Conway — cada movimiento se propaga, y el tablero está siempre a un suspiro del caos.",
        feats: [
          "Planta, poda y dirige colonias autoorganizadas de células.",
          "Puzles diarios y un modo libre infinito.",
          "Apto para un solo pulgar — juega donde sea, sin instalar.",
        ],
        ctaPlay: "▶ Jugar en el navegador",
        ctaMobile: "Llévalo al móvil",
        comingSoon: "Próximamente",
      },
      films: {
        eyebrow: "En el taller",
        title_html: "Cuentos contados en <em>bávaro</em> <span class=\"am\">✦</span>",
        lead: "Estamos creando cortos animados para niños — historias juguetonas y cálidas contadas en lengua bávara, manteniendo viva el alma de un pueblo para la próxima generación.",
        featBadge: "Próximamente",
        featTitle: "Da Beni",
        featDesc: "Beni, la marmota, te muestra su mundo.",
        cards: [
          { k: "Serie · 4–9 años", h: "Hablado en bávaro auténtico", p: "Lengua auténtica, escrita y doblada por hablantes nativos — para que los pequeños aprendan las palabras con las que crecieron sus abuelos." },
          { k: "Formato", h: "Episodios breves", p: "Cortos hechos a mano, de 4 a 6 minutos cada uno. Pensados para la hora de dormir, el aula y las tardes curiosas." },
          { k: "¿Una vista previa?", h: "Únete a la lista del taller", p: "Te enviaremos el primer clip y bocetos del taller antes que a nadie." },
        ],
      },
      books: {
        pills: { hist: "Novela histórica", coming: "Mayoría de edad", year: "476 d. C." },
        eyebrow: "Nuestro primer libro",
        byline: "por Matthias Schreiber",
        paras: [
          "El Imperio Romano de Occidente se desmorona a lo largo de la frontera del Danubio — donde una fortaleza en ruinas, lealtades cambiantes y rumores de guerra convierten la supervivencia en un trato diario. Cassius es apenas un niño, pero ya lo bastante mayor para ver que las leyes de Roma ya no llegan hasta sus márgenes, y que la fe — antigua y nueva — puede unir a un pueblo o partirlo en dos.",
          "Cuando la violencia por fin estalla, Cassius se ve arrancado del único hogar que ha conocido y lanzado a un viaje peligroso por tierras fronterizas regidas por el hambre, la política y la espada. Bajo la protección de Severinus, un santo errante de reputación sorprendente, Cassius se ve arrastrado a una lucha mucho mayor que cualquier campo de batalla: mantener vivas a personas asustadas, sostener una comunidad que se resquebraja y elegir la misericordia cuando el miedo exige crueldad.",
          "Cuando el invierno se cierra y los enemigos se reúnen, Cassius debe crecer más rápido de lo que un niño debería — aprender lo que significa liderar cuando ya no hay imperio en el que apoyarse, y descubrir que la lucha más dura no es contra los invasores a las puertas, sino contra la desesperación entre los muros.",
        ],
        tag: "Una épica histórica de mayoría de edad sobre la fe, las secuelas y el precio de construir algo nuevo desde las ruinas de Roma.",
        ctaSample: "Leer un fragmento",
        ctaPreorder: "Reservar",
        comingSoon: "Próximamente",
      },
      studio: {
        eyebrow: "El estudio",
        title_html: "Hecho con algo de<br/><span class=\"am\">travesura bávara</span>",
        para1_html: "Somos un estudio independiente diminuto, a los pies de los Alpes, que hace <strong>juegos de estrategia</strong>, <strong>películas animadas</strong> y <strong>novelas</strong>. Nos gustan las ideas que parecen simples por fuera y se vuelven más profundas cuanto más te quedas.",
        para2_html: "Los juegos son donde jugamos con los sistemas; las películas y los libros, donde los contamos. Los tres llevan la misma chispa de <strong>travesura cálida y curiosa</strong> — y debilidad por el lugar y la lengua de los que venimos.",
        values: [
          { t: "Pequeños y resueltos", d: "Un equipo diminuto que entrega cosas reales, no hojas de ruta." },
          { t: "Inteligentes por diseño", d: "Reglas simples, juego profundo — sistemas que también nos sorprenden." },
          { t: "Arraigados en un lugar", d: "Hechos por bávaros, con sabor a su lengua y su folclore." },
          { t: "Una pizca de travesura", d: "Si no nos saca una sonrisa, no sale." },
        ],
        placeholder: "foto del estudio / equipo",
      },
      follow: {
        eyebrow: "No te lo pierdas",
        title_html: "Sé el primero en verlo <span class=\"am\">✦</span>",
        lead: "Novedades de juegos, adelantos de películas, sorbitos de libros y algún boceto de la trastienda. Sin spam — solo travesuras.",
        placeholder: "tu@ejemplo.com",
        send: "Apúntame",
        sending: "Enviando…",
        ok: "✓ Estás en la lista. ¡Servus y bienvenido!",
        socials: { steam: "Steam", youtube: "YouTube", discord: "Discord" },
        comingSoon: "Próximamente",
      },
      footer: {
        copyright: "© 2026 Bavarian Mischief",
        made: "hecho con algo de travesura ✦",
      },
    },

    /* Bavarian — being filled in section by section with the author.
     * Missing keys fall back to English. Not yet shown in the switcher. */
    bar: {
      doc: { title: "Bavarian Mischief — Indie Studio" },
      nav: { games: "Cbui", films: "Fuim", books: "Biaha", studio: "Cdudio", follow: "Kim mid ✦" },
      hero: {
        sub: "A indi cdudio aus de Boaricn foaoipm — mia máha cbui, fuim und biaha fia de naigiarign, mit a bisal a Boaricn gaude.",
        ctaPlay: "▶ Cbui Teem",
        ctaSee: "Cau vós brodld",
        splitLabel: "Iadsa dsum cbuin",
        splitDesc: "A ctrategi cbui mid lebendign zein fia'n brausa und's hendi. Lás kolonin vágsn, ibalist's gita.",
        splitCta: "▶ Cbui um sunst",
        scroll: "Óbe",
        ticker_html: [
          "✦ <b>Teem</b> — iads im brausa und af'm hendi",
          "✦ Animiade boarice gcihdn — <b>in da veakcdód</b>",
          "✦ Ctrategi cbui mid a sakricn gaude",
          "✦ Boarice biaha — <b>in da veakcdód</b>",
          "✦ Gmahd in de foaoipm, <b>mid am dutal boaricn gcbas</b>",
        ],
      },
      teem: {
        pills: { live: "Iads live", browser: "Brausa", mobile: "Hendi", strategy: "Ctrategi" },
        eyebrow: "Unsa easds cbui",
        desc: "A hándlihs ctrategi cbui, vo'sd kolonin fo lebendige zein afdsiagsd. Insbiriad fo da matematig fo'm Conway sein \"Game of Life\" — iéda dsug dsiagd seine ring, und es gita is óivai blos an átmdsuag veg fom kaos.",
        feats: [
          "Bflands, cnaid und lenk seibsdoaganisiade zeikolonin.",
          "An iédn dóg naie rédsl und a endlose sándkisdn.",
          "Mid oam dama dsum cbuin — ivaroi, nix instalian.",
        ],
        ctaPlay: "▶ Im brausa cbuin",
        ctaMobile: "Af's hendi hoin",
        comingSoon: "Kumd bóid",
      },
    },
  };

  // Locales the switcher will show. Bavarian will be added once translated.
  const LOCALES = [
    { code: "en", label: "EN", htmlLang: "en" },
    { code: "de", label: "DE", htmlLang: "de" },
    { code: "es", label: "ES", htmlLang: "es" },
  ];
  const CODES = LOCALES.map((l) => l.code);

  function pickInitialLocale() {
    try {
      const url = new URLSearchParams(location.search).get("lang");
      if (CODES.includes(url)) return url;
      const stored = localStorage.getItem("bm.lang");
      if (CODES.includes(stored)) return stored;
      const browser = (navigator.language || "").slice(0, 2).toLowerCase();
      if (CODES.includes(browser)) return browser;
    } catch (e) { /* SSR / sandboxed iframe */ }
    return "en";
  }

  function resolveKey(dict, path) {
    const parts = path.split(".");
    let v = dict;
    for (const p of parts) {
      if (v == null) return undefined;
      v = v[p];
    }
    return v;
  }

  function makeT(lang) {
    return function t(path) {
      const v = resolveKey(STRINGS[lang], path);
      if (v !== undefined) return v;
      return resolveKey(STRINGS.en, path);
    };
  }

  const LocaleContext = React.createContext({
    lang: "en",
    setLang: () => {},
    t: makeT("en"),
  });

  function useLocale() {
    const [lang, setLangState] = React.useState(pickInitialLocale);
    const t = React.useMemo(() => makeT(lang), [lang]);
    React.useEffect(() => {
      document.documentElement.lang = (LOCALES.find((l) => l.code === lang) || LOCALES[0]).htmlLang;
      const title = resolveKey(STRINGS[lang], "doc.title") || resolveKey(STRINGS.en, "doc.title");
      if (title) document.title = title;
    }, [lang]);
    const setLang = React.useCallback((l) => {
      if (!CODES.includes(l)) return;
      setLangState(l);
      try {
        localStorage.setItem("bm.lang", l);
        const u = new URL(location.href);
        u.searchParams.set("lang", l);
        history.replaceState({}, "", u);
      } catch (e) { /* sandboxed */ }
    }, []);
    return { lang, setLang, t };
  }

  const useT = () => React.useContext(LocaleContext).t;
  const useLang = () => {
    const c = React.useContext(LocaleContext);
    return [c.lang, c.setLang];
  };

  window.BM_I18N = { STRINGS, LOCALES, CODES, pickInitialLocale, makeT, LocaleContext, useLocale, useT, useLang };
})();
