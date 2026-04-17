import Head from 'next/head';
import Link from 'next/link';
import { fetchContent, getAllContentSlugs } from '../../utils/fetchContent';
import styles from '../../styles/ServiceDetail.module.css';

// Helper function to get background image for each service
function getServiceBackground(slug) {
  const overlays = 'linear-gradient(rgba(26, 26, 46, 0.6), rgba(26, 26, 46, 0.65))';
  
  const backgrounds = {
    'crisis-management': `/images/services/crisis-management-bg.jpg`,
    'executive-coaching': `/images/services/executive-coaching-bg.jpg`,
    'leadership-training': `/images/services/leadership-training-bg.jpg`,
    'mentoring-programs': `/images/services/mentoring-programs-bg.jpg`,
    'organizational-development': `/images/services/organizational-development-bg.jpg`,
    'specialized-consulting': `/images/services/specialized-consulting-bg.jpg`,
  };
  
  const image = backgrounds[slug] || '/images/hero/humanitarian-crisis.jpg';
  return `${overlays}, url('${image}')`;
}

export default function ServiceDetail({ service, slug }) {
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
        <header 
          className={styles.serviceHeader}
          style={{
            backgroundImage: getServiceBackground(slug),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
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
      slug: params.slug,
    },
  };
}
