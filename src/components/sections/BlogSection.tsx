import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import Button3D from '../Button3D';
import './BlogSection.scss';

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

const BlogSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Content Management",
      date: "October 1, 2023",
      readTime: 5,
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355c9219625249d17bf76_service-1-big.avif",
      link: "/post/understanding-cms.html"
    },
    {
      id: 2,
      title: "SEO Strategies for 2024",
      date: "October 3, 2023",
      readTime: 3,
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355d55fa130183180c076_service-3-big.avif",
      link: "/post/seo-strategies-for-2024.html"
    },
    {
      id: 3,
      title: "Content Marketing Strategies",
      date: "October 6, 2023",
      readTime: 3,
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355e055b21b11bae978b6_service-2-big.avif",
      link: "/post/content-marketing-strategies.html"
    }
  ];

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div>
          <motion.div 
            className="flex-big"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="big-text">Straight</h2>
          </motion.div>
          
          <motion.div 
            className="flex-big"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="big-text">to the</h2>
            <div className="image-wrap square">
              <img
                src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big.avif"
                loading="lazy" 
                sizes="29vw"
                srcSet="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big-p-500.avif 500w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big-p-800.avif 800w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big-p-1080.avif 1080w, https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big.avif 2000w"
                alt="" 
                className="paralax-image" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-big"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="big-text">bold ideas</h2>
          </motion.div>
        </div>
        
        <div className="margin-250px">
          <div className="flex-center">
            <HorizontalRevealText className="subhead-main _80">
              Discover how Digital Innovation Studio can help transform your digital presence with our innovative solutions and creative expertise.
            </HorizontalRevealText>
            <Button3D text="view all" href="/blog" />
          </div>
          
          <div className="margin-100px">
            <div className="w-dyn-list">
              <div className="blog-grid">
                {blogPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" }
                      }
                    }}
                  >
                    <a href={post.link} className="blog-main-wrapper">
                      <div className="button-icon-main">
                        <div className="buton-icon-svg">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="buton-icon-svg is-absolute">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="image-wrap auto">
                        <img 
                          loading="lazy"
                          src={post.image}
                          alt={post.title}
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 46vw, (max-width: 1919px) 30vw, 463.3359375px"
                          className="paralax-image" 
                        />
                      </div>
                      
                      <div className="margin-30px">
                        <div className="data-flex">
                          <div className="data-inside">
                            <div className="data-image invert">
                              <img 
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a1dc3f9c27f98c24c371b_data-light.svg"
                                alt="" 
                              />
                            </div>
                            <p className="data-text">{post.date}</p>
                          </div>
                          <div className="data-inside">
                            <div className="data-image invert">
                              <img 
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a1dc3f9c27f98c24c3716_time-light.svg"
                                alt="" 
                              />
                            </div>
                            <p className="data-text">{post.readTime}</p>
                            <p className="data-text"> min read</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="margin-15px">
                        <HorizontalRevealText className="post-title-wrapper">
                          <div>{post.title}</div>
                        </HorizontalRevealText>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 