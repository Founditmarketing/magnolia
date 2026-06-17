import { I, Fade, useSEO } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero } from "../components/Shared";

const PHONE = "(318) 704-6308";
const TEL = "tel:3187046308";

export function PricingPage() {
  useSEO({ title: "Dumpster Pricing", description: "Transparent pricing for 20, 30, and 40-yard roll-off dumpsters across Central Louisiana. No hidden fees. Call (318) 704-6308." });
  const sizes = [
    { sz: "20-Yard", del: "$150", dump: "$450", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
    { sz: "30-Yard", del: "$150", dump: "$525", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
    { sz: "40-Yard", del: "$150", dump: "$650", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
  ];
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Dumpster" titleAccent="Pricing" sub="Transparent pricing on every roll-off rental. No hidden fees." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="bento-grid" style={{ marginBottom: 64 }}>
            {sizes.map((s, i) => (
              <Fade key={i} delay={i * 0.1} className="bento-item sc span-4" style={{ padding: "48px 32px", borderColor: i === 2 ? "var(--primary)" : "var(--border-light)" }}>
                {i === 2 && <div style={{ position: "absolute", top: 16, right: 16, background: "var(--primary-bg)", color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", padding: "6px 14px", borderRadius: 50, border: "1px solid rgba(26,90,53,0.3)" }}>Top Choice</div>}
                <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 48, marginBottom: 8 }}>{s.sz}</div>
                <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 32 }}>Roll-Off Dumpster</div>
                {[
                  ["Delivery Fee", s.del], ["Dump Fee (C&D)", s.dump], ["Fuel", s.fuel], ["Daily Rental", s.daily], ["Mixed Waste", s.mixed],
                ].map(([l, v], j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid var(--border-light)" }}>
                    <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15 }}>{l}</span>
                    <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{v}</span>
                  </div>
                ))}
                <div style={{ marginTop: 32 }}><Btn href={TEL} style={{ width: "100%", justifyContent: "center" }}>Call to Reserve This Size</Btn></div>
              </Fade>
            ))}
          </div>

          <Fade>
            <div className="glass" style={{ borderRadius: 16, padding: "48px" }}>
              <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", marginBottom: 24 }}>Important Notes</h3>
              <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 16 }}>• No oils, liquids, paints, combustibles, or tires. Tires found at landfill incur $50/tire.</p>
                <p style={{ marginBottom: 16 }}>• Fill to water level only — no materials above rim. 5-ton weight limit; excess charged per ton.</p>
                <p style={{ marginBottom: 16 }}>• DOT max: 10 tons. Door must be shut, locked, latched, and pinned before transport.</p>
                <p>• New customers: credit application required prior to setup.</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <CTA title="Ready to Reserve?" sub="Call Chris directly at (318) 704-6308. We'll confirm availability and schedule delivery — often same day." btn="Call to Reserve a Roll-Off" />
    </>
  );
}

