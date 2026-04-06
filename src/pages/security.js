import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Security() {
  return (
    <>
      <Head>
        <title>Security | Crisis-Forged Leadership</title>
        <meta name="description" content="Security practices at Crisis-Forged Leadership. Learn how we protect client data and maintain operational security." />
      </Head>

      <div className={styles.container} style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Security</h1>
        
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Security-First Mindset</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            Our approach to security is shaped by years of operating in environments where 
            information security could mean the difference between mission success and failure. 
            We bring the same rigorous standards to protecting our clients' data and communications.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Data Protection</h2>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li><strong>Encryption:</strong> All data in transit is encrypted using TLS 1.3</li>
            <li><strong>Secure Storage:</strong> Client data is stored on secure, access-controlled servers</li>
            <li><strong>Access Control:</strong> Strict need-to-know access policies</li>
            <li><strong>Regular Audits:</strong> Continuous monitoring and security assessments</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Communication Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We understand that our clients often discuss sensitive strategic matters. Our 
            communication practices include:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Secure, encrypted email communications</li>
            <li>Option for end-to-end encrypted messaging platforms</li>
            <li>Secure video conferencing for remote sessions</li>
            <li>Clear desk and clean screen policies</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Operational Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            Beyond digital security, we maintain strict operational security practices:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Confidentiality agreements with all team members</li>
            <li>Secure handling of physical documents</li>
            <li>Discreet scheduling and travel arrangements for sensitive engagements</li>
            <li>No unnecessary third-party service integrations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Website Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            This website implements industry best practices for web security:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>HTTPS enforced across all pages</li>
            <li>Content Security Policy (CSP) headers</li>
            <li>Protection against XSS and CSRF attacks</li>
            <li>Regular security updates and patches</li>
            <li>No tracking cookies or third-party analytics</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Reporting Security Concerns</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            If you discover a security vulnerability or have concerns about our security 
            practices, please contact us immediately at{' '}
            <a href="mailto:secure@crisisforged.com" style={{ color: 'var(--accent-crimson)' }}>
              secure@crisisforged.com
            </a>
          </p>
          <p style={{ lineHeight: '1.8' }}>
            We take all security reports seriously and will respond within 24 hours.
          </p>
        </section>
      </div>
    </>
  );
}
