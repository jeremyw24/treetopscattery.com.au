import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Heart, Cat, PawPrint, Home as HomeIcon, Info, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Services', path: '/services', icon: <Cat size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <ImageIcon size={18} /> },
    { name: 'Contact', path: '/contact', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-cream group-hover:scale-110 transition-transform">
                <Cat size={24} />
              </div>
              <span className="text-2xl font-serif font-bold text-forest tracking-tight">Treetops <span className="text-sage">Cattery</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-sage ${
                  location.pathname === link.path ? 'text-sage border-b-2 border-sage' : 'text-forest'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-forest text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-sage transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest hover:text-sage transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-sage/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium ${
                    location.pathname === link.path ? 'bg-sage/10 text-sage' : 'text-forest hover:bg-sage/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-4 bg-forest text-cream px-3 py-3 rounded-lg text-base font-medium"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-forest text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cream rounded-full flex items-center justify-center text-forest">
                <Cat size={20} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">Treetops Cattery</span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Providing warm, loving home-style care for your feline friends since 1976. Your cat's home away from home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-sage transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-sage transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cream transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-cream transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-cream transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin size={18} className="text-sage shrink-0" />
                <span>222 Coolart Road, Moorooduc Victoria 3913</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-sage shrink-0" />
                <span>(03) 5977 5328</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-sage shrink-0" />
                <span>hello@treetopscattery.com.au</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday & Saturday:</span>
                <span>9:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Treetops Cattery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-earth fill-earth" /> for cats everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-sage/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
