import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button3D from '../Button3D';
import './TeamSection.scss';

// Custom component for text with horizontal reveal effect
interface HorizontalRevealTextProps {
  children: ReactNode;
  className?: string;
}

const HorizontalRevealText = ({ children, className = "" }: HorizontalRevealTextProps) => {
  const textRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.95", "end 0.5"] // Start when element is almost in view, end when 50% from top
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

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="margin-250px">
          <div className="flex-center">
            <HorizontalRevealText className="subhead-main _80">
              Our team excels in creating designs that speak directly to the audience's needs.
            </HorizontalRevealText>
            <div className="button-flex">
              <Button3D text="join us" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 