import { useState, useEffect } from "react";
import { Link, I, Fade } from "../utils";
import { Btn, ISNBadge } from "./Shared";

export function Header({ path }) {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  const [dd, setDd] = useState(false);
  
  useEffect(() => { 
    const fn = () => setSc(window.scrollY > 40); 
    window.addEventListener("scroll", fn); 
    return () => window.removeEventListener("scroll", fn); 
  }, []);
  
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
      <header className={`glass-nav ${sc ? "scrolled" : ""}`} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: sc ? 76 : 96, transition: "height 0.4s" }}>
          
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Magnolia State Construction" style={{ height: 50, objectFit: "contain" }} />
          </Link>

          <nav className="dn" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {links.map((l, i) => l.ch ? (
              <div key={i} style={{ position: "relative" }} onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                <button style={{ background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, padding: "8px 0" }}>
                  {l.label} <I.ChevDown />
                </button>
                {dd && <div className="glass" style={{ position: "absolute", top: "100%", left: -16, borderRadius: 12, padding: "12px 0", minWidth: 260, boxShadow: "0 20px 60px rgba(0,0,0,0.8)", border: "1px solid var(--border-light)" }}>
                  {l.ch.map((c, j) => <Link key={j} to={c.to} style={{ display: "block", padding: "12px 24px", color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, transition: "color 0.2s, background 0.2s" }} onMouseOver={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)" }} onMouseOut={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.background = "transparent" }}>{c.label}</Link>)}
                </div>}
              </div>
            ) : (
              <Link key={i} to={l.to} style={{ color: path === l.to ? "var(--primary)" : "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase", transition: "color 0.3s" }}>{l.label}</Link>
            ))}
            <Btn to="/contact" style={{ padding: "12px 28px", fontSize: 14 }}>Get a Quote</Btn>
          </nav>

          <button className="mt" onClick={() => setOpen(!open)} style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, color: "var(--text-primary)", cursor: "pointer", padding: 10 }}>
            {open ? <I.X /> : <I.Menu />}
          </button>
        </div>
      </header>

      {open && <div className="glass" style={{ position: "fixed", inset: 0, zIndex: 999, paddingTop: 120, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        {links.map((l, i) => l.ch ? (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>Services</div>
            {l.ch.map((c, j) => <Link key={j} to={c.to} onClick={() => setOpen(false)} style={{ display: "block", color: "var(--text-primary)", textDecoration: "none", padding: "8px 0", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{c.label}</Link>)}
          </div>
        ) : (
          <Link key={i} to={l.to} onClick={() => setOpen(false)} style={{ color: path === l.to ? "var(--primary)" : "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>{l.label}</Link>
        ))}
        <Btn to="/contact" onClick={() => setOpen(false)} style={{ marginTop: 24, padding: "16px 48px", fontSize: 18 }}>Get a Quote</Btn>
      </div>}
    </>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 56, marginBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <img src="/logo.png" alt="Magnolia State Construction" style={{ height: 60, objectFit: "contain" }} />
            </div>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8 }}>ISNetworld-certified commercial and industrial contractor serving Central Louisiana. Elevating standards through safety-first operations.</p>
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              <a href="https://www.facebook.com/MagnoliaStateConstruction" target="_blank" rel="noopener" style={{ color: "var(--text-tertiary)", background: "rgba(255,255,255,0.03)", padding: 10, borderRadius: 50, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="rgba(255,90,0,0.1)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="rgba(255,255,255,0.03)"; }}><I.FB /></a>
              <a href="https://www.instagram.com/magnoliastateconstructionllc/" target="_blank" rel="noopener" style={{ color: "var(--text-tertiary)", background: "rgba(255,255,255,0.03)", padding: 10, borderRadius: 50, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="rgba(255,90,0,0.1)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="rgba(255,255,255,0.03)"; }}><I.IG /></a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Services</h4>
            {[{ to: "/commercial", l: "Commercial Construction" }, { to: "/industrial", l: "Industrial Services" }, { to: "/dumpsters", l: "Dumpster Rentals" }, { to: "/dumpster-pricing", l: "Pricing Guide" }].map((x, i) =>
              <Link key={i} to={x.to} style={{ display: "block", color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, padding: "8px 0", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--primary)"} onMouseOut={e => e.currentTarget.style.color="var(--text-secondary)"}>{x.l}</Link>
            )}
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Contact</h4>
            <a href="tel:3187046308" style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)"}}><I.Phone /></span> (318) 704-6308</a>
            <a href="mailto:chris@magnoliastateconstruction.com" style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)"}}><I.Mail /></span> chris@magnoliastateconstruction.com</a>
            <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12 }}><span style={{color: "var(--primary)"}}><I.MapPin /></span> 706 N. 3rd St, Alexandria, LA 71301</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 13, margin: 0 }}>© {new Date().getFullYear()} Magnolia State Construction LLC. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}><ISNBadge size={32} /><span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>ISNetworld Verified</span></div>
        </div>
      </div>
    </footer>
  );
}
