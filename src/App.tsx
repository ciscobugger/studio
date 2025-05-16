import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Blogs from './pages/Blogs';
import CtaSection from './components/sections/CtaSection';
import Contact from './pages/Contact';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="global-cta-wrapper">
        <CtaSection />
      </div>
      <Footer />
    </Router>
  );
}

export default App; 
