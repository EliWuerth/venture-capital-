// src/components/Portfolio.js
import { motion } from 'framer-motion';
import React from 'react';

// ⚡ IMPORTANT: Update these imports to match your file structure and names
import projectAImage from '../assets/AdobeStock_1215968101.jpeg';
import projectBImage from '../assets/AdobeStock_1221806902.jpeg';
import projectCImage from '../assets/AdobeStock_1234862083.jpeg';

const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const portfolioItems = [
    { title: 'SYNAPSE AI', desc: 'Predictive market analysis with 99% accuracy. FinTech meets deep learning.', imageUrl: projectAImage, featured: true, tag: 'AI & Data' },
    { title: 'GEO-CHARGE', desc: 'Global rollout of scalable, off-grid renewable energy infrastructure.', imageUrl: projectBImage, featured: false, tag: 'GreenTech' },
    { title: 'LEDGER-X', desc: 'Decentralized corporate finance platform based on quantum-resistant blockchain.', imageUrl: projectCImage, featured: false, tag: 'FinTech' },
    { title: 'BioCode', desc: 'Genomic sequencing accelerator reducing drug discovery time by 40%.', imageUrl: projectAImage, featured: false, tag: 'HealthTech' },
    { title: 'AetherNet', desc: 'Secured mesh network for military and high-security communication.', imageUrl: projectBImage, featured: false, tag: 'Security' }
];

const FeaturedItem = portfolioItems.find(item => item.featured) || portfolioItems[0];
const OtherItems = portfolioItems.filter(item => !item.featured);


const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ paddingTop: '8rem',background: 'var(--section-bg)' }}>
        <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: '1rem', marginTop: '1rem' }}
        >
          Portfolio of Future Market Leaders
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem'}}
        >
            We deploy capital into three core sectors, demanding audacious vision and defensible technological moats.
        </motion.p>
        
        {/* Featured Project Section */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
                marginTop: '3rem',/* Add top margin to separate it from the header text */
                marginBottom: '5rem', 
                height: '550px', 
                backgroundImage: `url(${FeaturedItem.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '3rem',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                border: '5px solid var(--secondary-color)',
            }}
        >
            <div className="portfolio-overlay" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '3rem', borderRadius: '15px' }}>
                <span style={{ color: 'var(--secondary-red)', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                    FEATURED PROJECT: {FeaturedItem.tag}
                </span>
                <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>{FeaturedItem.title}</h3>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '800px', margin: 0 }}>{FeaturedItem.desc} <br/> Read the in-depth breakdown of our largest exit to date.</p>
                <button className="cta-button" style={{ marginTop: '1.5rem', padding: '0.8rem 2rem' }}>VIEW CASE STUDY</button>
            </div>
        </motion.div>


        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--primary-blue)',paddingTop: '20rem', marginBottom: '3rem' }}>
            Core Portfolio Investments
        </h3>

        {/* Remaining Projects Grid */}
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {OtherItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ backgroundImage: `url(${item.imageUrl})`, height: '300px' }}
            >
              <div className="portfolio-overlay" style={{ padding: '2rem' }}>
                <span style={{ color: 'var(--secondary-color)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>{item.tag}</span>
                <h3 style={{ color: 'white' }}>{item.title}</h3>
                <p style={{ fontSize: '1rem' }}>{item.desc}</p>
                <button className="learn-more-btn" style={{ marginTop: '1rem' }}>DETAILS</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default Portfolio;