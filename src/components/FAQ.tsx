import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "Is ghost hunting safe?",
      answer: "Absolutely. Safety is our top priority. All our investigations are conducted with professional safety protocols, experienced guides, and emergency procedures in place. We provide safety briefings before each investigation and maintain constant supervision throughout the event."
    },
    {
      id: 2,
      question: "Do I need to bring my own equipment?",
      answer: "No, we provide all necessary paranormal investigation equipment including EMF detectors, digital thermometers, spirit boxes, and night vision cameras. However, you're welcome to bring your own equipment if you prefer."
    },
    {
      id: 3,
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, we offer flexible cancellation and rescheduling policies. Cancellations made 48 hours before the event receive a full refund. Cancellations within 48 hours receive a 50% refund. Rescheduling is free when done at least 24 hours in advance."
    },
    {
      id: 4,
      question: "Are children allowed on ghost hunts?",
      answer: "Children aged 16 and above are welcome when accompanied by a parent or guardian. For safety and atmosphere reasons, we don't permit children under 16. All participants under 18 must have signed parental consent forms."
    },
    {
      id: 5,
      question: "What should I wear to a ghost hunt?",
      answer: "Wear comfortable, warm clothing and sturdy footwear as investigations often take place in old buildings with uneven surfaces. Dark colors are recommended to avoid reflecting camera flashes. We also suggest bringing layers as historic buildings can be quite cold."
    },
    {
      id: 6,
      question: "How long do investigations typically last?",
      answer: "Most of our investigations run for 4-6 hours, typically from 8 PM to 2 AM. This allows sufficient time for equipment setup, briefings, multiple investigation sessions, and analysis of any findings."
    },
    {
      id: 7,
      question: "Will I definitely experience paranormal activity?",
      answer: "While we can't guarantee supernatural encounters, our locations are chosen for their documented paranormal activity. Our experienced team uses proven techniques to maximize the potential for genuine experiences. Even without dramatic activity, you'll learn fascinating history and investigation methods."
    },
    {
      id: 8,
      question: "Do you provide refreshments during investigations?",
      answer: "Yes, we provide hot drinks and light snacks during break periods. Many of our longer investigations include a midnight meal. We can accommodate most dietary requirements with advance notice."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker mb-4" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Everything you need to know about joining our paranormal investigations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`mb-4 bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 animate-fade-in-up ${
                openItems.includes(faq.id) ? 'shadow-lg shadow-red-600/10' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-6 focus:outline-none group flex items-center justify-between hover:bg-gray-800 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-red-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${
                openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-800 mb-4" />
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;