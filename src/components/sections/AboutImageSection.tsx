import './AboutImageSection.scss';

const AboutImageSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="about-image-section">
          <div 
            id="w-node-_1da1d70e-5d9a-8982-3b78-fa62409e4636-c24c36ef"
            data-w-id="1da1d70e-5d9a-8982-3b78-fa62409e4636" 
            className="image-wrap for-about"
          >
            <img 
              width="1200"
              loading="lazy" 
              alt="Digital agency workspace"
              src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672cb284cb302a4669b68d0f_work-7.avif"
              className="paralax-image" 
            />
          </div>
          <div 
            data-w-id="99c9931c-57b0-0670-21d3-6530b52da71a" 
            className="image-wrap for-about"
          >
            <img 
              width="1200"
              loading="lazy" 
              alt="Digital project showcase"
              src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6734ad178065d9f52110a107_work-1-big.avif"
              className="paralax-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImageSection; 