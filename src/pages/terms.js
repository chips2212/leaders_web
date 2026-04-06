import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Crisis-Forged Leadership</title>
        <meta name="description" content="Terms of Service for Crisis-Forged Leadership. Please read these terms carefully before engaging our services." />
      </Head>

      <div className={styles.container} style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
        
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Last updated: April 6, 2026
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            By accessing our website and engaging our services, you agree to be bound by these 
            Terms of Service. If you disagree with any part of these terms, please do not 
            use our services.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Our Services</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            Crisis-Forged Leadership provides leadership development services including:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Executive coaching</li>
            <li>Leadership training programs</li>
            <li>Organizational development consulting</li>
            <li>Crisis management advisory</li>
            <li>Mentoring programs</li>
          </ul>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            All services are subject to separate engagement agreements that will be provided 
            prior to commencement of work.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Confidentiality</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We maintain strict confidentiality regarding all client information and 
            engagements. Specific confidentiality terms will be outlined in individual 
            engagement agreements, which typically include:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Non-disclosure of proprietary information</li>
            <li>Protection of personal data</li>
            <li>Secure handling of communications</li>
            <li>Professional discretion in all matters</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Intellectual Property</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            All content on this website, including text, graphics, logos, and materials, 
            is the property of Crisis-Forged Leadership and is protected by intellectual 
            property laws. Materials provided during coaching or training engagements are 
            for the client's internal use only and may not be reproduced or distributed 
            without written permission.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            Our services are advisory in nature. While we strive to provide valuable guidance 
            based on our experience, ultimate decision-making and responsibility for outcomes 
            remain with the client organization and its leaders.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>6. Governing Law</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            These terms shall be governed by and construed in accordance with applicable laws. 
            Any disputes arising under these terms shall be subject to the exclusive 
            jurisdiction of the courts in the location of our principal place of business.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>7. Changes to Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We reserve the right to modify these terms at any time. Changes will be effective 
            immediately upon posting to this page. Continued use of our services following 
            any changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>8. Contact Information</h2>
          <p style={{ lineHeight: '1.8' }}>
            For questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:secure@crisisforged.com" style={{ color: 'var(--accent-crimson)' }}>
              secure@crisisforged.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
