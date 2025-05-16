import { useRef } from 'react';
import { motion } from 'framer-motion';
import './BlogHero.scss';

const BlogHero = () => {
  // Ref for the hero wrapper
  const heroWrapperRef = useRef(null);

  return (
    <motion.div 
      className="blog-hero-wrapper" 
      ref={heroWrapperRef}
    >
      <div className="blog-hero-first">
        <div className="blog-hero-content">
          <div className="hero-inner">
            <div className="main-image second absolute">
              <img 
                width="436" 
                loading="eager" 
                alt="Scroll down indicator"
                src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b569253e152a1903565f3_scroll-down.avif" 
              />
            </div>
            <div className="top-title-overflow add-overflow">
              <h1 className="hero-main-title for-inner">Blog</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero; 