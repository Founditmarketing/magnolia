import { useState, useEffect, useRef, useCallback } from "react";

// --- ROUTER ---
const ROUTES = {
  "/": "home", "/commercial": "commercial", "/industrial": "industrial",
  "/dumpsters": "dumpsters", "/dumpster-pricing": "pricing", "/about": "about",
  "/contact": "contact", "/residential": "residential", "/gallery": "gallery",
};

function useRouter() {
  const [path, setPath] = useState("/");
  useEffect(() => {
    const h = () => setPath(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", h); h();
    return () => window.removeEventListener("hashchange", h);
  }, []);
  return { path, page: ROUTES[path] || "home" };
}

function Link({ to, children, className, style, onClick: oc }) {
  return <a href={`#${to}`} className={className} style={style} onClick={(e) => { oc?.(); window.scrollTo({ top: 0, behavior: "instant" }); }}>{children}</a>;
}

// --- SCROLL ANIMATION HOOK ---
function useFade() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1)" } };
}

function Fade({ children, delay = 0, style: s = {} }) {
  const { ref, style } = useFade();
  return <div ref={ref} style={{ ...style, transitionDelay: `${delay}s`, ...s }}>{children}</div>;
}

// --- COUNTER ---
function Counter({ end, suffix = "", duration = 2000 }) {
  const [c, setC] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const s = performance.now();
        const step = (n) => { const t = Math.min((n - s) / duration, 1); setC(Math.floor((1 - Math.pow(1 - t, 3)) * end)); if (t < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{c}{suffix}</span>;
}

// --- ICONS ---
const I = {
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Check: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  HardHat: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 15V6.5a3.5 3.5 0 0 1 7 0v.5"/><path d="M7 15v-2a5 5 0 0 1 10 0v2"/></svg>,
  Truck: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  Building: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>,
  Phone: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Mail: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Arrow: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Factory: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>,
  ChevDown: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  Clock: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Star: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Ruler: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2m-5-1 2-2m-5-1 2-2"/></svg>,
  FB: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  IG: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
};

// --- ISN BADGE ---
function ISNBadge({ size = 48 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.14, background: "linear-gradient(135deg, #003A5C, #00578A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 12px rgba(0,54,92,0.35)" }}>
      <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.3, fontFamily: "var(--fc)", letterSpacing: 1 }}>ISN</span>
    </div>
  );
}

