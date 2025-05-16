import { useRef, useEffect } from 'react';
import './CtaSection.scss';

const CtaSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Clone content for seamless infinite scroll effect
      const contentWidth = contentRef.current.getBoundingClientRect().width;
      
      // Animation for horizontal scrolling
      const marqueeAnimation = () => {
        if (contentRef.current) {
          if (!contentRef.current.style.transform) {
            contentRef.current.style.transform = 'translateX(0)';
          }
          
          const currentTransform = parseFloat(
            contentRef.current.style.transform.replace('translateX(', '').replace('px)', '')
          ) || 0; // Add fallback for parsing errors
          
          const newPosition = currentTransform - 3;
          
          // Reset position when it's scrolled one full content width
          if (Math.abs(newPosition) >= contentWidth / 7) {
            contentRef.current.style.transform = 'translateX(0)';
          } else {
            contentRef.current.style.transform = `translateX(${newPosition}px)`;
          }
        }
        
        requestAnimationFrame(marqueeAnimation);
      };
      
      const animationId = requestAnimationFrame(marqueeAnimation);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, []);

  return (
    <div className="cta-wrapper">
      <a href="/contact" className="text-rotator-main">
        <div className="text-rotator-container" ref={contentRef}>
          {/* Repeat these sections multiple times for the infinite scroll effect */}
          {[...Array(7)].map((_, index) => (
            <div key={index} className="text-rotator-content">
              <h3 className="text-rotator">Work with us</h3>
              <div className="line-icon"></div>
              <h3 className="text-rotator">Let's Chat</h3>
              <div className="line-icon"></div>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default CtaSection; 