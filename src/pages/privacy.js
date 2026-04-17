import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
         <title>Privacy Policy | Humanitarian Crisis Forged</title>
         <meta name="description" content="Privacy Policy for Humanitarian Crisis Forged. We are committed to protecting your data and maintaining confidentiality." />
      </Head>

      <div className={styles.container} style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
        
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Last updated: April 6, 2026
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Commitment to Privacy</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
             At Humanitarian Crisis Forged, confidentiality isn't just a policy—it's a core value. 
            We understand that the leaders we work with often handle sensitive information, 
            and we extend the same level of discretion to your personal data.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Information We Collect</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We collect only the information necessary to provide our services:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Contact information (name, email, organization)</li>
            <li>Communication preferences</li>
            <li>Information you provide in consultation requests</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How We Use Your Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            Your information is used solely for:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Responding to your inquiries</li>
            <li>Providing requested services</li>
            <li>Scheduling consultations and coaching sessions</li>
            <li>Sending relevant updates (with your consent)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Data Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We implement appropriate technical and organizational measures to protect your 
            personal data against unauthorized access, alteration, disclosure, or destruction. 
            Our security practices are informed by our experience protecting sensitive 
            information in high-stakes environments.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Third-Party Sharing</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            We do not sell, trade, or otherwise transfer your personal information to 
            third parties. This does not include trusted partners who assist us in 
            operating our website or conducting our business, so long as those parties 
            agree to keep this information confidential.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Rights</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
            You have the right to:
          </p>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us</h2>
          <p style={{ lineHeight: '1.8' }}>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:secure@crisisforged.com" style={{ color: 'var(--accent-crimson)' }}>
              secure@crisisforged.com
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
