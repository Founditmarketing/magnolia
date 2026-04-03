const fs = require('fs');

// 1. Layout.jsx
let layout = fs.readFileSync('src/components/Layout.jsx', 'utf8');
layout = layout.replace('{ to: "/industrial", label: "Industrial Services", icon: <I.Factory />, desc: "ISN-certified plant construction & maintenance." }', '{ to: "/residential", label: "Custom Residential", icon: <I.Building />, desc: "Custom cabinets, trim, and high-end remodeling." }');
// Preheader ISN removal/pivot
layout = layout.replace('<span style={{ fontWeight: 600, color: "#fff" }}>ISNetworld Certified</span> Contractor', '<span style={{ fontWeight: 600, color: "#fff" }}>Licensed & Insured</span> Contractor');
// Footer updates
layout = layout.replace('ISNetworld-certified commercial and industrial contractor serving Central Louisiana. Elevating standards through safety-first operations.', 'Full-service light commercial and custom residential contractor serving Central Louisiana. Elevating spaces through careful craftsmanship and rich details.');
layout = layout.replace('{ to: "/industrial", l: "Industrial Services" }', '{ to: "/residential", l: "Custom Residential" }');
layout = layout.replace('<div style={{ display: "flex", alignItems: "center", gap: 12 }}><ISNBadge size={32} /><span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", fontSize: 12 }}>ISNetworld Verified</span></div>', '');

fs.writeFileSync('src/components/Layout.jsx', layout);

// 2. index.jsx (Homepage)
let index = fs.readFileSync('src/pages/index.jsx', 'utf8');
const newIndex = `export function HomePage() {
  useSEO({ title: "Construction & Remodeling", description: "Light commercial and custom residential construction company." });

  const OptionBtn = ({ children }) => (
    <Link to="/contact" style={{ display: "block", textDecoration: "none", color: "var(--text-primary)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,1)", borderRadius: 12, padding: "20px 24px", marginBottom: 16, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, transition: "transform 0.2s, background 0.2s" }} onMouseOver={e => { e.currentTarget.style.transform = "translateX(8px)"; e.currentTarget.style.background = "rgba(0,0,0,0.03)" }} onMouseOut={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}>
      {children} <span style={{ color: "var(--primary)", float: "right" }}><I.Arrow /></span>
    </Link>
  );

  return (
    <>
      <PageHero media="/hero-video-2.mp4">
        <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>Licensed & Insured</div>
        <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(40px, 8vw, 72px)", letterSpacing: -1, margin: 0, lineHeight: 1.05 }}>
          Tired of unreliable contractors cutting corners?
        </h1>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.5, marginTop: 24, maxWidth: 650 }}>
          From light commercial builds to high-end residential craftsmanship, we deliver with absolute precision. Building Louisiana for 15+ years.
        </p>
        
        <div style={{ marginTop: 48, background: "#ffffff", padding: "32px", borderRadius: 16, border: "2px solid var(--border-light)", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>What's stalling your project right now?</h3>
          <OptionBtn>My home remodel is stalling out</OptionBtn>
          <OptionBtn>Need a reliable builder for my shop</OptionBtn>
          <OptionBtn>Looking for custom cabinets & trim</OptionBtn>
          <OptionBtn>I just need roll-off dumpsters</OptionBtn>
        </div>
      </PageHero>

      <section style={{ background: "var(--bg-elevated)", padding: "40px 24px", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase" }}>
          <div>15+ Years Building LA</div>
          <div>Careful Craftsmanship</div>
          <div>Rich Details</div>
          <div>Built For You</div>
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64, alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, margin: "0 0 32px" }}>
              Whether it's your business or your home, the wrong contractor costs you.
            </h2>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>Some contractors overpromise.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>Some contractors do sloppy work.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>You get bids, but half of them ignore the actual details. Or worse... the crew never shows up.</p>
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 700, lineHeight: 1.6, margin: 0 }}>You've probably been burned on a renovation before.<br/>And it cost you thousands to fix.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-surface)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 72px)", textAlign: "center", margin: "0 0 80px" }}>We keep your project moving.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Building /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Light Commercial</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Office build-outs, retail spaces, and exterior renovations. Handled from concept to keys.</p>
            </div>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Check /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Custom Residential</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Rich trim work, custom cabinetry, granite countertops, and complete exterior envelopes.</p>
            </div>
            <div>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Truck /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Dumpster Rentals</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Fast 24-48 hr deliveries on 20, 30, and 40-yard roll-offs. Keep your site clear.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elevated)", padding: "clamp(80px, 12vh, 160px) 24px", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 64 }}>
          <div>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", lineHeight: 1.1, margin: 0 }}>Why locals stick with us.</h2>
          </div>
          <div>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>We don't ignore the blueprints.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 24px" }}>We don't disappear after the deposit is paid.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 40px" }}>We obsess over the materials, colors, and textures.</p>
            
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 700, lineHeight: 1.6, margin: "0 0 16px" }}>From welcoming guests to impressing clients, we make sure your space is something you're proud of.</p>
            <p style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Because we actually deliver.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", margin: "0 0 48px", textAlign: "center" }}>Real builds. Real craftsmanship.</h2>
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

      <section style={{ background: "var(--bg-surface)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", margin: "0 0 80px" }}>Here's how it works.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, textAlign: "left" }}>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>1</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>You Reach Out</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>Tell us your vision, scope, and timeline.</p>
            </div>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>2</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Review Plans</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>We map out the materials, details, and exact costs.</p>
            </div>
            <div style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>3</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Handle It</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, margin: 0 }}>You sit back and watch your space transform.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "clamp(120px, 15vh, 200px) 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.4, margin: "0 0 24px" }}>You don't need to micromanage your general contractor.</p>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, lineHeight: 1.4, margin: "0 0 48px" }}>You don't need to chase crews to show up.</p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>You just need a partner that executes.</h2>
        </div>
      </section>

      <section style={{ background: "var(--bg-elevated)", padding: "clamp(80px, 12vh, 160px) 24px", textAlign: "center", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, margin: "0 0 48px" }}>Want to see if this could work for you?</h2>
          <Btn to="/contact" variant="primary" style={{ padding: "24px 64px", fontSize: 24, borderRadius: 16 }}>Talk To Chris</Btn>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 18, marginTop: 24 }}>No pressure. We'll just look at the plans.</p>
        </div>
      </section>
    </>
  );
}`;
index = index.replace(/export function HomePage\(\) \{[\s\S]*?return \([\s\S]*?^  \);?\n\}/m, newIndex);
fs.writeFileSync('src/pages/index.jsx', index);

