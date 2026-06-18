import { Link, I, Fade, useSEO, Counter } from "../utils";

const PHONE = "(318) 704-6308";
const TEL = "tel:3187046308";

export function ISNBadge({ size = 48 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: size * 0.14, background: "linear-gradient(135deg, var(--primary), var(--primary-hover))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "var(--shadow-md)", position: "relative" }}>
      <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.35, fontFamily: "var(--font-display)", letterSpacing: 1, zIndex: 1 }}>ISN</span>
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.05)", borderRadius: "inherit", borderTop: "1px solid rgba(255,255,255,0.15)" }} />
    </div>
  );
}

export function Btn({ to, href, children, variant = "primary", style: s = {}, ...rest }) {
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

  if (to) return <Link to={to} style={variants[variant]} {...hoverProps} {...rest}>{children}</Link>;
  if (href) return <a href={href} style={variants[variant]} {...hoverProps} {...rest}>{children}</a>;
  return <button style={variants[variant]} {...hoverProps} {...rest}>{children}</button>;
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

export function SH({ tag, title, sub, center }) {
  return (
    <div style={{ marginBottom: 76, textAlign: center ? "center" : "left", maxWidth: center ? 760 : "none", margin: center ? "0 auto 76px" : "0 0 76px", position: "relative" }}>
      {tag && <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 22 }}>{tag}</div>}
      <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.12, letterSpacing: -0.4, margin: 0, color: "var(--text-primary)" }}>
        {title}
      </h2>
      {sub && <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.75, marginTop: 24, maxWidth: 600, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>{sub}</p>}
    </div>
  );
}

/* The strategic centerpiece: communicates scale and pre-qualifies every visitor.
   "We focus on full builds and major projects" — standards, not apology. */
