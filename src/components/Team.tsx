import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Margaret Blackwood",
      role: "Lead Investigator & Founder",
      experience: "20+ years",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The supernatural is simply science we don't yet understand.",
      bio: "Dr. Blackwood holds a PhD in Parapsychology and has investigated over 300 haunted locations worldwide."
    },
    {
      id: 2,
      name: "James Whitmore",
      role: "Technical Specialist",
      experience: "15+ years",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Technology reveals what the naked eye cannot see.",
      bio: "Former electronics engineer specializing in paranormal detection equipment and EVP analysis."
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      role: "Psychic Medium",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "I bridge the gap between our world and theirs.",
      bio: "Gifted medium with documented abilities to communicate with spirits and sense paranormal activity."
    },
    {
      id: 4,
      name: "Thomas Crawford",
      role: "Historical Researcher",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Every ghost has a story waiting to be told.",
      bio: "Historian specializing in dark British history and the tragic events that bind spirits to locations."
    },
    {
      id: 5,
      name: "Emma Richardson",
      role: "Safety Coordinator",
      experience: "10+ years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Exploring the unknown doesn't mean ignoring safety.",
      bio: "Former emergency response coordinator ensuring all investigations are conducted safely and professionally."
    },
    {
      id: 6,
      name: "David Sterling",
      role: "Equipment Manager",
      experience: "14+ years",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "The right tools make all the difference in detection.",
      bio: "Expert in paranormal investigation equipment from EMF detectors to thermal imaging cameras."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            Meet the Experts Behind the Veil
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker mb-4" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our experienced team combines scientific methodology with supernatural sensitivity 
            to provide authentic paranormal investigations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="team-card opacity-0 transform translate-y-8 bg-gray-900 rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-gothic font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="text-red-400 font-semibold mb-1">{member.role}</div>
                <div className="text-gray-500 text-sm mb-4">{member.experience}</div>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-red-400 mb-2" />
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    {member.quote}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      Team Member
                    </span>
                    <div className="w-8 h-0.5 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;