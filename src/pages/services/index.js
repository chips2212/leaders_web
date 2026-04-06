import Head from 'next/head';
import Link from 'next/link';
import { fetchAllContent } from '../../utils/fetchContent';
import styles from '../../styles/Services.module.css';

export default function ServicesIndex({ services }) {
  return (
    <>
      <Head>
        <title>Our Services | Crisis-Forged Leadership</title>
        <meta name="description" content="Six core services refined in the world's most demanding environments: Crisis Management, Executive Coaching, Leadership Training, Mentoring, Organizational Development, and Specialized Consulting." />
      </Head>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our Battle-Tested Toolkit</h1>
          <p className={styles.pageSubtitle}>
            Six core services, each refined in the world's most demanding environments.
            Every method has been proven where failure has real consequences.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link 
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.serviceCard}
            >
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIcon}>{service.frontmatter.icon || '⚡'}</span>
                <h2 className={styles.serviceTitle}>{service.frontmatter.title}</h2>
              </div>
              <p className={styles.serviceDescription}>{service.frontmatter.description}</p>
              <span className={styles.learnMore}>Learn more →</span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Not sure which service fits your needs?</h2>
          <p>Let's discuss your specific challenges and find the right approach together.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const services = fetchAllContent('services');
  
  return {
    props: {
      services,
    },
  };
}
