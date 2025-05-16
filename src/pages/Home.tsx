import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ServiceSection from '../components/sections/ServicesSection';
import BlogSection from '../components/sections/BlogSection';
import './Home.scss';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <TestimonialSection />
      <ServiceSection />
      <BlogSection />
    </motion.div>
  );
};

export default Home; 