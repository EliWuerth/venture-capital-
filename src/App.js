import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom'; // 👈 Import Routing components
import './App.css';
import projectAImage from './assets/AdobeStock_1215968101.jpeg';
import projectBImage from './assets/AdobeStock_1221806902.jpeg';
import projectCImage from './assets/AdobeStock_1234862083.jpeg';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Team from './components/Team';

// Variant for staggering children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Increased stagger for a more noticeable effect
    },
  },
};

// Variant for individual items to spring in
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150, // Making the spring snappier and bolder
      damping: 15,
    },
  },
};

// Variant for section headers (big and fast)
const headerVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Placeholder: Integrate with EmailJS or backend here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3s
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* 1. Navigation (Updated with <Link>) */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content-wrapper">
            <motion.div className="nav-brand" whileHover={{ scale: 1.05 }}>
              <Link to="/">VC CAPITAL</Link> {/* Link to Home */}
            </motion.div>
            <ul className="nav-links">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/about">About</Link> {/* Link to About Page */}
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/portfolio">Portfolio</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/team">Team</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
        </div>
      </nav>

      {/* 2. Routes for Multi-Page Navigation */}
      <AnimatePresence mode='wait'> {/* Animate page transitions */}
        <Routes location={location} key={location.pathname}>
          
          {/* Home Route (The Hero Section and other initial content) */}
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* This is your existing Hero Section JSX */}
              <section id="home" className="hero">
                {/* ... (Hero content JSX) ... */}
                <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, x: -100 }} // Enter from the left
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }} // Custom, snappier ease
                >
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hero-title"
                  >
                    Empowering Tomorrow's Innovators
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="hero-subtitle"
                  >
                    We invest in bold startups shaping the future of technology, sustainability, and beyond.
                  </motion.p>
                  <motion.button
                    className="cta-button"
                    initial={{ scale: 0.5, rotate: -30 }} // Bolder starting point
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 1 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 12px 25px rgba(30, 64, 175, 0.5)' }} // Stronger shadow
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection('contact')}
                  >
                    ⚡ Explore Opportunities
                  </motion.button>
                </motion.div>
              </section>
              {/* You can put any other shared content here */}
            </motion.div>
          } />

          {/* Individual Page Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404/Catch-all Route */}
          <Route path="*" element={<motion.h2 className="section" initial={{opacity:0}} animate={{opacity:1}}>404: Page Not Found</motion.h2>} />

        </Routes>
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="section">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Unlocking Limitless Potential
        </motion.h2>
        <motion.p
          variants={itemVariants} // Reusing the spring-in variant for the paragraph
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Founded in 2020, VC Capital is a leading venture capital firm dedicated to fueling high-growth startups. With a portfolio exceeding $500M in assets under management, we partner with visionary founders to turn ideas into global successes.
        </motion.p>
        <motion.div
          className="stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {['50+ Investments', '10+ Exits', '$500M+ AUM'].map((stat, index) => (
            <motion.div
              key={index}
              className="stat"
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2 }} // Bold hover rotation
            >
              {stat}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Disruptive Portfolio
        </motion.h2>
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            { 
              title: 'TechStartup AI', 
              desc: 'AI-driven analytics platform revolutionizing data insights.',
              // 👈 USE THE IMPORTED VARIABLE HERE
              imageUrl: projectAImage
            },
            { 
              title: 'GreenEnergy Co.', 
              desc: 'Sustainable energy solutions for a cleaner planet.',
              // 👈 USE THE IMPORTED VARIABLE HERE
              imageUrl: projectBImage
            },
            { 
              title: 'FinTech Innovate', 
              desc: 'Blockchain-based financial services for the masses.',
              // 👈 USE THE IMPORTED VARIABLE HERE
              imageUrl: projectCImage
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.07, boxShadow: '0 25px 45px rgba(0,0,0,0.25)', rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="learn-more-btn">VIEW CASE STUDY</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Meet the Visionaries
        </motion.h2>
        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            { name: 'Jane Doe', role: 'Founding Partner – 15+ years in VC and tech investments.' },
            { name: 'John Smith', role: 'Managing Director – Expertise in SaaS and fintech.' }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05, boxShadow: '0 20px 40px rgba(30, 64, 175, 0.25)', rotate: 2 }} // Bold hover
              transition={{ duration: 0.4 }}
            >
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Ready to Launch?
        </motion.h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.07, rotate: 1 }} // Bold button flourish
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
          >
            SEND A BOLD MESSAGE 🚀
          </motion.button>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Message sent successfully! We'll get back to you soon.
            </motion.p>
          )}
        </AnimatePresence>
        <motion.p
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Email: info@vccapital.com | Phone: (123) 456-7890
        </motion.p>
      </section>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2023 VC CAPITAL. All rights reserved. | Built with React and Framer Motion.</p>
      </motion.footer>
    </div>
  );
}

export default App;
