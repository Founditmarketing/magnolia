import { Fade, Link, I, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, StandardsBand } from "../components/Shared";

const TEL = "tel:3187046308";

const STANDARDS = {
  eyebrow: "How We Work",
  heading: "What We Build. What We Don't.",
  framingLine: "We focus on full builds and major projects. That focus is what makes the work hold up — and it is why every job gets the same standard, start to finish.",
  weBuild: [
    { title: "Ground-Up Commercial", desc: "Full commercial buildings from permits to punch list — metal buildings, foundations, envelope, and tenant buildouts. Every phase, one contractor on record." },
    { title: "Custom Homes", desc: "New custom home builds for owners who want it done once and done right. Architectural homes, not patch jobs." },
    { title: "Roofing Systems", desc: "Complete commercial and residential roofing systems — TPO, metal, and modified bitumen. Full systems engineered to last, never spot repairs." },
    { title: "Demolition & Site Work", desc: "Controlled demolition and site clearing for commercial and structural projects, executed under full safety protocols." },
    { title: "Roll-Off Dumpster Rental", desc: "20, 30, and 40-yard roll-offs delivered across Cenla for job sites, demolition, and major cleanouts. Transparent pricing, often same-day." },
  ],
  weDont: ["Sheetrock patches", "Door replacements", "Fence repair", "General handyman work", "Roof repairs and patch jobs", "Small remodels and odd jobs"],
  closingLine: "Not handyman work. If the job is a quick fix, we'll point you to someone who does that — it isn't us.",
};

export function HomePage() {
  useSEO({ title: "Commercial Construction, Custom Homes, Roofing & Dumpsters", description: "Central Louisiana's commercial and custom builder. Ground-up commercial construction, custom homes, full roofing systems, and roll-off dumpster rental across Cenla. ISN-certified." });

  const services = [
    { icon: <I.Building />, n: "Commercial Construction", to: "/commercial", cta: "Explore Commercial Construction", d: "Ground-up commercial buildings engineered to withstand daily public use — permits to punch list, one contractor on record." },
    { icon: <I.Home />, n: "Custom Home Building", to: "/residential", cta: "Explore Custom Home Building", d: "New custom homes built from the ground up across Central Louisiana. Full builds, not remodels or repairs." },
    { icon: <I.Roof />, n: "Roofing Systems", to: "/roofing", cta: "Explore Roofing Systems", d: "Complete commercial and residential roof systems — TPO, metal, modified bitumen, and architectural shingle. Whole systems, never patch jobs." },
    { icon: <I.Truck />, n: "Roll-Off Dumpster Rental", to: "/dumpsters", cta: "See Sizes & Pricing", d: "20, 30, and 40-yard roll-offs delivered across Cenla for job sites, demolition, and major cleanouts. Transparent pricing." },
  ];

  return (
    <>
      {/* 1. Hero — sells scale, repels small jobs */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "clamp(60px, 15vh, 120px) 24px" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/images/industrial_project_1775169098001.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.82) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto", width: "100%" }}>
          <Fade delay={0.1}>
            <h1 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(38px, 7.5vw, 78px)", letterSpacing: -1, margin: "0 0 24px", lineHeight: 1.05 }}>
              Central Louisiana's<br />Commercial &amp; Custom Builder
            </h1>
            <p style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-body)", fontSize: "clamp(17px, 4vw, 22px)", lineHeight: 1.55, margin: "0 0 40px", maxWidth: 640 }}>
              Ground-up commercial buildings, custom homes, full roofing systems, and roll-off dumpster rental across Cenla. This is not handyman work.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <Btn href={TEL} style={{ padding: "17px 38px", fontSize: 17, justifyContent: "center", textAlign: "center" }}><I.Phone /><span>Call for a Commercial Estimate</span></Btn>
              <a href="#what-we-do" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", border: "2px solid rgba(255,255,255,0.55)", borderRadius: 8, padding: "15px 32px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s", background: "rgba(255,255,255,0.06)" }} onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.16)"; }} onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}>What We Build</a>
            </div>
          </Fade>
        </div>
      </section>

      {/* 2. Services Grid — the four money pages */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(72px, 11vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))", gap: 48 }}>
          {services.map((s, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div style={{ color: "var(--primary)", marginBottom: 22, display: "inline-flex" }}>{s.icon}</div>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: 28, margin: "0 0 14px" }}>{s.n}</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, margin: "0 0 22px" }}>{s.d}</p>
              <Link to={s.to} style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, textTransform: "uppercase", fontSize: 13, letterSpacing: 1 }}>{s.cta} <I.Arrow /></Link>
            </Fade>
          ))}
        </div>
      </section>

      {/* 3. The lead filter — What We Build / What We Don't */}
      <StandardsBand {...STANDARDS} />

      {/* 4. Work Grid (Horizontal Scroll on Mobile) */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(72px, 11vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 32, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 24, WebkitOverflowScrolling: "touch" }}>
            {[
              { img: "/images/warehouse_finished_1775169110438.png", n: "Commercial Build-Out", r: "4,500 sq ft, flawless execution." },
              { img: "/images/construction_brick_1775169082069.png", n: "Ground-Up Commercial", r: "Full structure, permits to punch list." },
              { img: "/images/custom_cabinets.png", n: "Custom Home", r: "Built once, built right." },
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

      {/* 5. Social Proof: One Singular Statement */}
      <section style={{ background: "var(--bg-elevated)", padding: "clamp(96px, 16vh, 160px) 24px" }}>
        <Fade delay={0.1} style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "var(--primary)", fontSize: 32, letterSpacing: 4, margin: "0 auto 32px" }}>★★★★★</div>
          <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 5vw, 42px)", lineHeight: 1.4, margin: "0 0 40px" }}>
            "Chris and his crew were extremely professional from day one. Communication was clear throughout the entire build. The quality of work is absolutely outstanding."
          </p>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-primary)" }}>Verified Client</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-secondary)", marginTop: 8 }}>Commercial Build · Central Louisiana</div>
        </Fade>
      </section>
    </>
  );
}

