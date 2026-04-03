import { Fade, Link, I, Counter, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, ISNBadge } from "../components/Shared";

export function HomePage() {
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
        <Fade delay={0.1}>
          <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>Licensed & Insured</div>
          <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px, 8vw, 72px)", letterSpacing: -1, margin: 0, lineHeight: 1.05, wordBreak: "break-word", hyphens: "auto" }}>
            Tired of unreliable contractors & blown schedules?
          </h1>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.5, marginTop: 24, maxWidth: 600 }}>
            From light commercial builds to high-end residential craftsmanship, we deliver with absolute precision. Building Louisiana for 15+ years.
          </p>
        </Fade>
        
        <Fade delay={0.3}>
          <div style={{ marginTop: 48, background: "#ffffff", padding: "clamp(24px, 4vw, 32px)", borderRadius: 16, border: "2px solid var(--border-light)", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>What's stalling your project right now?</h3>
          <OptionBtn>My home remodel is stalled</OptionBtn>
          <OptionBtn>Need a reliable commercial builder</OptionBtn>
          <OptionBtn>Looking for custom cabinets & trim</OptionBtn>
            <OptionBtn>I just need roll-off dumpsters</OptionBtn>
          </div>
        </Fade>
      </PageHero>

      {/* Trust Snapshot Strip */}
      <section style={{ background: "var(--bg-elevated)", padding: "40px 24px", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase" }}>
          <div>15+ Years Building LA</div>
          <div>Careful Craftsmanship</div>
          <div>Rich Details</div>
          <div>Built For You</div>
        </div>
      </section>

      {/* Relatable Pain Section */}
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

      {/* What We Do */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 72px)", textAlign: "center", margin: "0 0 80px" }}>We keep your project moving.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
            <Fade delay={0.1} className="bento-item sc" style={{ padding: 32 }}>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Building /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Light Commercial</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>Office build-outs, retail spaces, and exterior renovations. Pre-qualified and fully insured.</p>
            </Fade>
            <Fade delay={0.2} className="bento-item sc" style={{ padding: 32 }}>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Check /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Custom Residential</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>Rich trim work, custom cabinetry, granite countertops, and premium roofing solutions.</p>
            </Fade>
            <Fade delay={0.3} className="bento-item sc" style={{ padding: 32 }}>
              <div style={{ color: "var(--primary)", fontSize: 40, marginBottom: 24 }}><I.Truck /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>Dumpster Rentals</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>Fast 24-48 hr deliveries on 20, 30, and 40-yard roll-offs. Keep your site clear.</p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Why Us (Psychology Trust Block) */}
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

      {/* Visual Proof / Gallery Teaser */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(80px, 12vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(48px, 6vw, 64px)", margin: "0 0 48px", textAlign: "center" }}>Real builds. Real craftsmanship.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 24, marginBottom: 48 }}>
            {[
              { img: "/images/industrial_project_1775169098001.png", tag: "Heavy Timber Custom Additions", desc: "Delivered 2 weeks ahead of schedule." },
              { img: "/images/warehouse_finished_1775169110438.png", tag: "Complete Commercial Build-out", desc: "4,500 sq ft executed flawlessly to spec." },
              { img: "/images/workers_blueprints_1775169124334.png", tag: "Turnkey Structural Envelope", desc: "Zero safety incidents. Zero change orders." },
            ].map((p, i) => (
               <Fade key={i} delay={i * 0.15} className="sc bento-item" style={{ borderRadius: 16, overflow: "hidden", background: "var(--bg-surface)", border: "1px solid var(--border-light)" }}>
                 <div style={{ aspectRatio: "4/3", width: "100%", overflow: "hidden" }}>
                   <img src={p.img} alt={p.tag} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s", filter: "brightness(0.95)" }} onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"} />
                 </div>
                 <div style={{ padding: 24, borderTop: "1px solid var(--border-light)" }}>
                   <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>{p.tag}</h3>
                   <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, margin: 0 }}>{p.desc}</p>
                 </div>
               </Fade>
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
            <Fade delay={0.1} className="bento-item" style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>1</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>You Reach Out</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>Tell us your vision, scope, and timeline.</p>
            </Fade>
            <Fade delay={0.2} className="bento-item" style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>2</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Review Plans</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>We map out the materials, details, and exact costs.</p>
            </Fade>
            <Fade delay={0.3} className="bento-item" style={{ padding: 40, background: "var(--bg-elevated)", borderRadius: 16, border: "1px solid var(--border-light)" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, lineHeight: 1, opacity: 0.5, marginBottom: 24 }}>3</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, margin: "0 0 16px" }}>We Handle It</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, margin: 0 }}>You sit back and watch your space transform.</p>
            </Fade>
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
}

