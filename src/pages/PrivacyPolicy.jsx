import { Link } from 'react-router-dom';
import { FileText, ShieldCheck } from 'lucide-react';

const C = {
    primary: "#1B4D3E",
    bg: "#FAFAF8",
    surface: "#FFFFFF",
    border: "#E5E5E0",
    text: "#1A1A1A",
    textSec: "#6B6B6B",
    muted: "#9CA3AF"
};
const font = { serif: "'DM Serif Display', Georgia, serif", sans: "'DM Sans', system-ui, sans-serif" };

function Section({ title, children }) {
    return (
        <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: font.serif, fontSize: 22, color: C.primary, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${C.border}` }}>{title}</h2>
            <div style={{ fontSize: 15, color: C.textSec, lineHeight: 1.85 }}>{children}</div>
        </div>
    );
}

export default function PrivacyPolicy() {
    return (
        <div style={{ fontFamily: font.sans, background: C.bg, paddingBottom: 120 }}>

            {/* Header */}
            <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '64px 24px 48px' }}>
                <div style={{ maxWidth: 760, margin: '0 auto' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: `${C.primary}10`, borderRadius: 99, color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                        <ShieldCheck size={14} /> Legal
                    </div>
                    <h1 style={{ fontFamily: font.serif, fontSize: 'clamp(32px, 5vw, 48px)', color: C.text, marginBottom: 16 }}>Privacy Policy</h1>
                    <p style={{ fontSize: 15, color: C.muted }}>Effective Date: March 11, 2025 · Last Updated: March 11, 2025</p>
                    <p style={{ fontSize: 15, color: C.textSec, marginTop: 12, lineHeight: 1.7 }}>
                        This Privacy Policy describes how ClearFile ("we," "us," or "our") collects, uses, and protects information when you visit and use <strong>clearfile.app</strong> (the "Service"). This policy is compliant with applicable U.S. federal and state privacy laws, including the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 0' }}>

                <Section title="1. Who We Are">
                    <p>ClearFile is an educational tax navigation tool. We are <strong>not</strong> a tax preparation service, accounting firm, or financial advisor. Our Service provides general, educational information and interactive scenario modeling for informational purposes only.</p>
                </Section>

                <Section title="2. Information We Collect">
                    <p><strong>Information You Provide:</strong> ClearFile does not require account creation. The only data you input is voluntarily entered within the tax modeling tool (e.g., estimated income, filing status, number of dependents). This information is used solely to render calculations on your screen.</p>
                    <p style={{ marginTop: 12 }}><strong>Automatically Collected Information:</strong> When you visit our site, we may automatically collect:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>IP address and general geographic location (country, state)</li>
                        <li>Browser type and version</li>
                        <li>Device type and operating system</li>
                        <li>Pages visited, clickstream data, and session duration</li>
                        <li>Referral source (how you arrived at our site)</li>
                    </ul>
                    <p style={{ marginTop: 12 }}><strong>What We Do NOT Collect:</strong> We do not collect your Social Security number, actual tax return data, bank account information, or any personally identifiable financial records.</p>
                </Section>

                <Section title="3. How We Use Your Information">
                    <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <li>To operate and improve the Service</li>
                        <li>To analyze usage patterns and improve user experience</li>
                        <li>To detect and prevent fraudulent or abusive activity</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                    <p style={{ marginTop: 12 }}>We do <strong>not</strong> sell your personal information to third parties.</p>
                </Section>

                <Section title="4. Cookies and Tracking Technologies">
                    <p>We may use cookies and similar technologies to enhance your experience, remember preferences, and analyze traffic. You may control cookie behavior through your browser settings. Disabling cookies may limit some functionality of the Service.</p>
                    <p style={{ marginTop: 12 }}>We may use third-party analytics tools (such as Google Analytics) that collect anonymized usage data independently under their own privacy policies.</p>
                </Section>

                <Section title="5. AI Assistant">
                    <p>ClearFile includes an optional AI chat assistant powered by third-party AI APIs. When you use the chat feature, your messages (along with your computed tax scenario context) are transmitted to the third-party API provider for processing. Do not enter personal identifying information (name, SSN, address) into the chat assistant. See the third-party provider's privacy policy for how they handle transmitted data.</p>
                </Section>

                <Section title="6. Data Retention and Storage">
                    <p>ClearFile does not persistently store the income or tax data you enter into the modeling tool. All calculations happen in your browser session. When you close or reload the page, your inputs are discarded. Automatically collected analytics data may be retained for up to 24 months.</p>
                </Section>

                <Section title="7. Third-Party Links">
                    <p>Our Service may contain links to third-party websites (e.g., IRS.gov, CPAverify.org). We are not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before submitting any personal information.</p>
                </Section>

                <Section title="8. Your Rights (U.S. Residents)">
                    <p><strong>California Residents (CCPA/CPRA):</strong> You have the right to:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>Know what personal information we collect and how it is used</li>
                        <li>Request deletion of personal information we hold about you</li>
                        <li>Opt out of the sale of your personal information (we do not sell data)</li>
                        <li>Non-discrimination for exercising your privacy rights</li>
                    </ul>
                    <p style={{ marginTop: 12 }}>To exercise these rights, contact us at: <strong>privacy@clearfile.app</strong></p>
                    <p style={{ marginTop: 12 }}><strong>Other U.S. States:</strong> Users in Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other states with comprehensive privacy laws may have similar rights. Contact us to make a request.</p>
                </Section>

                <Section title="9. Children's Privacy">
                    <p>ClearFile is not directed toward children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided information to us, please contact us immediately at <strong>privacy@clearfile.app</strong>.</p>
                </Section>

                <Section title="10. Data Security">
                    <p>We implement reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </Section>

                <Section title="11. Changes to This Policy">
                    <p>We may update this Privacy Policy from time to time. We will post the revised policy on this page with an updated effective date. Your continued use of the Service after any changes constitutes your acceptance of the updated policy.</p>
                </Section>

                <Section title="12. Contact Us">
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <div style={{ marginTop: 12, padding: '16px 20px', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, fontSize: 14 }}>
                        <strong>ClearFile</strong><br />
                        Email: <a href="mailto:privacy@clearfile.app" style={{ color: C.primary }}>privacy@clearfile.app</a><br />
                        Website: <a href="https://clearfile.app" style={{ color: C.primary }}>clearfile.app</a>
                    </div>
                </Section>

                <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link to="/terms" style={{ color: C.primary, fontSize: 14, fontWeight: 600 }}>View Terms of Service →</Link>
                    <Link to="/" style={{ color: C.textSec, fontSize: 14 }}>← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
