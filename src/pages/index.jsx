import { useState, useEffect, useRef } from "react";
import { Fade, Link, I, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, Testimonials, ProcessSteps, AssetBadge, ISNBadge } from "../components/Shared";

const FAQ_ITEMS = [
  { q: "What areas do you serve?", a: "Magnolia State Construction serves Alexandria, Pineville, and all of Central Louisiana." },
  { q: "Are you licensed and insured?", a: "Yes. We're a licensed Louisiana contractor carrying comprehensive general liability and workers' compensation coverage that meets or exceeds commercial site requirements — and we're ISNetworld-certified and a member of the Louisiana Associated General Contractors (LAGC)." },
  { q: "Do you take on small repairs or handyman work?", a: "No. We focus on full builds and major projects — ground-up commercial, custom homes, complete roofing systems, demolition, and roll-off dumpster rental. We don't do sheetrock patches, door swaps, fence repair, or general handyman jobs." },
  { q: "Do you handle both commercial and residential roofing?", a: "Yes — complete roof systems for both. Commercial flat and low-slope systems (TPO, EPDM, modified bitumen) and full residential systems (standing-seam metal and architectural shingle). We install whole systems, not patch jobs." },
  { q: "What size roll-off dumpster do I need?", a: "We offer 20, 30, and 40-yard roll-offs — roughly 6, 9, and 12 pickup-truck loads. A 20-yard suits smaller projects and cleanouts; a 40-yard handles major construction and demolition. Call and we'll size it for your job." },
  { q: "How do I get an estimate?", a: "Contact us at (318) 704-6308 to talk through your project scope and timeline. No call center, no runaround." },
];

// Real Google reviews (verbatim) — aggregate 4.7 across 23 reviews as of 2026-06.
const RATING = { value: 4.7, count: 23 };
const REVIEWS_URL = "https://share.google/B8INfhtP4WqrgQICZ";
const REVIEWS = [
  { author: "Avery Bandy", role: "Custom Home Build · Google review", rating: 5, text: "Chris built our custom home! Was a great communicator and executed all our dreams. Will call Chris again to build our next home!" },
  { author: "Christopher Johns", role: "Construction Client · Google review", rating: 5, text: "Chris and his crew do great work! They were quick, accommodating, and had constant communication throughout our project. Looking forward to working with Magnolia State Construction again!" },
  { author: "Tatiana Keizman", role: "Commercial & Residential · Google review", rating: 5, text: "I highly recommend Magnolia State Construction for any upcoming residential or commercial projects. Chris, the owner, runs a team that is professional, respectful, and truly committed to quality." },
];

