import { Link } from 'react-router-dom';
import { FileText, Scale } from 'lucide-react';

const C = {
    primary: "#1B4D3E",
    bg: "#FAFAF8",
    surface: "#FFFFFF",
    border: "#E5E5E0",
    text: "#1A1A1A",
    textSec: "#6B6B6B",
    muted: "#9CA3AF",
    danger: "#EF4444",
    warning: "#F59E0B"
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

export default function TermsOfService() {
    return (
        <div style={{ fontFamily: font.sans, background: C.bg, paddingBottom: 120 }}>

            {/* Header */}
            <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: '64px 24px 48px' }}>
                <div style={{ maxWidth: 760, margin: '0 auto' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: `${C.primary}10`, borderRadius: 99, color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20 }}>
                        <Scale size={14} /> Legal
                    </div>
                    <h1 style={{ fontFamily: font.serif, fontSize: 'clamp(32px, 5vw, 48px)', color: C.text, marginBottom: 16 }}>Terms of Service</h1>
                    <p style={{ fontSize: 15, color: C.muted }}>Effective Date: March 11, 2025 · Last Updated: March 11, 2025</p>
                    <p style={{ fontSize: 15, color: C.textSec, marginTop: 12, lineHeight: 1.7 }}>
                        Please read these Terms of Service ("Terms") carefully before using ClearFile ("we," "us," "our") at <strong>clearfile.app</strong> ("Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
                    </p>
                </div>
            </div>

            {/* Important disclaimer banner */}
            <div style={{ background: `${C.warning}10`, borderBottom: `1px solid ${C.warning}30`, padding: '20px 24px' }}>
                <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                    <p style={{ fontSize: 14, color: '#92400E', lineHeight: 1.7, margin: 0 }}>
                        <strong>ClearFile is an educational tool only.</strong> It does not provide tax advice, tax preparation services, accounting services, or legal advice. Nothing on this platform constitutes a professional-client relationship of any kind. Always consult a licensed CPA or tax attorney for advice specific to your situation.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 0' }}>

                <Section title="1. Acceptance of Terms">
                    <p>By accessing or using ClearFile, you represent that you are at least 18 years of age, have the legal capacity to enter into these Terms, and agree to comply with all applicable laws and regulations. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
                </Section>

                <Section title="2. Description of Service">
                    <p>ClearFile provides an interactive, web-based tax scenario modeling and educational platform. The Service allows users to:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>Model estimated tax exposure across different income levels</li>
                        <li>Explore available tax credits and deductions (for educational awareness only)</li>
                        <li>Understand tax bracket structures for federal and California state taxes</li>
                        <li>Access general educational resources about U.S. tax concepts</li>
                        <li>Use an AI-powered educational chat assistant</li>
                    </ul>
                    <p style={{ marginTop: 12 }}>ClearFile is <strong>not</strong> a tax filing platform and does not prepare, file, or submit any tax documents on your behalf.</p>
                </Section>

                <Section title="3. Not Tax, Legal, or Financial Advice">
                    <p>All content, calculations, and outputs provided by ClearFile — including but not limited to estimated tax amounts, credit eligibility indicators, bracket breakdowns, and AI chat responses — are for <strong>educational and informational purposes only</strong>.</p>
                    <p style={{ marginTop: 10 }}>Nothing on this Service constitutes:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>Tax advice under IRS Circular 230 or any applicable regulations</li>
                        <li>Legal advice or the practice of law</li>
                        <li>Financial planning advice or investment recommendations</li>
                        <li>A professional-client relationship of any kind</li>
                    </ul>
                    <p style={{ marginTop: 12 }}>You should not rely on any information provided by ClearFile as a substitute for advice from a qualified tax professional, CPA, or attorney licensed in your jurisdiction.</p>
                </Section>

                <Section title="4. Accuracy of Information">
                    <p>While we strive to keep tax bracket data, credit thresholds, and other calculations up to date, we make <strong>no representations or warranties</strong> as to the completeness, accuracy, timeliness, or fitness for any particular purpose of any information on the Service. Tax laws change frequently. Always verify figures with the IRS (irs.gov) or a qualified tax professional before making any financial decisions.</p>
                </Section>

                <Section title="5. One-Time Purchase and Refund Policy">
                    <p>Access to ClearFile's full feature set is available for a one-time purchase of <strong>$19.99</strong>. This grants you lifetime access to the platform as it exists at the time of purchase and all future non-premium updates.</p>
                    <p style={{ marginTop: 10 }}><strong>Refund Policy:</strong> Due to the immediate nature of digital access, all sales are final. We do not offer refunds after purchase. If you experience a technical issue that prevents you from accessing the Service, please contact us at <strong>support@clearfile.app</strong> within 7 days of purchase and we will make reasonable efforts to resolve the issue.</p>
                </Section>

                <Section title="6. AI Assistant">
                    <p>The AI chat feature within ClearFile is powered by third-party AI services. The assistant is designed for educational context only and explicitly does not provide personalized tax advice. Responses generated by the AI assistant may be incomplete, inaccurate, or out of date. You acknowledge and agree that:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>AI responses are for educational exploration only</li>
                        <li>You will not enter personally identifiable information (SSN, full name, address) into the chat</li>
                        <li>Responses should always be verified with a licensed tax professional</li>
                    </ul>
                </Section>

                <Section title="7. Intellectual Property">
                    <p>All content, design, code, and materials on ClearFile — including but not limited to text, graphics, logos, software, and user interface elements — are the property of ClearFile and are protected by U.S. copyright, trademark, and other intellectual property laws.</p>
                    <p style={{ marginTop: 10 }}>You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content from the Service without our prior written consent.</p>
                </Section>

                <Section title="8. Prohibited Uses">
                    <p>You agree not to use the Service to:</p>
                    <ul style={{ paddingLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <li>Violate any applicable U.S. federal, state, or local laws</li>
                        <li>Collect, scrape, or harvest data from the Service through automated means</li>
                        <li>Use the Service for commercial resale or redistribution without written permission</li>
                        <li>Attempt to reverse-engineer, decompile, or disassemble any part of the Service</li>
                        <li>Transmit malware, viruses, or any malicious code</li>
                        <li>Interfere with or disrupt the integrity or performance of the Service</li>
                    </ul>
                </Section>

                <Section title="9. Disclaimer of Warranties">
                    <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                </Section>

                <Section title="10. Limitation of Liability">
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CLEARFILE AND ITS OWNERS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO: TAX UNDERPAYMENTS, PENALTIES, INTEREST, OR PROFESSIONAL FEES RESULTING FROM RELIANCE ON INFORMATION PROVIDED BY THE SERVICE.</p>
                    <p style={{ marginTop: 10 }}>OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID FOR ACCESS TO THE SERVICE ($19.99).</p>
                </Section>

                <Section title="11. Indemnification">
                    <p>You agree to indemnify, defend, and hold harmless ClearFile and its owners, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the Service, your violation of these Terms, or your violation of any rights of a third party.</p>
                </Section>

                <Section title="12. Governing Law and Dispute Resolution">
                    <p>These Terms shall be governed by and construed in accordance with the laws of the <strong>State of California</strong>, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration in California, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction.</p>
                    <p style={{ marginTop: 10 }}>You agree to waive any right to a jury trial and to participate in class-action lawsuits against ClearFile.</p>
                </Section>

                <Section title="13. Changes to These Terms">
                    <p>We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date at the top of this page. Your continued use of the Service after changes go into effect constitutes your acceptance of the revised Terms.</p>
                </Section>

                <Section title="14. Termination">
                    <p>We reserve the right to suspend or terminate your access to the Service at any time, for any reason, without notice, including if you violate these Terms. All provisions of these Terms that by their nature should survive termination (including disclaimers, limitations of liability, and dispute resolution) shall survive.</p>
                </Section>

                <Section title="15. Contact">
                    <p>If you have questions about these Terms, please contact us at:</p>
                    <div style={{ marginTop: 12, padding: '16px 20px', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, fontSize: 14 }}>
                        <strong>ClearFile</strong><br />
                        Email: <a href="mailto:legal@clearfile.app" style={{ color: C.primary }}>legal@clearfile.app</a><br />
                        Website: <a href="https://clearfile.app" style={{ color: C.primary }}>clearfile.app</a>
                    </div>
                </Section>

                <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link to="/privacy" style={{ color: C.primary, fontSize: 14, fontWeight: 600 }}>View Privacy Policy →</Link>
                    <Link to="/" style={{ color: C.textSec, fontSize: 14 }}>← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
