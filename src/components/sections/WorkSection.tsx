import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WorkSection.scss';

const WorkSection = () => {
  const sectionRef = useRef(null);
  
  // Animation for items coming into view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the work items
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  // Staggered animation for work items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Sample work items data
  const workItems = [
    {
      id: 1,
      title: "AR Experience",
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6733507a003f74c018b90ea4_work-8.avif",
      link: "/work/ar-experience"
    },
    {
      id: 2,
      title: "VR Immersion",
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b51761780c73184d6be27_work-4.avif",
      link: "/work/vr-immersion"
    },
    {
      id: 3,
      title: "Digital Products",
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb0c1262874241732297c_work-6.avif",
      link: "/work/digital-products"
    }
  ];

  return (
    <section ref={sectionRef} className="section for-work">
      <div className="container">
        <motion.div 
          className="project-flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {workItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="work-wrapper"
              variants={itemVariants}
              custom={index}
              style={{ y, opacity }}
            >
              <a href={item.link} className="work-link">
                <div className="image-wrap">
                  <div className="work-overlay"></div>
                  <img 
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="paralax-image"
                  />
                  <div className="title-wrapper">
                    <h2 className="work-title">{item.title}</h2>
                    <div className="top-part">
                      <p className="top-text">View Case</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection; 