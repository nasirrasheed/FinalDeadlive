import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gothic font-bold text-white mb-6">
            Contact the Investigators
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto animate-flicker mb-4" />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to embark on a supernatural adventure? Get in touch with our team of experienced investigators
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-black rounded-lg p-8">
              <h3 className="text-2xl font-gothic font-bold text-white mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell us about your interest in ghost hunting or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-2xl font-gothic font-bold text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Headquarters</h4>
                      <p className="text-gray-300">
                        SpiritHunts UK<br />
                        45 Paranormal Plaza<br />
                        Manchester, M1 2AB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+44 161 123 4567</p>
                      <p className="text-gray-400 text-sm">Available 9 AM - 9 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@spirithuntsuk.co.uk</p>
                      <p className="text-gray-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">WhatsApp Support</h4>
                      <p className="text-gray-300">+44 7123 456789</p>
                      <button className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-300">
                        Chat with AI Assistant →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-xl font-gothic font-bold text-white mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-red-400" />
                  <span>Office Hours</span>
                </h3>
                
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-400 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Emergency Contact</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    For urgent matters during investigations: +44 7999 888777
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-black rounded-lg p-8">
                <h3 className="text-xl font-gothic font-bold text-white mb-4">
                  Find Us
                </h3>
                <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Manchester, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;