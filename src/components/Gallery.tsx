import React, { useState, useEffect, useRef } from 'react';
import { X, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['all', 'castles', 'asylums', 'cemeteries', 'behind-scenes'];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/161276/castle-crag-nature-mystical-161276.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "castles",
      location: "Warwick Castle",
      date: "December 2024",
      title: "Ancient Stone Corridors"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "asylums",
      location: "Severalls Hospital",
      date: "November 2024",
      title: "Abandoned Ward"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/161154/cemetery-crypt-cemeteries-old-161154.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "cemeteries",
      location: "Highgate Cemetery",
      date: "October 2024",
      title: "Victorian Tombs"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "castles",
      location: "Edinburgh Castle",
      date: "January 2025",
      title: "Moonlit Battlements"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "behind-scenes",
      location: "Pendle Hill",
      date: "September 2024",
      title: "Team Investigation"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1128723/pexels-photo-1128723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "castles",
      location: "Tower of London",
      date: "August 2024",
      title: "The White Tower"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      category: "asylums",
      location: "West Park Hospital",
      date: "July 2024",
      title: "Decaying Corridors"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/161154/cemetery-crypt-cemeteries-old-161154.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      category: "cemeteries",
      location: "Kensal Green Cemetery",
      date: "June 2024",
      title: "Gothic Mausoleums"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "behind-scenes",
      location: "Equipment Setup",
      date: "May 2024",
      title: "EMF Detection"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'all': 'All',
      'castles': 'Castles',
      'asylums': 'Asylums',
      'cemeteries': 'Cemeteries',
      'behind-scenes': 'Behind the Scenes'
    };
    return labels[category] || category;
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            Gallery of the Supernatural
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker mb-4" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Witness the haunting beauty of our investigations through these carefully captured moments
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{getCategoryLabel(category)}</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.id}-${activeFilter}`}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg ${
                isLoaded ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-gothic font-bold text-lg mb-1">
                    {image.title}
                  </h3>
                  <div className="text-gray-300 text-sm">
                    <div>{image.location}</div>
                    <div className="text-gray-400">{image.date}</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-600 text-white p-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-gothic font-bold text-2xl mb-2">
                  {selectedImage.title}
                </h3>
                <div className="text-gray-300">
                  <div className="text-lg">{selectedImage.location}</div>
                  <div className="text-gray-400">{selectedImage.date}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;