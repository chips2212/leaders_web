import Head from 'next/head';
import Link from 'next/link';
import { fetchAllContent } from '../../utils/fetchContent';
import styles from '../../styles/Services.module.css';

export default function TeamIndex({ teamMembers }) {
  return (
    <>
      <Head>
         <title>The Collective | Leaders for uncertainty</title>
         <meta name="description" content="Meet our collective of coaches, trainers, and consultants with decades of experience in humanitarian crises and corporate leadership, building resilience through people and embracing uncertainty." />
      </Head>

      <div className={styles.container}>
        <header className={styles.pageHeader}>
           <h1 className={styles.pageTitle}>Leaders for Uncertainty Collective</h1>
           <p className={styles.pageSubtitle}>
             Coaches, trainers, and consultants who have led through the most demanding 
             environments on Earth, building resilience through people and embracing uncertainty.
           </p>
        </header>

        <div className={styles.servicesGrid}>
          {teamMembers.map((member) => (
            <div 
              key={member.slug}
              className={styles.serviceCard}
              style={{ textAlign: 'center' }}
            >
              {member.frontmatter.image && (
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  margin: '0 auto 1.5rem',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                }}>
                  <img 
                    src={member.frontmatter.image} 
                    alt={member.frontmatter.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={styles.serviceHeader} style={{ justifyContent: 'center' }}>
                <h2 className={styles.serviceTitle}>{member.frontmatter.name}</h2>
              </div>
              <p style={{ color: 'var(--accent-crimson)', fontWeight: '600', marginBottom: '1rem' }}>
                {member.frontmatter.role}
              </p>
              <p className={styles.serviceDescription}>{member.frontmatter.bio}</p>
              {member.frontmatter.expertise && (
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {member.frontmatter.expertise.slice(0, 3).map((skill) => (
                    <span 
                      key={skill}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'var(--bg-secondary)',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {teamMembers.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Team information coming soon.</p>
          </div>
        )}

        <div className={styles.ctaSection} style={{ marginTop: '4rem' }}>
          <h2>Join The Collective</h2>
          <p>We're always looking for experienced leaders with field-tested crisis experience.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Express Interest
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const teamMembers = fetchAllContent('team');
  
  return {
    props: {
      teamMembers,
    },
  };
}
