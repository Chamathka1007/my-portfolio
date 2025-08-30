import React from "react";
import { motion } from "framer-motion";
import "./styles/HomePage.css";

function HomePage() {
  return (
    <section id="home" className="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-title"
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="home-subtitle"
      >
        Scroll down to know more about me 🚀
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="scroll-arrow" />
      </motion.div>

      {/* Floating Circles */}
      <div className="circle"></div>
      <div className="circle circle-2"></div>
    </section>
  );
}

export default HomePage;