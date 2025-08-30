import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./styles/Skills.css";

const SkillsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'C#', level: 85, icon: '💜', color: '#239120' },
    { name: 'React', level: 60, icon: '⚛️', color: '#61DAFB' },
    { name: 'Python', level: 80, icon: '🐍', color: '#3776AB' },
    { name: 'HTML', level: 90, icon: '🌐', color: '#E34F26' },
    { name: 'CSS', level: 90, icon: '🎨', color: '#1572B6' },
    { name: 'Java', level: 70, icon: '☕', color: '#ED8B00' },
    { name: 'SQL', level: 85, icon: '🗄️', color: '#336791' },
    { name: 'PHP', level: 80, icon: '🐘', color: '#777BB4' }
  ];

  return (
    <section id="skills" ref={ref} className="skills">
      <div className="skills-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="skills-title"
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="skill-card"
            >
              <div className="skill-header">
                <motion.span 
                  className="skill-icon"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {skill.icon}
                </motion.span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              
              <div className="skill-progress">
                <div className="skill-bar-container">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
                    className="skill-bar"
                    style={{ '--skill-color': skill.color }}
                  />
                </div>
                
                <div className="skill-percentage-container">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    className="skill-percentage"
                  >
                    <span className="percentage-number">{skill.level}</span>
                    <span className="percentage-symbol">%</span>
                  </motion.div>
                  <div className="skill-level-text">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Basic'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;