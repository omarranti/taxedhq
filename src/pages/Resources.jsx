import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Calendar, BookOpen, AlertTriangle, MessageSquare, Database, ArrowRight, Check, DollarSign } from 'lucide-react';

const C = {
    primary: "#1B4D3E",
    accent: "#F59E0B",
    bg: "#FAFAF8",
    surface: "#FFFFFF",
    border: "#E5E5E0",
    text: "#1A1A1A",
    textSec: "#6B6B6B"
};

const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

function ResourceCard({ icon: Icon, title, desc, link, linkText = "Read Guide" }) {
    return (
        <div style={{ background: C.surface, padding: 24, borderRadius: 20, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.primary}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={22} color={C.primary} />
            </div>
            <div>
                <h3 style={{ fontFamily: font.sans, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: C.textSec, fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
            </div>
            <a href={link} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 16, color: C.primary, fontSize: 14, fontWeight: 700, textDecoration: 'none', borderTop: `1px solid ${C.border}` }}>
                {linkText} <ArrowRight size={16} />
            </a>
        </div>
    );
}

export default function Resources() {
    return (
        <div style={{ fontFamily: font.sans, background: C.bg, minHeight: '100vh', padding: '60px 24px 120px' }}>

            {/* Header */}
            <div style={{ maxWidth: 1200, margin: '0 auto 60px', textAlign: 'center' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: `${C.accent}15`, borderRadius: 99, color: '#D97706', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 24 }}>
                        Open Directory
                    </div>
                    <h1 style={{ fontFamily: font.serif, fontSize: 'clamp(36px, 6vw, 56px)', color: C.text, lineHeight: 1.1, marginBottom: 20 }}>
                        Everything you need. <br />Nothing you don't.
                    </h1>
                    <p style={{ fontSize: 18, color: C.textSec, maxWidth: 600, margin: '0 auto' }}>
                        A curated collection of plain-English guides, essential IRS links, and essential tax deadlines.
                    </p>
                </motion.div>
            </div>

            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>

                {/* Core Tools */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Database size={24} color={C.primary} />
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: C.text }}>Interactive Tools</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20 }}>
                        <div style={{ padding: 32, background: `linear-gradient(135deg, ${C.primary}, #0A261D)`, borderRadius: 24, color: '#fff', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                            <h3 style={{ fontFamily: font.serif, fontSize: 24, marginBottom: 16, position: 'relative', zIndex: 1 }}>Tax Navigation CRM</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.6, marginBottom: 32, position: 'relative', zIndex: 1 }}>Model your tax picture across income levels. Discover credits, identify risks, and understand your effective rate — before you sit down with a CPA.</p>
                            <Link to="/calculator" style={{ padding: '12px 24px', background: C.accent, color: '#000', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', display: 'inline-block', position: 'relative', zIndex: 1 }}>
                                Launch Tax Navigator
                            </Link>
                        </div>
                        {/* Find a CPA Placeholder */}
                        <div style={{ padding: 32, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 24 }}>
                            <h3 style={{ fontFamily: font.sans, fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 12 }}>Find a CPA</h3>
                            <p style={{ color: C.textSec, fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>Use ClearFile to understand your situation first, then connect with a verified tax professional to handle your actual filing. Knowledge = better conversations.</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: C.textSec }}><a href="https://cpaverify.org" target="_blank" rel="noreferrer" style={{ color: C.primary, fontWeight: 600 }}>CPAverify.org</a> (National)</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: C.textSec }}><a href="https://natptax.com" target="_blank" rel="noreferrer" style={{ color: C.primary, fontWeight: 600 }}>NATP.org</a> (Pro Finders)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Guides & Downloads */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <BookOpen size={24} color={C.primary} />
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: C.text }}>Essential Guides</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 20 }}>
                        <ResourceCard icon={AlertTriangle} title="First-Time Penalty Abatement" desc="How to legally wipe thousands in late-filing or late-payment IRS penalties. Know this before your CPA does." link="#" />
                        <ResourceCard icon={DollarSign} title="EITC Qualifications 2024" desc="Are you leaving up to $7,430 on the table? Understand the refundable credit parameters by income level." link="#" />
                        <ResourceCard icon={FileText} title="Filing IRS Form 843" desc="A plain-English walkthrough to claiming a penalty refund — what to write, where to send it." link="#" />
                        <ResourceCard icon={MessageSquare} title="Speaking with the IRS" desc="The exact scripts and keywords to use when calling 1-800-829-1040. Navigate the call with confidence." link="#" />
                    </div>
                </section>

                {/* Calendar */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <Calendar size={24} color={C.primary} />
                        <h2 style={{ fontFamily: font.serif, fontSize: 28, color: C.text }}>2024 Deadlines</h2>
                    </div>
                    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden' }}>
                        {[
                            { date: "Jan 29", title: "Tax Season Opens", desc: "IRS begins accepting and processing returns." },
                            { date: "April 15", title: "Tax Day", desc: "Deadline to file federal and state returns, or request an extension. Deadline to fund 2023 IRA/HSA." },
                            { date: "Oct 15", title: "Extension Deadline", desc: "Final deadline if you filed an extension in April." }
                        ].map((d, i) => (
                            <div key={i} style={{ display: 'flex', gap: 24, padding: 24, borderBottom: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                                <div style={{ flexShrink: 0, width: 80, fontFamily: font.sans, color: C.primary, fontWeight: 700, fontSize: 16 }}>{d.date}</div>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{d.title}</div>
                                    <div style={{ fontSize: 14, color: C.textSec, lineHeight: 1.5 }}>{d.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
