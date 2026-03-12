import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Mail } from 'lucide-react';

const C = {
    primary: "#1B4D3E",
    bg: "#FAFAF8",
    border: "#E5E5E0",
    textSec: "#6B6B6B"
};
const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

export default function Footer() {
    return (
        <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: '60px 24px', fontFamily: font.sans }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 40 }}>

                {/* Brand */}
                <div>
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: 'none', marginBottom: 16 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <FileText size={16} color="#fff" />
                        </div>
                        <span style={{ fontFamily: font.serif, fontSize: 20, color: C.primary }}>Taxed</span>
                    </Link>
                    <p style={{ color: C.textSec, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                        Finally see where your money goes.<br />
                        Educational purpose tax tools and world-class insights.
                    </p>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <a href="https://x.com/taxedhq" target="_blank" rel="noreferrer" style={{ color: C.textSec }}><Twitter size={20} /></a>
                        <a href="https://github.com/omarranti" target="_blank" rel="noreferrer" style={{ color: C.textSec }}><Github size={20} /></a>
                        <a href="mailto:help@taxedhq.com" style={{ color: C.textSec }}><Mail size={20} /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.primary, marginBottom: 16 }}>Tools</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <li><Link to="/calculator" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Tax Navigator</Link></li>
                        <li><Link to="/calculator" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Scenario Modeler</Link></li>
                        <li><Link to="/calculator" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Credit Finder</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.primary, marginBottom: 16 }}>Resources</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <li><Link to="/resources" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Tax Deadlines 2024</Link></li>
                        <li><Link to="/resources" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>IRS Form Guides</Link></li>
                        <li><Link to="/resources" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Find a CPA</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.primary, marginBottom: 16 }}>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <li><Link to="/privacy" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Privacy Policy</Link></li>
                        <li><Link to="/terms" style={{ color: C.textSec, textDecoration: 'none', fontSize: 14 }}>Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div style={{ maxWidth: 1200, margin: '40px auto 0', paddingTop: 24, borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontSize: 13, color: C.textSec }}>
                <span>&copy; {new Date().getFullYear()} Taxed. Not actual tax advice.</span>
                <div style={{ display: 'flex', gap: 24 }}>
                    <Link to="/privacy" style={{ textDecoration: 'none', color: C.textSec }}>Privacy Policy</Link>
                    <Link to="/terms" style={{ textDecoration: 'none', color: C.textSec }}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
