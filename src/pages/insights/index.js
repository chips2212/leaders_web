import Head from 'next/head';
import Link from 'next/link';
import { fetchAllContent } from '../../utils/fetchContent';
import styles from '../../styles/Services.module.css';

export default function InsightsIndex({ insights }) {
  return (
    <>
      <Head>
        <title>Insights | Crisis-Forged Leadership</title>
        <meta name="description" content="Articles and insights connecting crisis leadership lessons from humanitarian zones to corporate, tech, finance, and sports sectors." />
      </Head>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Insights</h1>
          <p className={styles.pageSubtitle}>
            Lessons from conflict zones and disaster areas applied to the challenges 
            facing modern organizations.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {insights.map((insight) => (
            <Link 
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className={styles.serviceCard}
            >
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIcon}>📝</span>
                <h2 className={styles.serviceTitle}>{insight.frontmatter.title}</h2>
              </div>
              {insight.frontmatter.date && (
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {new Date(insight.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              <p className={styles.serviceDescription}>{insight.frontmatter.description}</p>
              <span className={styles.learnMore}>Read article →</span>
            </Link>
          ))}
        </div>

        {insights.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No insights published yet. Check back soon.</p>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const insights = fetchAllContent('insights');
  
  return {
    props: {
      insights,
    },
  };
}
