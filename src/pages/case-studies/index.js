import Head from 'next/head';
import Link from 'next/link';
import { fetchAllContent } from '../../utils/fetchContent';
import styles from '../../styles/Services.module.css';

export default function CaseStudiesIndex({ caseStudies }) {
  return (
    <>
      <Head>
         <title>Case Studies | Leaders for uncertainty</title>
         <meta name="description" content="Real-world case studies comparing NGO crisis response to corporate leadership challenges, showing how humanitarian-grade strategies build leaders who embrace uncertainty and are built on people across sectors." />
      </Head>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
           <h1 className={styles.pageTitle}>Case Studies: Humanitarian-Grade Leadership in Action</h1>
           <p className={styles.pageSubtitle}>
             Paired comparisons showing how humanitarian crisis strategies directly apply 
             to corporate, tech, finance, and sports leadership challenges to build leaders who embrace uncertainty and are built on people.
           </p>
        </header>

        <div className={styles.servicesGrid}>
          {caseStudies.map((study) => (
            <Link 
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className={styles.serviceCard}
            >
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIcon}>📊</span>
                <h2 className={styles.serviceTitle}>{study.frontmatter.title}</h2>
              </div>
              <p className={styles.serviceDescription}>{study.frontmatter.description}</p>
              {study.frontmatter.sectors && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {study.frontmatter.sectors.map((sector) => (
                    <span 
                      key={sector}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              )}
              <span className={styles.learnMore}>Read case study →</span>
            </Link>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No case studies published yet. Check back soon.</p>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const caseStudies = fetchAllContent('case-studies');
  
  return {
    props: {
      caseStudies,
    },
  };
}
