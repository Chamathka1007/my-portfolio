import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import "./styles/ContactPage.css";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'cssithu02@gmail.com' },
    { icon: '📱', label: 'Phone', value: '076-4383920' },
    { icon: '📍', label: 'Location', value: 'No. 251/7, J.E Perera Road, Megalle,Galle., Sri Lanka' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile' }
  ];

  return (
    <section id="contact" ref={ref} className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="contact-info"
        >
          <h2 className="contact-title">Get In Touch</h2>
          
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="contact-item"
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details-text">
                  <div className="contact-label">{info.label}</div>
                  <div className="contact-value">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="contact-form-container"
        >
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="form-textarea"
                required
              />
            </div>

            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="form-submit"
            >
              Send Message ✨
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;