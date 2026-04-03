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
    { label: "Services", ch: [
      { to: "/commercial", label: "Commercial Construction", icon: <I.Building />, desc: "Ground-up builds and major renovations." }, 
      { to: "/industrial", label: "Industrial Services", icon: <I.Factory />, desc: "ISN-certified plant construction & maintenance." }, 
      { to: "/dumpsters", label: "Dumpster Rentals", icon: <I.Truck />, desc: "20, 30, and 40-yard fast roll-off delivery." }
    ]},
    { to: "/gallery", label: "Our Work" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Premium Dark Pre-Header */}
      <div className="dn" style={{ background: "#0F172A", position: "relative", zIndex: 1001, height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", fontFamily: "var(--font-display)", fontSize: 13, color: "#94A3B8", letterSpacing: 0.5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, maxWidth: 1400, margin: "0 auto", width: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
             <span style={{ color: "var(--primary)" }}><I.Check /></span>
             <span style={{ fontWeight: 600, color: "#fff" }}>ISNetworld Certified</span> Contractor
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="https://maps.google.com" style={{ color: "inherit", textDecoration: "none", display: "flex", gap: 8, alignItems: "center" }}><I.MapPin /> 706 N. 3rd St, Alexandria, LA</a>
          </div>
        </div>
      </div>

      {/* Main Structural Nav */}
      <header style={{ position: "fixed", top: sc ? 0 : 40, left: 0, right: 0, zIndex: 1000, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", background: sc ? "rgba(255, 255, 255, 0.95)" : "transparent", backdropFilter: sc ? "blur(24px)" : "none", WebkitBackdropFilter: sc ? "blur(24px)" : "none", borderBottom: sc ? "1px solid var(--border-light)" : "1px solid transparent", boxShadow: sc ? "0 10px 30px -10px rgba(0,0,0,0.05)" : "none" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: sc ? 80 : 100, transition: "height 0.4s" }}>
          
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Magnolia State Construction" style={{ height: 50, objectFit: "contain", filter: !sc && path === "/" ? "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" : "none" }} />
          </Link>

          <nav className="dn" style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {links.map((l, i) => l.ch ? (
              <div key={i} style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }} onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                <button style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, padding: "24px 0" }}>
                  {l.label} <I.ChevDown />
                </button>
                {dd && (
                  <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", padding: 16 }}>
                    <div className="glass" style={{ borderRadius: 16, padding: 12, minWidth: 400, boxShadow: "0 24px 48px rgba(0,0,0,0.1)", border: "1px solid var(--border-light)", background: "#ffffff", display: "flex", flexDirection: "column", gap: 8 }}>
                      {l.ch.map((c, j) => (
                        <Link key={j} to={c.to} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 16, borderRadius: 12, color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.background = "var(--bg-dark)" }} onMouseOut={e => { e.currentTarget.style.background = "transparent" }}>
                          <div style={{ color: "var(--primary)", background: "var(--primary-bg)", padding: 12, borderRadius: 10 }}>{c.icon}</div>
                          <div>
                            <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{c.label}</div>
                            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.4 }}>{c.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={i} to={l.to} style={{ color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", padding: "24px 0", position: "relative" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          
          {/* Action Area */}
          <div className="dn" style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="tel:3187046308" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "var(--primary)" }}><I.Phone /></span> (318) 704-6308</a>
            <Btn to="/contact" style={{ padding: "14px 32px", fontSize: 14 }}>Get a Quote</Btn>
          </div>

          <button className="mt" onClick={() => setOpen(!open)} style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-light)", borderRadius: 8, color: "var(--text-primary)", cursor: "pointer", padding: 12 }}>
            {open ? <I.X /> : <I.Menu />}
          </button>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Menu */}
      {open && <div className="glass" style={{ position: "fixed", inset: 0, zIndex: 999, paddingTop: 120, background: "rgba(255,255,255,0.98)", display: "flex", flexDirection: "column", padding: "120px 24px 40px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {links.map((l, i) => l.ch ? (
            <div key={i}>
              <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>{l.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingLeft: 16, borderLeft: "2px solid var(--border-light)" }}>
                {l.ch.map((c, j) => <Link key={j} to={c.to} onClick={() => setOpen(false)} style={{ display: "block", color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: 0.5 }}>{c.label}</Link>)}
              </div>
            </div>
          ) : (
            <Link key={i} to={l.to} onClick={() => setOpen(false)} style={{ color: path === l.to ? "var(--primary)" : "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{l.label}</Link>
          ))}
        </div>
        <div>
          <a href="tel:3187046308" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}><I.Phone /> (318) 704-6308</a>
          <Btn to="/contact" onClick={() => setOpen(false)} style={{ width: "100%", justifyContent: "center", padding: "20px", fontSize: 16 }}>Request a Quote</Btn>
        </div>
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
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8 }}>ISNetworld-certified commercial and industrial contractor serving Central Louisiana. Elevating standards through safety-first operations.</p>
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              <a href="https://www.facebook.com/MagnoliaStateConstruction" target="_blank" rel="noopener" style={{ color: "var(--text-tertiary)", background: "var(--bg-elevated)", padding: 12, borderRadius: 50, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="var(--primary-bg)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="var(--bg-elevated)"; }}><I.FB /></a>
              <a href="https://www.instagram.com/magnoliastateconstructionllc/" target="_blank" rel="noopener" style={{ color: "var(--text-tertiary)", background: "var(--bg-elevated)", padding: 12, borderRadius: 50, transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="var(--primary-bg)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="var(--bg-elevated)"; }}><I.IG /></a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Services</h4>
            {[{ to: "/commercial", l: "Commercial Construction" }, { to: "/industrial", l: "Industrial Services" }, { to: "/dumpsters", l: "Dumpster Rentals" }, { to: "/dumpster-pricing", l: "Pricing Guide" }].map((x, i) =>
              <Link key={i} to={x.to} style={{ display: "block", color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, padding: "8px 0", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--primary)"} onMouseOut={e => e.currentTarget.style.color="var(--text-secondary)"}>{x.l}</Link>
            )}
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Contact</h4>
            <a href="tel:3187046308" style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)"}}><I.Phone /></span> (318) 704-6308</a>
            <a href="mailto:chris@magnoliastateconstruction.com" style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)"}}><I.Mail /></span> chris@magnoliastateconstruction.com</a>
            <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12 }}><span style={{color: "var(--primary)"}}><I.MapPin /></span> 706 N. 3rd St, Alexandria, LA 71301</div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 14, margin: 0 }}>© {new Date().getFullYear()} Magnolia State Construction LLC. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}><ISNBadge size={32} /><span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>ISNetworld Verified</span></div>
        </div>
      </div>
    </footer>
  );
}
