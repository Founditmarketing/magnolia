import { Fade, Link, I, Counter, useSEO, Parallax } from "../utils";
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
      {/* 1. Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "clamp(60px, 15vh, 120px) 24px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/industrial_project_1775169098001.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Hero Background"/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto", width: "100%" }}>
          <Fade delay={0.1}>
            <h1 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(42px, 10vw, 96px)", letterSpacing: -1, margin: "0 0 24px", lineHeight: 1.05 }}>
              Careful Craftsmanship.<br/>Distinctive Spaces.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-body)", fontSize: "clamp(18px, 4vw, 24px)", lineHeight: 1.5, margin: "0 0 40px", maxWidth: 600 }}>
              Commercial & residential construction in Central Louisiana. 15+ years.
            </p>
            <Btn to="/contact" style={{ padding: "16px 40px", fontSize: 18, background: "#fff", color: "#000", border: "none" }}>Get a Quote</Btn>
          </Fade>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section style={{ background: "var(--bg-dark)", padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64 }}>
          <Fade delay={0.1}>
            <div style={{ color: "var(--primary)", marginBottom: 24 }}><I.Building /></div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: 32, margin: "0 0 16px" }}>Commercial Construction</h3>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, margin: "0 0 24px" }}>We engineer environments that withstand the rigorous reality of commercial wear while maintaining stunning aesthetics.</p>
            <Link to="/commercial" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 14, letterSpacing: 1 }}>Explore Commercial <I.Arrow /></Link>
          </Fade>
          <Fade delay={0.2}>
            <div style={{ color: "var(--primary)", marginBottom: 24 }}><I.Check /></div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: 32, margin: "0 0 16px" }}>Custom Residential</h3>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, margin: "0 0 24px" }}>Rich architectural trim work, custom cabinetry, and premium solutions executed with immaculate precision.</p>
            <Link to="/residential" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 14, letterSpacing: 1 }}>Explore Residential <I.Arrow /></Link>
          </Fade>
          <Fade delay={0.3}>
            <div style={{ color: "var(--primary)", marginBottom: 24 }}><I.Truck /></div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: 32, margin: "0 0 16px" }}>Dumpster Rentals</h3>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, margin: "0 0 24px" }}>Fast deliveries on 20, 30, and 40-yard containers keeping sites completely clear and compliant.</p>
            <Link to="/dumpsters" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 14, letterSpacing: 1 }}>Rent a Dumpster <I.Arrow /></Link>
          </Fade>
        </div>
      </section>

      {/* 3. Work Grid (Horizontal Scroll on Mobile) */}
      <section style={{ background: "var(--bg-surface)", padding: "120px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 32, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 24, WebkitOverflowScrolling: "touch" }}>
            {[
              { img: "/images/custom_cabinets.png", n: "Heavy Timber Addition", r: "Delivered 2 weeks early." },
              { img: "/images/warehouse_finished_1775169110438.png", n: "Commercial Build-out", r: "4,500 sq ft flawless execution." },
              { img: "/images/trim_millwork.png", n: "Custom Residential", r: "Immaculate architectural trim." },
            ].map((p, i) => (
               <Fade key={i} delay={i * 0.1} style={{ flex: "1 0 min(350px, 85vw)", scrollSnapAlign: "start" }}>
                 <div style={{ aspectRatio: "4/3", width: "100%", overflow: "hidden", marginBottom: 24, borderRadius: 8 }}>
                   <img src={p.img} alt={p.n} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }} onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
                 </div>
                 <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, margin: "0 0 8px" }}>{p.n}</h3>
                 <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, margin: 0 }}>{p.r}</p>
               </Fade>
            ))}
          </div>
          <Fade delay={0.4} style={{ textAlign: "center", marginTop: 48 }}>
             <Link to="/gallery" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>See the Gallery <I.Arrow /></Link>
          </Fade>
        </div>
      </section>

      {/* 4. Social Proof: One Singular Statement */}
      <section style={{ background: "var(--bg-elevated)", padding: "160px 24px" }}>
        <Fade delay={0.1} style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "var(--primary)", fontSize: 32, letterSpacing: 4, margin: "0 auto 32px" }}>★★★★★</div>
          <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 5vw, 42px)", lineHeight: 1.4, margin: "0 0 40px" }}>
            "Chris and his crew were extremely professional from day one. Communication was clear throughout the entire remodel. The quality of work is absolutely outstanding."
          </p>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-primary)" }}>Recent Client</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)", marginTop: 8 }}>Residential Remodel</div>
        </Fade>
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
    "/images/custom_cabinets.png",
    "/images/trim_millwork.png",
    "/images/granite_kitchen.png",
    "/images/residential_exterior.png",
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
