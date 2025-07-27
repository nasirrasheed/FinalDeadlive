import React, { useEffect, useRef } from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-left');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            About SpiritHunts UK
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="opacity-0">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Haunted castle in fog"
                className="w-full h-96 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="opacity-0 text-white">
            <h3 className="text-2xl font-gothic font-bold mb-6 text-red-400">
              Exploring the Paranormal Since 2016
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by renowned paranormal investigator Dr. Margaret Blackwood, SpiritHunts UK has become 
              the premier ghost hunting company in the United Kingdom. With over 500 investigations across 
              150 of the nation's most haunted locations, we bring scientific methodology to paranormal research.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team combines decades of experience with state-of-the-art equipment to provide authentic, 
              safe, and unforgettable supernatural experiences. From medieval castles to abandoned asylums, 
              we unlock the mysteries that lie beyond the veil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-gray-900 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Calendar className="w-8 h-8 text-red-400 group-hover:text-white" />
                </div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400">Investigations</div>
              </div>

              <div className="text-center group">
                <div className="bg-gray-900 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-red-400 group-hover:text-white" />
                </div>
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-gray-400">Haunted Sites</div>
              </div>

              <div className="text-center group">
                <div className="bg-gray-900 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Users className="w-8 h-8 text-red-400 group-hover:text-white" />
                </div>
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;