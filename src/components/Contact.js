// src/components/Contact.js
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Placeholder: Submission logic goes here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); 
      setFormData({ name: '', email: '', message: '' });
    }
  };
    
  return (
    <section id="contact" className="section" style={{ paddingTop: '4rem' }}>
        <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: '1rem' }}
        >
          Let's Deploy Capital
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem', color: 'var(--primary-color)', textAlign: 'center'}}
        >
            Serious inquiries only. We fund disruption, not incremental change.
        </motion.p>
        
        {/* Split Content: Form and Info */}
        <div style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Contact Form */}
            <motion.div 
                style={{ flex: 2 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>
                    Submit Your Pitch
                </h3>
                <form className="contact-form" onSubmit={handleSubmit} style={{ margin: 0, maxWidth: 'none' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name / Company Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Contact Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Pitch: Briefly summarize the market disruption and ask (required)"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Pitch
                  </motion.button>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.p
                      className="success-message"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      style={{ maxWidth: 'none' }}
                    >
                      Pitch submitted successfully! We will review and respond swiftly.
                    </motion.p>
                  )}
                </AnimatePresence>
            </motion.div>

            {/* Right Column: Contact Info & Compliance */}
            <motion.div 
                style={{ flex: 1, padding: '2rem', border: '2px solid var(--section-bg)', borderRadius: '15px' }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
                    Logistics & Compliance
                </h3>
                <p className="contact-info" style={{ margin: '1rem 0', fontSize: '1.1rem', fontWeight: 400, color: 'var(--dark-text)' }}>
                    Email: <span style={{ color: 'var(--primary-color)' }}>info@vccapital.com</span>
                </p>
                <p className="contact-info" style={{ margin: '1rem 0', fontSize: '1.1rem', fontWeight: 400, color: 'var(--dark-text)' }}>
                    HQ Address: <br/>123 Innovation Drive, Suite 100, <br/>San Jose, CA 95110
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '3rem', borderTop: '1px solid var(--section-bg)', paddingTop: '1rem' }}>
                    Disclaimer: Unsolicited materials are reviewed for relevance only. All sensitive documents should be sent via a secure portal post-NDA signing. We are an equal opportunity investor.
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default Contact;