// --- BUTTON ---
function Btn({ to, href, children, variant = "primary", style: s = {} }) {
  const base = { display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase", borderRadius: 6, transition: "all 0.3s", cursor: "pointer", border: "none" };
  const variants = {
    primary: { ...base, background: "linear-gradient(135deg, #FF6B00, #E55A00)", color: "#fff", padding: "15px 32px", boxShadow: "0 4px 20px rgba(255,107,0,0.3)", ...s },
    outline: { ...base, border: "2px solid rgba(255,255,255,0.25)", color: "#fff", padding: "13px 32px", background: "transparent", ...s },
    outlineDark: { ...base, border: "2px solid #D1CCC4", color: "#0A1628", padding: "13px 32px", background: "transparent", ...s },
    ghost: { ...base, color: "#FF6B00", padding: "8px 0", background: "transparent", fontSize: 14, ...s },
  };
  if (to) return <Link to={to} style={variants[variant]}>{children}</Link>;
  if (href) return <a href={href} style={variants[variant]}>{children}</a>;
  return <button style={variants[variant]}>{children}</button>;
}

// --- PAGE HERO ---
function PageHero({ tag, title, titleAccent, sub, children }) {
  return (
    <section style={{ background: "linear-gradient(160deg, #070E1A 0%, #0D1D35 50%, #0A1628 100%)", padding: "160px 24px 96px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", right: "-5%", bottom: "-20%", width: "50%", height: "80%", background: "radial-gradient(ellipse, rgba(255,107,0,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {tag && <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 13, letterSpacing: 5, textTransform: "uppercase", marginBottom: 20 }}>{tag}</div>}
        <h1 style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 900, fontSize: "clamp(38px, 6.5vw, 62px)", textTransform: "uppercase", letterSpacing: 0.5, margin: 0, lineHeight: 1.05, maxWidth: 800 }}>
          {title}{titleAccent && <><br /><span style={{ color: "#FF6B00" }}>{titleAccent}</span></>}
        </h1>
        {sub && <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--fb)", fontSize: 18, lineHeight: 1.75, marginTop: 24, maxWidth: 620 }}>{sub}</p>}
        {children}
      </div>
    </section>
  );
}

// --- TRUST BAR ---
function TrustBar() {
  const items = [
    { badge: true, label: "ISNetworld Certified", sub: "Verified Contractor" },
    { icon: <I.Shield />, label: "High-Limit Insurance", sub: "Fully Covered" },
    { icon: <I.HardHat />, label: "OSHA Compliant", sub: "Safety-First Operations" },
    { icon: <I.Check />, label: "Licensed & Bonded", sub: "State of Louisiana" },
  ];
  return (
    <div style={{ background: "#070E1A", borderTop: "1px solid rgba(255,107,0,0.15)", borderBottom: "1px solid rgba(255,107,0,0.08)", padding: "18px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
            <div style={{ color: "#FF6B00", flexShrink: 0 }}>{it.badge ? <ISNBadge size={34} /> : it.icon}</div>
            <div>
              <div style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 13, letterSpacing: 0.5 }}>{it.label}</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--fb)", fontSize: 11 }}>{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- SECTION HEADING ---
function SH({ tag, title, sub, light, center }) {
  return (
    <div style={{ marginBottom: 56, textAlign: center ? "center" : "left", maxWidth: center ? 700 : "none", margin: center ? "0 auto 56px" : "0 0 56px" }}>
      {tag && <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", marginBottom: 14 }}>{tag}</div>}
      <h2 style={{ color: light ? "#fff" : "#0A1628", fontFamily: "var(--fc)", fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 40px)", lineHeight: 1.1, textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>{title}</h2>
      {sub && <p style={{ color: light ? "rgba(255,255,255,0.5)" : "#6B7280", fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.7, marginTop: 16, maxWidth: center ? 560 : 580 }}>{sub}</p>}
    </div>
  );
}

// --- HEADER ---
function Header({ path }) {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  const [dd, setDd] = useState(false);
  useEffect(() => { const fn = () => setSc(window.scrollY > 50); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => { setOpen(false); setDd(false); }, [path]);

  const links = [
    { to: "/", label: "Home" },
    { label: "Services", ch: [{ to: "/commercial", label: "Commercial Construction" }, { to: "/industrial", label: "Industrial Services" }, { to: "/dumpsters", label: "Dumpster Rentals" }] },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: sc ? "rgba(7,14,26,0.97)" : "transparent", backdropFilter: sc ? "blur(16px)" : "none", borderBottom: sc ? "1px solid rgba(255,107,0,0.12)" : "1px solid transparent", transition: "all 0.4s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: sc ? 64 : 80, transition: "height 0.4s" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #FF6B00, #E55A00)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 17, fontFamily: "var(--fc)" }}>M</span>
            </div>
            <div>
              <div style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 15, letterSpacing: 2.5, textTransform: "uppercase", lineHeight: 1.1 }}>Magnolia State</div>
              <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 500, fontSize: 10, letterSpacing: 4, textTransform: "uppercase" }}>Construction LLC</div>
            </div>
          </Link>

          <nav className="dn" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map((l, i) => l.ch ? (
              <div key={i} style={{ position: "relative" }} onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 4, padding: "8px 0" }}>
                  {l.label} <I.ChevDown />
                </button>
                {dd && <div style={{ position: "absolute", top: "100%", left: -12, background: "rgba(7,14,26,0.98)", border: "1px solid rgba(255,107,0,0.15)", borderRadius: 8, padding: "8px 0", minWidth: 230, backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                  {l.ch.map((c, j) => <Link key={j} to={c.to} className="ddl" style={{ display: "block", padding: "10px 20px", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 14, fontWeight: 500 }}>{c.label}</Link>)}
                </div>}
              </div>
            ) : (
              <Link key={i} to={l.to} style={{ color: path === l.to ? "#FF6B00" : "rgba(255,255,255,0.7)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{l.label}</Link>
            ))}
            <Btn to="/contact" style={{ padding: "10px 22px", fontSize: 13 }}>Get a Quote</Btn>
          </nav>

          <button className="mt" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8 }}>
            {open ? <I.X /> : <I.Menu />}
          </button>
        </div>
      </header>

      {open && <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(7,14,26,0.98)", backdropFilter: "blur(20px)", paddingTop: 100, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        {links.map((l, i) => l.ch ? (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--fc)", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>Services</div>
            {l.ch.map((c, j) => <Link key={j} to={c.to} onClick={() => setOpen(false)} style={{ display: "block", color: "#fff", textDecoration: "none", padding: "6px 0", fontFamily: "var(--fc)", fontSize: 20, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{c.label}</Link>)}
          </div>
        ) : (
          <Link key={i} to={l.to} onClick={() => setOpen(false)} style={{ color: path === l.to ? "#FF6B00" : "#fff", textDecoration: "none", fontFamily: "var(--fc)", fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{l.label}</Link>
        ))}
        <Btn to="/contact" onClick={() => setOpen(false)} style={{ marginTop: 12, padding: "14px 40px" }}>Get a Quote</Btn>
      </div>}
    </>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer style={{ background: "#050B15", borderTop: "1px solid rgba(255,107,0,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #FF6B00, #E55A00)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "#fff", fontWeight: 900, fontSize: 15, fontFamily: "var(--fc)" }}>M</span></div>
              <div><div style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 13, letterSpacing: 2.5, textTransform: "uppercase", lineHeight: 1.1 }}>Magnolia State</div><div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 500, fontSize: 9, letterSpacing: 3.5, textTransform: "uppercase" }}>Construction LLC</div></div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7 }}>ISNetworld-certified commercial and industrial contractor serving Central Louisiana. Over 15 years of safety-first operations.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <a href="https://www.facebook.com/MagnoliaStateConstruction" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }}><I.FB /></a>
              <a href="https://www.instagram.com/magnoliastateconstructionllc/" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }}><I.IG /></a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>Services</h4>
            {[{ to: "/commercial", l: "Commercial Construction" }, { to: "/industrial", l: "Industrial Services" }, { to: "/dumpsters", l: "Dumpster Rentals" }, { to: "/dumpster-pricing", l: "Dumpster Pricing" }, { to: "/residential", l: "Residential" }].map((x, i) =>
              <Link key={i} to={x.to} style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 14, padding: "5px 0" }}>{x.l}</Link>
            )}
          </div>
          <div>
            <h4 style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>Contact</h4>
            <a href="tel:3187046308" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 14, display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}><I.Phone /> (318) 704-6308</a>
            <a href="mailto:chris@magnoliastateconstruction.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 14, display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}><I.Mail /> chris@magnoliastateconstruction.com</a>
            <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--fb)", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><I.MapPin /> 706 N. 3rd St, Alexandria, LA 71301</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--fb)", fontSize: 12, margin: 0 }}>© {new Date().getFullYear()} Magnolia State Construction LLC. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}><ISNBadge size={28} /><span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--fb)", fontSize: 11 }}>ISNetworld Verified</span></div>
        </div>
      </div>
    </footer>
  );
}

