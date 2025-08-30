import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./styles/ProjectsPage.css";

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: 'E-Shift Application',
      description: 'This Project was mainly developed using C# language to manage the processes of E-Shift Company. Features include user authentication, payment processing, and admin dashboard.',
      tech: ['C#', 'MySql', '.NET', ],
      image: ''
    },
    {
      title: 'GrandHorizon Hotel Management WebSite',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: ''
    },
    {
      title: 'AI Chatbot',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: '💬'
    },
    {
      title: 'Malcolm Photography WebSite',
      description: 'Real-time messaging application with group chats, file sharing, and video calling capabilities.',
      tech: ['React', 'Socket.io', 'WebRTC', 'Firebase'],
      image: ''
    }
  ];

  return (
    <section id="projects" ref={ref} className="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="projects-title"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="project-card"
            >
              <div className="project-image">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;