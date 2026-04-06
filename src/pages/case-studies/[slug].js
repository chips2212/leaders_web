import Head from 'next/head';
import Link from 'next/link';
import { fetchContent, getAllContentSlugs } from '../../utils/fetchContent';
import styles from '../../styles/ServiceDetail.module.css';

export default function CaseStudyDetail({ caseStudy }) {
  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  const { frontmatter, contentHtml } = caseStudy;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Crisis-Forged Leadership</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <article className={styles.container}>
        <header className={styles.serviceHeader}>
          <div className={styles.headerContent}>
            <span className={styles.serviceIcon}>📊</span>
            <h1 className={styles.serviceTitle}>{frontmatter.title}</h1>
            {frontmatter.sectors && (
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                {frontmatter.sectors.map((sector) => (
                  <span 
                    key={sector}
                    style={{
                      fontSize: '0.875rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      color: 'white',
                    }}
                  >
                    {sector}
                  </span>
                ))}
              </div>
            )}
            <p className={styles.serviceDescription}>{frontmatter.description}</p>
          </div>
        </header>

        <div 
          className={styles.serviceContent}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className={styles.serviceFooter}>
          <div className={styles.ctaBox}>
            <h3>Want similar results for your organization?</h3>
            <p>Let's discuss how these strategies can address your specific challenges.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Consultation
            </Link>
          </div>
          
          <Link href="/case-studies" className={styles.backLink}>
            ← Back to All Case Studies
          </Link>
        </footer>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentSlugs('case-studies');
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = await fetchContent('case-studies', params.slug);
  
  return {
    props: {
      caseStudy,
    },
  };
}
