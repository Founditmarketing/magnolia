import { Fade, Link, I, Counter, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, ISNBadge } from "../components/Shared";

export function HomePage() {
  return (
    <>
            <PageHero 
        title="Commercial & Industrial " 
        titleAccent="Construction" 
        sub="ISNetworld Certified general contractor delivering uncompromising quality across Louisiana."
        media="/hero-video-2.mp4"
      >
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Btn to="/commercial">Explore Services</Btn>
          <Btn to="/contact" variant="outlineDark">Request a Quote</Btn>
        </div>
      </PageHero>

      <TrustBar />

      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="What We Do" title="Built for Projects That Can't Afford to Go Wrong" sub="Multi-unit apartments, financial institutions, plant turnarounds, and job-site waste. We bring the certifications, insurance, and experience that serious projects demand." />

          <div className="bento-grid">
            <div className="bento-item sc" style={{ gridColumn: "span 4" }}>
              <div className="icon-glow" style={{ top: -20, left: -20 }} />
              <div style={{ color: "var(--primary)", marginBottom: 24, position: "relative", zIndex: 1 }}><I.Building /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", margin: "0 0 16px", position: "relative", zIndex: 1 }}>Commercial Construction</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, position: "relative", zIndex: 1 }}>Ground-up builds, renovations, and tenant improvements managed from permits to punch list.</p>
              <Link to="/commercial" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>Learn More <I.Arrow /></Link>
            </div>
            
            <div className="bento-item sc" style={{ gridColumn: "span 4" }}>
              <div className="icon-glow" style={{ top: -20, left: -20, background: "rgba(59, 130, 246, 0.4)" }} />
              <div style={{ color: "#3B82F6", marginBottom: 24, position: "relative", zIndex: 1 }}><I.Factory /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", margin: "0 0 16px", position: "relative", zIndex: 1 }}>Industrial Services</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, position: "relative", zIndex: 1 }}>ISN-certified contractor for refineries, mills, manufacturing maintenance, and turnarounds.</p>
              <Link to="/industrial" style={{ color: "#3B82F6", fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>Learn More <I.Arrow /></Link>
            </div>

            <div className="bento-item sc" style={{ gridColumn: "span 4" }}>
              <div className="icon-glow" style={{ top: -20, left: -20, background: "rgba(34, 197, 94, 0.4)" }} />
              <div style={{ color: "#22C55E", marginBottom: 24, position: "relative", zIndex: 1 }}><I.Truck /></div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, textTransform: "uppercase", margin: "0 0 16px", position: "relative", zIndex: 1 }}>Dumpster Rentals</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, marginBottom: 32, position: "relative", zIndex: 1 }}>20, 30, and 40-yard roll-off dumpsters with clear-cut pricing and 24-48 hr fast delivery.</p>
              <Link to="/dumpsters" style={{ color: "#22C55E", fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>Learn More <I.Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elevated)", padding: "clamp(60px, 10vh, 120px) 24px", position: "relative", overflow: "hidden", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "30%", background: "linear-gradient(-90deg, var(--primary-glow), transparent)", opacity: 0.1, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <SH tag="Why Magnolia State" title="Zero Shortcuts. Zero Excuses." sub="When a Project Manager or Plant Director brings us on-site, they know we've already passed every test. Fully insured. OSHA compliant. Pre-verified through ISNetworld." />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 48 }}>
              <div>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, lineHeight: 1, marginBottom: 8 }}><Counter end={15} suffix="+" /></div>
                <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontSize: 13 }}>Years Experience</div>
              </div>
              <div>
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, lineHeight: 1, marginBottom: 8 }}><Counter end={100} suffix="%" /></div>
                <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", fontSize: 13 }}>Safety Record</div>
              </div>
            </div>
          </div>
          
          <div className="glass" style={{ padding: 48, borderRadius: 24, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
             <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, textTransform: "uppercase", margin: "0 0 32px" }}>The Process</h3>
             {[
               { n: "01", t: "Call Chris", d: "One phone call to discuss your scope. No call centers." },
               { n: "02", t: "Site Evaluation", d: "We review specs and build a clear, detailed estimate." },
               { n: "03", t: "Mobilize", d: "Permits pulled, safety plans filed, crew scheduled." },
               { n: "04", t: "Execute & Deliver", d: "On time, on budget, on record. Full documentation." },
             ].map((s, i) => (
               <div key={i} style={{ display: "flex", gap: 24, marginBottom: i === 3 ? 0 : 32 }}>
                 <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, opacity: 0.8 }}>{s.n}</div>
                 <div>
                   <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", margin: "0 0 8px" }}>{s.t}</div>
                   <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6 }}>{s.d}</div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      
      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Social Proof" title="Trusted by Project Managers Across Louisiana" center />
          <div className="bento-grid">
            {[
              { q: "Magnolia stepped in when our previous contractor fell behind. They had the steel up and the foundation poured ahead of the revised schedule. Zero safety incidents.", n: "Marcus T.", t: "Plant Director" },
              { q: "Their ISN compliance made procurement a breeze. The team was professional, the site was clean, and there were no hidden change orders.", n: "Sarah L.", t: "Commercial Developer" },
              { q: "Fast dumpster deliveries and they actually sweep the area before pull-off. Easiest waste management partner we've had on a 10-month build.", n: "David R.", t: "Site Superintendent" }
            ].map((t, i) => (
              <Fade key={i} delay={i * 0.1} className="bento-item sc" style={{ gridColumn: "span 4", padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{t.q}"</p>
                <div>
                  <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>{t.n}</div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>{t.t}</div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Discuss Your Next Project?" sub="Commercial build, industrial maintenance, or dumpster rental — we're ready to put 15+ years of certified experience to work for you." />
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
