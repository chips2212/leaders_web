import Head from 'next/head';
import Link from 'next/link';
import { fetchContent, getAllContentSlugs } from '../../utils/fetchContent';
import styles from '../../styles/ServiceDetail.module.css';

export default function InsightDetail({ insight }) {
  if (!insight) {
    return <div>Article not found</div>;
  }

  const { frontmatter, contentHtml } = insight;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Crisis-Forged Leadership</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <article className={styles.container}>
        <header className={styles.serviceHeader}>
          <div className={styles.headerContent}>
            <span className={styles.serviceIcon}>📝</span>
            <h1 className={styles.serviceTitle}>{frontmatter.title}</h1>
            {frontmatter.date && (
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
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
            <h3>Want to discuss this topic?</h3>
            <p>Let's explore how these insights apply to your organization's challenges.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
          
          <Link href="/insights" className={styles.backLink}>
            ← Back to All Insights
          </Link>
        </footer>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentSlugs('insights');
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const insight = await fetchContent('insights', params.slug);
  
  return {
    props: {
      insight,
    },
  };
}
