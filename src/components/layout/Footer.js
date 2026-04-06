import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  expertise: [
    { label: 'Humanitarian & Crisis', href: '/sectors/humanitarian-ngo' },
    { label: 'Tech & AI', href: '/sectors/tech-ai' },
    { label: 'Finance & Fintech', href: '/sectors/finance-fintech' },
    { label: 'Energy & Logistics', href: '/sectors/energy-logistics' },
    { label: 'Sports & Esports', href: '/sectors/sports-esports' },
  ],
  services: [
    { label: 'Executive Coaching', href: '/services/executive-coaching' },
    { label: 'Crisis Management', href: '/services/crisis-management' },
    { label: 'Leadership Training', href: '/services/leadership-training' },
    { label: 'Org Development', href: '/services/organizational-development' },
    { label: 'All Services', href: '/services' },
  ],
  company: [
    { label: 'The Collective', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Crisis Leadership Checklist', href: '/downloads/Crisis-Leadership-Checklist.pdf' },
    { label: 'VUCA Readiness Assessment', href: '/downloads/VUCA-Readiness-Assessment.pdf' },
    { label: 'Service Catalog 2026', href: '/downloads/Service-Catalog-2026.pdf' },
  ],
};

const values = ['Field-Tested', 'Ethical Integrity', 'Radical Adaptability', 'Confidentiality'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.logoIcon}>⚡</span>
              <span className={styles.logoText}>
                Crisis-Forged
                <span className={styles.logoAccent}>Leadership</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              "Leadership Forged in Crisis. Applied Everywhere."
            </p>
            <p className={styles.description}>
              We bring field-tested strategies from humanitarian war zones to organizations 
              navigating volatility in Tech, Finance, Energy, and Sports.
            </p>
            
            {/* Values */}
            <div className={styles.values}>
              {values.map((value) => (
                <span key={value} className={styles.valueTag}>
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Expertise</h4>
            <ul className={styles.linkList}>
              {footerLinks.expertise.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={styles.footerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <svg 
                      width="12" 
                      height="12" 
                      viewBox="0 0 12 12" 
                      fill="none"
                      className={styles.externalIcon}
                    >
                      <path 
                        d="M3 9L9 3M9 3H4M9 3V8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className={styles.contactBar}>
          <div className={styles.contactInfo}>
            <a href="mailto:secure@crisisforged.com" className={styles.contactLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              secure@crisisforged.com
            </a>
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://linkedin.com/company/crisisforged" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/crisisforged" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            <span className={styles.divider}>|</span>
            <Link href="/security" className={styles.legalLink}>Security</Link>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Crisis-Forged Leadership. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