// 3. AdditionalPages.jsx
let add = fs.readFileSync('src/pages/AdditionalPages.jsx', 'utf8');
add = add.replace(/export function IndustrialPage/g, 'export function ResidentialPage');
add = add.replace('useSEO({ title: "Industrial Services", description: "Heavy industrial construction and turnarounds." });', 'useSEO({ title: "Custom Residential", description: "Custom cabinets, trim, and high-end remodeling." });');
add = add.replace('tag="ISN Certified" title="Industrial" titleAccent="Services" sub="On-site industrial contracting for refineries, mills, manufacturing facilities, and heavy infrastructure. Pre-qualified through ISNetworld. Pre-insured. Ready to mobilize." media="/images/industrial_project_1775169098001.png"', 'tag="Custom Built" title="Custom" titleAccent="Residential" sub="We bring rich details and careful craftsmanship to your home. From bespoke cabinetry and trim to complete roofing and exterior envelopes, we elevate your living space." media="/images/industrial_project_1775169098001.png"');
add = add.replace('tag="Plant-Ready" title="Industrial Capabilities" sub="Our ISNetworld certification means we\'ve already cleared your facility\'s contractor requirements. No waiting on paperwork — we mobilize pre-qualified and ready to work."', 'tag="Craftsmanship" title="Residential Capabilities" sub="We ensure that every material, color, and texture is thoughtfully chosen to reflect your style and stand the test of time."');

const oldGrid = /<div className="bento-grid">[\s\S]*?\{\[\s*\{\s*t:\s*"Plant Maintenance"[\s\S]*?\}\)\}\s*<\/div>/;
const newGrid = `<div className="bento-grid">
            {[
              { t: "Custom Cabinets", d: "Hand-crafted, custom-built cabinetry designed specifically for your kitchen, bath, or living spaces." },
              { t: "Trim & Millwork", d: "Detailed interior trim work, baseboards, crown molding, and wainscoting that adds architectural character." },
              { t: "Granite Countertops", d: "Premium granite selection, fabrication, and installation for a flawless, high-end finish." },
              { t: "Roofing Systems", d: "Complete residential roofing tear-offs and replacements to protect your home's exterior envelope." },
              { t: "Siding & Exteriors", d: "Enhance your curb appeal with premium siding replacement, windows, and custom exterior doors." },
              { t: "Major Renovations", d: "Whole-home remodels, additions, and structural changes executed with extreme care." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 4" : "span 12" }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>`;
add = add.replace(oldGrid, newGrid);
add = add.replace('title="Need an ISN-Certified Contractor On-Site?" sub="Pre-qualified and ready to mobilize for your next industrial project. Let\'s discuss scope and timelines."', 'title="Ready to Transform Your Home?" sub="From custom kitchen cabinets to a brand new roof, we bring absolute precision to residential projects."');

add = add.replace('tag="Our Services" title="Commercial" titleAccent="Construction" sub="Full-service commercial builds across Central Louisiana. From multi-unit apartments and financial institutions to restaurants and retail — we handle every phase from permits to punch list." media="/images/construction_brick_1775169082069.png"', 'tag="Our Services" title="Light Commercial" titleAccent="Construction" sub="Build-outs, renovations, and facility improvements. Whether you are opening your business or expanding an office, your commercial space should impress." media="/images/construction_brick_1775169082069.png"');
add = add.replace('useSEO({ title: "Commercial Construction", description: "Ground-up commercial builds and renovations." });', 'useSEO({ title: "Light Commercial", description: "Retail, office, and light commercial construction." });');

fs.writeFileSync('src/pages/AdditionalPages.jsx', add);

// 4. App router binding. If "Industrial" is found, route to Residential. (App.jsx is compiled globally, but wait, routing is currently managed in App.jsx).
// Actually, earlier I let the user compile with Vercel using window.location.pathname router in App.jsx or utils.jsx.
let utils = fs.readFileSync('src/utils.jsx', 'utf8');
if (utils.includes('"/industrial":')) {
    utils = utils.replace('"/industrial":', '"/residential":');
} else {
    // maybe in App.jsx
    if (fs.existsSync('src/App.jsx')) {
        let app = fs.readFileSync('src/App.jsx', 'utf8');
        app = app.replace('"/industrial": <IndustrialPage />', '"/residential": <ResidentialPage />');
        app = app.replace('import { HomePage, GalleryPage, CommercialPage, IndustrialPage', 'import { HomePage, GalleryPage, CommercialPage, ResidentialPage');
        fs.writeFileSync('src/App.jsx', app);
    }
}
`;
