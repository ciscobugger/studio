import './AboutDetails.scss';

const AboutDetails = () => {
  return (
    <section className="section _50px-top">
      <div className="container">
        <div>
          <div className="main-grid">
            <div id="mission-label" className="small-number">Mission and Vision</div>
            <div id="mission-content">
              <h2 className="subhead-main left">
                <span className="gray-text-color">Digital Innovation Studio</span> is a forward-thinking digital agency specializing in innovative web solutions, custom software development, and digital transformation.
              </h2>
              <h2 className="subhead-main left" style={{ marginTop: '30px' }}>
                We empower businesses to thrive in the digital age through cutting-edge technology, creative design, and strategic development solutions that drive real business growth.
              </h2>
            </div>
            
            <div id="feature-image">
              <div className="image-wrap auto with-ratio">
                <img 
                  width="1200" 
                  loading="lazy" 
                  alt="Digital innovation concept" 
                  src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/6733507a003f74c018b90ea4_work-8.avif"
                  className="static-image" 
                />
              </div>
            </div>
            
            <div id="numbers-label" className="small-number">
              Numbers
            </div>
            
            <div id="stats-content" className="fun-facts">
              <div>
                <h2 className="fun-number second">15<span className="plus">+</span></h2>
                <p>Projects Delivered</p>
              </div>
              <div className="margin-40px">
                <h2 className="fun-number second">5<span className="plus">+</span></h2>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;