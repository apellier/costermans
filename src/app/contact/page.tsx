'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header - Visual */}
      <section className="relative h-96 bg-warm-beige">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40">
          <div className="w-full h-full bg-warm-beige flex items-center justify-center">
            {/* Placeholder for contact/location image */}
            <div className="text-forest-green/20 text-center">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm">Location Image from @cafecostermans</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl text-white mb-4 font-light">
              Find Us in Sablon
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Your gateway to our secret terrace
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information - Clean Layout */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl text-forest-green mb-8">
                  Visit Our Terrace
                </h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center justify-center lg:justify-start">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <address className="text-dark-green text-body not-italic text-center lg:text-left lg:ml-9">
                    Place du Grand Sablon<br />
                    1000 Brussels, Belgium<br />
                    <span className="text-sm text-gray-600">
                      In the heart of Brussels' antique district
                    </span>
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center justify-center lg:justify-start">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Opening Hours
                  </h3>
                  <div className="text-dark-green text-body lg:ml-9 space-y-2 text-center lg:text-left">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 - 17:00</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 - 18:00</p>
                    <p><span className="font-medium">Sunday:</span> 9:00 - 16:00</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center justify-center lg:justify-start">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact
                  </h3>
                  <div className="text-dark-green text-body lg:ml-9 space-y-3 text-center lg:text-left">
                    <p>
                      <a href="tel:+32123456789" className="hover:text-ochre transition-colors text-lg">
                        +32 (0)12 34 56 789
                      </a>
                    </p>
                    <p>
                      <a href="mailto:hello@costermans.be" className="hover:text-ochre transition-colors text-lg">
                        hello@costermans.be
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-4">
                      Walk-ins welcome • No reservations needed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div>
              <div className="bg-warm-beige rounded-lg p-8">
                <h3 className="text-2xl text-forest-green mb-6 text-center">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest-green mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest-green mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-forest-green mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-beige rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent bg-white"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-forest-green mb-12 text-center">Getting Here</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-beige rounded-lg p-6">
              <h3 className="text-xl font-bold text-forest-green mb-4">By Public Transport</h3>
              <div className="space-y-2 text-dark-green text-body">
                <p><strong>Metro:</strong> Louise (Lines 2, 6) - 5 minute walk</p>
                <p><strong>Bus:</strong> Lines 27, 95 - Stop "Petit Sablon"</p>
                <p><strong>Tram:</strong> Lines 92, 94 - Stop "Louise"</p>
              </div>
            </div>
            
            <div className="bg-warm-beige rounded-lg p-6">
              <h3 className="text-xl font-bold text-forest-green mb-4">By Car & Bike</h3>
              <div className="space-y-2 text-dark-green text-body">
                <p><strong>Parking:</strong> Place Eugène Flagey</p>
                <p><strong>Street Parking:</strong> Paid parking nearby</p>
                <p><strong>Villo! Bikes:</strong> Stations in the area</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}