export function CommercialPage() {
  return (
    <>
      <PageHero tag="Our Services" title="Commercial" titleAccent="Construction" sub="Full-service commercial builds across Central Louisiana. From multi-unit apartments and financial institutions to restaurants and retail — we handle every phase from permits to punch list." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="What We Build" title="Quality Construction for Commercial Spaces" sub="We specialize in commercial projects that require careful planning, code compliance, and the kind of craftsmanship that holds up to daily public use." />
          <div className="bento-grid">
            {[
              { t: "Metal Buildings", d: "Pre-engineered and custom metal structures for warehouses, workshops, and commercial facilities." },
              { t: "Concrete & Foundations", d: "Slabs, footings, equipment pads, and structural concrete for commercial and industrial applications." },
              { t: "Commercial Roofing", d: "TPO, metal, and modified bitumen systems built for commercial and industrial durability." },
              { t: "Siding, Windows & Doors", d: "Complete exterior envelope packages — materials chosen for performance, code, and aesthetics." },
              { t: "Tenant Improvements", d: "Interior buildouts for offices, retail, restaurants, and mixed-use spaces. Back-of-house to customer-facing." },
              { t: "Renovations & Remodels", d: "Transforming existing commercial spaces with structural, cosmetic, and functional upgrades." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 4" : "span 12" }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Let's Talk About Your Commercial Project" sub="ISN-certified, fully insured, and ready to break ground. Get a detailed quote from a contractor who shows up on time, on budget, and on record." />
    </>
  );
}

export function IndustrialPage() {
  return (
    <>
      <PageHero tag="ISN Certified" title="Industrial" titleAccent="Services" sub="On-site industrial contracting for refineries, mills, manufacturing facilities, and heavy infrastructure. Pre-qualified through ISNetworld. Pre-insured. Ready to mobilize." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Plant-Ready" title="Industrial Capabilities" sub="Our ISNetworld certification means we've already cleared your facility's contractor requirements. No waiting on paperwork — we mobilize pre-qualified and ready to work." />
           <div className="bento-grid">
            {[
              { t: "Plant Maintenance", d: "Scheduled and emergency maintenance for industrial facilities. Structural, roofing, and building envelope repairs that keep operations running." },
              { t: "Equipment Pads & Foundations", d: "Precision concrete work for heavy equipment installations — engineered pads, anchor bolt layouts, and structural supports." },
              { t: "Facility Repairs & Upgrades", d: "Building envelope repairs, structural modifications, and facility improvements executed under full safety protocols." },
              { t: "Turnaround Support", d: "Rapid mobilization for plant turnaround projects. We bring the manpower, equipment, and documentation to meet tight deadlines." },
              { t: "Industrial Demolition", d: "Controlled demolition and removal of industrial structures, equipment, and building components — safely and on schedule." },
              { t: "Safety & Compliance", d: "All work performed under strict OSHA protocols with full documentation, JHAs, and site-specific safety plans. No exceptions." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 4" : "span 12" }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Need an ISN-Certified Contractor On-Site?" sub="Pre-qualified and ready to mobilize for your next industrial project. Let's discuss scope and timelines." />
    </>
  );
}

export function DumpstersPage() {
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Roll-Off Dumpsters" titleAccent="for Every Project" sub="Convenient, reliable dumpster rentals for commercial job sites, demolition projects, renovations, and large-scale cleanouts across Central Louisiana." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Our Fleet" title="Three Sizes. One Standard of Service." center />
          <div className="bento-grid" style={{ marginBottom: 64 }}>
            {[
              { sz: "20", d: "Designed for small construction projects, renovations, or cleanouts. Compact dimensions — best balance of space efficiency and placement flexibility.", fit: "~6 pickup loads" },
              { sz: "30", d: "Suited for medium construction projects, renovations, or cleanouts. The right mix of accessibility, debris handling, and capacity for most job sites.", fit: "~9 pickup loads" },
              { sz: "40", d: "Perfect for large construction, demolition, or major cleanouts. Maximum capacity for maximum project efficiency.", fit: "~12 pickup loads" },
            ].map((d, i) => (
              <Fade key={i} delay={i * 0.1} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 4" : "span 12", textAlign: "center", padding: "56px 40px" }}>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 64, lineHeight: 1 }}>{d.sz}</div>
                <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 3, textTransform: "uppercase", margin: "8px 0 24px" }}>Yard Roll-Off</div>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>{d.d}</p>
                <div style={{ display: "inline-block", background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, padding: "8px 20px", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{d.fit}</div>
              </Fade>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Btn to="/dumpster-pricing">View Full Pricing Details <I.Arrow /></Btn>
          </div>
        </div>
      </section>
      <CTA title="Need a Dumpster on Your Job Site?" sub="Call Chris directly or fill out the form. We'll get a roll-off delivered — often same day." btn="Reserve a Dumpster" />
    </>
  );
}

export function GalleryPage() {
  useSEO({ title: "Project Gallery", description: "View our recent commercial and industrial construction projects." });
  const paths = [
    "/images/construction_brick_1775169082069.png",
    "/images/industrial_project_1775169098001.png",
    "/images/warehouse_finished_1775169110438.png",
    "/images/workers_blueprints_1775169124334.png"
  ];

  return (
    <>
      <PageHero tag="Our Work" title="Project" titleAccent="Gallery" sub="Hyper-realistic commercial and industrial construction projects across Central Louisiana, featuring structural foundations, steel assembly, and modern distribution centers." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div className="bento-grid" style={{ maxWidth: 1200, margin: "0 auto", gap: 24, gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}>
          {paths.map((src, i) => (
            <Fade key={i} delay={(i % 4) * 0.1} className="bento-gallery-item">
              <div className="sc" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/10", background: "var(--bg-elevated)", border: "1px solid var(--border-light)" }}>
                <img src={src} alt={`Project ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }} loading="lazy" onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
              </div>
            </Fade>
          ))}
        </div>
      </section>
      <CTA title="Like What You See?" sub="Let's build something worth showing off. Request a quote for your commercial or industrial project." />
    </>
  );
}

export function OtherPages() {
  return <PageHero tag="System Options" title="Under Construction" sub="This section is currently being visually modernized. Please use navigation to return." />;
}
