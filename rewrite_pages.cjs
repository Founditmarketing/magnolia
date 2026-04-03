const fs = require('fs');

let indexStr = fs.readFileSync('src/pages/index.jsx', 'utf8');
let addStr = fs.readFileSync('src/pages/AdditionalPages.jsx', 'utf8');

// 1. Add useSEO import automatically to the top of both files
indexStr = indexStr.replace('import { Fade, Link, I, Counter } from "../utils";', 'import { Fade, Link, I, Counter, useSEO } from "../utils";');
addStr = addStr.replace('import { Link, I, Fade } from "../utils";', 'import { Link, I, Fade, useSEO } from "../utils";');

// 2. Inject useSEO into HomePage
indexStr = indexStr.replace('export function HomePage() {\r\n  const [path, setPath]', 'export function HomePage() {\n  useSEO({ title: "General Contractor", description: "ISNetworld Certified commercial and industrial construction company serving Central Louisiana." });\n  const [path, setPath]');
indexStr = indexStr.replace('export function HomePage() {\n  const [path, setPath]', 'export function HomePage() {\n  useSEO({ title: "General Contractor", description: "ISNetworld Certified commercial and industrial construction company serving Central Louisiana." });\n  const [path, setPath]');

// 3. Replace HomePage custom Hero with PageHero right-side media
const oldHeroRegex = /<section style=\{\{ minHeight: "100vh"[\s\S]*?<\/section>/;
const newHero = `      <PageHero 
        title={<>Commercial &<br/>Industrial<br/></>} 
        titleAccent="Construction" 
        sub="ISNetworld Certified general contractor delivering uncompromising quality across Louisiana."
        media="/images/warehouse_finished_1775169110438.png"
      >
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Btn to="/commercial">Explore Services</Btn>
          <Btn to="/contact" variant="outlineDark">Request a Quote</Btn>
        </div>
      </PageHero>`;
indexStr = indexStr.replace(oldHeroRegex, newHero);

// 4. Testimonials for HomePage
const newTestimonials = `
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
`;
indexStr = indexStr.replace(/<CTA title="Ready to Discuss Your Next Project\?"/g, newTestimonials + '\n      <CTA title="Ready to Discuss Your Next Project?"');

// 5. Build Gallery descriptions
indexStr = indexStr.replace('export function GalleryPage() {', 'export function GalleryPage() {\n  useSEO({ title: "Project Gallery", description: "View our recent commercial and industrial construction projects." });');

const galleryCardSearch = `<div className="sc glass" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/10", background: "var(--bg-elevated)", border: "1px solid var(--border-light)" }}>
                <img src={src} alt={\`Project \${i + 1}\`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }} loading="lazy" onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
              </div>`;

const galleryCardReplace = `
              <div className="sc glass" style={{ borderRadius: 16, overflow: "hidden", background: "var(--bg-elevated)", border: "1px solid var(--border-light)", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                  <img src={src} alt={\`Project \${i + 1}\`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }} loading="lazy" onMouseOver={e => e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e => e.currentTarget.style.transform="scale(1)"}/>
                </div>
                <div style={{ padding: "20px 24px", background: "#FFFFFF", borderTop: "1px solid var(--border-light)" }}>
                  <div style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                    {i === 0 ? "Delta Distribution Center" : i === 1 ? "Alexandria Industrial Park" : i === 2 ? "Cenla Medical Complex" : "Port Authority Expansion"}
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)", fontSize: 14 }}>
                    {i === 0 ? "$4.2M Foundation & Steel Assembly" : i === 1 ? "110,000 sq ft Manufacturing Facility" : i === 2 ? "Multi-phase Commercial Build" : "Heavy Industrial Concrete Framework"}
                  </div>
                </div>
              </div>`;
indexStr = indexStr.replace(galleryCardSearch, galleryCardReplace);

// 6. Add useSEO hooks to AdditionalPages
addStr = addStr.replace('export function CommercialPage() {', 'export function CommercialPage() {\n  useSEO({ title: "Commercial Construction", description: "Ground-up commercial builds and renovations." });');
addStr = addStr.replace('export function IndustrialPage() {', 'export function IndustrialPage() {\n  useSEO({ title: "Industrial Services", description: "Heavy industrial construction and turnarounds." });');
addStr = addStr.replace('export function DumpstersPage() {', 'export function DumpstersPage() {\n  useSEO({ title: "Dumpster Rentals", description: "Roll-off dumpster rentals for jobsites." });');
addStr = addStr.replace('export function PricingPage() {', 'export function PricingPage() {\n  useSEO({ title: "Dumpster Pricing", description: "Transparent pricing for roll-off dumpsters." });');
addStr = addStr.replace('export function AboutPage() {', 'export function AboutPage() {\n  useSEO({ title: "About Us", description: "Our 15-year history building Central Louisiana." });');
addStr = addStr.replace('export function ContactPage() {', 'export function ContactPage() {\n  useSEO({ title: "Contact", description: "Get a quote for your next project." });');

// 7. Inject Media into Service Pages
addStr = addStr.replace('title="Commercial Construction" titleAccent="Ground-Up & Renovations" sub="From permits to punch list, we manage commercial projects with total precision.">', 'title="Commercial Construction" titleAccent="Ground-Up & Renovations" sub="From permits to punch list, we manage commercial projects with total precision." media="/images/construction_brick_1775169082069.png">');
addStr = addStr.replace('title="Roll-Off Dumpsters" titleAccent="For Your Site" sub="Fast 24-48 hour delivery on 20, 30, and 40-yard containers.">', 'title="Roll-Off Dumpsters" titleAccent="For Your Site" sub="Fast 24-48 hour delivery on 20, 30, and 40-yard containers." media="/images/workers_blueprints_1775169124334.png">');
addStr = addStr.replace('title="Industrial Maintenance" titleAccent="& Plant Services" sub="ISNetworld-certified contractor equipped for heavy industry compliance.">', 'title="Industrial Maintenance" titleAccent="& Plant Services" sub="ISNetworld-certified contractor equipped for heavy industry compliance." media="/images/industrial_project_1775169098001.png">');

fs.writeFileSync('src/pages/index.jsx', indexStr);
fs.writeFileSync('src/pages/AdditionalPages.jsx', addStr);

// 8. Darken Body Text in index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace('--text-secondary: #475569;', '--text-secondary: #334155;');
fs.writeFileSync('src/index.css', css);
