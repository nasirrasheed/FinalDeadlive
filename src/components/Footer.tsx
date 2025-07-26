import React, { useEffect, useState } from 'react';
import { Ghost, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [showGhost, setShowGhost] = useState(false);

  useEffect(() => {
    // Trigger ghost animation on component mount
    const timer = setTimeout(() => {
      setShowGhost(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white">
      {/* Floating Ghost Animation */}
      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
        showGhost ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="bg-red-600 p-4 rounded-full shadow-lg shadow-red-600/25 animate-float">
          <Ghost className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Ghost className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-gothic font-bold">DeadLive</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              The UK's premier ghost hunting company, offering authentic paranormal investigations 
              in the nation's most haunted locations. Founded in 2016 by Dr. Margaret Blackwood, 
              we combine scientific methodology with supernatural sensitivity.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Manchester, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-600" />
                <span>+44 161 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-600" />
                <span>info@spirithuntsuk.co.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-gothic font-bold mb-6 text-red-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Events', id: 'events' },
                { label: 'Our Team', id: 'team' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-gothic font-bold mb-6 text-red-400">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Public Ghost Hunts</li>
              <li>Private Investigations</li>
              <li>Corporate Events</li>
              <li>Educational Tours</li>
              <li>Equipment Rental</li>
              <li>Paranormal Consultancy</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full text-white focus:border-red-600 focus:outline-none"
                />
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-r-full transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 SpiritHunts UK. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                Cookie Policy
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300 group"
            >
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:-translate-y-1 transition-all duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