// --- CTA SECTION ---
function CTA({ title, sub, btn, btnTo }) {
  return (
    <section style={{ background: "linear-gradient(160deg, #0A1628, #122240, #0D1B2E)", padding: "96px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
        <Fade><h2 style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 800, fontSize: "clamp(26px, 5vw, 38px)", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 16px" }}>{title}</h2></Fade>
        <Fade delay={0.1}><p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>{sub}</p></Fade>
        <Fade delay={0.2}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn to={btnTo || "/contact"}>{btn || "Request a Quote"} <I.Arrow /></Btn>
            <Btn href="tel:3187046308" variant="outline">(318) 704-6308</Btn>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// =================== PAGES ===================

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "linear-gradient(160deg, #070E1A 0%, #0D1D35 40%, #0B1929 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div style={{ position: "absolute", right: "-8%", top: "5%", width: "55%", height: "90%", background: "radial-gradient(ellipse, rgba(255,107,0,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        {/* Diagonal accent line */}
        <div style={{ position: "absolute", top: 0, right: "35%", width: 1, height: "100%", background: "linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.08) 30%, rgba(255,107,0,0.08) 70%, transparent 100%)", transform: "rotate(15deg)", transformOrigin: "top center", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "160px 24px 100px", position: "relative", zIndex: 1, width: "100%" }}>
          <Fade>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <ISNBadge size={64} />
              <div>
                <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 14, letterSpacing: 3, textTransform: "uppercase" }}>ISNetworld Certified Contractor</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 13, marginTop: 2 }}>Elite Safety & Compliance — Pre-Qualified for Industrial Sites</div>
              </div>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <h1 style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 900, fontSize: "clamp(40px, 7.5vw, 72px)", lineHeight: 1.02, textTransform: "uppercase", letterSpacing: -0.5, margin: "0 0 28px", maxWidth: 780 }}>
              Commercial &amp;<br />Industrial<br /><span style={{ color: "#FF6B00" }}>Construction</span>
            </h1>
          </Fade>

          <Fade delay={0.3}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--fb)", fontSize: 18, lineHeight: 1.75, maxWidth: 560, margin: "0 0 40px" }}>
              Over 15 years building Central Louisiana. From ground-up commercial projects and industrial plant services to reliable dumpster rentals — ISN-certified, OSHA compliant, and fully insured. One call to Chris, and your project is in motion.
            </p>
          </Fade>

          <Fade delay={0.45}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Btn to="/contact">Request a Commercial Quote <I.Arrow /></Btn>
              <Btn to="/dumpsters" variant="outline">Rent a Dumpster</Btn>
            </div>
          </Fade>
        </div>
      </section>

      <TrustBar />

      {/* STATS */}
      <section style={{ background: "#F4F2EE", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
          {[{ n: 15, s: "+", l: "Years Experience" }, { n: 100, s: "%", l: "Safety Record" }, { n: 3, s: "", l: "Dumpster Sizes" }, { n: 1, s: "", l: "Call to Chris" }].map((x, i) => (
            <div key={i} style={{ padding: "16px 0" }}>
              <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 800, fontSize: 44 }}><Counter end={x.n} suffix={x.s} /></div>
              <div style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="What We Do" title="Built for Projects That Can't Afford to Go Wrong" sub="From multi-unit apartment complexes and financial institutions to plant turnarounds and job-site waste — we bring the certifications, insurance, and experience that serious projects demand." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
            {[
              { icon: <I.Building />, t: "Commercial Construction", to: "/commercial", d: "Ground-up builds, renovations, and tenant improvements. Multi-unit apartments, banks, churches, restaurants, offices, retail, and warehouses — every project managed from permits to punch list.", c: "#FF6B00" },
              { icon: <I.Factory />, t: "Industrial Services", to: "/industrial", d: "ISN-certified contractor for on-site work at refineries, mills, and manufacturing facilities. Plant maintenance, equipment pads, facility repairs, turnaround support, and industrial demolition.", c: "#00578A" },
              { icon: <I.Truck />, t: "Dumpster Rentals", to: "/dumpsters", d: "20, 30, and 40-yard roll-off dumpsters for commercial job sites, demolition, and large-scale cleanouts. Clear-cut pricing, flexible terms, and fast delivery across Central Louisiana.", c: "#2D7B3A" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <Link to={s.to} className="sc" style={{ textDecoration: "none", display: "block", background: "#F8F7F4", borderRadius: 12, padding: "44px 36px", border: "1px solid #E8E5DF", position: "relative", overflow: "hidden", transition: "all 0.35s ease", height: "100%" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: s.c }} />
                  <div style={{ color: s.c, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 21, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 14px" }}>{s.t}</h3>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.75, margin: "0 0 28px" }}>{s.d}</p>
                  <span style={{ color: s.c, fontFamily: "var(--fc)", fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>Learn More <I.Arrow /></span>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US - SPLIT LAYOUT */}
      <section style={{ background: "#0A1628", padding: "104px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, rgba(255,107,0,0.03), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <SH light tag="Why Magnolia State" title="The Contractor That Won't Put Your Project at Risk" sub="When a Project Manager or Plant Director brings us on-site, they know we've already passed every test. ISN-certified. Fully insured. OSHA compliant. Zero shortcuts." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {[
              { icon: <ISNBadge size={44} />, t: "ISNetworld Certified Safety", d: "We've passed the most rigorous third-party safety audit in the industry. Our ISN certification means verified compliance — no surprises, no liability gaps, no shutdown risks. When we show up, your paperwork is already done." },
              { icon: <I.Shield />, t: "High-Limit Insurance Coverage", d: "We carry comprehensive general liability and workers' compensation coverage meeting and exceeding the requirements of industrial sites, government facilities, and major commercial developers. Your project is fully protected." },
              { icon: <I.Ruler />, t: "15+ Years, Zero Shortcuts", d: "Led by Chris Naalbandian, our team brings over 15 years of construction experience to every job. From metal buildings and concrete to full commercial renovations — every project is managed with the systems and documentation that large-scale operations demand." },
            ].map((it, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "44px 36px" }}>
                  <div style={{ color: "#FF6B00", marginBottom: 20 }}>{it.icon}</div>
                  <h3 style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 19, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 14px" }}>{it.t}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{it.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#F4F2EE", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="How We Work" title="From First Call to Final Punch List" center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {[
              { n: "01", t: "Call Chris", d: "One phone call. No call centers, no runaround. Discuss your project scope, timeline, and requirements directly with our team leader." },
              { n: "02", t: "Site Evaluation", d: "We assess the job site, review specs, and build a clear, detailed estimate. No hidden fees, no surprises." },
              { n: "03", t: "Mobilize", d: "Permits pulled, safety plans filed, crew scheduled. ISN documentation submitted before boots hit the ground." },
              { n: "04", t: "Execute & Deliver", d: "On time, on budget, on record. Full documentation, daily communication, and a final product you can stand behind." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{ textAlign: "center", padding: "0 8px" }}>
                  <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 900, fontSize: 48, lineHeight: 1, marginBottom: 16, opacity: 0.6 }}>{s.n}</div>
                  <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 10px" }}>{s.t}</h3>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* DUMPSTER QUICK */}
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <SH tag="Dumpster Rentals" title="Clear-Cut Pricing. Fast Delivery. No Surprises." sub="Roll-off dumpsters sized for commercial job sites. Straightforward pricing, flexible rental terms, and delivery you can count on — often same day." />
              <div style={{ display: "flex", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
                {["20-Yard", "30-Yard", "40-Yard"].map((s, i) => (
                  <div key={i} style={{ background: "#F4F2EE", borderRadius: 10, padding: "20px 24px", textAlign: "center", flex: 1, minWidth: 100 }}>
                    <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 900, fontSize: 28 }}>{s.split("-")[0]}</div>
                    <div style={{ color: "#6B7280", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>Yard</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Btn to="/dumpster-pricing">View Pricing <I.Arrow /></Btn>
                <Btn href="tel:3187046308" variant="outlineDark"><I.Phone /> Call for Quote</Btn>
              </div>
            </div>
            <div style={{ background: "#0A1628", borderRadius: 16, padding: 40 }}>
              <h3 style={{ color: "#fff", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 24 }}>All Dumpsters Include</h3>
              {["$150 flat delivery fee", "$5/day rental — keep it as long as you need", "Multiple waste types: C&D, yard waste, concrete, dirt", "24-48 hour setup with availability check", "Flexible scheduling for commercial timelines", "One point of contact — call Chris directly"].map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ color: "#FF6B00", marginTop: 2, flexShrink: 0 }}><I.Check /></div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Ready to Discuss Your Next Project?" sub="Commercial build, industrial maintenance, or dumpster rental — we're ready to put 15+ years of certified experience to work for you." />
    </>
  );
}

function CommercialPage() {
  return (
    <>
      <PageHero tag="Our Services" title="Commercial" titleAccent="Construction" sub="Full-service commercial builds across Central Louisiana. From multi-unit apartments and financial institutions to restaurants and retail — we handle every phase from permits to punch list." />
      <TrustBar />
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="What We Build" title="Quality Construction for Commercial Spaces" sub="We specialize in commercial projects that require careful planning, code compliance, and the kind of craftsmanship that holds up to daily public use." />
          <div style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.8, color: "#4B5563", maxWidth: 800, marginBottom: 56 }}>
            <p>Our portfolio spans multi-unit apartment complexes, banks and financial institutions, churches, restaurants, retail shops, office suites, and warehouses. We work closely with business owners, developers, and property managers to ensure every build reflects their goals, meets code, and supports long-term functionality.</p>
            <p style={{ marginTop: 16 }}>We offer full design-build services with clear estimates upfront and a commitment to delivering on schedule and within budget. As an ISNetworld member contractor, our commercial clients partner with a pre-verified, low-risk team operating at the highest industry standards.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { t: "Metal Buildings", d: "Pre-engineered and custom metal structures for warehouses, workshops, and commercial facilities." },
              { t: "Concrete & Foundations", d: "Slabs, footings, equipment pads, and structural concrete for commercial and industrial applications." },
              { t: "Commercial Roofing", d: "TPO, metal, and modified bitumen systems built for commercial and industrial durability." },
              { t: "Siding, Windows & Doors", d: "Complete exterior envelope packages — materials chosen for performance, code, and aesthetics." },
              { t: "Tenant Improvements", d: "Interior buildouts for offices, retail, restaurants, and mixed-use spaces. Back-of-house to customer-facing." },
              { t: "Renovations & Remodels", d: "Transforming existing commercial spaces with structural, cosmetic, and functional upgrades." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{ background: "#F8F7F4", borderRadius: 10, padding: 32, border: "1px solid #E8E5DF", height: "100%" }}>
                  <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 10px" }}>{s.t}</h3>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Let's Talk About Your Commercial Project" sub="ISN-certified, fully insured, and ready to break ground. Get a detailed quote from a contractor who shows up on time, on budget, and on record." />
    </>
  );
}

function IndustrialPage() {
  return (
    <>
      <PageHero tag="ISN Certified" title="Industrial" titleAccent="Services" sub="On-site industrial contracting for refineries, mills, manufacturing facilities, and heavy infrastructure. Pre-qualified through ISNetworld. Pre-insured. Ready to mobilize.">
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
          <ISNBadge size={52} />
          <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 14 }}>ISN Certification Required? <span style={{ color: "#FF6B00", fontWeight: 600 }}>We're Already Verified.</span></div>
        </div>
      </PageHero>
      <TrustBar />
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Plant-Ready" title="Industrial Capabilities" sub="Our ISNetworld certification means we've already cleared your facility's contractor requirements. No waiting on paperwork — we mobilize pre-qualified and ready to work." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { t: "Plant Maintenance", d: "Scheduled and emergency maintenance for industrial facilities. Structural, roofing, and building envelope repairs that keep operations running." },
              { t: "Equipment Pads & Foundations", d: "Precision concrete work for heavy equipment installations — engineered pads, anchor bolt layouts, and structural supports." },
              { t: "Facility Repairs & Upgrades", d: "Building envelope repairs, structural modifications, and facility improvements executed under full safety protocols." },
              { t: "Turnaround Support", d: "Rapid mobilization for plant turnaround projects. We bring the manpower, equipment, and documentation to meet tight deadlines." },
              { t: "Industrial Demolition", d: "Controlled demolition and removal of industrial structures, equipment, and building components — safely and on schedule." },
              { t: "Safety & Compliance", d: "All work performed under strict OSHA protocols with full documentation, JHAs, and site-specific safety plans. No exceptions." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{ background: "#F8F7F4", borderRadius: 10, padding: 32, border: "1px solid #E8E5DF", height: "100%" }}>
                  <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 10px" }}>{s.t}</h3>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Need an ISN-Certified Contractor On-Site?" sub="Pre-qualified and ready to mobilize for your next industrial project. Let's discuss scope and timelines." />
    </>
  );
}

function DumpstersPage() {
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Roll-Off Dumpsters" titleAccent="for Every Project" sub="Convenient, reliable dumpster rentals for commercial job sites, demolition projects, renovations, and large-scale cleanouts across Central Louisiana." />
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Our Fleet" title="Three Sizes. One Standard of Service." center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 64 }}>
            {[
              { sz: "20", d: "Designed for small construction projects, renovations, or cleanouts. Compact dimensions — best balance of space efficiency and placement flexibility.", fit: "~6 pickup loads" },
              { sz: "30", d: "Suited for medium construction projects, renovations, or cleanouts. The right mix of accessibility, debris handling, and capacity for most job sites.", fit: "~9 pickup loads" },
              { sz: "40", d: "Perfect for large construction, demolition, or major cleanouts. Maximum capacity for maximum project efficiency.", fit: "~12 pickup loads" },
            ].map((d, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{ background: "#F8F7F4", borderRadius: 14, padding: "48px 36px", border: "1px solid #E8E5DF", textAlign: "center" }}>
                  <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 900, fontSize: 56, lineHeight: 1 }}>{d.sz}</div>
                  <div style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 14, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Yard Roll-Off</div>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>{d.d}</p>
                  <div style={{ display: "inline-block", background: "#E8E5DF", borderRadius: 20, padding: "5px 18px", fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, color: "#0A1628" }}>{d.fit}</div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade>
            <div style={{ background: "#0A1628", borderRadius: 16, padding: "48px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginBottom: 48 }}>
              {[
                { t: "Clear-Cut Pricing", d: "Straightforward rates. No hidden fees, no extra charges, no last-minute surprises. $150 delivery, $5/day rental." },
                { t: "Flexible Terms", d: "Our standard rental periods are longer than most, giving you time to finish without pressure." },
                { t: "Fast Delivery", d: "Call before noon, dumpster on-site by end of day. 24-48 hour setup for new containers." },
                { t: "Multiple Waste Types", d: "General waste, yard waste, concrete/brick, construction debris, dirt, asphalt — we handle it all." },
              ].map((f, i) => (
                <div key={i}>
                  <h4 style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 15, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 8px" }}>{f.t}</h4>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.d}</p>
                </div>
              ))}
            </div>
          </Fade>

          <div style={{ textAlign: "center" }}>
            <Btn to="/dumpster-pricing">View Full Pricing Details <I.Arrow /></Btn>
          </div>
        </div>
      </section>
      <CTA title="Need a Dumpster on Your Job Site?" sub="Call Chris directly or fill out the form. We'll get a roll-off delivered — often same day." btn="Reserve a Dumpster" />
    </>
  );
}

function PricingPage() {
  const sizes = [
    { sz: "20-Yard", del: "$150", dump: "$450", fuel: "$30", daily: "$5/day", mixed: "$300 trucking + $100/ton" },
    { sz: "30-Yard", del: "$150", dump: "$525", fuel: "$30", daily: "$5/day", mixed: "$300 trucking + $100/ton" },
    { sz: "40-Yard", del: "$150", dump: "$650", fuel: "$30", daily: "$5/day", mixed: "$300 trucking + $100/ton" },
  ];
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Dumpster" titleAccent="Pricing" sub="Transparent pricing on every roll-off rental. No hidden fees." />
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 56 }}>
            {sizes.map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{ background: "#F8F7F4", borderRadius: 14, padding: "40px 32px", border: i === 2 ? "2px solid #FF6B00" : "1px solid #E8E5DF", position: "relative" }}>
                  {i === 2 && <div style={{ position: "absolute", top: 12, right: 16, background: "#FF6B00", color: "#fff", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", padding: "4px 12px", borderRadius: 4 }}>Most Popular</div>}
                  <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 900, fontSize: 32, marginBottom: 4 }}>{s.sz}</div>
                  <div style={{ color: "#6B7280", fontFamily: "var(--fc)", fontWeight: 600, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Roll-Off Dumpster</div>
                  {[
                    ["Delivery Fee", s.del], ["Dump Fee (C&D)", s.dump], ["Fuel Surcharge", s.fuel], ["Daily Rental", s.daily], ["Mixed Waste", s.mixed],
                  ].map(([l, v], j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #E8E5DF" }}>
                      <span style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14 }}>{l}</span>
                      <span style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 14 }}>{v}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 24 }}><Btn href="tel:3187046308" style={{ width: "100%", justifyContent: "center", padding: "12px 24px", fontSize: 13 }}>Call for Quote</Btn></div>
                </div>
              </Fade>
            ))}
          </div>

          <Fade>
            <div style={{ background: "#F8F7F4", borderRadius: 12, padding: "36px 32px", border: "1px solid #E8E5DF" }}>
              <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 16 }}>Important Notes</h3>
              <div style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 8 }}>• No oils, liquids, paints, combustibles, or tires. Tires found at landfill incur $50/tire.</p>
                <p style={{ marginBottom: 8 }}>• Fill to water level only — no materials above rim. 5-ton weight limit; excess charged per ton.</p>
                <p style={{ marginBottom: 8 }}>• DOT max: 10 tons. Door must be shut, locked, latched, and pinned before transport.</p>
                <p style={{ marginBottom: 8 }}>• $150 Drop & Hook fee if container must return to exact same spot. $150 liner fee if required.</p>
                <p style={{ marginBottom: 8 }}>• Reroofing (shingles): additional $200 per dump.</p>
                <p>• New customers: credit application required prior to setup.</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <CTA title="Ready to Reserve?" sub="Call Chris directly or submit a quote request. We'll confirm availability and schedule delivery." btn="Reserve a Dumpster" />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero tag="About Us" title="Safety Is Not a Slogan." titleAccent="It's How We Operate." sub="Magnolia State Construction is a Central Louisiana commercial and industrial contractor built on the principle that safety and quality aren't competing priorities — they're the same thing." />
      <TrustBar />
      <section style={{ background: "#fff", padding: "104px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SH tag="Our Story" title="Over 15 Years Building Central Louisiana" />
          <div style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "#4B5563" }}>
            <p>At Magnolia State Construction, we've spent over 15 years bringing construction projects to life across Central Louisiana. Our mission is simple: high-quality construction services at a fair price, delivered with craftsmanship, professionalism, and care.</p>
            <p style={{ marginTop: 20 }}>Led by Chris Naalbandian — a member of the Louisiana Home Builders Association and an LP BuildSmart Preferred Contractor — our team has grown from a local operation into an ISNetworld-certified contractor trusted by industrial plants, commercial developers, and municipal projects across the region.</p>
            <p style={{ marginTop: 20 }}>Our ISN certification isn't just a badge. It represents hundreds of hours of verified safety documentation, insurance validation, and compliance auditing. As an ISN Member Contractor, we maintain the highest industry standards for safety, insurance, and regulatory compliance. When we show up to your site, we've already passed the test.</p>
            <p style={{ marginTop: 20 }}>From start to finish, we go above and beyond — building strong relationships through trust, clear communication, and dependable work. Whether it's a multi-unit apartment complex, a plant turnaround, or a dumpster rental for a demolition project, every job gets our full attention and dedication.</p>
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { t: "ISNetworld Certified", d: "Third-party verified safety and compliance. Pre-qualified for the industrial and commercial sites that demand the highest standards." },
              { t: "Comprehensive Insurance", d: "General liability and workers' compensation coverage that meets or exceeds every industrial and commercial site requirement." },
              { t: "OSHA Compliant", d: "Every crew member trained. Every job has a safety plan. Every project fully documented. Zero exceptions." },
              { t: "LA Home Builders Association", d: "Chris Naalbandian is a member of the LHBA, ensuring residential work meets the highest standards of the building community." },
              { t: "LP BuildSmart Preferred", d: "Recognized as a preferred contractor by LP Building Solutions for expertise in high-performance building products." },
              { t: "Locally Owned & Operated", d: "Based at 706 N. 3rd St in Alexandria. We know this community because we live and work here." },
            ].map((c, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{ background: "#F8F7F4", borderRadius: 10, padding: 32, border: "1px solid #E8E5DF" }}>
                  <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 16, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 10px" }}>{c.t}</h3>
                  <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Work With a Contractor You Can Trust" sub="ISN-certified. Fully insured. Over 15 years serving Central Louisiana." />
    </>
  );
}

