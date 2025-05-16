import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AboutHero from '../components/sections/AboutHero';
import AboutDetails from '../components/sections/AboutDetails';
import ClientsSection from '../components/sections/ClientsSection';
import AboutImageSection from '../components/sections/AboutImageSection';
import TeamSection from '../components/sections/TeamSection';
import './About.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
    >
      <div className="hero-container">
        <AboutHero />
      </div>
      <div className="content-wrapper">
        <AboutDetails />
        <ClientsSection />
        <AboutImageSection />
        <TeamSection />
      </div>
    </motion.div>
  );
};

export default About; 