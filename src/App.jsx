import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/Skills';
import ProjectsPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: 'home', component: HomePage, name: 'home' },
    { id: 'about', component: AboutPage, name: 'about' },
    { id: 'skills', component: SkillsPage, name: 'skills' },
    { id: 'projects', component: ProjectsPage, name: 'projects' },
    { id: 'contact', component: ContactPage, name: 'contact' }
  ];

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile) {
      // Desktop wheel & keyboard scroll
      const handleWheel = (e) => {
        if (isScrolling) return;
        e.preventDefault();
        setIsScrolling(true);
        if (e.deltaY > 0 && currentSection < sections.length - 1) setCurrentSection(prev => prev + 1);
        else if (e.deltaY < 0 && currentSection > 0) setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      };

      const handleKeyDown = (e) => {
        if (isScrolling) return;
        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
          setIsScrolling(true);
          setCurrentSection(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1000);
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
          setIsScrolling(true);
          setCurrentSection(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      };

      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      // Mobile touch scroll
      let touchStartY = 0;

      const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
      const handleTouchMove = (e) => {
        if (isScrolling) return;
        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        if (deltaY > 50 && currentSection < sections.length - 1) {
          setIsScrolling(true);
          setCurrentSection(prev => prev + 1);
          setTimeout(() => setIsScrolling(false), 1000);
        } else if (deltaY < -50 && currentSection > 0) {
          setIsScrolling(true);
          setCurrentSection(prev => prev - 1);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      };

      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });

      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [currentSection, isScrolling, sections.length, isMobile]);

  const goToSection = (sectionIndex) => {
    if (isScrolling || sectionIndex === currentSection) return;
    setIsScrolling(true);
    setCurrentSection(sectionIndex);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const CurrentComponent = sections[currentSection].component;

  const slideVariants = {
    enter: (direction) => ({ y: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { y: 0, opacity: 1, transition: { y: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } },
    exit: (direction) => ({ y: direction > 0 ? '-100%' : '100%', opacity: 0, transition: { y: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } })
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Portfolio</div>
          <div className="nav-menu">
            {sections.map((section, index) => (
              <button key={section.name} onClick={() => goToSection(index)} className={`nav-item ${currentSection === index ? 'active' : ''}`}>
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section Indicators */}
      {!isMobile && (
        <div className="section-indicators">
          {sections.map((_, index) => (
            <button key={index} className={`indicator ${currentSection === index ? 'active' : ''}`} onClick={() => goToSection(index)} />
          ))}
        </div>
      )}

      {/* Page Content */}
      <div className={`page-container ${isMobile ? 'mobile-scroll' : ''}`}>
        {isMobile ? (
          sections.map((section, index) => (
            <div key={index} className="page-section-mobile">
              <section.component />
            </div>
          ))
        ) : (
          <AnimatePresence mode="wait" custom={1}>
            <motion.div key={currentSection} custom={1} variants={slideVariants} initial="enter" animate="center" exit="exit" className="page-section">
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Footer */}
      {currentSection === sections.length - 1 && (
        <motion.footer className="footer" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3 className="footer-logo">Portfolio</h3>
                <p className="footer-description">Building amazing digital experiences with modern technologies.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <div className="footer-links">
                  {sections.map((section, index) => (
                    <button key={section.name} onClick={() => goToSection(index)}>{section.name}</button>
                  ))}
                </div>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">Email</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p>Made with ❤️ using React</p>
              </div>
            </div>
          </div>
        </motion.footer>
      )}
    </div>
  );
};

export default App;