function GalleryPage() {
  const paths = [
    "/images/construction_brick_1775169082069.png",
    "/images/industrial_project_1775169098001.png",
    "/images/warehouse_finished_1775169110438.png",
    "/images/workers_blueprints_1775169124334.png"
  ];

  return (
    <>
      <PageHero tag="Our Work" title="Project" titleAccent="Gallery" sub="A look at our commercial, residential, and specialty work across Central Louisiana." />
      <section style={{ background: "#F4F2EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {paths.map((src, i) => (
            <Fade key={i} delay={(i % 6) * 0.05}>
              <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/3", background: "#E0DDD8" }}>
                <img src={src} alt={`Project ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
            </Fade>
          ))}
        </div>
      </section>
      <CTA title="Like What You See?" sub="Let's build something worth showing off. Request a quote for your commercial or industrial project." />
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", zip: "", message: "" });
  const [sent, setSent] = useState(false);
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const inp = (k, l, t = "text") => (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: "block", color: "#6B7280", fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{l}</label>
      <input type={t} value={form[k]} onChange={e => up(k, e.target.value)} style={{ width: "100%", padding: "12px 16px", border: "1px solid #E0DDD8", borderRadius: 6, fontFamily: "var(--fb)", fontSize: 15, outline: "none", boxSizing: "border-box", background: "#F8F7F4" }} />
    </div>
  );
  return (
    <>
      <PageHero tag="Contact" title="Let's Discuss" titleAccent="Your Project" sub="One call to Chris. No call centers, no runaround." />
      <section style={{ background: "#F4F2EE", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 48 }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: 48, border: "1px solid #E8E5DF" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ color: "#2D7B3A", marginBottom: 16 }}><I.Check /></div>
                <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", margin: "0 0 8px" }}>Message Sent</h3>
                <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 15 }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 28px" }}>Request a Quote</h3>
                {inp("name", "Full Name")}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {inp("email", "Email", "email")}
                  {inp("phone", "Phone", "tel")}
                </div>
                {inp("zip", "Zip Code")}
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", color: "#6B7280", fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Service Needed</label>
                  <select value={form.service} onChange={e => up("service", e.target.value)} style={{ width: "100%", padding: "12px 16px", border: "1px solid #E0DDD8", borderRadius: 6, fontFamily: "var(--fb)", fontSize: 15, outline: "none", boxSizing: "border-box", background: "#F8F7F4" }}>
                    <option value="">Select a service...</option>
                    <option>Commercial Construction</option>
                    <option>Industrial Services</option>
                    <option>Dumpster Rental</option>
                    <option>Residential</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", color: "#6B7280", fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>Project Details</label>
                  <textarea value={form.message} onChange={e => up("message", e.target.value)} rows={4} style={{ width: "100%", padding: "12px 16px", border: "1px solid #E0DDD8", borderRadius: 6, fontFamily: "var(--fb)", fontSize: 15, outline: "none", boxSizing: "border-box", background: "#F8F7F4", resize: "vertical" }} />
                </div>
                <button onClick={() => setSent(true)} style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #FF6B00, #E55A00)", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase", boxShadow: "0 4px 16px rgba(255,107,0,0.3)" }}>Submit Quote Request</button>
              </>
            )}
          </div>
          <div>
            <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 28px" }}>Get in Touch Directly</h3>
            {[
              { icon: <I.Phone />, l: "Phone", v: "(318) 704-6308", h: "tel:3187046308" },
              { icon: <I.Mail />, l: "Email", v: "chris@magnoliastateconstruction.com", h: "mailto:chris@magnoliastateconstruction.com" },
              { icon: <I.MapPin />, l: "Office", v: "706 N. 3rd St, Alexandria, LA 71301" },
              { icon: <I.Clock />, l: "Response Time", v: "Within one business day" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                <div style={{ color: "#FF6B00", marginTop: 2 }}>{c.icon}</div>
                <div>
                  <div style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{c.l}</div>
                  {c.h ? <a href={c.h} style={{ color: "#0A1628", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 16, fontWeight: 500 }}>{c.v}</a> : <div style={{ color: "#0A1628", fontFamily: "var(--fb)", fontSize: 16, fontWeight: 500 }}>{c.v}</div>}
                </div>
              </div>
            ))}
            <div style={{ background: "#0A1628", borderRadius: 14, padding: 36, marginTop: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <ISNBadge size={48} />
                <div>
                  <div style={{ color: "#FF6B00", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 14, letterSpacing: 1.5, textTransform: "uppercase" }}>ISNetworld Certified</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 12 }}>Verified Commercial & Industrial Contractor</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>Our ISN certification means we're pre-qualified for industrial and commercial sites. No waiting on paperwork — we mobilize ready to work.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ResidentialPage() {
  return (
    <>
      <PageHero tag="Residential" title="Residential" titleAccent="Services" sub="While our primary focus is commercial and industrial construction, we continue to serve select residential clients across Central Louisiana with the same quality and professionalism." />
      <section style={{ background: "#fff", padding: "96px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "#4B5563", marginBottom: 48 }}>
            <p>Led by Chris Naalbandian — a member of the Louisiana Home Builders Association and an LP BuildSmart Preferred Contractor — our residential team brings the same safety standards, quality materials, and professional project management to every home project.</p>
            <p style={{ marginTop: 20 }}>We believe the smallest details make the biggest impact. From elegant crown molding and custom cabinetry to granite countertops and full home renovations, every project receives our full attention and dedication.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginBottom: 48 }}>
            {[
              { t: "Custom Trim Work", d: "Crown molding, baseboards, window and door casings — professional trim that brings charm and structure to every room." },
              { t: "Custom Cabinetry", d: "Kitchen, bathroom, closet, and laundry cabinetry built to your exact specifications. Soft-close drawers, pull-out shelving, built-in systems." },
              { t: "Granite Countertops", d: "Natural stone surfaces for kitchens and bathrooms. Polished, durable, and installed with expert precision." },
              { t: "Millwork", d: "Custom woodwork, built-ins, decorative elements, and architectural details that bring character to every corner." },
              { t: "Roofing & Exteriors", d: "Roofing, siding, windows, doors, and gutters — complete exterior packages for lasting protection and curb appeal." },
              { t: "Renovations", d: "From single-room upgrades to full home renovations. Each project managed with care from start to finish." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#F8F7F4", borderRadius: 10, padding: 28, border: "1px solid #E8E5DF" }}>
                <h3 style={{ color: "#0A1628", fontFamily: "var(--fc)", fontWeight: 700, fontSize: 16, textTransform: "uppercase", letterSpacing: 0.5, margin: "0 0 8px" }}>{s.t}</h3>
                <p style={{ color: "#6B7280", fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <Btn to="/contact">Contact Us for Residential Work <I.Arrow /></Btn>
        </div>
      </section>
    </>
  );
}

// ===== APP =====
export default function App() {
  const { path, page } = useRouter();
  const pages = { home: HomePage, commercial: CommercialPage, industrial: IndustrialPage, dumpsters: DumpstersPage, pricing: PricingPage, about: AboutPage, contact: ContactPage, residential: ResidentialPage, gallery: GalleryPage };
  const Page = pages[page] || HomePage;
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800;900&display=swap');
        :root { --fc: 'Barlow Condensed', sans-serif; --fb: 'Barlow', sans-serif; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; }
        body { -webkit-font-smoothing: antialiased; }
        .dn { display: flex !important; }
        .mt { display: none !important; }
        @media (max-width: 768px) { .dn { display: none !important; } .mt { display: block !important; } }
        .sc:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }
        .ddl:hover { background: rgba(255,107,0,0.08) !important; color: #FF6B00 !important; }
        ::selection { background: rgba(255,107,0,0.15); }
        img { max-width: 100%; }
      `}</style>
      <Header path={path} />
      <Page />
      <Footer />
    </div>
  );
}
