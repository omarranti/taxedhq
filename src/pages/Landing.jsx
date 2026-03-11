import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, DollarSign, Calculator, FileText, Check, ShieldCheck } from 'lucide-react';

const C = {
    primary: "#1B4D3E",
    primaryLight: "#2D7A5F",
    accent: "#F59E0B",
    bg: "#FAFAF8",
    surface: "#FFFFFF",
    border: "#E5E5E0",
    text: "#1A1A1A",
    textSec: "#6B6B6B",
    success: "#10B981",
    muted: "#9CA3AF"
};

const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const stagger = { show: { transition: { staggerChildren: 0.15 } } };

function Feature({ icon: Icon, title, text }) {
    return (
        <motion.div variants={fadeUp} style={{ padding: 32, background: C.surface, borderRadius: 20, border: `1px solid ${C.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: `${C.primary}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon size={24} color={C.primary} />
            </div>
            <h3 style={{ fontFamily: font.sans, fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 12 }}>{title}</h3>
            <p style={{ color: C.textSec, fontSize: 15, lineHeight: 1.6 }}>{text}</p>
        </motion.div>
    );
}

export default function Landing() {
    return (
        <div style={{ fontFamily: font.sans, background: C.bg }}>

            {/* Hero */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 24px' }}>
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle 800px at top right, ${C.primary}08, transparent), radial-gradient(circle 600px at bottom left, ${C.accent}08, transparent)`, pointerEvents: "none" }} />
                <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div initial="hidden" animate="show" variants={stagger}>

                        <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: `${C.primary}10`, borderRadius: 99, color: C.primary, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', border: `1px solid ${C.primary}25`, marginBottom: 32 }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.primary }} /> Tax Navigation CRM
                        </motion.div>

                        <motion.h1 variants={fadeUp} style={{ fontFamily: font.serif, fontSize: 'clamp(48px, 8vw, 84px)', color: C.text, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
                            Finally see where <br />
                            <span style={{ color: C.primary }}>your money really goes.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: C.textSec, lineHeight: 1.5, maxWidth: 650, margin: '0 auto 48px' }}>
                            ClearFile is not a tax filing service. It's a visual CRM that lets you navigate your tax picture across income levels, uncover hidden savings, and understand every risk — before you sit down with a pro.
                        </motion.p>

                        <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                            <Link to="/calculator" style={{ padding: '16px 36px', borderRadius: 99, background: C.primary, color: '#fff', fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, boxShadow: `0 8px 32px ${C.primary}50` }}>
                                Model My Tax Scenarios <ArrowRight size={18} />
                            </Link>
                            <Link to="/resources" style={{ padding: '16px 36px', borderRadius: 99, background: C.surface, color: C.text, border: `1px solid ${C.border}`, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                                Browse Resources
                            </Link>
                        </motion.div>

                        {/* Pricing Badge */}
                        <motion.div variants={fadeUp} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 24px', background: C.surface, borderRadius: 99, border: `1px solid ${C.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span style={{ fontFamily: font.serif, fontSize: 22, color: C.primary, fontWeight: 700 }}>$19.99</span>
                                <span style={{ fontSize: 14, color: C.textSec }}>one-time · full lifetime access</span>
                                <span style={{ padding: '3px 10px', background: `${C.success}12`, color: C.success, borderRadius: 99, fontSize: 11, fontWeight: 700, border: `1px solid ${C.success}25`, whiteSpace: 'nowrap' }}>Not a subscription</span>
                            </div>
                            <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>Less than a pizza dinner to understand your exact tax situation.</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Social Proof Bar */}
            <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '40px 24px', background: C.surface }}>
                <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontSize: 13, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', color: C.muted, marginBottom: 24 }}>Built for clarity and awareness — not filing</p>
                    <div style={{ display: 'flex', gap: 'clamp(24px, 6vw, 64px)', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.text, fontWeight: 600 }}><CheckCircle2 color={C.success} size={20} /> 2024 Tax Brackets Updated</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.text, fontWeight: 600 }}><CheckCircle2 color={C.success} size={20} /> CA State Tax Integrated</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.text, fontWeight: 600 }}><CheckCircle2 color={C.success} size={20} /> Educational — Not Tax Advice</div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="how-it-works" style={{ padding: '100px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(32px, 5vw, 48px)', color: C.text, marginBottom: 16 }}>Your Personal Tax Intelligence Platform</h2>
                        <p style={{ fontSize: 18, color: C.textSec, maxWidth: 600, margin: '0 auto' }}>Stop blindly trusting a number on a screen. ClearFile gives you the full picture — across every income level, scenario, and life change.</p>
                    </div>
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 32 }}>
                        <Feature icon={Calculator} title="Scenario Modeling" text="Drag the income slider and instantly see how a raise, a new contract, or a life change affects your effective tax rate, take-home, and bracket exposure." />
                        <Feature icon={ShieldCheck} title="Risk Identification" text="Uncover penalty risks, compliance blind spots, and costly misunderstandings before they land on your doorstep. Know what you're exposed to." />
                        <Feature icon={DollarSign} title="Benefit & Credit Discovery" text="We don't stop at what you owe. ClearFile surfaces every available reduction — EITC, Saver's Credit, HSA, IRA deductions — based on your specific numbers." />
                    </motion.div>
                </div>
            </section>

            {/* Comparison Table */}
            <section style={{ padding: '0 24px 100px' }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(28px, 4vw, 40px)', color: C.text, marginBottom: 12 }}>The gap no one was filling</h2>
                        <p style={{ fontSize: 16, color: C.textSec }}>TurboTax files. CPAs file. ClearFile <em>explains</em>.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
                        {[
                            { title: 'TurboTax / TaxAct', price: '$0–$115/yr', tag: 'Filing software', items: ['Guides you to file', 'Hides bracket math', 'No scenario modeling', 'Annual, per-file cost'], highlight: false },
                            { title: 'CPA Consultation', price: '$200–$400/hr', tag: 'Professional service', items: ['Expert advice', 'No visual dashboard', 'Only at tax time', 'High entry cost'], highlight: false },
                            { title: 'ClearFile', price: '$19.99 one-time', tag: 'Tax Navigation CRM', items: ['Visual scenario modeling', 'Full bracket transparency', 'Credit + risk discovery', 'Understand before you file'], highlight: true },
                        ].map((col, i) => (
                            <div key={i} style={{ padding: 28, borderRadius: 20, border: `2px solid ${col.highlight ? C.primary : C.border}`, background: col.highlight ? `${C.primary}04` : C.surface, position: 'relative' }}>
                                {col.highlight && (
                                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: C.primary, color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 99, whiteSpace: 'nowrap', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                                        The Gap We Fill
                                    </div>
                                )}
                                <div style={{ fontSize: 11, fontWeight: 700, color: col.highlight ? C.primary : C.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{col.tag}</div>
                                <div style={{ fontFamily: font.serif, fontSize: 20, color: C.text, marginBottom: 4 }}>{col.title}</div>
                                <div style={{ fontSize: 14, color: C.textSec, marginBottom: 20 }}>{col.price}</div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    {col.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: col.highlight ? C.text : C.textSec }}>
                                            <Check size={15} color={col.highlight ? C.success : C.muted} style={{ flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Callout */}
            <section style={{ padding: '24px' }}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    style={{ maxWidth: 1200, margin: '0 auto', background: `linear-gradient(135deg, ${C.primary}, #0A261D)`, borderRadius: 32, padding: 'clamp(40px, 8vw, 80px)', color: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ position: 'absolute', right: -100, top: -100, width: 400, height: 400, borderRadius: '50%', border: '40px solid rgba(255,255,255,0.05)' }} />
                    <div style={{ position: 'absolute', right: 100, bottom: -150, width: 300, height: 300, borderRadius: '50%', border: '20px solid rgba(245,158,11,0.1)' }} />
                    <div style={{ maxWidth: 500, position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, marginBottom: 20 }}>Free tax knowledge for everyone.</h2>
                        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32 }}>From penalty abatement scripts to plain-English IRS form walkthroughs — our open resource directory is always free.</p>
                        <Link to="/resources" style={{ padding: '16px 32px', borderRadius: 99, background: C.accent, color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                            Visit Resource Hub <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 1 }}>
                        {["Income Level Navigation Guide", "How to Request IRS Penalty Abatement", "Credits You're Probably Missing"].map((t, i) => (
                            <div key={i} style={{ padding: 24, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <FileText size={20} color="#fff" />
                                </div>
                                <div style={{ fontSize: 15, fontWeight: 600 }}>{t}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 24px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: font.serif, fontSize: 'clamp(32px, 5vw, 48px)', color: C.text, marginBottom: 16 }}>Ready to stop guessing about your taxes?</h2>
                <p style={{ fontSize: 17, color: C.textSec, maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.6 }}>One payment. Full access. No subscriptions, no surprises.</p>
                <Link to="/calculator" style={{ padding: '20px 48px', borderRadius: 99, background: C.text, color: '#fff', fontSize: 18, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                    Start Navigating — $19.99 <ArrowRight size={20} />
                </Link>
                <p style={{ marginTop: 16, fontSize: 13, color: C.muted }}>Educational tool only. ClearFile does not file taxes or provide tax advice.</p>
            </section>

        </div>
    );
}
