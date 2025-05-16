import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './ServicesSection.scss';

const ServiceSection = () => {
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

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0.8 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const services = [
    {
      id: 1,
      title: "strategy",
      description: "We craft comprehensive digital strategies that align with your business goals and resonate with your target audience.",
      skills: ["Digital Strategy", "Brand Growth", "Market Analysis", "ROI Optimization"],
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335740d23eaace3d16930c_service-4-big.avif"
    },
    {
      id: 2,
      title: "ui/ux design",
      description: "Creating intuitive and engaging user experiences that delight your audience and drive meaningful interactions.",
      skills: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335801aae2f03aae26e0fc_service-6-big.avif"
    },
    {
      id: 3,
      title: "web design",
      description: "Building beautiful, responsive websites that combine stunning aesthetics with powerful functionality.",
      skills: ["Custom Design", "Responsive", "Performance", "Innovation"],
      image: "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/67335801c5b08fc4f2f903da_service-5-big.avif"
    }
  ];

  return (
    <section ref={sectionRef} className="section for-work">
      {services.map((service, index) => (
        <div key={service.id} className={`home-services-item sticky ${index === 1 ? 'reverse' : ''}`}>
          {index !== 1 && (
            <motion.div 
              className="image-wrap mobile-auto"
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <img 
                src={service.image} 
                loading="lazy" 
                width="1000" 
                alt={service.title} 
                className="paralax-image" 
              />
            </motion.div>
          )}
          
          <motion.div 
            className="services-left-content"
            initial="hidden"
            animate={controls}
            variants={fadeVariants}
          >
            <div>
              <div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="subhead-main left">{service.description}</p>
              <div className="margin-40px">
                <div className="service-flex">
                  {service.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx} 
                      className="service-content"
                      initial={{ opacity: 0, y: 10 }}
                      animate={controls}
                      variants={{
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 * idx, duration: 0.5 }
                        }
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {index === 1 && (
            <motion.div 
              className="image-wrap mobile-auto"
              initial="hidden"
              animate={controls}
              variants={imageVariants}
            >
              <img 
                src={service.image} 
                loading="lazy" 
                width="1000" 
                alt={service.title} 
                className="paralax-image" 
              />
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ServiceSection; 