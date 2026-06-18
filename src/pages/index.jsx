import { useState, useEffect } from "react";
import { Fade, Link, I, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, StandardsBand, FAQ, Testimonials, ProcessSteps, ServiceArea, StatsBand, WhyUs } from "../components/Shared";

const TOWNS = ["Alexandria", "Pineville", "Ball", "Tioga", "Boyce", "Lecompte", "Deville", "Woodworth", "Forest Hill", "Glenmora", "Pollock", "Marksville", "Bunkie", "Cheneyville"];

const TEL = "tel:3187046308";

const STANDARDS = {
  eyebrow: "How We Work",
  heading: "What We Build. What We Don't.",
  framingLine: "We focus on full builds and major projects. That focus is what makes the work hold up — and it is why every job gets the same standard, start to finish.",
  weBuild: [
    { title: "Ground-up commercial buildings" },
    { title: "Custom homes, built ground-up" },
    { title: "Full roofing systems" },
    { title: "Demolition & site work" },
    { title: "Roll-off dumpster rental" },
  ],
  weDont: ["Sheetrock patches", "Door replacements", "Fence repair", "General handyman work", "Roof repairs and patch jobs", "Small remodels and odd jobs"],
  closingLine: "Not handyman work. If the job is a quick fix, we'll point you to someone who does that — it isn't us.",
};

const FAQ_ITEMS = [
  { q: "What areas do you serve?", a: "Magnolia State Construction serves Alexandria, Pineville, and all of Central Louisiana." },
  { q: "Are you licensed and insured?", a: "Yes. We're a licensed Louisiana contractor carrying comprehensive general liability and workers' compensation coverage that meets or exceeds commercial site requirements — and we're ISNetworld-certified and a member of the Louisiana Associated General Contractors (LAGC)." },
  { q: "Do you take on small repairs or handyman work?", a: "No. We focus on full builds and major projects — ground-up commercial, custom homes, complete roofing systems, demolition, and roll-off dumpster rental. We don't do sheetrock patches, door swaps, fence repair, or general handyman jobs." },
  { q: "Do you handle both commercial and residential roofing?", a: "Yes — complete roof systems for both. Commercial flat and low-slope systems (TPO, EPDM, modified bitumen) and full residential systems (standing-seam metal and architectural shingle). We install whole systems, not patch jobs." },
  { q: "What size roll-off dumpster do I need?", a: "We offer 20, 30, and 40-yard roll-offs — roughly 6, 9, and 12 pickup-truck loads. A 20-yard suits smaller projects and cleanouts; a 40-yard handles major construction and demolition. Call and we'll size it for your job." },
  { q: "How do I get an estimate?", a: "Call Chris directly at (318) 704-6308. No forms and no call center — one call to talk through your project scope and timeline." },
];

// Real Google reviews (verbatim) — aggregate 4.7 across 23 reviews as of 2026-06.
const RATING = { value: 4.7, count: 23 };
const REVIEWS_URL = "https://share.google/B8INfhtP4WqrgQICZ";
const REVIEWS = [
  { author: "Avery Bandy", role: "Custom Home Build · Google review", rating: 5, text: "Chris built our custom home! Was a great communicator and executed all our dreams. Will call Chris again to build our next home!" },
  { author: "Christopher Johns", role: "Construction Client · Google review", rating: 5, text: "Chris and his crew do great work! They were quick, accommodating, and had constant communication throughout our project. Looking forward to working with Magnolia State Construction again!" },
  { author: "Tatiana Keizman", role: "Commercial & Residential · Google review", rating: 5, text: "I highly recommend Magnolia State Construction for any upcoming residential or commercial projects. Chris, the owner, runs a team that is professional, respectful, and truly committed to quality." },
];

const WHY_US = [
  { icon: <I.Shield />, t: "One Accountable Builder", d: "One contractor on record from permits to punch list — no subs to chase, no finger-pointing." },
  { icon: <I.Clock />, t: "Real Project Management", d: "Schedules kept, budgets respected, and updates straight from Chris — not a call center." },
  { icon: <I.HardHat />, t: "15+ Years in Cenla", d: "Over fifteen years building across Central Louisiana. ISN-certified, licensed, and fully insured." },
  { icon: <I.Truck />, t: "Clean, Professional Sites", d: "We treat your property like our own — orderly job sites, tidy finishes, roll-offs on hand." },
];

const STATS = [
  { end: 15, suffix: "+", label: "Years Building Cenla" },
  { text: "4.7★", label: "Google Rating" },
  { end: 23, label: "Google Reviews" },
  { text: "ISN", label: "Certified Contractor" },
];

