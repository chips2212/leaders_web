import Head from 'next/head';
import Link from 'next/link';
import { fetchContent, getAllContentSlugs } from '../../utils/fetchContent';
import styles from '../../styles/SectorDetail.module.css';

export default function SectorDetail({ sector }) {
  if (!sector) {
    return <div>Sector not found</div>;
  }

  const { frontmatter, contentHtml } = sector;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Crisis-Forged Leadership</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <article className={styles.container}>
        <header className={styles.sectorHeader}>
          <div className={styles.headerContent}>
            {frontmatter.coreExpertise && (
              <span className={styles.coreBadge}>Core Expertise</span>
            )}
            <span className={styles.sectorIcon}>{frontmatter.icon || '⚡'}</span>
            <h1 className={styles.sectorTitle}>{frontmatter.title}</h1>
            <p className={styles.sectorDescription}>{frontmatter.description}</p>
          </div>
        </header>

        <div 
          className={styles.sectorContent}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className={styles.sectorFooter}>
          <div className={styles.ctaBox}>
            <h3>Ready to strengthen leadership in {frontmatter.title}?</h3>
            <p>Let's discuss how crisis-tested strategies can transform your organization's resilience.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule a Consultation
            </Link>
          </div>
          
          <Link href="/sectors" className={styles.backLink}>
            ← Back to All Sectors
          </Link>
        </footer>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentSlugs('sectors');
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sector = await fetchContent('sectors', params.slug);
  
  return {
    props: {
      sector,
    },
  };
}
