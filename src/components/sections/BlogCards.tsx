import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
;import './BlogSection.scss';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Innovation",
    date: "April 5, 2024",
    readTime: 6,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355c9219625249d17bf76_service-1-big.avif",
    link: "/post/digital-innovation.html"
  },
  {
    id: 2,
    title: "Design Thinking in Practice",
    date: "March 28, 2024",
    readTime: 5,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355d55fa130183180c076_service-3-big.avif",
    link: "/post/design-thinking.html"
  },
  {
    id: 3,
    title: "Content Marketing Strategies",
    date: "March 22, 2024",
    readTime: 4,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c3703/673355e055b21b11bae978b6_service-2-big.avif",
    link: "/post/content-marketing.html"
  },
  {
    id: 4,
    title: "Building Better User Experiences",
    date: "March 15, 2024",
    readTime: 7,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/673350fee016d0d7c36ae365_work-6-big.avif",
    link: "/post/user-experiences.html"
  },
  {
    id: 5,
    title: "The Power of Data-Driven Design",
    date: "March 8, 2024",
    readTime: 5,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ee51675bac18ffda3_logo-5.avif",
    link: "/post/data-driven-design.html"
  },
  {
    id: 6,
    title: "Embracing Sustainable Digital Practices",
    date: "March 1, 2024",
    readTime: 6,
    image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b569253e152a1903565f3_scroll-down.avif",
    link: "/post/sustainable-digital.html"
  }
];

const BlogCards = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div>
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
                        className="static-image" 
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
                      <div className="post-title-wrapper">
                        <div>{post.title}</div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards; 