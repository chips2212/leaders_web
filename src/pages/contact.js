import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
         <title>Contact Us | Leaders for uncertainty</title>
         <meta name="description" content="Get in touch with Leaders for uncertainty. Let's discuss how humanitarian-grade strategies can transform your organization's resilience by building on people and embracing uncertainty." />
      </Head>

      <div className={styles.container} style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
           <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Build Human-Centered Resilience</h1>
           <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
             Ready to build human-centered resilience? Let's discuss how humanitarian-grade strategies can transform your organization by building on people and embracing uncertainty.
           </p>

          {submitted ? (
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'var(--success-light)', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h2 style={{ color: 'var(--success)', marginBottom: '1rem' }}>
                Message Sent Successfully
              </h2>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label htmlFor="organization" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    fontSize: '1rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
                style={{ alignSelf: 'flex-start' }}
              >
                Send Message
              </button>
            </form>
          )}

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:secure@crisisforged.com" style={{ color: 'var(--accent-crimson)' }}>
                secure@crisisforged.com
              </a>
            </p>
            <p>
              <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
