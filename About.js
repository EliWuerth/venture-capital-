// src/components/About.js
import { motion } from 'framer-motion';
import React from 'react';

// Define Framer Motion variants (You can move these to a central file later, 
// but for now, we'll define them here or import them from App.js if central)
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


const About = () => {
  return (
    <section id="about" className="section">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Unlocking **Exponential** Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          VC Capital is not just an investment firm; we are a dedicated growth partner. We provide the capital, connections, and strategic expertise required to scale groundbreaking technologies into global market leaders. Our focus is strictly on ventures that promise massive positive disruption.
        </motion.p>
        
        {/* Animated Stats */}
        <motion.div 
          className="stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="stat" variants={itemVariants}>
            $500M+ Assets Under Management
          </motion.div>
          <motion.div className="stat" variants={itemVariants}>
            4.2x Average ROI
          </motion.div>
          <motion.div className="stat" variants={itemVariants}>
            20+ Active Disruptors Funded
          </motion.div>
        </motion.div>
    </section>
  );
};

export default About;