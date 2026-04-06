import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Expertise',
    href: '/sectors',
    dropdown: [
      { label: 'Humanitarian & Crisis', href: '/sectors/humanitarian', coreExpertise: true },
      { label: 'Tech & AI', href: '/sectors/tech' },
      { label: 'Finance & Fintech', href: '/sectors/finance' },
      { label: 'Energy & Logistics', href: '/sectors/energy' },
      { label: 'Sports & Esports', href: '/sectors/sports' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'All Services', href: '/services' },
      { label: 'Executive Coaching', href: '/services/coaching' },
      { label: 'Crisis Management', href: '/services/crisis' },
      { label: 'Leadership Training', href: '/services/training' },
      { label: 'Org Development', href: '/services/od' },
      { label: 'Mentoring Programs', href: '/services/mentoring' },
    ],
  },
  { label: 'The Collective', href: '/team' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>
            Crisis-Forged
            <span className={styles.logoAccent}>Leadership</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navigation.map((item, index) => (
            <div
              key={item.href}
              className={styles.navItem}
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${item.dropdown ? styles.hasDropdown : ''}`}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    className={`${styles.dropdownIcon} ${activeDropdown === index ? styles.dropdownIconOpen : ''}`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === index && (
                <div className={styles.dropdown}>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`${styles.dropdownItem} ${subItem.coreExpertise ? styles.coreExpertise : ''}`}
                    >
                      {subItem.label}
                      {subItem.coreExpertise && (
                        <span className={styles.coreBadge}>Core</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navigation.map((item, index) => (
              <div key={item.href} className={styles.mobileNavItem}>
                {item.dropdown ? (
                  <>
                    <button
                      className={styles.mobileDropdownToggle}
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.label}
                      <svg
                        className={`${styles.mobileDropdownIcon} ${activeDropdown === index ? styles.mobileDropdownIconOpen : ''}`}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className={styles.mobileDropdown}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`${styles.mobileDropdownItem} ${subItem.coreExpertise ? styles.coreExpertise : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                            {subItem.coreExpertise && (
                              <span className={styles.coreBadge}>Core</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Link
            href="/contact"
            className={styles.mobileCtaButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
