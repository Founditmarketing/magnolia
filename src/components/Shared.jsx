import { useState, useEffect } from "react";
import { Link, I, Fade } from "../utils";

export function ISNBadge({ size = 48 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.14, background: "linear-gradient(135deg, var(--primary), var(--primary-hover))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "var(--shadow-md)", position: "relative" }}>
      <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.35, fontFamily: "var(--font-display)", letterSpacing: 1, zIndex: 1 }}>ISN</span>
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.05)", borderRadius: "inherit", borderTop: "1px solid rgba(255,255,255,0.15)" }} />
    </div>
  );
}

export function Btn({ to, href, children, variant = "primary", style: s = {} }) {
  const base = { display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, letterSpacing: 1.5, textTransform: "uppercase", borderRadius: 8, transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)", cursor: "pointer", border: "none" };
  
  const variants = {
    primary: { ...base, background: "linear-gradient(135deg, var(--primary), var(--primary-hover))", color: "#fff", padding: "16px 36px", boxShadow: "var(--shadow-md)", borderTop: "1px solid rgba(255,255,255,0.1)", ...s },
    outline: { ...base, border: "2px solid var(--border-light)", color: "var(--text-primary)", padding: "14px 34px", background: "var(--bg-elevated)", ...s },
    outlineDark: { ...base, border: "2px solid rgba(0,0,0,0.1)", color: "var(--text-primary)", padding: "14px 34px", background: "transparent", ...s },
  };

  const hoverProps = {
    onMouseOver: (e) => {
      e.currentTarget.style.transform = "translateY(-3px)";
      if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      if (variant === "outline" || variant === "outlineDark") e.currentTarget.style.background = "var(--bg-elevated)";
    },
    onMouseOut: (e) => {
      e.currentTarget.style.transform = "translateY(0)";
      if (variant === "primary") e.currentTarget.style.boxShadow = variants.primary.boxShadow;
      if (variant === "outline" || variant === "outlineDark") e.currentTarget.style.background = variants[variant].background;
    }
  };

  if (to) return <Link to={to} style={variants[variant]} {...hoverProps}>{children}</Link>;
  if (href) return <a href={href} style={variants[variant]} {...hoverProps}>{children}</a>;
  return <button style={variants[variant]} {...hoverProps}>{children}</button>;
}

export function TrustBar() {
  const items = [
    { badge: true, label: "ISNetworld Certified", sub: "Verified Contractor" },
    { icon: <I.Shield />, label: "High-Limit Insurance", sub: "Fully Covered" },
    { icon: <I.HardHat />, label: "OSHA Compliant", sub: "Safety-First Operations" },
    { icon: <I.Check />, label: "Licensed & Bonded", sub: "State of Louisiana" },
  ];
  return (
    <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", padding: "20px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 40vw, 200px), 1fr))", gap: "16px 8px" }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
            <div style={{ color: "var(--primary)", flexShrink: 0 }}>{it.badge ? <ISNBadge size={38} /> : it.icon}</div>
            <div>
              <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: 0.5 }}>{it.label}</div>
              <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 12 }}>{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SH({ tag, title, sub, light = true, center }) {
  return (
    <div style={{ marginBottom: 64, textAlign: center ? "center" : "left", maxWidth: center ? 800 : "none", margin: center ? "0 auto 64px" : "0 0 64px", position: "relative" }}>
      {tag && <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>{tag}</div>}
      <h2 className="text-gradient" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1, textTransform: "uppercase", letterSpacing: -0.5, margin: 0 }}>
        {title}
      </h2>
      {sub && <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, marginTop: 20, maxWidth: center ? 640 : 640, margin: center ? "20px auto 0" : "20px 0 0" }}>{sub}</p>}
    </div>
  );
}

export function CTA({ title, sub, btn, btnTo }) {
  return (
    <section style={{ background: "var(--bg-elevated)", padding: "clamp(60px, 10vh, 120px) 24px", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <Fade><h2 className="text-gradient" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px, 5.5vw, 52px)", textTransform: "uppercase", letterSpacing: -0.5, margin: "0 0 20px" }}>{title}</h2></Fade>
        <Fade><p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>{sub}</p></Fade>
        <Fade>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn to={btnTo || "/contact"} variant="primary">{btn || "Request a Quote"} <I.Arrow /></Btn>
            <Btn href="tel:3187046308" variant="outlineDark">(318) 704-6308</Btn>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function PageHero({ tag, title, titleAccent, sub, children, media }) {
  return (
    <section style={{ background: "var(--bg-dark)", padding: "clamp(120px, 15vh, 180px) 24px clamp(60px, 8vh, 100px)", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: media ? "repeat(auto-fit, minmax(360px, 1fr))" : "1fr", gap: 64, alignItems: "center" }}>
        <div>
          {tag && <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 5, textTransform: "uppercase", marginBottom: 20 }}>{tag}</div>}
          <h1 className="text-gradient" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 8vw, 76px)", textTransform: "uppercase", letterSpacing: -1, margin: 0, lineHeight: 1.05, maxWidth: 900 }}>
            {title}{titleAccent && <><br /><span className="primary-text">{titleAccent}</span></>}
          </h1>
          {sub && <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.7, marginTop: 28, maxWidth: 700 }}>{sub}</p>}
          {children && <div style={{ marginTop: 48 }}>{children}</div>}
        </div>
        {media && (
          <div className="sc glass" style={{ position: "relative", overflow: "hidden", borderRadius: 24, boxShadow: "var(--shadow-md)", aspectRatio: "4/3", border: "1px solid var(--border-light)" }}>
            <img src={media} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
      </div>
    </section>
  );
}
