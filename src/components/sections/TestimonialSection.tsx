import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import './TestimonialSection.scss';
import Button3D from '../Button3D';

// Custom component for text with horizontal reveal effect
interface HorizontalRevealTextProps {
  children: ReactNode;
  className?: string;
}

const HorizontalRevealText = ({ children, className = "" }: HorizontalRevealTextProps) => {
  const textRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.95", "end 0.5"] // Start when element is almost in view
  });
  
  // Map scroll progress to gradient position
  const gradientX = useTransform(
    scrollYProgress,
    [0, 0.75], // Animation completes at 75% of scroll
    ["-50%", "100%"] // Gradient moves from left to right
  );
  
  return (
    <div className="fade-in-wrapper" ref={textRef}>
      <div className={className}>
        {children}
      </div>
      <motion.div
        className="fade-gradient"
        style={{ x: gradientX }}
        initial={{ x: "-50%" }}
      />
    </div>
  );
};

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("visible");
    }
  }, [isInView, fadeControls]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div>
          <div className="container">
            <motion.div 
              className="founder-wrapper"
              initial="hidden"
              animate={fadeControls}
              variants={fadeVariants}
            >
              <div className="image-wrap cricle">
                <img
                  src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif"
                  loading="lazy" 
                  sizes="180px"
                  srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif 800w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif 1080w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif 2522w"
                  alt="Digital Innovation Studio Logo" 
                  className="paralax-image" 
                />
              </div>
            </motion.div>
            
            {/* Using HorizontalRevealText for testimonial text */}
            <div className="margin-40px">
              <HorizontalRevealText className="testimonials-text-wrapper">
                <p className="testimonials-text">&quot;Working with Digital Innovation Studio was an exceptional experience from start to finish.&quot;</p>
              </HorizontalRevealText>
              <div className="line-divider"></div>
            </div>
            
            <div>
              <div className="fun-facts-grid _3-column">
                {[
                  { number: '3', text: 'Featured work' },
                  { number: '15+', text: 'Projected Completed' },
                  { number: '2x', text: 'Awwwards Featured' }
                ].map((fact, index) => (
                  <motion.div 
                    key={index} 
                    className="align-center"
                    custom={index}
                    initial="hidden"
                    animate={fadeControls}
                    variants={staggerVariants}
                  >
                    <HorizontalRevealText className="fun-number-wrapper">
                      <h3 className="fun-number">{fact.number}</h3>
                      <p>{fact.text}</p>
                    </HorizontalRevealText>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="margin-250px">
              <div className="flex-center">
                <HorizontalRevealText className="subhead-main _80">
                  Our expertise is in designing visuals that effectively connect with the target audience.
                </HorizontalRevealText>
                <div className="button-flex">
                  <Button3D text="work with us" href="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 