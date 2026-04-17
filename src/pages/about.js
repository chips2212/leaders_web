import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <>
      <Head>
         <title>About Us | Leaders for uncertainty</title>
         <meta name="description" content="Learn about Leaders for uncertainty - a collective of coaches, trainers, and consultants specializing in leadership development for VUCA contexts." />
      </Head>

      <div className={styles.container}>
        <section className={styles.hero} style={{ minHeight: '50vh' }}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
               Forged in Humanitarian Crises.<br />
               <span className={styles.heroTitleAccent}>Built for Human & Organizational Resilience.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We are a collective of coaches, trainers, and consultants who have led 
              through the most demanding environments on Earth.
            </p>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={styles.container}>
            <div className={styles.proofContent}>
              <h2 className={styles.proofStatement}>
               "Our methods weren't developed in classrooms. They were tested where 
                 failure means loss of life because true resilience is built on people and embraces the unknown."
              </h2>
              <div className={styles.proofStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Conflict Zones</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Global Industries</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Years Field Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Our Story</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
             Leaders for uncertainty began with a simple observation: the leadership skills 
            required to evacuate a medical team under artillery fire are the same skills 
            needed to navigate a corporation through market volatility.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Our founders spent decades in humanitarian crisis response—active conflict zones, 
            natural disasters, and complex emergencies where stakes are literally life and death. 
            We developed methods, frameworks, and protocols that work when everything is falling apart.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Today, we bring those field-tested strategies to organizations facing their own 
            forms of volatility. Whether you're a tech startup navigating disruption, a finance 
            firm managing risk, or an NGO coordinating emergency response, our methods provide 
            the resilience and adaptability you need.
          </p>

          <h3 style={{ marginTop: '3rem' }}>Our Values</h3>
          <ul style={{ lineHeight: '2', marginBottom: '2rem' }}>
           <li><strong>Human-Centered:</strong> Building resilience through trust, shared mental models, and shared purpose</li>
           <li><strong>Adaptive:</strong> Embracing uncertainty through satisficing, iterative action, and decentralized adaptation</li>
           <li><strong>Ethical Integrity:</strong> Unwavering commitment to doing what's right in moral gray zones</li>
           <li><strong>Confidentiality:</strong> Absolute discretion in all engagements</li>
          </ul>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link href="/team" className={`${styles.btn} ${styles.btnPrimary}`}>
              Meet The Collective
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
