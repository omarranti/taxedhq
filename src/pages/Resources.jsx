import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Calendar, BookOpen, AlertTriangle, MessageSquare, Database, ArrowRight, DollarSign } from 'lucide-react';

const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

const glassBase = {
    background: 'rgba(255,255,255,0.055)',
    backdropFilter: 'blur(28px) saturate(160%)',
    WebkitBackdropFilter: 'blur(28px) saturate(160%)',
    border: '1px solid rgba(255,255,255,0.1)',
};

function ResourceCard({ icon: Icon, title, desc, link, linkText = "Read Guide" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ ...glassBase, padding: '26px', borderRadius: 22, display: 'flex', flexDirection: 'column', gap: 16, transition: 'all 0.3s', cursor: 'default' }}
            whileHover={{ background: 'rgba(255,255,255,0.085)', y: -4, boxShadow: '0 20px 56px rgba(0,0,0,0.35)' }}
        >
            <div style={{ width: 46, height: 46, borderRadius: 14, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} color="#34D399" />
            </div>
            <div>
                <h3 style={{ fontFamily: font.sans, fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 14, lineHeight: 1.68 }}>{desc}</p>
            </div>
            <a href={link} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 16, color: '#34D399', fontSize: 13, fontWeight: 700, textDecoration: 'none', borderTop: '1px solid rgba(255,255,255,0.07)', transition: 'gap 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}
            >
                {linkText} <ArrowRight size={15} />
            </a>
        </motion.div>
    );
}

export default function Resources() {
    return (
        <div className="resources-page" style={{ fontFamily: font.sans, background: '#0A0A12', minHeight: '100vh', padding: '80px 24px 140px', position: 'relative' }}>

            {/* Background orbs */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 65%)', filter: 'blur(48px)' }} />
                <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 65%)', filter: 'blur(48px)' }} />
            </div>

            {/* Hero */}
            <div style={{ maxWidth: 1200, margin: '0 auto 72px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', ...glassBase, borderRadius: 99, color: '#F59E0B', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }} />
                        Open Directory
                    </div>
                    <h1 style={{ fontFamily: font.serif, fontSize: 'clamp(36px, 6vw, 58px)', color: '#fff', lineHeight: 1.08, marginBottom: 22, letterSpacing: '-0.025em' }}>
                        Everything you need. <br />
                        <span style={{ background: 'linear-gradient(120deg, #34D399, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Nothing you don't.</span>
                    </h1>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto', lineHeight: 1.65 }}>
                        A curated collection of plain-English guides, essential IRS links, and key tax deadlines.
                    </p>
                </motion.div>
            </div>

            <div className="resources-sections" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 72, position: 'relative', zIndex: 1 }}>

                {/* Interactive Tools */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Database size={20} color="#34D399" />
                        </div>
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: '#fff', letterSpacing: '-0.01em' }}>Interactive Tools</h2>
                    </div>
                    <div className="resources-tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 20 }}>

                        {/* Tax Navigator card */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="resources-hero-card"
                            style={{ padding: '36px', background: 'rgba(52,211,153,0.07)', border: '1px solid rgba(52,211,153,0.2)', borderRadius: 26, position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px rgba(52,211,153,0.06)' }}>
                            <div style={{ position: 'absolute', right: -60, top: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)' }} />
                            <h3 style={{ fontFamily: font.serif, fontSize: 24, marginBottom: 14, position: 'relative', zIndex: 1, color: '#fff' }}>Tax Clarity Platform</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.68, marginBottom: 32, position: 'relative', zIndex: 1 }}>
                                Model your tax picture across income levels. Discover credits, identify risks, and understand your effective rate — before you sit down with a CPA.
                            </p>
                            <Link to="/calculator" style={{ padding: '12px 26px', background: '#34D399', color: '#000', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', display: 'inline-block', position: 'relative', zIndex: 1, boxShadow: '0 4px 24px rgba(52,211,153,0.35)', transition: 'all 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(52,211,153,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(52,211,153,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                Launch Tax Navigator
                            </Link>
                        </motion.div>

                        {/* Find a CPA card */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ ...glassBase, padding: '36px', borderRadius: 26 }}>
                            <h3 style={{ fontFamily: font.sans, fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Find a CPA</h3>
                            <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 15, lineHeight: 1.68, marginBottom: 28 }}>
                                Use Taxed to understand your situation first, then connect with a verified tax professional to handle your actual filing. Knowledge = better conversations.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', flexShrink: 0 }} />
                                    <a href="https://cpaverify.org" target="_blank" rel="noreferrer" style={{ color: '#34D399', fontWeight: 700, textDecoration: 'none' }}>CPAverify.org</a>
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>— National</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#60A5FA', flexShrink: 0 }} />
                                    <a href="https://natptax.com" target="_blank" rel="noreferrer" style={{ color: '#60A5FA', fontWeight: 700, textDecoration: 'none' }}>NATP.org</a>
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>— Pro Finders</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Essential Guides */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={20} color="#60A5FA" />
                        </div>
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: '#fff', letterSpacing: '-0.01em' }}>Essential Guides</h2>
                    </div>
                    <div className="resources-guides-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
                        <ResourceCard icon={AlertTriangle} title="First-Time Penalty Abatement" desc="How to legally wipe thousands in late-filing or late-payment IRS penalties. Know this before your CPA does." link="#" />
                        <ResourceCard icon={DollarSign} title="EITC Qualifications 2024" desc="Are you leaving up to $7,430 on the table? Understand the refundable credit parameters by income level." link="#" />
                        <ResourceCard icon={FileText} title="Filing IRS Form 843" desc="A plain-English walkthrough to claiming a penalty refund — what to write, where to send it." link="#" />
                        <ResourceCard icon={MessageSquare} title="Speaking with the IRS" desc="The exact scripts and keywords to use when calling 1-800-829-1040. Navigate the call with confidence." link="#" />
                    </div>
                </section>

                {/* 2024 Deadlines */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Calendar size={20} color="#F59E0B" />
                        </div>
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: '#fff', letterSpacing: '-0.01em' }}>2024 Deadlines</h2>
                    </div>
                    <div style={{ ...glassBase, borderRadius: 22, overflow: 'hidden' }}>
                        {[
                            { date: "Jan 29", title: "Tax Season Opens", desc: "IRS begins accepting and processing returns." },
                            { date: "April 15", title: "Tax Day", desc: "Deadline to file federal and state returns, or request an extension. Deadline to fund 2023 IRA/HSA." },
                            { date: "Oct 15", title: "Extension Deadline", desc: "Final deadline if you filed an extension in April." }
                        ].map((d, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', gap: 28, padding: '26px 32px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', alignItems: 'flex-start' }}>
                                <div style={{ flexShrink: 0, minWidth: 72 }}>
                                    <span style={{ fontFamily: font.sans, color: '#34D399', fontWeight: 800, fontSize: 15 }}>{d.date}</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{d.title}</div>
                                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{d.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            <style>{`
              @media (max-width: 1024px) {
                .resources-page { padding-top: 70px !important; padding-bottom: 112px !important; }
                .resources-sections { gap: 60px !important; }
              }

              @media (max-width: 768px) {
                .resources-page { padding: 64px 16px 96px !important; }
                .resources-sections { gap: 48px !important; }
                .resources-tools-grid, .resources-guides-grid { gap: 14px !important; }
                .resources-hero-card { padding: 24px !important; border-radius: 20px !important; }
              }

              @media (max-width: 480px) {
                .resources-page { padding-top: 58px !important; }
              }
            `}</style>
        </div>
    );
}