export function StandardsBand({ eyebrow, heading, framingLine, weBuild, weDont, closingLine }) {
  return (
    <section id="what-we-do" style={{ background: "var(--bg-surface)", padding: "clamp(100px, 16vh, 192px) 24px", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)", scrollMarginTop: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Fade>
          <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>{eyebrow}</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(32px, 5.5vw, 54px)", lineHeight: 1.1, color: "var(--text-primary)", textAlign: "center", margin: "0 0 20px" }}>{heading}</h2>
          <p style={{ maxWidth: 720, margin: "0 auto 56px", textAlign: "center", color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(16px, 2.5vw, 19px)", lineHeight: 1.7 }}>{framingLine}</p>
        </Fade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, alignItems: "start" }}>
          <Fade>
            <div style={{ background: "var(--bg-dark)", border: "1px solid var(--border-light)", borderRadius: 14, padding: "clamp(28px, 4vw, 44px)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ color: "var(--primary)", display: "inline-flex" }}><I.Check /></span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--text-primary)", margin: 0 }}>What We Build</h3>
              </div>
              {weBuild.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 14, padding: "15px 0", borderTop: i ? "1px solid var(--border-light)" : "none", alignItems: b.desc ? "flex-start" : "center" }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: b.desc ? 2 : 0, display: "inline-flex" }}><I.Check /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-primary)", marginBottom: b.desc ? 5 : 0 }}>{b.title}</div>
                    {b.desc && <div style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--text-secondary)" }}>{b.desc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={0.1}>
            <div style={{ background: "transparent", border: "1px solid var(--border-light)", borderRadius: 14, padding: "clamp(28px, 4vw, 44px)", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ color: "var(--text-tertiary)", display: "inline-flex" }}><I.X /></span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--text-tertiary)", margin: 0 }}>What We Don't</h3>
              </div>
              {weDont.map((d, i) => (
                <div key={i} style={{ display: "flex", gap: 14, padding: "15px 0", borderTop: i ? "1px solid var(--border-light)" : "none", alignItems: "center" }}>
                  <span style={{ color: "var(--text-tertiary)", flexShrink: 0, opacity: 0.7, display: "inline-flex" }}><I.X /></span>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-secondary)" }}>{d}</div>
                </div>
              ))}
              <p style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border-light)", fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-tertiary)" }}>{closingLine}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export function CTA({ title, sub, btn }) {
  return (
    <section style={{ background: "var(--bg-elevated)", padding: "clamp(88px, 15vh, 176px) 24px", textAlign: "center", position: "relative", overflow: "hidden", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
        <Fade><h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(34px, 5.5vw, 56px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: "0 0 24px" }}>{title}</h2></Fade>
        <Fade><p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 44px" }}>{sub}</p></Fade>
        <Fade>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn href={TEL} variant="primary">{btn || "Call for an Estimate"} <I.Phone /></Btn>
            <Btn href={TEL} variant="outlineDark">{PHONE}</Btn>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function WhyUs({ items }) {
  return (
    <section style={{ background: "var(--bg-dark)", padding: "clamp(96px, 15vh, 184px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Fade>
          <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>Why Magnolia State</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 50px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: 0, maxWidth: 600 }}>Serious builds, managed like it matters.</h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(238px, 1fr))", gap: "clamp(32px, 4vw, 56px)", marginTop: 64 }}>
          {items.map((it, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div style={{ color: "var(--primary)", marginBottom: 18, display: "inline-flex" }}>{it.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: 0.5, color: "var(--text-primary)", margin: "0 0 10px" }}>{it.t}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65, color: "var(--text-secondary)", margin: 0 }}>{it.d}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand({ items }) {
  return (
    <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)", padding: "clamp(76px, 12vh, 136px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 32, textAlign: "center" }}>
        {items.map((s, i) => (
          <Fade key={i} delay={i * 0.1}>
            <div style={{ width: 32, height: 2, background: "rgba(255,255,255,0.4)", margin: "0 auto 22px" }} />
            <div style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(40px, 6vw, 62px)", lineHeight: 1, color: "#fff" }}>
              {s.end != null ? <Counter end={s.end} suffix={s.suffix || ""} duration={1300} /> : s.text}
            </div>
            <div style={{ marginTop: 12, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.78)" }}>{s.label}</div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

export function ServiceArea({ towns }) {
  return (
    <section style={{ background: "var(--bg-elevated)", padding: "clamp(88px, 13vh, 160px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <Fade>
          <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Service Area</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(30px, 5vw, 50px)", lineHeight: 1.1, color: "var(--text-primary)", margin: "0 0 20px" }}>Serving Central Louisiana</h2>
          <p style={{ maxWidth: 680, margin: "0 auto", color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7 }}>Ground-up commercial, custom homes, roofing systems, and roll-off dumpster rental for Alexandria, Pineville, and communities across Cenla.</p>
        </Fade>
        <Fade>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, maxWidth: 840, margin: "40px auto 0" }}>
            {towns.map((t, i) => (
              <span key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: 0.3, color: "var(--text-secondary)", background: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: 50, padding: "9px 18px" }}>{t}</span>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function ProcessSteps({ tag = "Our Process", title, sub, steps }) {
  return (
    <section style={{ background: "var(--bg-surface)", padding: "clamp(88px, 14vh, 176px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SH tag={tag} title={title} sub={sub} center />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 28 }}>
          {steps.map((s, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div style={{ height: "100%", borderTop: "2px solid var(--border-light)", paddingTop: 24 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 46, color: "var(--primary)", lineHeight: 1, marginBottom: 16 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: 0.5, color: "var(--text-primary)", margin: "0 0 10px" }}>{s.t}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>{s.d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ rating, count, items, reviewsUrl }) {
  return (
    <section style={{ background: "var(--bg-elevated)", padding: "clamp(96px, 15vh, 184px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Fade style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "var(--primary)", fontSize: 26, letterSpacing: 3 }}>★★★★★</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, letterSpacing: 0.5, color: "var(--text-primary)", marginTop: 12 }}>{rating} · {count} Google reviews</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(30px, 5vw, 50px)", lineHeight: 1.1, color: "var(--text-primary)", margin: "16px 0 0" }}>What our clients say</h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
          {items.map((t, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div className="sc" style={{ borderRadius: 16, padding: "36px 34px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "var(--primary)", letterSpacing: 2, fontSize: 16, marginBottom: 18 }}>★★★★★</div>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(19px, 2.5vw, 22px)", lineHeight: 1.5, color: "var(--text-primary)", margin: "0 0 24px", flex: 1 }}>"{t.text}"</p>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--text-primary)" }}>{t.author}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-secondary)", marginTop: 4 }}>{t.role}</div>
              </div>
            </Fade>
          ))}
        </div>
        {reviewsUrl && (
          <Fade style={{ textAlign: "center", marginTop: 48 }}>
            <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Read all {count} reviews on Google <I.Arrow /></a>
          </Fade>
        )}
      </div>
    </section>
  );
}

export function FAQ({ items }) {
  return (
    <section style={{ background: "var(--bg-dark)", padding: "clamp(96px, 15vh, 184px) 24px", borderTop: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Fade>
          <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>Questions</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.1, color: "var(--text-primary)", textAlign: "center", margin: "0 0 48px" }}>Common Questions</h2>
        </Fade>
        <Fade>
          <div>
            {items.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-plus"><I.ChevDown /></span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export function NotFound() {
  useSEO({ title: "Page Not Found", description: "The page you're looking for doesn't exist. Explore Magnolia State Construction's commercial, custom home, roofing, and dumpster services across Central Louisiana.", noindex: true });
  return (
    <section style={{ background: "var(--bg-dark)", padding: "clamp(140px, 20vh, 220px) 24px clamp(80px, 12vh, 140px)", textAlign: "center", minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 6, textTransform: "uppercase", marginBottom: 16 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(36px, 7vw, 64px)", lineHeight: 1.05, color: "var(--text-primary)", margin: "0 0 20px" }}>Page Not Found</h1>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, margin: "0 0 40px" }}>The page you're looking for doesn't exist or has moved. Let's get you back on track.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          <Btn to="/">Back to Home</Btn>
          <Btn to="/commercial" variant="outline">Our Services</Btn>
          <Btn to="/gallery" variant="outline">Our Work</Btn>
        </div>
        <a href={TEL} style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}><I.Phone /> {PHONE}</a>
      </div>
    </section>
  );
}

export function PageHero({ tag, title, titleAccent, sub, children, media, poster }) {
  if (media) {
    return (
      <section className="hero-split-container">

        <div className="hero-split-media">
          {media.endsWith(".mp4") ? (
            <>
              {poster && <img src={poster} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
              <video className="hero-video" ref={v => { if (v) v.muted = true; }} autoPlay loop muted playsInline poster={poster} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                <source src={media} type="video/mp4" />
              </video>
            </>
          ) : (
            <img src={media} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%), linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)", pointerEvents: "none" }} />
        </div>

        <div className="hero-split-content">
          <div className="glass sc" style={{ maxWidth: 840, padding: "clamp(32px, 5vw, 56px)", borderRadius: 16, border: "2px solid rgba(255,255,255,1)", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}>
            {tag && <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>{tag}</div>}
            <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(34px, 7vw, 60px)", letterSpacing: -0.4, margin: 0, lineHeight: 1.1 }}>
              {title}{titleAccent && <>{" "}<br /><span className="primary-text">{titleAccent}</span></>}
            </h1>
            {sub && <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(16px, 4vw, 20px)", lineHeight: 1.6, marginTop: 24, maxWidth: 600 }}>{sub}</p>}
            {children && <div style={{ marginTop: 40, width: "100%" }}>{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: "var(--bg-dark)", padding: "clamp(120px, 15vh, 180px) 24px clamp(60px, 8vh, 100px)", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {tag && <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 5, textTransform: "uppercase", marginBottom: 20 }}>{tag}</div>}
        <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(36px, 7.5vw, 72px)", letterSpacing: -0.4, margin: 0, lineHeight: 1.1, maxWidth: 900 }}>
          {title}{titleAccent && <>{" "}<br /><span className="primary-text">{titleAccent}</span></>}
        </h1>
        {sub && <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.7, marginTop: 28, maxWidth: 700 }}>{sub}</p>}
        {children && <div style={{ marginTop: 48 }}>{children}</div>}
      </div>
    </section>
  );
}
