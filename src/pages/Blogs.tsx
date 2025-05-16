import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import BlogHero from '../components/sections/BlogHero';
import BlogCards from '../components/sections/BlogCards';
import './Blogs.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Create ScrollTrigger for pinning hero section
    ScrollTrigger.create({
      trigger: ".hero-container",
      start: "bottom bottom",
      end: "top top",
      endTrigger: ".content-wrapper",
      pin: true,
      pinSpacing: false,
    });
    
    // Clean up ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      className="blogs-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={containerRef}
    >
      <div className="hero-container">
        <BlogHero />
      </div>
      <div className="content-wrapper">
        <BlogCards />
      </div>
    </motion.div>
  );
};

export default Blogs; 