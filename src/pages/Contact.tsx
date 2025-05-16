import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ContactHero from '../components/sections/ContactHero';
import ContactForm from '../components/sections/ContactForm';
import './Contact.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Create ScrollTrigger for pinning hero section
    const trigger = ScrollTrigger.create({
      trigger: ".hero-container",
      start: "bottom bottom",
      end: "top top",
      endTrigger: ".content-wrapper",
      pin: true,
      pinSpacing: false,
      anticipatePin: 1, // Helps with smoother pinning
      markers: false, // Set to true for debugging
    });
    
    // Clean up ScrollTrigger when component unmounts
    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
    >
      <div className="hero-container">
        <ContactHero />
      </div>
      <div className="content-wrapper">
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact; 