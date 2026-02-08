import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, Linkedin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do you ensure consistency and quality in production?',
      answer: 'We follow standardized manufacturing processes and strict quality control measures at every stage, from raw material sourcing to final packaging, to ensure batch-to-batch consistency.'
    },
    {
      question: 'Can you assist with regulatory documentation and labeling guidance?',
      answer: 'Yes. We provide guidance on label content, ingredient declarations, and documentation requirements to help brands align with applicable regulatory norms in their target markets.'
    },
    {
      question: 'What certifications do your products have?',
      answer: 'All our products are manufactured in GMP-certified facilities and comply with ISO 9001:2015 and WHO-GMP standards. Product-specific certifications are available upon request.'
    },
    {
      question: 'Can you develop custom formulations?',
      answer: 'Absolutely. Our R&D team works with partners to develop custom formulations for private label and specific market requirements, including regulatory support.'
    }
  ];

  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="py-32 bg-white" data-testid="contact-hero">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Get In Touch
            </p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
              Let's Build a Partnership
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Whether you're a veterinarian, distributor, exporter, or looking for private label solutions, we're here to discuss how Ayurudnik can support your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-zinc-50" data-testid="contact-main">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium mb-8 text-[#0B0B0B]">
                Contact Information
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4" data-testid="contact-email">
                  <Mail size={24} strokeWidth={1.5} className="text-[#0B0B0B] flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                      Email
                    </h3>
                    <a href="mailto:dpawar@ayurudnik.com" className="text-[#0B0B0B] text-lg hover:underline">dpawar@ayurudnik.com</a>
                    <br />
                    <a href="mailto:maher@ayurudnik.com" className="text-zinc-600 text-sm hover:underline">maher@ayurudnik.com</a>
                  </div>
                </div>

                <div className="flex gap-4" data-testid="contact-phone">
                  <Phone size={24} strokeWidth={1.5} className="text-[#0B0B0B] flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                      Phone
                    </h3>
                    <a href="tel:+919834519843" className="text-[#0B0B0B] text-lg hover:underline">+91 9834519843</a>
                    <p className="text-zinc-600 text-sm">Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex gap-4" data-testid="contact-address">
                  <MapPin size={24} strokeWidth={1.5} className="text-[#0B0B0B] flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                      Office Address
                    </h3>
                    <p className="text-[#0B0B0B] text-lg">Ayurudnik Remedies Pvt. Ltd.</p>
                    <p className="text-zinc-600 text-sm">
                      F.NO: 02, 1st Floor, Mauli A Building,<br />
                      Nr Thakare Hospital, Saraswati Nagar,<br />
                      10th Mail, Ozar Mig,<br />
                      NASHIK - 422206, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-zinc-200 p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-4 text-[#0B0B0B]">
                  Business Hours
                </h3>
                <div className="space-y-3 text-zinc-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white border border-zinc-200 p-10">
              <h2 className="font-['Playfair_Display'] text-3xl font-medium mb-8 text-[#0B0B0B]">
                Send an Enquiry
              </h2>

              <form 
                action="https://formspree.io/f/mwvnkqvr" 
                method="POST" 
                data-testid="enquiry-form"
              >
                <div className="space-y-6">
                  <div>
                    <label 
                      htmlFor="full_name" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      data-testid="input-name"
                      className="w-full h-12 px-4 border border-zinc-200 bg-transparent focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      data-testid="input-email"
                      className="w-full h-12 px-4 border border-zinc-200 bg-transparent focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      data-testid="input-phone"
                      className="w-full h-12 px-4 border border-zinc-200 bg-transparent focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      data-testid="input-company"
                      className="w-full h-12 px-4 border border-zinc-200 bg-transparent focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="enquiry_type" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiry_type"
                      name="enquiry_type"
                      required
                      data-testid="select-enquiry-type"
                      className="w-full h-12 px-4 border border-zinc-200 bg-white focus:border-[#0B0B0B] focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Distribution Partnership">Distribution Partnership</option>
                      <option value="Private Label / OEM">Private Label / OEM</option>
                      <option value="Export Enquiry">Export Enquiry</option>
                      <option value="Veterinarian">Veterinarian</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      data-testid="textarea-message"
                      className="w-full px-4 py-3 border border-zinc-200 bg-transparent focus:border-[#0B0B0B] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Formspree Hidden Fields */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  <input type="hidden" name="_subject" value="New Enquiry – Ayurdnik Remedies" />
                  <input type="hidden" name="_redirect" value="https://ayurdnik.com/thank-you" />
                  <input type="hidden" name="source" value="Website Contact Page" />

                  <button
                    type="submit"
                    data-testid="submit-button"
                    className="w-full bg-[#0B0B0B] text-white hover:bg-zinc-800 h-12 uppercase tracking-[0.15em] text-xs font-bold transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message <Send size={16} strokeWidth={2} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0 bg-white" data-testid="map-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="border border-zinc-200 overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8426519837263!2d75.10467242346901!3d19.886936082157928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce46e4e0000001%3A0xf01abfb7ae6fa7c8!2sOzar%2C%20Nashik!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayurudnik Office Location - Nashik"
              data-testid="location-map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white" data-testid="faq-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                Frequently Asked
              </p>
              <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-medium text-[#0B0B0B] mb-6">
                Common Questions
              </h2>
              <p className="text-lg text-zinc-600">
                Find answers to common inquiries about our products, services, and partnerships.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-zinc-200 hover:border-[#0B0B0B] transition-all duration-300"
                  data-testid={`faq-${index}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex items-center justify-between px-8 py-6 transition-all duration-300 ${
                      expandedFAQ === index ? 'bg-[#0B0B0B] text-white' : 'bg-white text-[#0B0B0B] hover:bg-zinc-50'
                    }`}
                    data-testid={`faq-question-${index}`}
                  >
                    <h3 className="font-['Playfair_Display'] text-lg md:text-xl font-medium text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      size={28} 
                      strokeWidth={1.5}
                      className={`flex-shrink-0 ml-6 transition-transform duration-300 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedFAQ === index && (
                    <div 
                      className="px-8 py-6 bg-zinc-50 border-t-2 border-zinc-200"
                      data-testid={`faq-answer-${index}`}
                    >
                      <p className="text-zinc-700 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
