import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// Import your SCSS file
import './HeroSection.scss';

const HeroSection = () => {
  // Ref for the hero section
  const heroWrapperRef = useRef(null);
  
  // Create scroll animations using Framer Motion's useScroll
  const { scrollYProgress } = useScroll({
    target: heroWrapperRef,
    offset: ["start start", "end start"]
  });
  
  // Title horizontal movement (moves left as user scrolls)
  const titleX = useTransform(scrollYProgress, [0, 1.05], ["0%", "-70%"]);
  
  // Left & right image groups vertical movement
  const leftImagesY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rightImagesY = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  
  // Individual image animations
  const imageConfigs = {
    third: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "8%"]),
    },
    fourth: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "12%"]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, -5]),
    },
    second: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]),
      rotate: useTransform(scrollYProgress, [0, 1], [0, 10]),
    },
    first: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
    },
    sixth: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
      scale: useTransform(scrollYProgress, [0, 1], [1, 0.95]),
    },
    fifth: {
      y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]),
      scale: useTransform(scrollYProgress, [0, 1], [1, 0.9]),
    }
  };
  
  // Animation variants for initial fade-in
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        delay 
      }
    })
  };

  return (
    <motion.div 
      className="hero-wrapper" 
      ref={heroWrapperRef}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-interaction"></div>
      <div className="hero-first">
        <div className="hero-preview">
          <div className="hero-content">
            <div className="hero-text-wrapper">
              <div className="hero-home-flex">
                <div className="hero-overflow-title">
                  <div className="top-title-overflow">
                    <motion.h1 
                      className="hero-main-title"
                      style={{ x: titleX }}
                      custom={0.3}
                      variants={fadeInVariants}
                    >
                      Digital Innovation Studio
                    </motion.h1>
                  </div>
                </div>
                
                {/* Left Images Group */}
                <motion.div className="main-strip" style={{ y: leftImagesY }}>
                  <div className="hero-images left">
                    <motion.div 
                      className="main-image third"
                      style={{ y: imageConfigs.third.y }}
                      custom={0.5}
                      variants={fadeInVariants}
                    >
                      <img 
                        sizes="(max-width: 479px) 100vw, 23vw"
                        srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6733507a003f74c018b90ea4_work-8-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6733507a003f74c018b90ea4_work-8-p-800.avif 800w"
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6733507a003f74c018b90ea4_work-8.avif"
                        loading="eager" 
                        className="image-fill" 
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="main-image fourth"
                      style={{ 
                        y: imageConfigs.fourth.y, 
                        rotate: imageConfigs.fourth.rotate 
                      }}
                      custom={0.6}
                      variants={fadeInVariants}
                    >
                      <img
                        sizes="(max-width: 479px) 41vw, (max-width: 991px) 19vw, 15vw"
                        srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b51761780c73184d6be27_work-4-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b51761780c73184d6be27_work-4-p-800.avif 800w"
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b51761780c73184d6be27_work-4.avif"
                        loading="eager" 
                        className="image-fill" 
                      />
                    </motion.div>
                    
                    <div className="main-image seven"></div>
                    <div className="main-image eight"></div>
                  </div>
                </motion.div>
                
                {/* Right Images Group */}
                <motion.div className="main-strip right" style={{ y: rightImagesY }}>
                  <div className="hero-images right-slide">
                    <motion.div 
                      className="main-image second"
                      style={{ 
                        y: imageConfigs.second.y, 
                        rotate: imageConfigs.second.rotate 
                      }}
                      custom={0.7}
                      variants={fadeInVariants}
                    >
                      <img 
                        width="360" 
                        loading="eager" 
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b569253e152a1903565f3_scroll-down.avif" 
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="main-image first"
                      style={{ y: imageConfigs.first.y }}
                      custom={0.8}
                      variants={fadeInVariants}
                    >
                      <img
                        sizes="(max-width: 479px) 41vw, (max-width: 991px) 20vw, 16vw"
                        srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb0c1262874241732297c_work-6-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb0c1262874241732297c_work-6-p-800.avif 800w"
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb0c1262874241732297c_work-6.avif"
                        loading="eager" 
                        className="image-fill" 
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="main-image sixth"
                      style={{ 
                        y: imageConfigs.sixth.y, 
                        scale: imageConfigs.sixth.scale 
                      }}
                      custom={0.9}
                      variants={fadeInVariants}
                    >
                      <img 
                        sizes="(max-width: 479px) 100vw, 22vw"
                        srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb284cb302a4669b68d0f_work-7-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb284cb302a4669b68d0f_work-7-p-800.avif 800w"
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb284cb302a4669b68d0f_work-7.avif"
                        loading="eager" 
                        className="image-fill" 
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="main-image fifth"
                      style={{ 
                        y: imageConfigs.fifth.y, 
                        scale: imageConfigs.fifth.scale 
                      }}
                      custom={1}
                      variants={fadeInVariants}
                    >
                      <img 
                        sizes="(max-width: 479px) 41vw, 18vw"
                        srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b505eb37e30ad04b87c26_work-3-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b505eb37e30ad04b87c26_work-3-p-800.avif 800w"
                        alt=""
                        src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b505eb37e30ad04b87c26_work-3.avif"
                        loading="eager" 
                        className="image-fill" 
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;