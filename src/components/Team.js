// src/components/Team.js
import { motion } from 'framer-motion';
import React from 'react';

const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
};

const teamMembers = [
    { name: "Adrian Vane", role: "Founding Partner", expertise: "Investment Strategy, Market Entry, 2x Exits", bio: "The architect of our extreme-growth philosophy. Focuses on thesis generation and macro-economic forecasting.", type: 'partner' },
    { name: "Dr. Lena Voss", role: "Managing Partner", expertise: "DeepTech, Quantum, IP Monetization", bio: "Holds 15 patents in quantum computing. Drives our technical due diligence and R&D partnerships.", type: 'partner' },
    { name: "Marco Diaz", role: "Investment Lead, FinTech", expertise: "Blockchain, HFT, Capital Structuring", bio: "Former Wall Street veteran. Specializes in structuring complex, high-leverage funding rounds.", type: 'lead' },
    { name: "Chloe Park", role: "Investment Lead, BioTech", expertise: "Genomics, Drug Discovery, Clinical Trials", bio: "Focuses on maximizing the synergy and psychological support for our portfolio founders.", type: 'lead' },
    { name: "Samir Kahan", role: "Head of Operations", expertise: "Operational Scaling, Efficiency Audits", bio: "Ensures portfolio companies achieve flawless operational execution during hyper-growth phases.", type: 'lead' }
];

const Partners = teamMembers.filter(m => m.type === 'partner');
const Leads = teamMembers.filter(m => m.type === 'lead');

const Team = () => {
  return (
    <section id="team" className="section" style={{ paddingTop: '8rem' }}>
        <motion.h2
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: '1rem' }}
        >
          The Extreme Experts
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem', color: 'var(--primary-color)'}}
        >
            A concentrated team of domain experts, not generalists. Our strength is in specialist knowledge and relentless execution.
        </motion.p>
        
        {/* Partnership Tier */}
        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--secondary-red)', marginBottom: '3rem' }}>
            Founding & Managing Partners
        </h3>
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', marginBottom: '5rem' }}
        >
          {Partners.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              style={{ textAlign: 'left', padding: '3rem', borderLeft: '5px solid var(--secondary-red)', borderBottom: 'none' }}
            >
              <h3 style={{ color: 'black' }}>{member.name}</h3>
              <p style={{ color: 'var(--dark-text)', fontWeight: 700, margin: '0.5rem 0' }}>{member.role}</p>
              <p style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '1rem' }}>{member.bio}</p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark-text)' }}>
                Expertise: <span style={{ color: 'var(--primary-blue)' }}>{member.expertise}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lead Tier */}
        <h3 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--secondary-red)', marginBottom: '3rem' }}>
            Investment & Operational Leads
        </h3>
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {Leads.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              style={{ textAlign: 'center', padding: '2rem', borderBottom: '5px solid var(--primary-blue)', borderLeft: 'none' }}
            >
              <h3 style={{ color: 'var(--dark-text)', fontSize: '1.4rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 700, margin: '0.5rem 0' }}>{member.role}</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{member.expertise}</p>
            </motion.div>
          ))}
        </motion.div>
    </section>
  );
};

export default Team;