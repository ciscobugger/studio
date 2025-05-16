import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button3D from '../Button3D';
import './AboutSection.scss';

// Custom component for text with horizontal reveal effect
interface HorizontalRevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const HorizontalRevealText = ({ children, className = "", delay = 0 }: HorizontalRevealTextProps) => {
  const textRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.95", "end 0.5"] // Start when 80% from top, end when 50% from top
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

const AboutSection = () => {
  return (
    <section className="section for-logo">
      <div className="container">
        <div className="flex-center">
          {/* Using the horizontal reveal for text */}
          <HorizontalRevealText className="subhead-main _80">
            Digital Innovation Studio is a forward-thinking agency that transforms ideas into immersive digital experiences. We specialize in creating innovative web solutions, captivating designs, and strategic digital transformations that help brands make a splash in the digital world.
          </HorizontalRevealText>
          
          <div className="button-flex">
            {/* Using the horizontal reveal for button */}
            <Button3D text="about us" href="/about" />
              

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;