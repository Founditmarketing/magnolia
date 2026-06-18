import { useState, useEffect, useRef } from "react";
import { Link, I } from "../utils";
import { Btn, ISNBadge } from "./Shared";

const PHONE = "(318) 704-6308";
const TEL = "tel:3187046308";

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

  // Mobile-menu accessibility: focus the menu on open, trap Tab, close on Escape, restore focus on close.
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const node = menuRef.current;
    const hamburger = hamburgerRef.current;
    const focusables = node ? node.querySelectorAll('a[href], button') : [];
    if (focusables.length) focusables[0].focus();
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab" && focusables.length) {
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; if (hamburger) hamburger.focus(); };
  }, [open]);

  const links = [
    { to: "/", label: "Home" },
    { label: "Services", ch: [
      { to: "/commercial", label: "Commercial Construction", icon: <I.Building />, desc: "Ground-up commercial builds — permits to punch list." },
      { to: "/residential", label: "Custom Home Building", icon: <I.Home />, desc: "Ground-up custom homes. New builds, not remodels." },
      { to: "/roofing", label: "Roofing Systems", icon: <I.Roof />, desc: "Full commercial & residential roof systems — never repairs." },
      { to: "/dumpsters", label: "Roll-Off Dumpster Rental", icon: <I.Truck />, desc: "20, 30, and 40-yard roll-offs across Central Louisiana." },
      { to: "/industrial", label: "Industrial Services", icon: <I.Factory />, desc: "ISN-certified plant, refinery, and mill contracting." },
    ]},
    { to: "/gallery", label: "Our Work" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Main Structural Nav */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", background: "#FFFFFF", borderBottom: "2px solid var(--border-light)", boxShadow: sc ? "0 10px 30px -10px rgba(0,0,0,0.08)" : "none" }}>
        <div className={`header-bar${sc ? " scrolled" : ""}`} style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: sc ? 80 : 100, transition: "height 0.4s" }}>

          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }} aria-label="Magnolia State Construction Home">
            <img src="/logo.png" alt="Magnolia State Construction" style={{ height: "clamp(40px, 9vw, 60px)", objectFit: "contain" }} />
          </Link>

          <nav className="dn" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 2vw, 32px)", whiteSpace: "nowrap" }}>
            {links.map((l, i) => l.ch ? (
              <div key={i} style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }} onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                <button aria-expanded={dd} aria-haspopup="true" aria-controls="services-menu" onClick={() => setDd(o => !o)} onKeyDown={(e) => { if (e.key === "Escape") setDd(false); }} style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, padding: "24px 0" }}>
                  {l.label} <I.ChevDown />
                </button>
                {dd && (
                  <div id="services-menu" style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", padding: 16 }}>
                    <div className="glass" style={{ borderRadius: 8, padding: 12, minWidth: 420, boxShadow: "0 24px 48px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: 4 }}>
                      {l.ch.map((c, j) => (
                        <Link key={j} to={c.to} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: 16, borderRadius: 12, color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s" }} onMouseOver={e => { e.currentTarget.style.background = "var(--bg-dark)"; }} onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}>
                          <div style={{ color: "var(--primary)", background: "var(--primary-bg)", padding: 12, borderRadius: 10, display: "inline-flex" }}>{c.icon}</div>
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
              <Link key={i} aria-current={path === l.to ? "page" : undefined} to={l.to} style={{ color: path === l.to ? "var(--primary)" : "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", padding: "24px 0", position: "relative", borderBottom: path === l.to ? "2px solid var(--primary)" : "2px solid transparent" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Action Area — phone-first */}
          <div className="dn" style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.5vw, 24px)", whiteSpace: "nowrap" }}>
            <Btn href={TEL} aria-label={`Call Magnolia State Construction at ${PHONE}`} style={{ padding: "13px 24px", fontSize: 14, letterSpacing: 1 }}><I.Phone /> {PHONE}</Btn>
          </div>

          <button ref={hamburgerRef} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" className="mt" onClick={() => setOpen(!open)} style={{ background: "rgba(0,0,0,0.03)", border: "none", borderRadius: 8, color: "var(--text-primary)", cursor: "pointer", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: open ? 0 : 5, width: 44, height: 44, position: "relative" }}>
            <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)", transform: open ? "rotate(45deg) translateY(1px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", background: "currentColor", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)", transform: open ? "rotate(-45deg) translateY(-1px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Menu */}
      {open && <div ref={menuRef} id="mobile-menu" className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Site menu" style={{ position: "fixed", inset: 0, zIndex: 999, background: "#FFFFFF", display: "flex", flexDirection: "column", padding: "calc(64px + env(safe-area-inset-top)) 24px calc(40px + env(safe-area-inset-bottom))", overflowY: "auto" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {links.map((l, i) => l.ch ? (
            <div key={i} style={{ animation: "menuItem 0.4s cubic-bezier(0.16,1,0.3,1) backwards", animationDelay: `${0.06 * i + 0.05}s` }}>
              <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>{l.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingLeft: 16, borderLeft: "2px solid var(--border-light)" }}>
                {l.ch.map((c, j) => <Link key={j} to={c.to} onClick={() => setOpen(false)} style={{ display: "block", color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, letterSpacing: 0.5 }}>{c.label}</Link>)}
              </div>
            </div>
          ) : (
            <Link key={i} to={l.to} onClick={() => setOpen(false)} style={{ color: path === l.to ? "var(--primary)" : "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", animation: "menuItem 0.4s cubic-bezier(0.16,1,0.3,1) backwards", animationDelay: `${0.06 * i + 0.05}s` }}>{l.label}</Link>
          ))}
        </div>
        <div>
          <a href={TEL} style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textDecoration: "none", display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}><I.Phone /> {PHONE}</a>
          <Btn href={TEL} onClick={() => setOpen(false)} style={{ width: "100%", justifyContent: "center", padding: "20px", fontSize: 16 }}>Call for an Estimate</Btn>
        </div>
      </div>}

      {!open && (
        <a href={TEL} className="mt call-bar" aria-label={`Call Chris at ${PHONE}`}>
          <span className="call-bar-inner"><I.Phone /> Call Chris — {PHONE}</span>
        </a>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="has-call-bar" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-light)" }}>
      {/* Phone-first CTA band — no email harvest */}
      <div style={{ padding: "80px 24px", borderBottom: "1px solid var(--border-light)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 6vw, 56px)", margin: "0 0 16px", color: "var(--text-primary)" }}>Ready to build?</h2>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, margin: "0 0 36px", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>Serving Alexandria, Pineville, and all of Central Louisiana. Full builds and major projects only — call Chris directly.</p>
        <Btn href={TEL} className="footer-cta-btn" style={{ padding: "18px 44px", fontSize: 18 }}><I.Phone /> Call Chris · {PHONE}</Btn>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(48px, 9vw, 80px) 24px 40px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 56, marginBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 24 }}>
              <img src="/logo.png" alt="Magnolia State Construction" style={{ height: "clamp(64px, 16vw, 92px)", objectFit: "contain" }} />
            </div>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8 }}>ISNetworld-certified builder serving Central Louisiana — ground-up commercial construction, custom homes, roofing systems, and roll-off dumpster rental. Safety-first, on record, start to finish.</p>
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              <a href="https://www.facebook.com/MagnoliaStateConstruction" target="_blank" rel="noopener" aria-label="Magnolia State Construction on Facebook" style={{ color: "var(--text-tertiary)", background: "var(--bg-elevated)", padding: 12, borderRadius: 50, transition: "all 0.2s", display: "inline-flex" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="var(--primary-bg)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="var(--bg-elevated)"; }}><I.FB /></a>
              <a href="https://www.instagram.com/magnoliastateconstructionllc/" target="_blank" rel="noopener" aria-label="Magnolia State Construction on Instagram" style={{ color: "var(--text-tertiary)", background: "var(--bg-elevated)", padding: 12, borderRadius: 50, transition: "all 0.2s", display: "inline-flex" }} onMouseOver={e => { e.currentTarget.style.color="var(--primary)"; e.currentTarget.style.background="var(--primary-bg)"; }} onMouseOut={e => { e.currentTarget.style.color="var(--text-tertiary)"; e.currentTarget.style.background="var(--bg-elevated)"; }}><I.IG /></a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Services</h4>
            {[{ to: "/commercial", l: "Commercial Construction" }, { to: "/residential", l: "Custom Home Building" }, { to: "/roofing", l: "Roofing Systems" }, { to: "/industrial", l: "Industrial Services" }, { to: "/dumpsters", l: "Roll-Off Dumpster Rental" }, { to: "/dumpster-pricing", l: "Dumpster Pricing" }].map((x, i) =>
              <Link key={i} to={x.to} style={{ display: "block", color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, padding: "8px 0", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--primary)"} onMouseOut={e => e.currentTarget.style.color="var(--text-secondary)"}>{x.l}</Link>
            )}
          </div>
          <div>
            <h4 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Contact</h4>
            <a href={TEL} style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)", display: "inline-flex"}}><I.Phone /></span> {PHONE}</a>
            <a href="mailto:chris@magnoliastateconstruction.com" style={{ color: "var(--text-secondary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{color: "var(--primary)", display: "inline-flex"}}><I.Mail /></span> chris@magnoliastateconstruction.com</a>
            <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, display: "flex", alignItems: "center", gap: 12 }}><span style={{color: "var(--primary)", display: "inline-flex"}}><I.MapPin /></span> 706 N. 3rd St, Alexandria, LA 71301</div>
          </div>
        </div>

        {/* Credential row — TODO: swap in official ISN, LAGC, and Heather's logo assets when delivered */}
        <div className="footer-legal" style={{ borderTop: "1px solid var(--border-light)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 14, margin: 0 }}>© {new Date().getFullYear()} Magnolia State Construction LLC. All rights reserved.</p>
          <div className="footer-creds" style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
            <a href="https://www.isnetworld.com/" target="_blank" rel="noopener noreferrer" aria-label="ISNetworld verified contractor" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
              <ISNBadge size={34} />
              <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>ISNetworld Verified</span>
            </a>
            <a href="https://www.lagc.org/" target="_blank" rel="noopener noreferrer" aria-label="Louisiana Associated General Contractors member" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
              <div style={{ width: 34, height: 34, borderRadius: 5, border: "2px solid var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: 0.5 }}>LAGC</span>
              </div>
              <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>LA Assoc. General Contractors</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "var(--text-secondary)", display: "inline-flex" }}><I.Shield /></span>
              <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
