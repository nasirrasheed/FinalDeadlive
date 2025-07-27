import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, KeyRound as Pound, Users, Ghost, Shield, Camera, Zap } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data - in a real app, this would come from an API
  const event = {
    id: 1,
    title: "Warwick Castle After Dark",
    location: "Warwick Castle, Warwickshire",
    date: "2025-02-15",
    time: "20:00 - 02:00",
    price: 45,
    image: "https://images.pexels.com/photos/161276/castle-crag-nature-mystical-161276.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    description: "Step into the shadows of England's most haunted medieval fortress for an unforgettable paranormal investigation. Warwick Castle has witnessed over 1,000 years of history, including battles, executions, and mysterious disappearances that have left an indelible mark on this ancient stronghold.",
    fullStory: "Built by William the Conqueror in 1068, Warwick Castle has been the scene of countless dramatic events throughout its millennium of history. The ghost of Sir Fulke Greville, stabbed by his manservant in the Watergate Tower, is said to still roam the castle grounds. Visitors have reported seeing a figure in Elizabethan dress wandering the battlements, and the sound of phantom footsteps echoing through the Great Hall long after closing time.",
    whatToExpect: [
      "Guided tour of the castle's most haunted areas",
      "Use of professional paranormal investigation equipment",
      "Ghost hunting sessions in the dungeons and towers",
      "Historical insights into the castle's dark past",
      "Group séances in the Great Hall",
      "Individual EVP (Electronic Voice Phenomenon) sessions"
    ],
    safetyNotes: [
      "Sturdy footwear required due to uneven medieval floors",
      "Warm clothing recommended as castle temperatures drop significantly at night",
      "All participants must be 16+ years old",
      "Professional safety briefing provided before investigation begins",
      "Emergency exits clearly marked and illuminated",
      "First aid trained staff present throughout the event"
    ],
    equipment: [
      { name: "EMF Detectors", description: "Detect electromagnetic field fluctuations" },
      { name: "Digital Thermometers", description: "Monitor temperature changes" },
      { name: "Spirit Boxes", description: "Real-time electronic voice phenomena" },
      { name: "Night Vision Cameras", description: "Record in complete darkness" },
      { name: "Motion Sensors", description: "Detect unexplained movement" },
      { name: "Audio Recorders", description: "Capture supernatural sounds" }
    ],
    maxParticipants: 20,
    currentBookings: 14,
    meetingPoint: "Castle Main Entrance",
    parking: "Free parking available in castle car park",
    inclusions: [
      "Professional ghost hunting equipment",
      "Guided historical tour",
      "Hot drinks and snacks during break",
      "Digital photos of your experience",
      "Certificate of participation"
    ]
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

  const spotsRemaining = event.maxParticipants - event.currentBookings;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-gothic font-bold text-white mb-4">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-red-400" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-gothic font-bold text-white mb-6">About This Investigation</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{event.description}</p>
              <p className="text-gray-300 leading-relaxed">{event.fullStory}</p>
            </section>

            {/* What to Expect */}
            <section>
              <h2 className="text-3xl font-gothic font-bold text-white mb-6">What to Expect</h2>
              <ul className="space-y-4">
                {event.whatToExpected.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Ghost className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Equipment */}
            <section>
              <h2 className="text-3xl font-gothic font-bold text-white mb-6">Professional Equipment Provided</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {event.equipment.map((item, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="w-5 h-5 text-red-400" />
                      <h3 className="text-white font-semibold">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety Information */}
            <section>
              <h2 className="text-3xl font-gothic font-bold text-white mb-6">Safety Information</h2>
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                  <h3 className="text-white font-semibold">Important Safety Notes</h3>
                </div>
                <ul className="space-y-3">
                  {event.safetyNotes.map((note, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-3xl font-gothic font-bold text-white mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {event.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span className="text-gray-300">{inclusion}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">
                    £{event.price}
                  </div>
                  <div className="text-gray-400">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Date:</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Time:</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Duration:</span>
                    <span>6 hours</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Spots remaining:</span>
                    <span className="text-red-400 font-semibold">{spotsRemaining}</span>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300 mb-4">
                  Book Now
                </button>

                <div className="text-center">
                  <button className="flex items-center justify-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 mx-auto">
                    <Camera className="w-4 h-4" />
                    <span>WhatsApp an Investigator</span>
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-gothic font-bold text-white mb-4">Important Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-red-400 mt-1" />
                    <div>
                      <div className="text-white font-semibold">Group Size</div>
                      <div className="text-gray-400">Maximum {event.maxParticipants} participants</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-red-400 mt-1" />
                    <div>
                      <div className="text-white font-semibold">Meeting Point</div>
                      <div className="text-gray-400">{event.meetingPoint}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-red-400 rounded mt-2" />
                    <div>
                      <div className="text-white font-semibold">Parking</div>
                      <div className="text-gray-400">{event.parking}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;