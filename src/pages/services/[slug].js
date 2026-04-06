import Head from 'next/head';
import Link from 'next/link';
import { fetchContent, getAllContentSlugs } from '../../utils/fetchContent';
import styles from '../../styles/ServiceDetail.module.css';

export default function ServiceDetail({ service }) {
  if (!service) {
    return <div>Service not found</div>;
  }

  const { frontmatter, contentHtml } = service;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Crisis-Forged Leadership</title>
        <meta name="description" content={frontmatter.description} />
      </Head>

      <article className={styles.container}>
        <header className={styles.serviceHeader}>
          <div className={styles.headerContent}>
            <span className={styles.serviceIcon}>{frontmatter.icon || '⚡'}</span>
            <h1 className={styles.serviceTitle}>{frontmatter.title}</h1>
            <p className={styles.serviceDescription}>{frontmatter.description}</p>
          </div>
        </header>

        <div 
          className={styles.serviceContent}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <footer className={styles.serviceFooter}>
          <div className={styles.ctaBox}>
            <h3>Ready to explore {frontmatter.title}?</h3>
            <p>Let's discuss how this service can address your specific leadership challenges.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
          
          <Link href="/services" className={styles.backLink}>
            ← Back to All Services
          </Link>
        </footer>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentSlugs('services');
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = await fetchContent('services', params.slug);
  
  return {
    props: {
      service,
    },
  };
}
