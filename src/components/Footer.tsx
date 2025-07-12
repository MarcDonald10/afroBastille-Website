import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react';
import logo from '../../assets/logo/logo.png'


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0D0E] text-[#E8DD8D]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Brand Section */}
          <div className="md:col-span-2 flex flex-col justify-start">
            <Link to="/" className="flex items-center space-x-3 mb-2 group">
              <img
                src={logo}
                alt={"logo Afro Bastille"}
                className="w-32 h-32 object-contain"
              />
            </Link>
            <p
              className="mb-4 leading-relaxed text-base font-medium px-2 py-2 rounded-lg"
              style={{ background: 'rgba(232,221,141,0.07)' }}
            >
              Afro Bastille vous invite à découvrir l'authenticité de la cuisine sénégalaise
              <br className="hidden md:block" />
              <span className="font-semibold">au cœur de Grenoble.</span> <br className="hidden md:block" />
              <span className="italic">Une expérience culinaire unique dans une ambiance chaleureuse.</span>
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-[#E8DD8D] hover:text-pink-400 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-[#E8DD8D] hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigation</h4>
            <div className="space-y-1">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/about', label: 'À propos' },
                { to: '/menu', label: 'Carte' },
                { to: '/gallery', label: 'Galerie' },
                // { to: '/events', label: 'Événements' },
                { to: '/reservation', label: 'Réservation' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-[#E8DD8D] hover:text-black transition-colors text-sm px-2 py-1 rounded hover:bg-[#E8DD8D] hover:font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#E8DD8D] mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p>Grenoble, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#E8DD8D] flex-shrink-0" size={16} />
                <a href="tel:+33758814737" className="text-sm hover:text-black transition-colors">
                  +33 7 58 81 47 37
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#E8DD8D] flex-shrink-0" size={16} />
                <a href="mailto:contact@afrobastille.fr" className="text-sm hover:text-black transition-colors">
                  contact@afrobastille.fr
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-[#E8DD8D] mt-1 flex-shrink-0" size={16} />
                <div className="text-sm">
                  <p className="font-medium">Lun - Sam</p>
                  <p className="text-[#E8DD8D] opacity-70">12h-14h30 & 19h-22h</p>
                  <p className="font-medium mt-1">Dimanche</p>
                  <p className="text-[#E8DD8D] opacity-70">12h-15h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#E8DD8D] mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Legal Links */}
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-[#E8DD8D] hover:text-black transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-[#E8DD8D] hover:text-black transition-colors">
                Politique de confidentialité
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-xs text-[#E8DD8D] opacity-80">
              <span>© 2024 Afro Bastille. Fait avec</span>
              <Heart className="text-red-500" size={14} />
              <span>à Grenoble</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;