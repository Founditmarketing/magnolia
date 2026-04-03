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
      <PageHero media="/hero-video-3.mp4">
        {/* The Direct-Response Interactive Hero */}
        <Fade delay={0.1}>
          <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 24 }}>Licensed & Insured</div>
          <h1 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(32px, 9vw, 88px)", letterSpacing: -1, margin: 0, lineHeight: 1.05, wordBreak: "break-word", overflowWrap: "break-word", hyphens: "auto" }}>
            Careful Craftsmanship.<br/>
            <span style={{ color: "var(--primary)" }}>Distinctive Spaces.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: "clamp(18px, 3vw, 24px)", lineHeight: 1.5, marginTop: 24, maxWidth: 800 }}>
            From extensive commercial build-outs to meticulous residential woodworking. Building Central Louisiana with absolute precision for 15+ years.
          </p>
        </Fade>
        
        <Fade delay={0.3}>
          <div style={{ marginTop: 48, background: "#ffffff", padding: "clamp(24px, 4vw, 32px)", borderRadius: 16, border: "2px solid var(--border-light)", boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginBottom: 24 }}>Explore Our Expertise</h3>
            <OptionBtn>Light Commercial Builds</OptionBtn>
            <OptionBtn>Custom Cabinets & Trim</OptionBtn>
            <OptionBtn>Exteriors & Roofing</OptionBtn>
            <OptionBtn>I just need roll-off dumpsters</OptionBtn>
          </div>
        </Fade>
      </PageHero>

      {/* Trust Snapshot Strip */}
      <section style={{ background: "var(--bg-elevated)", padding: "40px 24px", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, textAlign: "center", color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, textTransform: "uppercase", opacity: 0.8 }}>
          <div>15+ Years Building LA</div>
          <div>Careful Craftsmanship</div>
          <div>Rich Details</div>
          <div>Built For You</div>
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64, alignItems: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(32px, 8vw, 64px)", lineHeight: 1.1, margin: "0 0 32px", overflowWrap: "break-word" }}>
              Spaces you can be <span style={{ color: "var(--primary)" }}>incredibly</span> proud of.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>The Magnolia Standard</p>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.6, margin: "0 0 24px" }}>At Magnolia State Construction, we believe that whether you’re coming home or opening your doors for the day, the architecture should inspire exactly what you stand for.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.6, margin: "0 0 24px" }}>Serving both residential and commercial clients, we bring rich details and careful craftsmanship to every project. We don't just build walls; we engineer environments.</p>
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 700, lineHeight: 1.6, margin: 0 }}>From managing complex structural supply chains to aligning multiple subcontractors seamlessly, we protect your timeline and your vision.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0", background: "var(--bg-dark)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", width: "100%" }}>
          <Fade delay={0.1} style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", padding: "clamp(40px, 8vw, 80px) 24px", overflow: "hidden" }}>
            <Parallax speed={0.15} style={{ position: "absolute", inset: 0, width: "100%", height: "120%", zIndex: 0, top: "-10%" }}>
              <img src="/images/industrial_project_1775169098001.png" alt="Commercial Base" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Parallax>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0) 100%)", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, color: "#fff", maxWidth: 1000, margin: "0 auto", width: "100%" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Solving Complex Logistics</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 8vw, 64px)", fontWeight: 600, margin: "0 0 24px", lineHeight: 1.1, overflowWrap: "break-word" }}>Commercial Build-outs &<br/><span style={{ color: "var(--primary)", fontWeight: 400 }}>Structural Envelopes</span></h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, maxWidth: 600, opacity: 0.9, lineHeight: 1.6, margin: 0 }}>We engineer environments that withstand the rigorous reality of commercial wear while maintaining stunning, magazine-quality aesthetics.</p>
            </div>
          </Fade>
          <Fade delay={0.2} style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "flex-end", padding: "clamp(40px, 8vw, 80px) 24px", overflow: "hidden" }}>
            <Parallax speed={0.15} style={{ position: "absolute", inset: 0, width: "100%", height: "120%", zIndex: 0, top: "-10%" }}>
              <img src="/images/warehouse_finished_1775169110438.png" alt="Residential Trim" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Parallax>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0) 100%)", zIndex: 1 }} />
            <div style={{ position: "relative", zIndex: 2, color: "#fff", maxWidth: 1000, margin: "0 auto", width: "100%" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Obsessive Detailing</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 8vw, 64px)", fontWeight: 600, margin: "0 0 24px", lineHeight: 1.1, overflowWrap: "break-word" }}>Premium Woodworking &<br/><span style={{ color: "var(--primary)", fontWeight: 400 }}>Custom Residential</span></h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, maxWidth: 600, opacity: 0.9, lineHeight: 1.6, margin: 0 }}>Rich architectural trim work, custom cabinetry installations, and premium roofing solutions executed with immaculate precision.</p>
            </div>
          </Fade>
          <Fade delay={0.3} style={{ position: "relative", minHeight: "40vh", display: "flex", alignItems: "flex-end", padding: "clamp(40px, 8vw, 80px) 24px", background: "var(--bg-elevated)" }}>
            <div style={{ position: "relative", zIndex: 2, color: "var(--text-primary)", maxWidth: 1000, margin: "0 auto", width: "100%" }}>
              <div style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Rapid Site Services</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px, 7vw, 48px)", fontWeight: 600, margin: "0 0 24px", lineHeight: 1.1, overflowWrap: "break-word" }}>Professional Roll-off Dumpsters</h3>
              <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 18, maxWidth: 600, lineHeight: 1.6, margin: 0 }}>Fast 24-48 hr deliveries on 20, 30, and 40-yard containers. Keeping active architectural and build sites completely clear and compliant.</p>
            </div>
          </Fade>
        </div>
      </section>

      <section style={{ background: "var(--bg-surface)", padding: "clamp(60px, 10vh, 160px) 24px", position: "relative" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64, alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(32px, 8vw, 64px)", lineHeight: 1.1, margin: 0, overflowWrap: "break-word" }}>Uncompromising<br/><span style={{ color: "var(--primary)" }}>Execution.</span></h2>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 32px" }}>We execute strictly to the architectural blueprints.</p>
            <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 24, lineHeight: 1.6, margin: "0 0 40px" }}>Our teams obsess over the transition of every material, color, and texture, delivering an undeniable sense of permanence.</p>
            
            <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 700, lineHeight: 1.6, margin: "0 0 16px" }}>From welcoming discerning guests to impressing commercial clients, we engineer spaces that command respect.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-elevated)", padding: "clamp(60px, 10vh, 160px) 24px", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(32px, 8vw, 64px)", textAlign: "center", margin: "0 0 60px", overflowWrap: "break-word" }}>The standard of trust.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            <Fade delay={0.1} style={{ padding: 40, background: "#fff", border: "1px solid var(--border-light)", borderTop: "4px solid var(--primary)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ color: "#F59E0B", fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--text-secondary)" }}>Verified Google Review (4.7-Star)</div>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 24 }}>"Chris and his crew were extremely professional from day one. Communication was clear throughout the entire bathroom and laundry room remodel. The quality of work is outstanding."</p>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>Recent Client</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-tertiary)", marginTop: 4 }}>Residential Remodel</div>
            </Fade>
            <Fade delay={0.2} style={{ padding: 40, background: "#fff", border: "1px solid var(--border-light)", borderTop: "4px solid var(--primary)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ color: "#F59E0B", fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--text-secondary)" }}>Verified Google Review (4.7-Star)</div>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 24 }}>"They completed our demanding commercial build-out reliably and on schedule without sacrificing an ounce of quality. Professional, polite, and respectful."</p>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>Local Business</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-tertiary)", marginTop: 4 }}>Commercial Construction</div>
            </Fade>
            <Fade delay={0.3} style={{ padding: 40, background: "#fff", border: "1px solid var(--border-light)", borderTop: "4px solid var(--primary)" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ color: "#F59E0B", fontSize: 20, letterSpacing: 2 }}>★★★★★</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--text-secondary)" }}>Verified Google Review (4.7-Star)</div>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 24 }}>"The level of detail in the custom cabinetry and trim work was beyond anything we expected. Magnolia State Construction is a highly reliable central Louisiana contractor."</p>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: 1, textTransform: "uppercase" }}>Recent Client</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-tertiary)", marginTop: 4 }}>Custom Residential</div>
            </Fade>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-dark)", padding: "clamp(60px, 10vh, 160px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(32px, 8vw, 64px)", margin: "0 0 48px", textAlign: "center", overflowWrap: "break-word" }}>Real builds.<br/>Real craftsmanship.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 24, marginBottom: 48 }}>
            {[
              { img: "/images/industrial_project_1775169098001.png", tag: "Heavy Timber Custom Additions", desc: "Delivered 2 weeks ahead of schedule." },
              { img: "/images/warehouse_finished_1775169110438.png", tag: "Complete Commercial Build-out", desc: "4,500 sq ft executed flawlessly to spec." },
              { img: "/images/workers_blueprints_1775169124334.png", tag: "Turnkey Structural Envelope", desc: "Zero safety incidents. Zero change orders." },
            ].map((p, i) => (
               <Fade key={i} delay={i * 0.15} className="sc bento-item" style={{ overflow: "hidden", background: "var(--bg-surface)", padding: 0 }}>
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

      <section style={{ background: "var(--bg-dark)", padding: "clamp(120px, 15vh, 200px) 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <Parallax speed={0.25} style={{ position: "absolute", inset: 0, width: "100%", height: "140%", zIndex: 0, top: "-20%" }}>
          <img src="/images/warehouse_finished_1775169110438.png" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} loading="lazy" alt="Parallax Background" />
        </Parallax>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p style={{ color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 16, letterSpacing: 3, fontWeight: 800, textTransform: "uppercase", margin: "0 0 24px" }}>The Output</p>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.4, margin: "0 0 24px" }}>Every material thoughtfully chosen.</p>
          <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.4, margin: "0 0 48px" }}>Every detail flawlessly executed.</p>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>Built for lasting distinction.</h2>
        </div>
      </section>

      {/* Final Minimalist CTA */}
      <section style={{ background: "var(--bg-elevated)", padding: "clamp(80px, 12vh, 160px) 24px", textAlign: "center", borderTop: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, margin: "0 0 48px" }}>Ready to discuss your vision?</h2>
          <Btn to="/contact" variant="primary" style={{ padding: "24px 64px", fontSize: 24, borderRadius: 16 }}>Contact Us</Btn>
          <p style={{ color: "var(--text-tertiary)", fontFamily: "var(--font-body)", fontSize: 18, marginTop: 24 }}>Schedule a consultation for your custom project.</p>
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
