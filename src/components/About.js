// src/components/About.js
import { motion } from 'framer-motion';
import React from 'react';

// NOTE: Ensure these motion variants are available, either imported or defined here
const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

const About = () => {
  return (
    <section id="about" className="section" style={{ textAlign: 'left' }}>
        <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{ textAlign: 'center', marginBottom: '1rem', paddingTop: '4rem' }}
        >
          Unlocking Exponential Growth
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem', color: 'var(--primary-color)'}}
        >
            We deploy hyper-focused capital into ventures with the technological capability to redefine global markets.
        </motion.p>
        
        {/* Main Split Content: Mission & Strategy */}
        <div style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start', borderBottom: '2px solid var(--section-bg)', paddingBottom: '4rem' }}>
            
            {/* Left Column: Core Mission */}
            <motion.div 
                style={{ flex: 1.5, maxWidth: '60%', paddingRight: '2rem' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>
                    Our Core Thesis: Activated Capital
                </h3>
                <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '2rem' }}>
                    VC Capital is not just an investment firm; we are a dedicated growth partner. We provide the capital, connections, and strategic expertise required to scale groundbreaking technologies into global market leaders. Our focus is strictly on ventures that promise massive positive disruption.
                </p>
                <p style={{ fontSize: '1.15rem', opacity: 0.9 }}>
                    Our capital isn't passive; it's activated by proprietary machine learning models to predict market fit and accelerate growth, turning seed-stage concepts into market-defining platforms in record time.
                </p>
            </motion.div>

            {/* Right Column: Strategy Breakdown */}
            <motion.div 
                style={{ flex: 1, paddingLeft: '3rem', borderLeft: '4px solid var(--primary-color)' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                    Strategy Breakdown
                </h3>
                <motion.div className="stat" variants={itemVariants} style={{ marginBottom: '1.5rem', padding: '1.5rem', textAlign: 'left', boxShadow: 'none', border: 'none', background: 'var(--light-bg)' }}>
                    <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary-color)' }}>Phase 1: Deep Seed</p>
                    <p style={{ fontSize: '1rem', color: 'var(--dark-text)', opacity: 0.8 }}>Investment into IP and prototype development. Focus on technical defense.</p>
                </motion.div>
                <motion.div className="stat" variants={itemVariants} style={{ marginBottom: '1.5rem', padding: '1.5rem', textAlign: 'left', boxShadow: 'none', border: 'none', background: 'var(--light-bg)' }}>
                    <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary-color)' }}>Phase 2: Hyper Scale</p>
                    <p style={{ fontSize: '1rem', color: 'var(--dark-text)', opacity: 0.8 }}>Aggressive market penetration using network effects and strategic M&A.</p>
                </motion.div>
                <motion.div className="stat" variants={itemVariants} style={{ padding: '1.5rem', textAlign: 'left', boxShadow: 'none', border: 'none', background: 'var(--light-bg)' }}>
                    <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary-color)' }}>Phase 3: Global Dominance</p>
                    <p style={{ fontSize: '1rem', color: 'var(--dark-text)', opacity: 0.8 }}>Positioning for IPO or large-scale acquisition (4x target ROI).</p>
                </motion.div>
            </motion.div>
        </div>
        
        {/* Secondary Section: Financial Overview (Centred Stats) */}
        <motion.div 
            style={{ textAlign: 'center', marginTop: '4rem' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>
                Financial Traction
            </h3>
            <div className="stats" style={{ justifyContent: 'center', gap: '3rem' }}>
                <motion.div className="stat" variants={itemVariants} style={{ minWidth: '250px' }}>
                    $500M+ <br/> AUM
                </motion.div>
                <motion.div className="stat" variants={itemVariants} style={{ minWidth: '250px' }}>
                    4.2x <br/> Average ROI
                </motion.div>
                <motion.div className="stat" variants={itemVariants} style={{ minWidth: '250px' }}>
                    20+ <br/> Active Disruptors Funded
                </motion.div>
            </div>
        </motion.div>

    </section>
  );
};

export default About;