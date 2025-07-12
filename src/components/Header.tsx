import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../../assets/logo/logo.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', name: 'Accueil', pattern: 'M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z' },
    { path: '/about', name: 'À propos', pattern: 'M20 6L9 17L4 12' },
    { path: '/menu', name: 'Carte', pattern: 'M3 12H21M3 6H21M3 18H21' },
    { path: '/gallery', name: 'Galerie', pattern: 'M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21S3 16.97 3 12S7.03 3 12 3S21 7.03 21 12Z' },
    { path: '/reservation', name: 'Réservation', pattern: 'M8 2V6M16 2V6M3 10H21M5 4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4Z' },
    // { path: '/events', name: 'Événements', pattern: 'M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z' },
    { path: '/contact', name: 'Contact', pattern: 'M21 10C21 17 12 23 12 23S3 17 3 10C3 5 7 1 12 1S21 5 21 10Z' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          {/* Logo avec motifs sénégalais */}
          <Link to="/" className="flex items-center space-x-3 group">
            
            <img 
                  src={logo} 
                  alt={"logo Afro Bastille"}
                  className="w-full h-28"
                 
                />
          </Link>

          {/* Desktop Navigation avec motifs actifs */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-black' // texte noir sur nav active
                    : 'text-[#E8DD8D] hover:text-[#E8DD8D] hover:bg-[#E8DD8D] hover:text-black'
                }`}
                style={isActive(item.path) ? { backgroundColor: '#E8DD8D', color: '#000' } : {}}
              >
                {/* Motif bogolan pour l'élément actif */}
                {isActive(item.path) && (
                  <div className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <defs>
                        <pattern id={`pattern-${item.path}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d={item.pattern} stroke="white" strokeWidth="1" fill="none" transform="scale(0.8)"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${item.path})`}/>
                    </svg>
                  </div>
                )}
                <span className="relative z-10">{item.name}</span>
                {/* Ligne de survol animée */}
                {/* Ligne de survol animée */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E8DD8D] transition-all duration-200 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Bouton de réservation avec motif */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+33758814737" className="text-[#E8DD8D] hover:text-black transition-colors">
              <Phone size={20} />
            </a>
            <Link
              to="/reservation"
              className="relative px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 overflow-hidden group"
              style={{ backgroundColor: '#E8DD8D', color: '#000' }}
            >
              {/* Motif animé au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <pattern id="reservation-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                    <circle cx="7.5" cy="7.5" r="2" fill="white"/>
                    <path d="M2 7.5L7.5 2L13 7.5L7.5 13L2 7.5Z" stroke="white" strokeWidth="0.5" fill="none"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#reservation-pattern)"/>
                </svg>
              </div>
              <span className="relative z-10">Réserver</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-yellow-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-black'
                      : 'text-[#E8DD8D] hover:text-[#E8DD8D] hover:bg-[#E8DD8D] hover:text-black'
                  }`}
                  style={isActive(item.path) ? { backgroundColor: '#E8DD8D', color: '#000' } : {}}
                >
                  {isActive(item.path) && (
                    <div className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
                      <svg viewBox="0 0 100 40" className="w-full h-full">
                        <pattern id={`mobile-pattern-${item.path}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d={item.pattern} stroke="white" strokeWidth="1" fill="none" transform="scale(0.8)"/>
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#mobile-pattern-${item.path})`}/>
                      </svg>
                    </div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <Link
                to="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 rounded-full font-medium transition-all duration-200 text-center"
                style={{ backgroundColor: '#E8DD8D', color: '#000' }}
              >
                Réserver
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;