import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, KeyRound as Pound, Ghost, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const events = [
    {
      id: 1,
      title: "Warwick Castle After Dark",
      location: "Warwick Castle, Warwickshire",
      date: "2025-02-15",
      time: "20:00 - 02:00",
      price: 45,
      image: "https://images.pexels.com/photos/161276/castle-crag-nature-mystical-161276.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      description: "Explore the dark history of England's most haunted medieval fortress."
    },
    {
      id: 2,
      title: "Pendle Hill Witch Investigation",
      location: "Pendle Hill, Lancashire",
      date: "2025-02-22",
      time: "19:30 - 01:30",
      price: 38,
      image: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      description: "Walk in the footsteps of the infamous Pendle Witches."
    },
    {
      id: 3,
      title: "Abandoned Asylum Experience",
      location: "Severalls Hospital, Essex",
      date: "2025-03-01",
      time: "20:30 - 03:00",
      price: 52,
      image: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      description: "Investigate the haunted corridors of this derelict psychiatric hospital."
    },
    {
      id: 4,
      title: "Tower of London Ghost Walk",
      location: "Tower of London, London",
      date: "2025-03-08",
      time: "21:00 - 01:00",
      price: 48,
      image: "https://images.pexels.com/photos/1128723/pexels-photo-1128723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      description: "Uncover the bloody secrets of London's most notorious fortress."
    },
    {
      id: 5,
      title: "Ancient Burial Ground",
      location: "Highgate Cemetery, London",
      date: "2025-03-15",
      time: "22:00 - 02:00",
      price: 42,
      image: "https://images.pexels.com/photos/161154/cemetery-crypt-cemeteries-old-161154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      description: "Experience the supernatural in one of London's most haunted cemeteries."
    }
  ];

  const featuredEvents = events.filter(event => event.featured);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredEvents.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length);
    setIsAutoPlaying(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            Upcoming Investigations
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join us for authentic paranormal experiences at the UK's most haunted locations
          </p>
        </div>

        {/* Featured Events Slider */}
        <div className="relative mb-16 overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredEvents.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-6">
                      <h3 className="text-3xl md:text-5xl font-gothic font-bold mb-4">
                        {event.title}
                      </h3>
                      <p className="text-lg md:text-xl mb-6 text-gray-200">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-red-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-red-400" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-red-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Pound className="w-4 h-4 text-red-400" />
                          <span>{event.price}</span>
                        </div>
                      </div>

                      <Link
                        to={`/event/${event.id}`}
                        className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
                      >
                        <Ghost className="w-5 h-5" />
                        <span>View Details & Book</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-red-600' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group bg-black rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <Ghost className="w-6 h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-gothic font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-red-400" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-white font-bold text-lg">
                    <Pound className="w-5 h-5 text-red-400" />
                    <span>{event.price}</span>
                  </div>

                  <Link
                    to={`/event/${event.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;