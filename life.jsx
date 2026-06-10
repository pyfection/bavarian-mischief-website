/* life.jsx — a small playable cellular automaton for the Teem feature.
   Brand-palette Conway's Game of Life. Click/drag to seed cells. */

function useLife(cols, rows) {
  const makeGrid = React.useCallback((fill) => {
    const g = new Uint8Array(cols * rows);
    if (fill) for (let i = 0; i < g.length; i++) g[i] = Math.random() < 0.22 ? 1 : 0;
    return g;
  }, [cols, rows]);

  const [grid, setGrid] = React.useState(() => seedPattern(cols, rows));
  const [gen, setGen] = React.useState(0);
  const gridRef = React.useRef(grid);
  gridRef.current = grid;

  const step = React.useCallback(() => {
    const g = gridRef.current;
    const next = new Uint8Array(cols * rows);
    let alive = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let n = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (!dx && !dy) continue;
            const nx = (x + dx + cols) % cols;
            const ny = (y + dy + rows) % rows;
            n += g[ny * cols + nx];
          }
        }
        const idx = y * cols + x;
        const live = g[idx];
        const nv = live ? (n === 2 || n === 3 ? 1 : 0) : (n === 3 ? 1 : 0);
        next[idx] = nv;
        alive += nv;
      }
    }
    setGrid(next);
    setGen((v) => v + 1);
    return alive;
  }, [cols, rows]);

  return { grid, setGrid, gen, setGen, step, makeGrid };
}

// seed with a few gliders + an oscillator for instant life
function seedPattern(cols, rows) {
  const g = new Uint8Array(cols * rows);
  const set = (x, y) => { if (x >= 0 && x < cols && y >= 0 && y < rows) g[y * cols + x] = 1; };
  const glider = (ox, oy) => { [[1,0],[2,1],[0,2],[1,2],[2,2]].forEach(([x,y]) => set(ox+x, oy+y)); };
  glider(3, 3); glider(10, 8); glider(18, 4);
  // blinker + block clusters
  [[24,20],[25,20],[26,20]].forEach(([x,y]) => set(x,y));
  [[8,24],[9,24],[8,25],[9,25]].forEach(([x,y]) => set(x,y));
  // pulsar-ish scatter
  for (let i = 0; i < 60; i++) set(Math.floor(Math.random()*cols), Math.floor(rows*0.6 + Math.random()*rows*0.35));
  return g;
}

function LifeBoard({ accent, alt }) {
  const t = window.BM_I18N.useT();
  const COLS = 34, ROWS = 34;
  const { grid, setGrid, gen, setGen, step } = useLife(COLS, ROWS);
  const [running, setRunning] = React.useState(true);
  const [speed, setSpeed] = React.useState(110);
  const [alive, setAlive] = React.useState(0);
  const canvasRef = React.useRef(null);
  const paintRef = React.useRef({ down: false, val: 1 });

  // draw
  React.useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    const W = cv.width, H = cv.height;
    const cw = W / COLS, ch = H / ROWS;
    ctx.clearRect(0, 0, W, H);
    // subtle grid dots
    ctx.fillStyle = "rgba(255,255,255,0.035)";
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      ctx.fillRect(x*cw + cw/2 - 0.5, y*ch + ch/2 - 0.5, 1, 1);
    }
    let count = 0;
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (grid[y*COLS+x]) {
          count++;
          const pad = cw * 0.12;
          // alternate accent for a touch of life
          ctx.fillStyle = ((x+y) % 7 === 0) ? alt : accent;
          const r = 3;
          const px = x*cw+pad, py = y*ch+pad, w = cw-pad*2, h = ch-pad*2;
          ctx.beginPath();
          ctx.moveTo(px+r,py);
          ctx.arcTo(px+w,py,px+w,py+h,r);
          ctx.arcTo(px+w,py+h,px,py+h,r);
          ctx.arcTo(px,py+h,px,py,r);
          ctx.arcTo(px,py,px+w,py,r);
          ctx.fill();
        }
      }
    }
    setAlive(count);
  }, [grid, accent, alt]);

  // tick
  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const a = step();
      // gentle "colony rain": keep the board lively when life dwindles
      if (a < 14) {
        setGrid((g) => {
          const n = Uint8Array.from(g);
          const set = (x, y) => { if (x >= 0 && x < COLS && y >= 0 && y < ROWS) n[y*COLS+x] = 1; };
          const ox = Math.floor(Math.random() * (COLS - 4));
          const oy = Math.floor(Math.random() * (ROWS - 4));
          [[1,0],[2,1],[0,2],[1,2],[2,2]].forEach(([dx,dy]) => set(ox+dx, oy+dy)); // a glider
          return n;
        });
      }
    }, speed);
    return () => clearInterval(id);
  }, [running, speed, step]);

  // painting interaction
  const cellFromEvent = (e) => {
    const cv = canvasRef.current; const rect = cv.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const x = Math.floor(cx / rect.width * COLS);
    const y = Math.floor(cy / rect.height * ROWS);
    return { x, y };
  };
  const paintAt = (x, y, val) => {
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return;
    setGrid((g) => { const n = Uint8Array.from(g); n[y*COLS+x] = val; return n; });
  };
  const onDown = (e) => {
    e.preventDefault();
    const { x, y } = cellFromEvent(e);
    const cur = grid[y*COLS+x];
    paintRef.current = { down: true, val: cur ? 0 : 1 };
    paintAt(x, y, paintRef.current.val);
  };
  const onMove = (e) => {
    if (!paintRef.current.down) return;
    const { x, y } = cellFromEvent(e);
    paintAt(x, y, paintRef.current.val);
  };
  const onUp = () => { paintRef.current.down = false; };

  React.useEffect(() => {
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => { window.removeEventListener("mouseup", onUp); window.removeEventListener("touchend", onUp); };
  }, []);

  const clear = () => { setGrid(new Uint8Array(COLS*ROWS)); setGen(0); setRunning(false); };
  const reseed = () => { setGrid(seedPattern(COLS, ROWS)); setGen(0); setRunning(true); };

  return (
    <div className="life-board">
      <div className="life-canvas-wrap">
        <canvas
          ref={canvasRef}
          width={680} height={680}
          onMouseDown={onDown} onMouseMove={onMove}
          onTouchStart={onDown} onTouchMove={onMove}
        />
      </div>
      <div className="life-bar">
        <div className="life-stats">{t("life.gen")} <b>{String(gen).padStart(3,"0")}</b> · {t("life.alive")} <b>{String(alive).padStart(3,"0")}</b></div>
        <div className="life-controls">
          <button className={"icon-btn" + (running ? " on" : "")} onClick={() => setRunning(r => !r)}>{running ? t("life.pause") : t("life.run")}</button>
          <button className="icon-btn" onClick={() => setSpeed(s => s === 110 ? 50 : s === 50 ? 230 : 110)}>
            {speed === 50 ? t("life.speedFast") : speed === 230 ? t("life.speedSlow") : t("life.speedNormal")}
          </button>
          <button className="icon-btn" onClick={reseed}>{t("life.reseed")}</button>
          <button className="icon-btn" onClick={clear}>{t("life.clear")}</button>
        </div>
      </div>
      <div className="life-hint">{t("life.hint")}</div>
    </div>
  );
}

window.LifeBoard = LifeBoard;