export function CommercialPage() {
  useSEO({ title: "Commercial Construction in Central Louisiana", description: "Ground-up commercial construction across Alexandria and Central Louisiana — metal buildings, foundations, full envelopes, and tenant buildouts. ISN-certified. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Our Services" title="Commercial" titleAccent="Construction" sub="Full-service, ground-up commercial builds across Central Louisiana. From multi-unit apartments and financial institutions to restaurants and retail — we handle every phase from permits to punch list." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="What We Build" title="Ground-Up Commercial Construction" sub="We specialize in full commercial builds that require careful planning, code compliance, and the kind of craftsmanship that holds up to daily public use." />
          <div className="bento-grid">
            {[
              { t: "Metal Buildings", d: "Pre-engineered and custom metal structures for warehouses, workshops, and commercial facilities." },
              { t: "Concrete & Foundations", d: "Slabs, footings, equipment pads, and structural concrete for commercial and industrial applications." },
              { t: "Commercial Roofing", d: "TPO, metal, and modified bitumen roof systems built for commercial and industrial durability." },
              { t: "Siding, Windows & Doors", d: "Complete exterior envelope packages — materials chosen for performance, code, and aesthetics." },
              { t: "Tenant Improvements", d: "Interior buildouts for offices, retail, restaurants, and mixed-use spaces. Back-of-house to customer-facing." },
              { t: "Demolition & Site Work", d: "Controlled demolition and site clearing to prep a property for a ground-up build, under full safety protocols." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc span-4">
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Let's Talk About Your Commercial Project" sub="ISN-certified, fully insured, and ready to break ground. Get a real scope from a contractor who shows up on time, on budget, and on record." btn="Call for a Commercial Estimate" />
    </>
  );
}

export function IndustrialPage() {
  useSEO({ title: "Industrial Contracting & Plant Services", description: "ISNetworld-certified industrial contractor for refineries, mills, and manufacturing plants across Central Louisiana. Pre-qualified and ready to mobilize. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="ISN Certified" title="Industrial" titleAccent="Services" sub="On-site industrial contracting for refineries, mills, manufacturing facilities, and heavy infrastructure. Pre-qualified through ISNetworld. Pre-insured. Ready to mobilize." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Plant-Ready" title="Industrial Capabilities" sub="Our ISNetworld certification means we've already cleared your facility's contractor requirements. No waiting on paperwork — we mobilize pre-qualified and ready to work." />
           <div className="bento-grid">
            {[
              { t: "Plant Maintenance", d: "Scheduled and capital maintenance for industrial facilities. Structural, roofing, and building envelope work that keeps operations running." },
              { t: "Equipment Pads & Foundations", d: "Precision concrete work for heavy equipment installations — engineered pads, anchor bolt layouts, and structural supports." },
              { t: "Facility Upgrades & Capital Improvements", d: "Building envelope modifications, structural upgrades, and facility improvements executed under full safety protocols." },
              { t: "Turnaround Support", d: "Rapid mobilization for plant turnaround projects. We bring the manpower, equipment, and documentation to meet tight deadlines." },
              { t: "Industrial Demolition", d: "Controlled demolition and removal of industrial structures, equipment, and building components — safely and on schedule." },
              { t: "Safety & Compliance", d: "All work performed under strict OSHA protocols with full documentation, JHAs, and site-specific safety plans. No exceptions." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc span-4">
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Need an ISN-Certified Contractor On-Site?" sub="Pre-qualified and ready to mobilize for your next industrial project. Let's discuss scope and timelines." btn="Call to Discuss Scope" />
    </>
  );
}

export function RoofingPage() {
  useSEO({ title: "Roofing Systems in Alexandria & Central Louisiana", description: "Complete commercial and residential roof systems across Alexandria and Central Louisiana — TPO, metal, modified bitumen, and architectural shingle. Full tear-off and new installation by an ISN-certified contractor. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Roofing Systems" title="Commercial & Residential" titleAccent="Roof Systems" sub="Complete roof systems for Central Louisiana — engineered, torn off to deck, and installed new. Commercial flat-roof systems and full residential roofs. We install whole systems, not patch jobs." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Full Systems" title="Built to Shed Louisiana Weather" sub="Cenla heat, humidity, and hurricane-season wind demand a real roof system — proper decking, underlayment, flashing, and a manufacturer-grade membrane or covering. We scope, tear off, and install the entire assembly so it performs for decades, not seasons." />
          <div className="bento-grid">
            {[
              { t: "Commercial Flat & Low-Slope", d: "TPO, EPDM, and PVC single-ply systems for warehouses, retail, and office buildings — fully adhered or mechanically attached, with proper insulation and tapered drainage." },
              { t: "Modified Bitumen & Built-Up", d: "Multi-ply commercial and industrial systems engineered for heavy foot traffic, equipment loads, and the long ponding-water life Louisiana roofs face." },
              { t: "Standing-Seam & Metal", d: "Architectural and structural metal roof systems for commercial buildings and custom homes — concealed-fastener panels built for wind uplift and a 40-plus-year service life." },
              { t: "Architectural Shingle Systems", d: "Complete residential roof systems on custom homes and large builds — full tear-off to deck, synthetic underlayment, ice-and-water in the valleys, and architectural shingles." },
              { t: "Decking, Flashing & Envelope", d: "We rebuild the parts that actually fail first — rotted decking, valley and wall flashing, drip edge, and penetration boots — so the new system is sealed top to bottom." },
              { t: "New-Construction Roofing", d: "Roof systems delivered as part of our ground-up commercial builds and custom homes, sequenced and dried-in to keep the whole project on schedule." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc span-4">
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, textTransform: "uppercase", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Specifying a Roof System?" sub="Talk to Chris directly about your commercial or residential roof. One call, no call center, a real scope from an ISN-certified contractor." btn="Call About Your Roof" />
    </>
  );
}

export function DumpstersPage() {
  useSEO({ title: "Roll-Off Dumpster Rental — Alexandria & Cenla", description: "20, 30, and 40-yard roll-off dumpster rental across Central Louisiana. Transparent pricing, fast delivery for job sites, demolition, and major cleanouts. Call (318) 704-6308." });
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
              <Fade key={i} delay={i * 0.1} className="bento-item sc span-4" style={{ textAlign: "center", padding: "56px 40px" }}>
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
      <CTA title="Need a Dumpster on Your Job Site?" sub="Call Chris directly at (318) 704-6308 — we'll get a roll-off delivered, often same day." btn="Call to Reserve a Roll-Off" />
    </>
  );
}

export function GalleryPage() {
  useSEO({ title: "Project Gallery", description: "View our recent commercial, custom home, and roofing projects across Central Louisiana." });
  const paths = [
    "/images/warehouse_finished_1775169110438.png",
    "/images/industrial_project_1775169098001.png",
    "/images/construction_brick_1775169082069.png",
    "/images/workers_blueprints_1775169124334.png",
    "/images/residential_exterior.png",
    "/images/custom_cabinets.png",
    "/images/trim_millwork.png",
    "/images/granite_kitchen.png",
  ];

  return (
    <>
      <PageHero tag="Our Work" title="Project" titleAccent="Gallery" sub="Commercial, custom home, and roofing projects across Central Louisiana — structural foundations, full envelopes, and finished builds." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div className="bento-grid" style={{ maxWidth: 1200, margin: "0 auto", gap: 24, gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}>
          {paths.map((src, i) => (
            <Fade key={i} delay={(i % 4) * 0.1} className="bento-gallery-item">
              <div className="sc" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/10", background: "var(--bg-elevated)", border: "1px solid var(--border-light)" }}>
                <img src={src} alt={`Magnolia State Construction project ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }} loading="lazy" onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
              </div>
            </Fade>
          ))}
        </div>
      </section>
      <CTA title="Like What You See?" sub="Let's build something worth showing off. Talk to Chris about your commercial or custom project." btn="Call About Your Project" />
    </>
  );
}