export function HomePage() {
  useSEO({ title: "Commercial Construction, Custom Homes, Roofing & Dumpsters", description: "Central Louisiana's commercial and custom builder. Ground-up commercial construction, custom homes, full roofing systems, and roll-off dumpster rental across Cenla. ISN-certified.", faq: FAQ_ITEMS, rating: RATING, reviews: REVIEWS });

  const featured = [
    { n: "Commercial Construction", to: "/commercial", img: "/images/commercial-pour-night.webp", proof: "Metal buildings, foundations, full envelopes, and tenant buildouts — every phase on record.", cta: "Explore commercial construction" },
    { n: "Custom Home Building", to: "/residential", img: "/images/finished-home.webp", proof: "Ground-up custom homes, foundation to final walk-through. One accountable builder.", cta: "Learn about custom homes" },
  ];
  const secondary = [
    { n: "Roofing Systems", to: "/roofing", img: "/images/roof-framing.webp", proof: "TPO, metal, and modified bitumen — full systems, never patch jobs.", cta: "Explore roofing" },
    { n: "Roll-Off Dumpster Rental", to: "/dumpsters", img: "/images/dumpster.webp", proof: "20, 30, and 40-yard roll-offs. Transparent pricing, fast delivery.", cta: "See sizes & pricing" },
  ];
  const serviceCard = (s, big) => (
    <Link to={s.to} className="service-card" aria-label={s.n} style={{ display: "block", position: "relative", aspectRatio: big ? "5 / 4" : "16 / 9", borderRadius: 14, overflow: "hidden", textDecoration: "none" }}>
      <img src={s.img} alt="" className="service-card-img" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,12,0.93) 0%, rgba(8,20,12,0.45) 52%, rgba(8,20,12,0.08) 100%)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: big ? "clamp(28px, 4vw, 40px)" : "26px 26px" }}>
        <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: big ? "clamp(26px, 3.5vw, 34px)" : 23, margin: "0 0 10px", lineHeight: 1.12 }}>{s.n}</h3>
        <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)", fontSize: big ? 15.5 : 14, lineHeight: 1.55, margin: "0 0 16px", maxWidth: 440 }}>{s.proof}</p>
        <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8 }}>{s.cta} <I.Arrow /></span>
      </div>
    </Link>
  );

  return (
    <>
      {/* 1. Hero — warm editorial split: charcoal serif on linen, proof-forward, phone-first */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(124px, 17vh, 172px) 24px clamp(56px, 9vh, 100px)" }}>
        <div className="hero-plate">
          <Fade delay={0.05}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 28, height: 2, background: "var(--primary)", flexShrink: 0 }} aria-hidden="true" />
              <span style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase" }}>Commercial · Custom Homes · Roofing — Alexandria + Cenla</span>
            </div>
            <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(31px, 6vw, 70px)", letterSpacing: -1.2, lineHeight: 1.05, margin: "0 0 22px" }}>
              Commercial. Custom homes. Roofing — and our <span style={{ color: "var(--primary)", fontWeight: 500 }}>name</span> on every one.
            </h1>
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.6, margin: "0 0 30px", maxWidth: 540 }}>
              Ground-up commercial buildings, custom homes, and complete roofing systems across Central Louisiana — one accountable contractor, permits to punch list. No call center. You call Chris.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", background: "var(--bg-surface)", border: "1px solid var(--border-light)", borderRadius: 12, overflow: "hidden", width: "fit-content", maxWidth: "100%", marginBottom: 32, boxShadow: "var(--shadow-sm)" }}>
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ padding: "13px 18px", display: "flex", alignItems: "center", gap: 8, textDecoration: "none", borderRight: "1px solid var(--border-light)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-display)" }}>{RATING.value} ★</span>
                <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 500 }}>{RATING.count} Google reviews</span>
              </a>
              <span style={{ padding: "13px 18px", display: "flex", alignItems: "center", color: "var(--text-secondary)", fontSize: 13, fontWeight: 500, borderRight: "1px solid var(--border-light)" }}>LAGC Member</span>
              <span style={{ padding: "13px 18px", display: "flex", alignItems: "center", color: "var(--text-secondary)", fontSize: 13, fontWeight: 500, borderRight: "1px solid var(--border-light)" }}>ISNetworld Certified</span>
              <span style={{ padding: "13px 18px", display: "flex", alignItems: "center", color: "var(--text-secondary)", fontSize: 13, fontWeight: 500 }}>Licensed · Insured</span>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
              <Btn href={TEL} style={{ padding: "17px 36px", fontSize: 17, justifyContent: "center" }}><I.Phone /><span>Call Chris — (318) 704-6308</span></Btn>
              <Link to="/gallery" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 1.2, textTransform: "uppercase", textDecoration: "none" }}>See recent work <I.Arrow /></Link>
            </div>
          </Fade>
          <Fade delay={0.18}>
            <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid var(--primary)", aspectRatio: "4 / 5", maxHeight: "76vh", boxShadow: "var(--shadow-md)" }}>
              <img src="/images/hero-build-4.webp" alt="Ground-up commercial construction by Magnolia State Construction in Alexandria, Louisiana" fetchPriority="high" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <video className="hero-video" ref={v => { if (v) v.muted = true; }} autoPlay loop muted playsInline poster="/images/hero-build-4.webp" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
                <source src="/hero-build-4.mp4" type="video/mp4" />
              </video>
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "34%", background: "linear-gradient(to top, rgba(33,36,31,0.5), rgba(33,36,31,0))" }} aria-hidden="true" />
              <span style={{ position: "absolute", left: 16, bottom: 14, color: "#fff", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase" }}>Ground-up commercial · Alexandria, LA</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* 2. Services — image cards with hierarchy (flagships larger) */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(96px, 15vh, 184px) 24px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Fade>
            <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>Our Services</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 50px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: 0, maxWidth: 560 }}>What we take on.</h2>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, marginTop: 18, maxWidth: 520 }}>Full builds and major projects, start to finish.</p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 56 }}>
            {featured.map((s, i) => <Fade key={i} delay={i * 0.08}>{serviceCard(s, true)}</Fade>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 24 }}>
            {secondary.map((s, i) => <Fade key={i} delay={i * 0.08}>{serviceCard(s, false)}</Fade>)}
          </div>
        </div>
      </section>

      {/* 3. By the numbers — dark band: contrast + proof */}
      <StatsBand items={STATS} />

      {/* 3. The lead filter — What We Build / What We Don't */}
      <StandardsBand {...STANDARDS} />

      {/* 3c. Full-bleed image break — cinematic rhythm */}
      <section style={{ position: "relative", minHeight: "clamp(420px, 62vh, 600px)", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <img src="/images/break-greatroom.webp" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <video className="hero-video" ref={v => { if (v) v.muted = true; }} autoPlay loop muted playsInline poster="/images/break-greatroom.webp" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/break-greatroom.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,20,12,0.95) 0%, rgba(8,20,12,0.66) 50%, rgba(8,20,12,0.32) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <Fade>
            <h2 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(34px, 5.5vw, 60px)", lineHeight: 1.1, letterSpacing: -0.4, margin: "0 0 16px", maxWidth: 600 }}>Built once. Built right.</h2>
            <p style={{ color: "rgba(255,255,255,0.86)", fontFamily: "var(--font-body)", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: 1.6, margin: "0 0 34px", maxWidth: 500 }}>One accountable builder, from the foundation to the final walk-through.</p>
            <Btn href={TEL}><I.Phone /> Call for an Estimate</Btn>
          </Fade>
        </div>
      </section>

      {/* 4. Recent work — content beside headline (editorial flow) */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(96px, 15vh, 184px) 24px" }}>
        <div className="split-row" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>Our Work</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 50px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: "0 0 18px" }}>Recent builds across Cenla.</h2>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, margin: "0 0 32px", maxWidth: 420 }}>Commercial buildings and custom homes we've delivered, start to finish.</p>
            <Link to="/gallery" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>View the full gallery <I.Arrow /></Link>
          </Fade>
          <Fade delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <img src="/images/foyer-staircase.webp" alt="Custom home foyer and staircase" loading="lazy" style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", borderRadius: 12, marginTop: 32 }} />
              <img src="/images/commercial-build.webp" alt="Commercial construction job site in Central Louisiana" loading="lazy" style={{ width: "100%", aspectRatio: "3 / 4", objectFit: "cover", borderRadius: 12 }} />
            </div>
          </Fade>
        </div>
      </section>

      {/* 4b. Why Magnolia State — value props / differentiators */}
      <WhyUs items={WHY_US} />

      {/* 5. Social Proof — real Google reviews */}
      <Testimonials rating={RATING.value} count={RATING.count} items={REVIEWS} reviewsUrl={REVIEWS_URL} />

      {/* 6. Service area — local SEO for the surrounding Cenla communities */}
      <ServiceArea towns={TOWNS} />

      {/* 7. FAQ — depth + FAQPage schema (see useSEO faq prop) */}
      <FAQ items={FAQ_ITEMS} />
    </>
  );
}

