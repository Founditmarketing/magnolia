import { useState } from "react";
import { Link, I, Fade } from "../utils";
import { Btn, TrustBar, SH, CTA, PageHero, ISNBadge } from "../components/Shared";

export function PricingPage() {
  const sizes = [
    { sz: "20-Yard", del: "$150", dump: "$450", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
    { sz: "30-Yard", del: "$150", dump: "$525", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
    { sz: "40-Yard", del: "$150", dump: "$650", fuel: "$30", daily: "$5/day", mixed: "$300 + $100/ton" },
  ];
  return (
    <>
      <PageHero tag="Dumpster Rentals" title="Dumpster" titleAccent="Pricing" sub="Transparent pricing on every roll-off rental. No hidden fees." />
      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="bento-grid" style={{ marginBottom: 64 }}>
            {sizes.map((s, i) => (
              <Fade key={i} delay={i * 0.1} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 4" : "span 12", padding: "48px 32px", borderColor: i === 2 ? "rgba(255, 90, 0, 0.4)" : "var(--border-light)" }}>
                {i === 2 && <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255, 90, 0, 0.15)", color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", padding: "6px 14px", borderRadius: 50, border: "1px solid rgba(255, 90, 0, 0.3)" }}>Top Choice</div>}
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
                <div style={{ marginTop: 32 }}><Btn href="tel:3187046308" style={{ width: "100%", justifyContent: "center" }}>Call for Quote</Btn></div>
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
      <CTA title="Ready to Reserve?" sub="Call Chris directly or submit a quote request. We'll confirm availability and schedule delivery." btn="Reserve a Dumpster" />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero tag="About Us" title="Safety Is Not a Slogan." titleAccent="It's How We Operate." sub="Magnolia State Construction is built on the principle that safety and quality aren't competing priorities — they're the same thing." />
      <TrustBar />
      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SH tag="Our Story" title="Over 15 Years Building Central Louisiana" />
          <div style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 64 }}>
            <p>At Magnolia State Construction, we've spent over 15 years bringing construction projects to life across Central Louisiana. Our mission is simple: high-quality construction services delivered with craftsmanship, professionalism, and care.</p>
            <p style={{ marginTop: 24 }}>Led by Chris Naalbandian, our team has grown from a local operation into an ISNetworld-certified contractor trusted by industrial plants, commercial developers, and municipal projects across the region.</p>
            <p style={{ marginTop: 24 }}>Our ISN certification isn't just a badge. It represents hundreds of hours of verified safety documentation, insurance validation, and compliance auditing. When we show up to your site, we've already passed the test.</p>
          </div>

          <div className="bento-grid">
            {[
              { t: "ISNetworld Certified", d: "Third-party verified safety and compliance. Pre-qualified for the industrial and commercial sites that demand the highest standards." },
              { t: "Comprehensive Insurance", d: "General liability and workers' compensation coverage that meets or exceeds every industrial and commercial site requirement." },
              { t: "OSHA Compliant", d: "Every crew member trained. Every job has a safety plan. Every project fully documented. Zero exceptions." },
              { t: "LA Home Builders Association", d: "Chris Naalbandian is a member of the LHBA, ensuring residential work meets the highest standards of the building community." },
            ].map((c, i) => (
              <Fade key={i} delay={i * 0.05} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 6" : "span 12" }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 12 }}>{c.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{c.d}</p>
              </Fade>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Work With a Contractor You Can Trust" sub="ISN-certified. Fully insured. Over 15 years serving Central Louisiana." />
    </>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", zip: "", message: "" });
  const [sent, setSent] = useState(false);
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));
  
  const inp = (k, l, t = "text") => (
    <div style={{ marginBottom: 24 }}>
      <label style={{ display: "block", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{l}</label>
      <input type={t} value={form[k]} onChange={e => up(k, e.target.value)} style={{ width: "100%", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 16, outline: "none", boxSizing: "border-box", background: "#ffffff", color: "var(--text-primary)", transition: "border-color 0.3s" }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.1)"} />
    </div>
  );

  return (
    <>
      <PageHero tag="Contact" title="Let's Discuss" titleAccent="Your Project" sub="One call to Chris. No call centers, no runaround." />
      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64 }}>
          <div className="glass" style={{ borderRadius: 24, padding: "56px 48px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ color: "var(--primary)", marginBottom: 24, transform: "scale(2)" }}><I.Check /></div>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, textTransform: "uppercase", margin: "0 0 16px" }}>Message Sent</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18 }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textTransform: "uppercase", margin: "0 0 32px" }}>Request a Quote</h3>
                {inp("name", "Full Name")}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {inp("email", "Email", "email")}
                  {inp("phone", "Phone", "tel")}
                </div>
                {inp("zip", "Zip Code")}
                
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Service Needed</label>
                  <select value={form.service} onChange={e => up("service", e.target.value)} style={{ width: "100%", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 16, outline: "none", boxSizing: "border-box", background: "#ffffff", color: "var(--text-primary)" }}>
                    <option value="">Select a service...</option>
                    <option>Commercial Construction</option>
                    <option>Industrial Services</option>
                    <option>Dumpster Rental</option>
                    <option>Residential</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={{ display: "block", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Project Details</label>
                  <textarea value={form.message} onChange={e => up("message", e.target.value)} rows={4} style={{ width: "100%", padding: "16px 20px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8, fontFamily: "var(--font-body)", fontSize: 16, outline: "none", boxSizing: "border-box", background: "#ffffff", color: "var(--text-primary)", resize: "vertical" }} />
                </div>

                <button className="sc" onClick={() => setSent(true)} style={{ width: "100%", padding: "18px", background: "linear-gradient(135deg, var(--primary), var(--primary-hover))", color: "var(--text-primary)", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 1.5, textTransform: "uppercase", boxShadow: "0 8px 24px rgba(255, 90, 0, 0.4)" }}>Submit Quote Request</button>
              </>
            )}
          </div>
          
          <div>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textTransform: "uppercase", margin: "0 0 32px" }}>Get in Touch Directly</h3>
            {[
              { icon: <I.Phone />, l: "Phone", v: "(318) 704-6308", h: "tel:3187046308" },
              { icon: <I.Mail />, l: "Email", v: "chris@magnoliastateconstruction.com", h: "mailto:chris@magnoliastateconstruction.com" },
              { icon: <I.MapPin />, l: "Office", v: "706 N. 3rd St, Alexandria, LA 71301" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 32 }}>
                <div style={{ color: "var(--primary)", marginTop: 2, background: "rgba(255, 90, 0, 0.1)", padding: 12, borderRadius: 50 }}>{c.icon}</div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>{c.l}</div>
                  {c.h ? <a href={c.h} style={{ color: "var(--text-primary)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 500, transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color="var(--primary)"} onMouseOut={e => e.currentTarget.style.color="#fff"}>{c.v}</a> : <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 18, fontWeight: 500 }}>{c.v}</div>}
                </div>
              </div>
            ))}

            <div className="glass" style={{ borderRadius: 20, padding: 40, marginTop: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                <ISNBadge size={56} />
                <div>
                  <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 1.5, textTransform: "uppercase" }}>ISNetworld Certified</div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 13 }}>Verified Commercial & Industrial Contractor</div>
                </div>
              </div>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>Our ISN certification means we're pre-qualified for industrial and commercial sites. No waiting on paperwork — we mobilize ready to work.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ResidentialPage() {
  return (
    <>
      <PageHero tag="Residential" title="Residential" titleAccent="Services" sub="While our primary focus is commercial and industrial construction, we continue to serve select residential clients across Central Louisiana with the same quality and professionalism." />
      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 120px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 64 }}>
            <p>Led by Chris Naalbandian — a member of the Louisiana Home Builders Association and an LP BuildSmart Preferred Contractor — our residential team brings the same safety standards, quality materials, and professional project management to every home project.</p>
          </div>
          <div className="bento-grid" style={{ marginBottom: 64 }}>
            {[
              { t: "Custom Trim Work", d: "Crown molding, baseboards, window and door casings — professional trim that brings charm and structure to every room." },
              { t: "Custom Cabinetry", d: "Kitchen, bathroom, closet, and laundry cabinetry built to your exact specifications." },
              { t: "Granite Countertops", d: "Natural stone surfaces for kitchens and bathrooms. Polished, durable, and installed with expert precision." },
              { t: "Renovations", d: "From single-room upgrades to full home renovations. Each project managed with care from start to finish." },
            ].map((s, i) => (
              <div key={i} className="bento-item sc" style={{ gridColumn: window.innerWidth > 768 ? "span 6" : "span 12" }}>
                <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 12 }}>{s.t}</h3>
                <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
          <Btn to="/contact">Contact Us for Residential Work <I.Arrow /></Btn>
        </div>
      </section>
    </>
  );
}
