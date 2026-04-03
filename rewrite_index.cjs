const fs = require('fs');
let code = fs.readFileSync('src/pages/index.jsx', 'utf8');

const regex = /export function HomePage\(\) \{[\s\S]*?return \([\s\S]*?^  \);?\n\}/m;

const newHomePage = `export function HomePage() {
  useSEO({ title: "Construction & Dumpsters", description: "ISNetworld Certified commercial and industrial construction company." });

  const OptionBtn = ({ children }) => (
    <Link to="/contact" style={{ display: "block", textDecoration: "none", color: "var(--text-primary)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,1)", borderRadius: 12, padding: "20px 24px", marginBottom: 16, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, transition: "transform 0.2s, background 0.2s" }} onMouseOver={e => { e.currentTarget.style.transform = "translateX(8px)"; e.currentTarget.style.background = "rgba(0,0,0,0.03)" }} onMouseOut={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}>
      {children} <span style={{ color: "var(--primary)", float: "right" }}><I.Arrow /></span>
    </Link>
  );

  return (
    <>
      <PageHero media="/hero-video-2.mp4">
        {/* The Direct-Response Interactive Hero */}
        <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>ISNetworld Certified</div>
        <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(40px, 8vw, 72px)", letterSpacing: -1, margin: 0, lineHeight: 1.05 }}>
          Tired of unreliable contractors & blown schedules?
        </h1>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.5, marginTop: 24, maxWidth: 600 }}>
          We deliver commercial and industrial projects with absolute precision. Building Louisiana's infrastructure for 15+ years.
        </p>
        
        <div style={{ marginTop: 48, background: "#ffffff", padding: "32px", borderRadius: 16, border: "2px solid var(--border-light)", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>What's stalling your project right now?</h3>
          <OptionBtn>My current contractor is behind</OptionBtn>
          <OptionBtn>I need an ISN-compliant crew</OptionBtn>
          <OptionBtn>Need heavy concrete & steel</OptionBtn>
          <OptionBtn>I just need roll-off dumpsters</OptionBtn>
        </div>
      </PageHero>

      {/* Trust Snapshot Strip */}
      <section style={{ background: "var(--bg-elevated)", padding: "40px 24px", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase" }}>
          <div>15+ Years Building LA</div>
          <div>ISNetworld Certified</div>
          <div>Real, Visible Results</div>
          <div>Built For Developers</div>
        </div>
      </section>

      {/* Relatable Pain Section */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64, alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, margin: "0 0 32px" }}>
              You're managing a massive build... but the foundation is shaky.
            </h2>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>Some contractors overpromise.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>Some contractors cut corners on safety.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>You get bids, but half of them ignore the actual specs. Or worse... the crew doesn't show up.</p>
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 700, lineHeight: 1.6, margin: 0 }}>You've probably been burned on a schedule before.<br/>And it cost you tens of thousands of dollars.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 72px)", textAlign: "center", margin: "0 0 80px" }}>We keep your site moving.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Building /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Commercial Builds</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Ground-up execution from permits to punch list. Built to spec, built to code.</p>
            </div>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Factory /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Industrial Services</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>ISNetworld-certified crew equipped for heavy turnarounds and plant maintenance.</p>
            </div>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Truck /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Dumpster Rentals</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Fast 24-48 hr deliveries on 20, 30, and 40-yard roll-offs. Keep your site clear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us (Psychology Trust Block) */}
      <section style={{ background: "var(--bg-elevated)", padding: "clamp(80px, 12vh, 160px) 24px", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 64 }}>
          <div>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", lineHeight: 1.1, margin: 0 }}>Why developers stick with us.</h2>
          </div>
          <div>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>We don't ignore the blueprints.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>We don't disappear after the slab is poured.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 40px" }}>We show you the schedule. And we hit our deadlines.</p>
            
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 700, lineHeight: 1.6, margin: "0 0 16px" }}>Most of the plant directors we work with only call us.</p>
            <p style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Because we actually deliver.</p>
          </div>
        </div>
      </section>

      {/* Visual Proof / Gallery Teaser */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", margin: "0 0 48px", textAlign: "center" }}>Real builds. Real safety.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 24, marginBottom: 48 }}>
            {["/images/industrial_project_1775169098001.png", "/images/warehouse_finished_1775169110438.png", "/images/workers_blueprints_1775169124334.png"].map((img, i) => (
               <div key={i} className="sc glass" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", border: "1px solid var(--border-light)" }}>
                 <img src={img} alt="Past Build" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" }} />
               </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/gallery" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>See Real Results <I.Arrow /></Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", margin: "0 0 80px" }}>Here's how it works.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, textAlign: "left" }}>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>1</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>You Reach Out</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Tell us your scope and timeline.</p>
            </div>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>2</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Review Plans</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>We see exactly what it takes to execute safely.</p>
            </div>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>3</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Handle It</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>You focus on running your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Relief Section */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(120px, 15vh, 200px) 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.4, margin: "0 0 24px" }}>You don't need to micromanage your general contractor.</p>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.4, margin: "0 0 48px" }}>You don't need to chase crews to wear hardhats.</p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>You just need a partner that executes.</h2>
        </div>
      </section>

      {/* Final Minimalist CTA */}
      <section style={{ background: "var(--bg-elevated)", padding: "clamp(80px, 12vh, 160px) 24px", textAlign: "center", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, margin: "0 0 48px" }}>Want to see if this could work for you?</h2>
          <Btn to="/contact" variant="primary" style={{ padding: "24px 64px", fontSize: 24, borderRadius: 16 }}>Talk To A Superintendent</Btn>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 18, marginTop: 24 }}>No pressure. We'll just look at the plans.</p>
        </div>
      </section>
    </>
  );
}`;

code = code.replace(regex, newHomePage);
fs.writeFileSync('src/pages/index.jsx', code);
