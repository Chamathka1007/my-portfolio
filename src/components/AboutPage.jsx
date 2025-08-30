import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./styles/AboutPage.css";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="about-content"
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I’m P.G Chamathka Sithumini S.De Silva, a passionate software engineer with a strong foundation in developing efficient and user-friendly digital solutions. I completed my BTEC Higher National Qualification in Software Engineering under London Metropolitan University and am currently enrolled in the Top-Up program, which is the final year of my degree.
          </p>
          <p className="about-text">
            Alongside my technical expertise in full-stack development and problem-solving, I bring strong soft skills such as effective communication, teamwork, adaptability, and a keen attention to detail. I enjoy collaborating on challenging projects, continuously learning new technologies, and creating solutions that make a real impact.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="about-image-container"
        >
          <div className="about-image">
            <img 
              src="public/img25.jpg" 
              alt="Chamathka Sithumini"
              className="about-avatar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;