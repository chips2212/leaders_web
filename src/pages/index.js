import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
         <title>Leaders for uncertainty | Forged in Humanitarian Crises. Built for Human & Organizational Resilience.</title>
         <meta name="description" content="We bring field-tested strategies from humanitarian war zones to organizations navigating volatility in Tech, Finance, Energy, and Sports to build resilient, ethical, adaptable leaders who embrace uncertainty and are built on people." />
      </Head>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
             Forged in Humanitarian Crises.<br />
              <span className={styles.heroTitleAccent}>Built for Human & Organizational Resilience.</span>
          </h1>
           <p className={styles.heroSubtitle}>
             We bring field-tested strategies from humanitarian war zones to organizations 
             navigating volatility in Tech, Finance, Energy, and Sports to build resilient, ethical, adaptable leaders.
           </p>
          <div className={styles.heroCtas}>
            <Link href="/about" className={`${styles.btn} ${styles.btnPrimary}`}>
              Explore Our Approach
            </Link>
            <Link href="/services" className={`${styles.btn} ${styles.btnSecondary}`}>
              View Services
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageContainer}>
             <img
               src="/images/hero/humanitarian-crisis.jpg"
               alt="Humanitarian aid workers responding to crisis - representing the field-tested experience behind our leadership methods"
               className={styles.heroImage}
             />
             <div className={styles.heroImageOverlay}>
               <span className={styles.heroLabelLeft}>Field-Tested in Crisis Zones</span>
               <span className={styles.heroLabelRight}>Applied to Your Challenges</span>
             </div>
          </div>
        </div>
      </section>

      {/* PROOF OF EXTREME SECTION */}
      <section className={styles.proofSection}>
        <div className={styles.container}>
          <div className={styles.proofContent}>
            <h2 className={styles.proofStatement}>
             "If our methods work where stakes are life and death, 
               they work for your market volatility because true resilience is built on people and embraces the unknown."
            </h2>
            <div className={styles.proofStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Conflict Zones</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>Global Industries</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Field Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR SNAPSHOT - HUB AND SPOKE */}
      <section className={styles.sectorsSection}>
        <div className={styles.container}>
           <h2 className={styles.sectionTitle}>Where We Apply Humanitarian-Grade Leadership</h2>
           <p className={styles.sectionSubtitle}>Hover to see the parallel between humanitarian crises and sector challenges - because true resilience is built on people and embraces the unknown.</p>
          
          <div className={styles.sectorsGrid}>
            {/* Center - Core Expertise */}
            <div className={`${styles.sectorCard} ${styles.sectorCardCenter}`} style={{ backgroundImage: 'url(/images/sectors/ngo-field.jpg)' }}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Humanitarian Aid &<br />Crisis Response</h3>
                <span className={styles.sectorBadge}>Core Expertise</span>
                <p className={styles.sectorParallel}>
                  <strong>The Foundation:</strong> Every method we teach was proven where failure means loss of life. 
                  Convoy security, supply chain resilience, and team cohesion under fire.
                </p>
              </div>
            </div>

            {/* Surrounding Cards */}
            <Link href="/sectors/tech-ai" className={styles.sectorCard} style={{ backgroundImage: 'url(/images/sectors/tech-office.jpg)' }}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Tech & AI</h3>
              </div>
              <div className={styles.sectorHoverContent}>
                <p className={styles.crisisParallel}>
                  <strong>From Blockades to Supply Chain Shocks:</strong> 
                  Adapting when critical dependencies fail overnight
                </p>
              </div>
            </Link>

            <Link href="/sectors/finance-fintech" className={styles.sectorCard} style={{ backgroundImage: 'url(/images/sectors/finance-fintech.webp)' }}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Finance & Fintech</h3>
              </div>
              <div className={styles.sectorHoverContent}>
                <p className={styles.crisisParallel}>
                  <strong>From Evacuation Decisions to Pivot Calls:</strong> 
                  Knowing when to hold position and when to move fast
                </p>
              </div>
            </Link>

            <Link href="/sectors/energy-logistics" className={styles.sectorCard} style={{ backgroundImage: 'url(/images/sectors/energy-logistics.webp)' }}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Energy & Logistics</h3>
              </div>
              <div className={styles.sectorHoverContent}>
                <p className={styles.crisisParallel}>
                  <strong>From Route Security to Infrastructure Resilience:</strong> 
                  Maintaining operations when systems fail
                </p>
              </div>
            </Link>

            <Link href="/sectors/sports-esports" className={styles.sectorCard} style={{ backgroundImage: 'url(/images/sectors/esports-stage.jpg)' }}>
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>Sports & Esports</h3>
              </div>
              <div className={styles.sectorHoverContent}>
                <p className={styles.crisisParallel}>
                  <strong>From Combat Stress to Performance Pressure:</strong> 
                  Mental frameworks for high-stakes moments
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
           <h2 className={styles.sectionTitle}>Our Humanitarian-Grade Toolkit</h2>
           <p className={styles.sectionSubtitle}>
             Six core services, each refined in the world's most demanding environments to build leaders who embrace uncertainty and are built on people
           </p>

          <div className={styles.servicesGrid}>
            <Link href="/services/coaching" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🎯</div>
              <h3>Executive Coaching</h3>
              <p>One-on-one leadership development for volatility</p>
            </Link>

            <Link href="/services/training" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📚</div>
              <h3>Leadership Training</h3>
              <p>Workshops on decision-making under pressure</p>
            </Link>

            <Link href="/services/od" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏢</div>
              <h3>Org Development</h3>
              <p>Building resilient, adaptive organizations</p>
            </Link>

            <Link href="/services/mentoring" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🤝</div>
              <h3>Mentoring Programs</h3>
              <p>Knowledge transfer from field to boardroom</p>
            </Link>

            <Link href="/services/crisis" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚨</div>
              <h3>Crisis Management</h3>
              <p>Preparation, response, and recovery protocols</p>
            </Link>

            <Link href="/services/consulting" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💡</div>
              <h3>Specialized Consulting</h3>
              <p>Bespoke solutions for complex challenges</p>
            </Link>
          </div>

          <div className={styles.servicesLink}>
            <Link href="/services" className={styles.linkArrow}>
              See How We Apply These Services →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className={styles.insightSection}>
        <div className={styles.container}>
          <div className={styles.insightCard}>
            <div className={styles.insightLabel}>Featured Insight</div>
             <h2 className={styles.insightTitle}>
               What Esports Can Learn from Humanitarian Convoy Leaders: Building Resilience Through People and Adaptability
             </h2>
            <p className={styles.insightExcerpt}>
              The parallels between leading a convoy through contested territory and calling shots 
              in a championship match are striking. Both require split-second decisions with incomplete 
              information, team coordination under extreme pressure, and the ability to maintain focus 
              when adrenaline peaks. Here's what we've learned from the field that applies to the stage...
            </p>
            <Link href="/insights/2026-04-01-lessons-from-convoy-leaders" className={styles.btn}>
              Read Full Article
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className={styles.footerCta}>
        <div className={styles.container}>
           <h2 className={styles.footerCtaTitle}>
             Ready to Build Human-Centered Resilience?
           </h2>
           <p className={styles.footerCtaSubtitle}>
             Let's discuss how humanitarian-grade strategies can transform your organization's resilience by building on people and embracing uncertainty.
           </p>
          <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
}
