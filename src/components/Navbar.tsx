import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-duration="400" id="Top">
      <Link to="/" className="logo-link w-nav-brand">
        <img 
          width="70" 
          loading="lazy" 
          alt="Digital Innovation Studio Logo" 
          src="https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672a2b401ac029bdcea82c48_logo.avif" 
          className="main-logo" 
        />
      </Link>
      <div className="last-item">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link to="/" className={`navigation-link w-inline-block ${isActive('/') ? 'w--current' : ''}`}>
            <div className="button-text-wrapper">
              <div className="button-text">Home</div>
              <div className="button-text">Home</div>
            </div>
            <div className="line-below"></div>
          </Link>
          <div className="button-text coma">,</div>
          <Link to="/works" className={`navigation-link w-inline-block ${isActive('/works') ? 'w--current' : ''}`}>
            <div className="button-text-wrapper">
              <div className="button-text">Works</div>
              <div className="button-text">Works</div>
            </div>
            <div className="line-below"></div>
          </Link>
          <div className="button-text coma">,</div>
          <Link to="/about" className={`navigation-link w-inline-block ${isActive('/about') ? 'w--current' : ''}`}>
            <div className="button-text-wrapper">
              <div className="button-text">About</div>
              <div className="button-text">About</div>
            </div>
            <div className="line-below"></div>
          </Link>
          <div className="button-text coma">,</div>
          <Link to="/blog" className={`navigation-link w-inline-block ${isActive('/blog') ? 'w--current' : ''}`}>
            <div className="button-text-wrapper">
              <div className="button-text">Blog</div>
              <div className="button-text">Blog</div>
            </div>
            <div className="line-below"></div>
          </Link>
          <div className="button-text coma">,</div>
          <Link to="/contact" className={`navigation-link w-inline-block ${isActive('/contact') ? 'w--current' : ''}`}>
            <div className="button-text-wrapper">
              <div className="button-text">Contact</div>
              <div className="button-text">Contact</div>
            </div>
            <div className="line-below"></div>
          </Link>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="lottie-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 