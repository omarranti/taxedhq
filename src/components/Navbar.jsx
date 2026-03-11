import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

const C = {
    primary: "#1B4D3E",
    text: "#1A1A1A",
    textSec: "#6B6B6B"
};
const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "How it Works", path: "/#how-it-works" },
        { name: "Tax Navigator", path: "/calculator" },
        { name: "Resource Hub", path: "/resources" },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            zIndex: 999,
            fontFamily: font.sans
        }}>
            <div style={{
                maxWidth: 1200, margin: '0 auto', padding: '16px 24px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: 'none' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <FileText size={16} color="#fff" />
                    </div>
                    <span style={{ fontFamily: font.serif, fontSize: 20, color: C.primary }}>ClearFile</span>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: 'none', gap: 32, alignItems: 'center' }} className="nav-desktop">
                    {links.map(l => (
                        <Link key={l.path} to={l.path} style={{
                            fontSize: 15, fontWeight: 500, color: location.pathname === l.path ? C.primary : C.textSec,
                            textDecoration: 'none', transition: 'color 0.2s'
                        }}>
                            {l.name}
                        </Link>
                    ))}
                    <Link to="/calculator" style={{
                        padding: "10px 20px", borderRadius: 99, background: C.primary, color: "#fff",
                        fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: `0 4px 12px ${C.primary}40`,
                        transition: 'transform 0.2s', display: 'inline-block'
                    }}>
                        Get Full Access — $19.99
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="nav-mobile-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.text }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #eee', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {links.map(l => (
                        <Link key={l.path} to={l.path} onClick={() => setIsOpen(false)} style={{ fontSize: 16, fontWeight: 600, color: C.text, textDecoration: 'none' }}>
                            {l.name}
                        </Link>
                    ))}
                    <Link to="/calculator" onClick={() => setIsOpen(false)} style={{
                        padding: "14px", borderRadius: 12, background: C.primary, color: "#fff", textAlign: 'center',
                        fontSize: 15, fontWeight: 700, textDecoration: 'none', marginTop: 8
                    }}>
                        Get Full Access — $19.99
                    </Link>
                </motion.div>
            )}

            {/* Add CSS for media queries inline to avoid modifying main CSS unnecessarily */}
            <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
