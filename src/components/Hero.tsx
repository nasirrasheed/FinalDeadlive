import React, { useEffect, useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [mistPosition, setMistPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setMistPosition(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          filter: 'grayscale(100%) contrast(1.2)',
          transform: `translateY(${mistPosition}px)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Animated Mist Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-gray-900/80 to-transparent animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gray-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-gothic font-bold text-white mb-6 animate-fade-in-up">
          Dare to Discover
          <span className="block text-red-400 animate-pulse-red">the Unknown</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
          Authentic Ghost Hunts in the UK's Most Haunted Locations
          <span className="block mt-2 text-lg text-gray-400">
            Professional paranormal investigations since 2016
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delayed-2">
          <button
            onClick={() => scrollToSection('events')}
            className="group flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 hover:scale-105"
          >
            <Eye className="w-5 h-5 group-hover:animate-pulse" />
            <span>View Upcoming Events</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group flex items-center space-x-3 border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            <span>WhatsApp an Investigator</span>
          </button>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <div className="w-2 h-2 bg-red-400 rounded-full animate-twinkle" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20">
        <div className="w-1 h-1 bg-white rounded-full animate-twinkle-delayed" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20">
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-twinkle-slow" />
      </div>
    </section>
  );
};

export default Hero;