export function AboutPage() {
  useSEO({ title: "About Us", description: "Magnolia State Construction — over 15 years building Central Louisiana. Ground-up commercial, custom homes, and roofing systems. ISN-certified, LAGC member." });
  return (
    <>
      <PageHero tag="About Us" title="Details Matter." titleAccent="Quality Lasts." sub="Magnolia State Construction is built on the principle that careful craftsmanship and precise execution aren't competing priorities — they're the same thing." />
      <TrustBar />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SH tag="Our Story" title="Over 15 Years Building Central Louisiana" />
          <div style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 64 }}>
            <p>At Magnolia State Construction, we've spent over 15 years bringing major construction projects to life across Central Louisiana. Our mission is simple: high-quality construction delivered with craftsmanship, professionalism, and care.</p>
            <p style={{ marginTop: 24 }}>Led by Chris Naalbandian, our team has grown from a local operation into the contractor trusted to deliver ground-up commercial buildings, custom homes, and complete roofing systems for owners and businesses across the region.</p>
            <p style={{ marginTop: 24 }}>From ground-up commercial buildings and custom homes to complete roofing systems and demolition, we take on full projects start to finish — and focus obsessively on the details that make a build exceptional.</p>
          </div>

          <div className="bento-grid">
            {[
              { t: "Fully Insured", d: "Comprehensive general liability and workers' compensation coverage that meets or exceeds every commercial site requirement." },
              { t: "Careful Craftsmanship", d: "Our team obsesses over the transition of materials, selecting only what stands the test of time and looks immaculate." },
              { t: "Licensed Professionals", d: "Every crew member vetted. Every job expertly managed. Every project fully documented. Zero exceptions." },
              { t: "Louisiana Associated General Contractors", d: "Chris Naalbandian is a member of LAGC (Louisiana Associated General Contractors), holding our commercial and industrial work to the state's highest construction standards." },
            ].map((c, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc span-6">
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 12 }}>{c.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{c.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Work With a Contractor You Can Trust" sub="Fully insured. Guaranteed precision. Over 15 years serving Central Louisiana." btn="Call for an Estimate" />
    </>
  );
}

export function ContactPage() {
  useSEO({ title: "Contact", description: "Call Chris directly for a commercial estimate. Full builds and major projects only — commercial construction, custom homes, roofing, and dumpster rental across Central Louisiana." });

  const details = [
    { icon: <I.Phone />, l: "Phone", v: PHONE, h: TEL },
    { icon: <I.Mail />, l: "Email", v: "chris@magnoliastateconstruction.com", h: "mailto:chris@magnoliastateconstruction.com" },
    { icon: <I.MapPin />, l: "Office", v: "706 N. 3rd St, Alexandria, LA 71301" },
  ];

  return (
    <>
      <PageHero tag="Contact" title="Let's Discuss" titleAccent="Your Project" sub="One call to Chris. No call centers, no runaround, no forms." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64 }}>

          {/* Phone-first call card */}
          <div className="glass" style={{ borderRadius: 24, padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>Call for an Estimate</div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, margin: "0 0 20px" }}>Talk to Chris directly.</h3>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, margin: "0 0 32px" }}>Full builds and major projects only — commercial construction, custom homes, roofing systems, and roll-off dumpster rental across Central Louisiana.</p>
            <a href={TEL} style={{ display: "inline-flex", alignItems: "center", gap: 14, color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 5vw, 40px)", letterSpacing: -0.5, marginBottom: 28 }}><span style={{ color: "var(--primary)", display: "inline-flex" }}><I.Phone /></span>{PHONE}</a>
            <Btn href={TEL} style={{ width: "100%", justifyContent: "center", padding: "18px" }}>Call Chris Now</Btn>
          </div>

          {/* Direct details */}
          <div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textTransform: "uppercase", margin: "0 0 32px" }}>Get in Touch Directly</h3>
            {details.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 32 }}>
                <div style={{ color: "var(--primary)", marginTop: 2, background: "var(--primary-bg)", padding: 12, borderRadius: 50, display: "inline-flex" }}>{c.icon}</div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{c.l}</div>
                  {c.h ? <a href={c.h} style={{ color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 500, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--primary)"} onMouseOut={e => e.currentTarget.style.color="var(--text-primary)"}>{c.v}</a> : <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 500 }}>{c.v}</div>}
                </div>
              </div>
            ))}

            <div className="glass" style={{ borderRadius: 20, padding: 40, marginTop: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                <div style={{ color: "var(--primary)", display: "inline-flex" }}><I.Check /></div>
                <div>
                  <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 1.5, textTransform: "uppercase" }}>Licensed & Insured</div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 13 }}>Commercial Construction & Custom Home Building</div>
                </div>
              </div>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>We carry comprehensive liability and workers' compensation coverage that meets or exceeds all commercial site requirements. Peace of mind from day one.</p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: "64px auto 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border-light)", lineHeight: 0 }}>
            <iframe title="Magnolia State Construction — 706 N. 3rd St, Alexandria, LA 71301" src="https://www.google.com/maps?q=706%20N%203rd%20St%2C%20Alexandria%2C%20LA%2071301&output=embed" width="100%" height="380" style={{ border: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export function ResidentialPage() {
  useSEO({ title: "Custom Home Building in Central Louisiana", description: "Ground-up custom home building across Central Louisiana — foundation to roof, one accountable builder. Full custom homes, not remodels or repairs. Call (318) 704-6308." });
  return (
    <>
      <PageHero tag="Custom Home Building" title="Custom" titleAccent="Homes" sub="Ground-up custom homes built across Central Louisiana. We take a lot and a set of plans and deliver a finished home — foundation to roof, framing to final trim. This is full custom home building, not remodels or repairs." />
      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SH tag="Ground-Up" title="Built From the Foundation Up" sub="We build new custom homes as a single accountable contractor — every phase managed in-house, from raw lot to final walk-through." />
          <div className="bento-grid" style={{ marginBottom: 64 }}>
            {[
              { t: "Full Custom Home Builds", d: "Ground-up, one-of-a-kind homes built to your plans on your lot. We manage every phase — sitework, foundation, framing, envelope, mechanicals, and finish — as a single accountable contractor." },
              { t: "Plans, Permits & Sitework", d: "We take you from raw lot to dried-in: site prep, slab or pier foundation, and the full permitting and code path handled in-house before a single wall goes up." },
              { t: "Framing & Structure", d: "Engineered framing, heavy-timber elements, and structural work built to spec — the bones that let a custom home stand square and quiet for generations." },
              { t: "Complete Exterior Envelope", d: "Roof system, siding, masonry, windows, and doors specified and installed as one weather-tight package designed for Central Louisiana's climate." },
              { t: "Premium Interior Finish", d: "Custom cabinetry, architectural trim, and stone surfaces — delivered as the finish stage of a complete home we built, not as standalone jobs." },
              { t: "Single-Source Builder", d: "One licensed, insured, ISNetworld-verified contractor accountable for the entire home, start to finish. Serious builds for buyers who want it done right the first time." },
            ].map((s, i) => (
              <div key={i} className="bento-item sc span-6" style={{ padding: 32 }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <Btn href={TEL}><I.Phone /> Call to Discuss Your Custom Home</Btn>
        </div>
      </section>
      <CTA title="Planning a Custom Home Build?" sub="Talk to Chris about your lot, your plans, and your timeline. Full custom homes only." btn="Call to Discuss Your Build" />
    </>
  );
}
