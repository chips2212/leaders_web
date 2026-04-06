import Head from 'next/head';
import Link from 'next/link';
import { fetchAllContent } from '../../utils/fetchContent';
import styles from '../../styles/Sectors.module.css';

export default function SectorsIndex({ sectors }) {
  return (
    <>
      <Head>
        <title>Our Expertise | Crisis-Forged Leadership</title>
        <meta name="description" content="Leadership strategies forged in humanitarian crises, applied to organizations navigating volatility in Tech, Finance, Energy, Sports, and Humanitarian sectors." />
      </Head>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Where We Apply Crisis-Tested Leadership</h1>
          <p className={styles.pageSubtitle}>
            Our methods are proven in war zones and disaster areas—making them uniquely robust 
            for corporate, tech, finance, and sports sectors facing volatility.
          </p>
        </header>

        <div className={styles.sectorsGrid}>
          {sectors.map((sector) => (
            <Link 
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className={`${styles.sectorCard} ${sector.frontmatter.coreExpertise ? styles.coreCard : ''}`}
            >
              {sector.frontmatter.coreExpertise && (
                <span className={styles.coreBadge}>Core Expertise</span>
              )}
              <div className={styles.sectorHeader}>
                <span className={styles.sectorIcon}>{sector.frontmatter.icon || '⚡'}</span>
                <h2 className={styles.sectorTitle}>{sector.frontmatter.title}</h2>
              </div>
              <p className={styles.sectorDescription}>{sector.frontmatter.description}</p>
              <span className={styles.learnMore}>Explore sector →</span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Don't see your sector?</h2>
          <p>The leadership principles we teach are universal. Let's discuss how they apply to your specific context.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const sectors = fetchAllContent('sectors');
  
  return {
    props: {
      sectors,
    },
  };
}