export function HomePage() {
  useSEO({ title: "Commercial Construction, Custom Homes, Roofing & Dumpsters", shareTitle: "Magnolia State Construction — Commercial & Custom Builders | Central Louisiana", description: "Central Louisiana's commercial and custom builder. Ground-up commercial construction, custom homes, full roofing systems, and roll-off dumpster rental across Cenla. ISN-certified.", faq: FAQ_ITEMS, rating: RATING, reviews: REVIEWS });

  const WHY = [
    { t: "One accountable builder", d: "Commercial, custom homes, roofing, and roll-off dumpsters — all under one company, one point of contact." },
    { t: "15+ years across Cenla", d: "Built throughout Alexandria, Pineville, and Central Louisiana — we know the codes, the ground, and the weather." },
    { t: "Real project management", d: "Schedules kept, budgets respected, and direct updates from the team running your build — no call center, no runaround." },
    { t: "Licensed, insured & ISN-certified", d: "Serious builds, done on record to commercial safety and quality standards." },
  ];
  const WORK = [
    { src: "/images/kitchen-marble.webp", alt: "Custom home kitchen with marble waterfall island built by Magnolia State Construction", cat: "Custom Home · Kitchen" },
    { src: "/images/commercial-interior.webp", alt: "Finished commercial interior build-out in Central Louisiana", cat: "Commercial · Build-Out" },
    { src: "/images/hero-customhome.webp", alt: "Custom home foyer and staircase built by Magnolia State Construction", cat: "Custom Home · Entry" },
  ];

  return (
    <>
      {/* 1. Hero — fullscreen commercial video reel (public/hero-reel.mp4 = 4 trimmed AI clips stitched).
            The white fixed header overlays the top; the reel fills the viewport; a white statement +
            one CTA sit at the lower-left over a dark scrim. Reduced-motion shows the poster (global
            .hero-video rule). Swap the reel by replacing /hero-reel.mp4 (and the poster img). */}
      <section className="hero-cine">
        <img src="/images/hero-build-3.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <video className="hero-video" ref={v => { if (v) v.muted = true; }} autoPlay loop muted playsInline poster="/images/hero-build-3.webp" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src="/hero-reel.mp4" type="video/mp4" />
        </video>
        <div className="hero-cine-scrim" aria-hidden="true" />
        <div className="hero-cine-content">
          <Fade delay={0.05}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 28, height: 2, background: "#9BC9AC", flexShrink: 0 }} aria-hidden="true" />
              <span style={{ color: "#9BC9AC", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", textShadow: "0 1px 12px rgba(8,12,9,0.75)" }}>Commercial · Custom Homes · Roofing — Central Louisiana</span>
            </div>
            <h1 style={{ color: "#FCFCFA", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(40px, 6.4vw, 86px)", letterSpacing: "-0.8px", lineHeight: 1.06, textWrap: "balance", margin: "0 0 22px", maxWidth: 880, textShadow: "0 2px 30px rgba(8,12,9,0.5)" }}>
              We build the ones that <span style={{ color: "#9BC9AC" }}>last</span>.
            </h1>
            <p style={{ color: "rgba(252,252,250,0.92)", fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 21px)", lineHeight: 1.6, margin: "0 0 32px", maxWidth: 560, textShadow: "0 1px 18px rgba(8,12,9,0.6)" }}>
              Ground-up commercial construction, custom homes, and complete roofing systems across Central Louisiana — one accountable builder, permits to punch list.
            </p>
            <Btn to="/contact" className="hero-stack-cta" style={{ padding: "17px 38px", fontSize: 17, justifyContent: "center" }}><span>Start your project</span> <I.Arrow /></Btn>
          </Fade>
        </div>
        <div className="hero-cine-scroll" aria-hidden="true"><span style={{ display: "inline-flex", transform: "scale(1.7)" }}><I.ChevDown /></span></div>
      </section>

      {/* 2. Services — Track 1: the premium construction trio (the star) */}
      <section style={{ background: "var(--bg-dark)", padding: "clamp(96px, 14vh, 168px) 24px clamp(72px, 10vh, 120px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Fade>
            <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 14, textAlign: "center" }}>What We Build</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(30px, 4.5vw, 48px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: "0 0 10px", textAlign: "center" }}>Full builds and major projects.</h2>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, margin: "0 auto", maxWidth: 560, textAlign: "center" }}>Commercial, custom homes &amp; complete roofing systems — one accountable builder across Central Louisiana.</p>
          </Fade>
          <div className="svc-trio" style={{ marginTop: "clamp(40px, 5vw, 56px)" }}>
            {[
              { n: "Commercial Construction", to: "/commercial", icon: <I.Building />, d: "Ground-up commercial buildings — permits to punch list, on commercial safety and quality standards." },
              { n: "Residential / Custom Homes", to: "/residential", icon: <I.Home />, d: "Custom homes built start to finish, with one accountable builder answering for the whole job." },
              { n: "Roofing Systems", to: "/roofing", icon: <I.Roof />, d: "Complete commercial & residential roof systems — standing-seam, shingle, TPO. Never patch jobs." },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.08} style={{ height: "100%" }}>
                <Link to={s.to} className="sc service-tile" aria-label={s.n} style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 16, padding: "clamp(30px, 3.4vw, 40px)", textDecoration: "none" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(22px, 3vw, 30px)" }}>
                    <span style={{ width: 56, height: 56, borderRadius: 14, background: "var(--primary-bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>
                      <span style={{ display: "inline-flex", transform: "scale(1.2)" }}>{s.icon}</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 24, color: "var(--border-light)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{`0${i + 1}`}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: 0.5, color: "var(--text-primary)", margin: "0 0 12px", lineHeight: 1.25 }}>{s.n}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.62, color: "var(--text-secondary)", margin: "0 0 22px", maxWidth: "34ch" }}>{s.d}</p>
                  <span style={{ marginTop: "auto", color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>Learn more <I.Arrow /></span>
                </Link>
              </Fade>
            ))}
          </div>

          {/* Editorial divider — narrates the category shift before the utilitarian band */}
          <Fade delay={0.04}>
            <div style={{ marginTop: "clamp(48px, 6vw, 72px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <span style={{ width: 28, height: 2, background: "var(--primary)", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 2.4, textTransform: "uppercase" }}>Beyond the build</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(24px, 3.2vw, 36px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: 0, maxWidth: 640 }}>On the jobsite.</h3>
            </div>
          </Fade>
        </div>
      </section>

      {/* 2a. Services — Track 2: roll-off / site logistics, a separate full-bleed utilitarian band */}
      <section className="fullbleed-break" style={{ position: "relative", display: "flex", alignItems: "center", minHeight: "clamp(360px, 46vh, 460px)", overflow: "hidden", padding: "clamp(56px, 9vh, 92px) 24px" }}>
        <img src="/images/hero-dumpster.webp" alt="Roll-off dumpster truck delivering a container on a Central Louisiana jobsite" loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div className="fullbleed-overlay" aria-hidden="true" style={{ zIndex: 1 }} />
        {/* Top-right corner marker for the roll-off / dumpster service (clean line icon, not clip-art) */}
        <div aria-hidden="true" style={{ position: "absolute", top: "clamp(20px, 4vw, 34px)", right: "clamp(20px, 4vw, 34px)", zIndex: 2, width: "clamp(52px, 7vw, 64px)", height: "clamp(52px, 7vw, 64px)", padding: 0, borderRadius: 16, background: "rgba(8,20,12,0.42)", border: "1px solid rgba(252,252,250,0.28)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FCFCFA", boxShadow: "0 10px 26px -10px rgba(0,0,0,0.5)" }}>
          <span style={{ display: "inline-flex", transform: "scale(1.35)" }}><I.Truck /></span>
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1180, width: "100%", margin: "0 auto" }}>
          <Fade>
            <div style={{ maxWidth: 580 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span style={{ width: 28, height: 2, background: "#86B595", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ color: "#86B595", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>Site Logistics</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: -0.4, lineHeight: 1.1, color: "#FCFCFA", margin: "0 0 14px" }}>Roll-off dumpsters, delivered across Cenla.</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.62, color: "rgba(252,252,250,0.86)", margin: "0 0 30px", maxWidth: 520 }}>Complete site logistics — from demolition and site clearing to roll-off container service that keeps your jobsite moving and clear.</p>
              <Link to="/dumpsters" style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#FCFCFA", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 1.4, textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(252,252,250,0.45)", paddingBottom: 5 }}>Explore Site Logistics <I.Arrow /></Link>
            </div>
          </Fade>
        </div>
      </section>

      {/* 2b. Recent work — clean photos of real builds, links to the gallery */}
      <section style={{ background: "var(--bg-surface)", padding: "clamp(88px, 13vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: "clamp(32px, 4vw, 48px)" }}>
              <div>
                <div style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Recent Work</div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(30px, 4.5vw, 48px)", letterSpacing: -0.4, lineHeight: 1.12, color: "var(--text-primary)", margin: 0 }}>Built across Central Louisiana.</h2>
              </div>
              <Link to="/gallery" style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>View the gallery <I.Arrow /></Link>
            </div>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {WORK.map((w, i) => (
              <Fade key={i} delay={i * 0.08}>
                <Link to="/gallery" className="service-card" aria-label={`${w.cat} — view gallery`} style={{ display: "block", position: "relative", aspectRatio: "4 / 3", borderRadius: 14, overflow: "hidden", textDecoration: "none" }}>
                  <img src={w.src} alt={w.alt} className="service-card-img" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "55%", background: "linear-gradient(to top, rgba(8,20,12,0.82), rgba(8,20,12,0))" }} aria-hidden="true" />
                  <span style={{ position: "absolute", left: 16, bottom: 14, color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase" }}>{w.cat}</span>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust strip — credentials at a glance */}
      <section style={{ background: "var(--bg-elevated)", padding: "clamp(36px, 6vh, 56px) 24px", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "22px 36px" }}>
          <AssetBadge chip src="/assets/isn-logo.png" alt="ISNetworld Certified" size={42} fallback={<span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><ISNBadge size={38} /><span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 0.5, color: "var(--text-primary)" }}>ISNetworld Certified</span></span>} />
          <AssetBadge chip src="/assets/lagc-logo.png" alt="Louisiana Associated General Contractors member" size={42} fallback={<span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 0.5, color: "var(--text-primary)" }}>LAGC Member</span>} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 0.5, color: "var(--text-primary)" }}>Licensed &amp; Insured</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 0.5, color: "var(--text-primary)" }}>15+ Years in Cenla</span>
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>{RATING.value} ★</span>
            <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 14 }}>{RATING.count} Google reviews</span>
          </a>
        </div>
      </section>

      {/* 3b. Why Magnolia — dark editorial band: statement beside a numbered list */}
      <section style={{ background: "var(--text-primary)", padding: "clamp(96px, 14vh, 168px) 24px" }}>
        <div className="why-split" style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Fade>
            <div>
              <div style={{ color: "#86B595", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 18 }}>Why Magnolia</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.07, letterSpacing: -0.5, color: "#FCFCFA", margin: "0 0 20px" }}>One builder who answers for the whole job.</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 1.6vw, 18px)", lineHeight: 1.65, color: "rgba(252,252,250,0.72)", margin: "0 0 32px", maxWidth: 400 }}>From permits to punch list, one team stays accountable. No subcontracted runaround, no call center.</p>
              <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--bg-dark)", color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: 0.5, padding: "16px 32px", borderRadius: 8, textDecoration: "none" }}>Contact Us <I.Arrow /></Link>
            </div>
          </Fade>
          <Fade delay={0.12}>
            <div className="why-list">
              {WHY.map((w, i) => (
                <div key={i} className="why-item" style={{ display: "flex", gap: "clamp(16px, 2vw, 30px)", alignItems: "baseline" }}>
                  <span style={{ color: "#86B595", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 1, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(16px, 1.7vw, 18px)", letterSpacing: 0.2, color: "#FCFCFA", margin: "0 0 7px" }}>{w.t}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "rgba(252,252,250,0.7)", margin: 0, maxWidth: 520 }}>{w.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* 4. Social proof — real Google reviews */}
      <Testimonials rating={RATING.value} count={RATING.count} items={REVIEWS} reviewsUrl={REVIEWS_URL} />
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
        { t: "Get in Touch", d: "Contact us to start, and we'll walk the site and talk scope, budget, and timeline — no call center, no runaround." },
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
      <PageHero tag="Roofing Systems" title="Commercial & Residential" titleAccent="Roof Systems" sub="Complete roof systems for Central Louisiana — engineered, torn off to deck, and installed new. Commercial flat-roof systems and full residential roofs. We install whole systems, not patch jobs." media="/images/roof-hero.webp" />
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
      <CTA title="Specifying a Roof System?" sub="Contact us about your commercial or residential roof — a real scope from an ISN-certified contractor, no call center." />
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
        { t: "Reserve a Roll-Off", d: "Contact us with your job and location and we'll help you size the right roll-off — 20, 30, or 40-yard." },
        { t: "Fast Delivery", d: "We drop the container where you need it, often same day, placed for easy loading." },
        { t: "Fill It", d: "Load to the water line over your rental period. Transparent pricing — no surprise fees." },
        { t: "We Haul It", d: "Call when you're done and we haul it off and dispose of the debris properly." },
      ]} />
      <CTA title="Need a Dumpster on Your Job Site?" sub="Contact us at (318) 704-6308 and we'll get a roll-off delivered, often same day." />
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
  const tx = useRef(0);
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

  const navBtn = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", color: "#fff", fontSize: 26, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };

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
          <button onClick={close} aria-label="Close" style={{ position: "absolute", top: "max(20px, env(safe-area-inset-top))", right: "max(16px, env(safe-area-inset-right))", width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}><I.X /></button>
          <button onClick={e => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" style={{ ...navBtn, left: 16 }}>‹</button>
          <figure onClick={e => e.stopPropagation()} onTouchStart={e => { tx.current = e.touches[0].clientX; }} onTouchEnd={e => { const dx = e.changedTouches[0].clientX - tx.current; if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1); }} style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 1100, touchAction: "pan-y" }}>
            <img src={items[active].src} alt={items[active].alt} style={{ maxWidth: "100%", maxHeight: "78vh", objectFit: "contain", borderRadius: 8, display: "block" }} />
            <figcaption style={{ color: "rgba(255,255,255,0.82)", marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase" }}>{items[active].cat} · Central Louisiana</figcaption>
          </figure>
          <button onClick={e => { e.stopPropagation(); go(1); }} aria-label="Next photo" style={{ ...navBtn, right: 16 }}>›</button>
        </div>
      )}

      <CTA title="Like What You See?" sub="Let's build something worth showing off. Contact us about your commercial or custom project." />
    </>
  );
}