export function CommercialPage() {
  useSEO({ title: "Commercial Construction in Central Louisiana", description: "Ground-up commercial construction across Alexandria and Central Louisiana — metal buildings, foundations, full envelopes, and tenant buildouts. ISN-certified. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Our Services" title="Commercial" titleAccent="Construction" sub="Full-service, ground-up commercial builds across Central Louisiana. From multi-unit apartments and financial institutions to restaurants and retail — we handle every phase from permits to punch list." media="/hero-build-3.mp4" poster="/images/hero-build-3.webp" />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(88px, 14vh, 176px) 24px" }}>
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
      <ProcessSteps title="How a Commercial Build Works" sub="One accountable contractor, from the first call to the final walk-through." steps={[
        { t: "Call & Scope", d: "Call Chris directly. We walk the site and talk scope, budget, and timeline — no call center, no runaround." },
        { t: "Estimate & Plan", d: "We build a real estimate and a plan: permits, materials, and schedule, all handled in-house." },
        { t: "Ground-Up Build", d: "One contractor runs every phase — foundation, structure, envelope, and finish — on time and on record." },
        { t: "Punch List & Handover", d: "We walk the finished building with you, close the punch list, and hand over a space ready to open." },
      ]} />
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
      <section style={{ background: "var(--bg-dark)", padding: "clamp(88px, 14vh, 176px) 24px" }}>
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
      <ProcessSteps tag="How We Mobilize" title="Pre-Qualified and Ready to Work" sub="ISNetworld certification means we clear your contractor requirements before we ever set foot on site." steps={[
        { t: "Pre-Qualified", d: "We're already cleared through ISNetworld — no waiting on contractor paperwork before we can work in your facility." },
        { t: "Scope & Safety Plan", d: "We scope the job and build a site-specific safety plan with JHAs and full documentation." },
        { t: "Mobilize", d: "We bring the manpower, equipment, and documentation to hit your turnaround or project window." },
        { t: "Document & Close", d: "Every task is documented and closed out to your facility's standards. No exceptions." },
      ]} />
      <CTA title="Need an ISN-Certified Contractor On-Site?" sub="Pre-qualified and ready to mobilize for your next industrial project. Let's discuss scope and timelines." btn="Call to Discuss Scope" />
    </>
  );
}

export function RoofingPage() {
  useSEO({ title: "Roofing Systems in Alexandria & Central Louisiana", description: "Complete commercial and residential roof systems across Alexandria and Central Louisiana — TPO, metal, modified bitumen, and architectural shingle. Full tear-off and new installation by an ISN-certified contractor. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Roofing Systems" title="Commercial & Residential" titleAccent="Roof Systems" sub="Complete roof systems for Central Louisiana — engineered, torn off to deck, and installed new. Commercial flat-roof systems and full residential roofs. We install whole systems, not patch jobs." media="/images/roof-framing.webp" />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(88px, 14vh, 176px) 24px" }}>
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
      <ProcessSteps title="How a Roof System Goes In" sub="We replace the whole assembly, not a few shingles — so it performs for decades." steps={[
        { t: "Inspection & Scope", d: "We get on the roof, find what's actually failing, and scope the full system — not a patch." },
        { t: "System & Estimate", d: "We spec the right assembly — membrane or metal, decking, flashing, underlayment — and give you a clear price." },
        { t: "Tear-Off & Install", d: "We tear off to deck and install the entire system, sealed top to bottom, under full safety protocols." },
        { t: "Final Inspection", d: "We inspect the finished roof and hand over a system engineered to last decades, not seasons." },
      ]} />
      <CTA title="Specifying a Roof System?" sub="Talk to Chris directly about your commercial or residential roof. One call, no call center, a real scope from an ISN-certified contractor." btn="Call About Your Roof" />
    </>
  );
}

export function DumpstersPage() {
  useSEO({ title: "Roll-Off Dumpster Rental — Alexandria & Cenla", description: "20, 30, and 40-yard roll-off dumpster rental across Central Louisiana. Transparent pricing, fast delivery for job sites, demolition, and major cleanouts. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Roll-Off Dumpsters" titleAccent="for Every Project" sub="Convenient, reliable dumpster rentals for commercial job sites, demolition projects, renovations, and large-scale cleanouts across Central Louisiana." media="/hero-dumpster.mp4" poster="/images/hero-dumpster.webp" />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(88px, 14vh, 176px) 24px" }}>
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
      <ProcessSteps tag="Simple Process" title="How Roll-Off Rental Works" sub="Call, and we handle the rest — fast delivery, transparent pricing, clean pickup." steps={[
        { t: "Call to Reserve", d: "Call Chris with your job and location. We help you size the right roll-off — 20, 30, or 40-yard." },
        { t: "Fast Delivery", d: "We drop the container where you need it, often same day, placed for easy loading." },
        { t: "Fill It", d: "Load to the water line over your rental period. Transparent pricing — no surprise fees." },
        { t: "We Haul It", d: "Call when you're done and we haul it off and dispose of the debris properly." },
      ]} />
      <CTA title="Need a Dumpster on Your Job Site?" sub="Call Chris directly at (318) 704-6308 — we'll get a roll-off delivered, often same day." btn="Call to Reserve a Roll-Off" />
    </>
  );
}

export function GalleryPage() {
  useSEO({ title: "Project Gallery", description: "View our recent commercial, custom home, and roofing projects across Central Louisiana." });
  // Edit captions/categories here. Keep them truthful — category only, no fabricated project locations.
  const items = [
    { src: "/images/commercial-pour-night.webp", alt: "Night concrete pour on a Magnolia commercial project", cat: "Commercial" },
    { src: "/images/finished-home.webp", alt: "Finished custom brick home built by Magnolia State Construction", cat: "Custom Home" },
    { src: "/images/commercial-interior.webp", alt: "Commercial interior build-out with terrazzo flooring", cat: "Commercial Build-Out" },
    { src: "/images/custom-home-greatroom.webp", alt: "Open-concept great room in a Magnolia custom home", cat: "Custom Home" },
    { src: "/images/commercial-breakroom.webp", alt: "Commercial break-room cabinetry and stone countertops", cat: "Commercial Interior" },
    { src: "/images/kitchen-marble.webp", alt: "Custom kitchen with marble island and gold lighting", cat: "Custom Kitchen" },
    { src: "/images/foyer-staircase.webp", alt: "Two-story foyer with arched front door", cat: "Custom Home" },
    { src: "/images/roof-framing.webp", alt: "Roof framing and decking on a Magnolia project", cat: "Roofing" },
  ];

  const [active, setActive] = useState(null);
  const close = () => setActive(null);
  const go = (dir) => setActive(a => (a + dir + items.length) % items.length);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") setActive(a => (a + 1) % items.length);
      else if (e.key === "ArrowLeft") setActive(a => (a - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [active, items.length]);

  const navBtn = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 26, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };

  return (
    <>
      <PageHero tag="Our Work" title="Project" titleAccent="Gallery" sub="Commercial, custom home, and roofing projects across Central Louisiana — structural foundations, full envelopes, and finished builds." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(88px, 14vh, 176px) 24px" }}>
        <div className="bento-grid" style={{ maxWidth: 1200, margin: "0 auto", gap: 24, gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}>
          {items.map((it, i) => (
            <Fade key={i} delay={(i % 4) * 0.1} className="bento-gallery-item">
              <button onClick={() => setActive(i)} aria-label={`Enlarge: ${it.alt}`} style={{ display: "block", width: "100%", padding: 0, border: "none", background: "none", cursor: "pointer" }}>
                <div className="sc" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/10", background: "var(--bg-elevated)", border: "1px solid var(--border-light)" }}>
                  <img src={it.src} alt={it.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }} loading="lazy" onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
                </div>
              </button>
              <div style={{ marginTop: 14, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--text-tertiary)" }}>{it.cat} · Central Louisiana</div>
            </Fade>
          ))}
        </div>
      </section>

      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label="Project photo" onClick={close} style={{ position: "fixed", inset: 0, zIndex: 2000, background: "rgba(8,12,9,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 5vw, 64px)" }}>
          <button onClick={close} aria-label="Close" style={{ position: "absolute", top: 20, right: 24, width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><I.X /></button>
          <button onClick={e => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" style={{ ...navBtn, left: 16 }}>‹</button>
          <figure onClick={e => e.stopPropagation()} style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 1100 }}>
            <img src={items[active].src} alt={items[active].alt} style={{ maxWidth: "100%", maxHeight: "78vh", objectFit: "contain", borderRadius: 8, display: "block" }} />
            <figcaption style={{ color: "rgba(255,255,255,0.82)", marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase" }}>{items[active].cat} · Central Louisiana</figcaption>
          </figure>
          <button onClick={e => { e.stopPropagation(); go(1); }} aria-label="Next photo" style={{ ...navBtn, right: 16 }}>›</button>
        </div>
      )}

      <CTA title="Like What You See?" sub="Let's build something worth showing off. Talk to Chris about your commercial or custom project." btn="Call About Your Project" />
    </>
  );
}
