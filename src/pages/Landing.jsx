import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, DollarSign, Calculator, ShieldCheck, PlayCircle, FileText } from "lucide-react";

const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };
const demoVideoSrc = `${import.meta.env.BASE_URL}media/model-demo.mp4`;
const demoPosterSrc = `${import.meta.env.BASE_URL}og-image.png`;

const glass = {
  background: "rgba(255,255,255,0.68)",
  border: "1px solid #d6e2ef",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
};

function Feature({ icon: Icon, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ ...glass, borderRadius: 22, padding: 26 }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(31,157,139,0.12)", display: "grid", placeItems: "center", marginBottom: 14 }}>
        <Icon size={21} color="#1f9d8b" />
      </div>
      <h3 style={{ margin: "0 0 10px", color: "#102a43", fontSize: 18 }}>{title}</h3>
      <p style={{ margin: 0, color: "#4f6478", lineHeight: 1.72, fontSize: 14 }}>{text}</p>
    </motion.div>
  );
}

export default function Landing() {
  return (
    <div style={{ fontFamily: font.sans, background: "#f5f9ff", color: "#102a43", minHeight: "100vh", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "48vw", height: "48vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(31,157,139,0.14), transparent 65%)", filter: "blur(45px)" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "52vw", height: "52vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 68%)", filter: "blur(45px)" }} />
      </div>

      <section className="hero-section" style={{ position: "relative", zIndex: 1, padding: "158px 24px 106px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div style={{ ...glass, display: "inline-flex", gap: 8, alignItems: "center", borderRadius: 999, padding: "7px 14px", color: "#1f9d8b", fontWeight: 700, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
              Tax Education Platform
            </div>
            <h1 style={{ fontFamily: font.serif, margin: "0 0 20px", fontSize: "clamp(44px, 6.8vw, 74px)", letterSpacing: "-0.025em", lineHeight: 1.02 }}>
              Tax clarity that feels
              <br />
              calm, simple, and human.
            </h1>
            <p style={{ maxWidth: 620, margin: "0 auto 34px", color: "#4f6478", lineHeight: 1.75, fontSize: "clamp(16px, 2vw, 19px)" }}>
              Learn how taxes work, model different life scenarios, and understand your real numbers before you file.
            </p>
            <div className="hero-cta" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/calculator" className="micro-press" style={{ padding: "13px 24px", borderRadius: 999, background: "#1f9d8b", color: "#fff", textDecoration: "none", fontWeight: 650, display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 2px 10px rgba(31,157,139,0.2)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 18px rgba(31,157,139,0.26)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(31,157,139,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                Start Modeling <ArrowRight size={16} />
              </Link>
              <Link to="/resources" className="micro-press" style={{ ...glass, padding: "13px 24px", borderRadius: 999, color: "#102a43", textDecoration: "none", fontWeight: 650 }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
                Browse Resources
              </Link>
            </div>
            <p style={{ marginTop: 18, color: "#6b7f93", fontSize: 12, letterSpacing: "0.01em" }}>$29.99 one-time access. Educational use only.</p>
          </motion.div>
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 76px" }}>
        <div style={{ maxWidth: 1020, margin: "0 auto", ...glass, borderRadius: 24, padding: "24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {["2024 bracket updates", "California included", "Educational, not tax advice"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "#334e68", fontWeight: 600, fontSize: 14 }}>
              <CheckCircle2 size={17} color="#1f9d8b" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="features-section" style={{ position: "relative", zIndex: 1, padding: "34px 24px 98px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <p style={{ margin: 0, color: "#1f9d8b", fontSize: 11, fontWeight: 700, letterSpacing: "0.11em", textTransform: "uppercase" }}>How It Works</p>
            <h2 style={{ fontFamily: font.serif, fontSize: "clamp(30px, 5vw, 52px)", margin: "10px 0 8px" }}>Built for learning first</h2>
            <p style={{ margin: 0, color: "#4f6478", fontSize: 17 }}>Understand taxes without overwhelm.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
            <Feature icon={Calculator} title="Scenario Modeling" text="Adjust income and instantly see how your estimated federal and state tax picture changes." />
            <Feature icon={ShieldCheck} title="Risk Awareness" text="Catch penalty and compliance risks early so your next move is informed and intentional." />
            <Feature icon={DollarSign} title="Credits and Savings" text="Surface common credits and opportunities you may be missing at your current income level." />
          </div>
        </div>
      </section>

      <section className="demo-section" style={{ position: "relative", zIndex: 1, padding: "0 24px 104px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", ...glass, borderRadius: 26, padding: 20, display: "grid", gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)", gap: 20 }}>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid #d8e3f0", background: "#fff" }}>
            <video src={demoVideoSrc} poster={demoPosterSrc} controls muted playsInline preload="metadata" style={{ width: "100%", height: "100%", minHeight: 280, display: "block", objectFit: "cover" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
            <p style={{ margin: 0, color: "#1f9d8b", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <PlayCircle size={14} />
              Product Demo
            </p>
            {[
              "Map your full tax picture in minutes.",
              "Compare life changes side-by-side.",
              "Walk into tax season with clarity.",
            ].map((point) => (
              <div key={point} style={{ ...glass, borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle2 size={16} color="#1f9d8b" />
                <span style={{ color: "#334e68", fontSize: 14 }}>{point}</span>
              </div>
            ))}
            <Link to="/calculator" className="micro-press" style={{ marginTop: 8, alignSelf: "flex-start", background: "#1f9d8b", color: "#fff", padding: "12px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 650, display: "inline-flex", gap: 8, alignItems: "center", boxShadow: "0 2px 10px rgba(31,157,139,0.2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 18px rgba(31,157,139,0.26)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(31,157,139,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Try It Now <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 1, padding: "0 24px 132px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", ...glass, borderRadius: 26, padding: "52px 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: font.serif, margin: "0 0 12px", fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "-0.02em" }}>
            Taxes can feel lighter.
          </h2>
          <p style={{ margin: "0 auto 24px", maxWidth: 620, color: "#4f6478", lineHeight: 1.7 }}>
            Learn the system once, then make better decisions all year.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link to="/resources" className="micro-press" style={{ ...glass, borderRadius: 999, padding: "12px 18px", color: "#102a43", textDecoration: "none", fontWeight: 650, display: "inline-flex", gap: 8, alignItems: "center" }}>
              <FileText size={15} />
              View Guides
            </Link>
            <Link to="/calculator" className="micro-press" style={{ background: "#1f9d8b", color: "#fff", borderRadius: 999, padding: "12px 18px", textDecoration: "none", fontWeight: 650, display: "inline-flex", gap: 8, alignItems: "center", boxShadow: "0 2px 10px rgba(31,157,139,0.2)" }}>
              Start My Scenario <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .micro-press:active {
          transform: translateY(0.5px) scale(0.985);
        }

        .micro-press:focus-visible {
          box-shadow: 0 0 0 3px rgba(31,157,139,0.2);
          outline: none;
        }

        @media (max-width: 1024px) {
          .demo-section > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-section { padding: 126px 16px 78px !important; }
          .features-section { padding: 24px 16px 80px !important; }
          .demo-section { padding: 0 16px 80px !important; }
          .hero-cta a { width: 100%; justify-content: center; max-width: 360px; }
        }
      `}</style>
    </div>
  );
}
