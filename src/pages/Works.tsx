import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import WorksHero from '../components/sections/WorksHero';
import './Works.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import WorksGrid from '../components/sections/WorksGrid';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Works: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
      className="works-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
    >
      <div className="hero-container">
        <WorksHero />
      </div>
      <div className="content-wrapper">
       
        <WorksGrid />
      </div>
    </motion.div>
  );
};

export default Works; 