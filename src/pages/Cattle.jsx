import React, { useState } from 'react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cattle = () => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const whatsappNumber = "9834519843";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    setShowWhatsAppModal(true);
  };

  const handleConfirmWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    setShowWhatsAppModal(false);
  };

  const handleCancelWhatsApp = () => {
    setShowWhatsAppModal(false);
  };

  const supplements = [
    {
      name: 'Glyco Start',
      description: 'Fast energy support around calving to reduce the risk of ketosis and negative energy balance while supporting liver function.'
    },
    {
      name: 'Glyco Trans',
      description: 'Supports glucose transport to muscles during lactation peaks or reduced milk production, improving recovery and overall condition.'
    },
    {
      name: 'Lactation Stop',
      description: 'Helps gradually reduce milk production during dry-off, easing discomfort and supporting a smooth transition to the dry period.'
    },
    {
      name: 'Electrolytes',
      description: 'Rapidly replenishes fluids and minerals during diarrhea, dehydration, or heat stress, supporting acid-base balance and recovery.'
    },
    {
      name: 'Heat Stress Support',
      description: 'Helps cattle cope with high temperatures by supporting feed intake, milk production, and protection against oxidative stress.'
    },
    {
      name: 'Intestinal Health',
      description: 'Strengthens gut flora, supports digestion, and improves resistance to diarrhea and digestive disorders.'
    },
    {
      name: 'Custom Cattle Formula',
      description: 'A fully tailored nutritional supplement developed to address a specific cattle health or performance challenge.'
    }
  ];

  return (
    <div data-testid="cattle-page">
      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-fade-in">
            <button
              onClick={handleCancelWhatsApp}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#0B0B0B] mb-3">
                Switch to WhatsApp?
              </h3>
              <p className="text-zinc-600 mb-2">
                Do you want to contact our team via WhatsApp?
              </p>
              <p className="text-lg font-medium text-[#0B0B0B] mb-6">
                +91 {whatsappNumber}
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleCancelWhatsApp}
                  className="px-6 py-3 border-2 border-zinc-300 text-zinc-700 text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300"
                >
                  No, Cancel
                </button>
                <button
                  onClick={handleConfirmWhatsApp}
                  className="px-6 py-3 bg-green-600 text-white text-sm font-medium uppercase tracking-[0.1em] hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  Yes, Open WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Image */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" data-testid="cattle-header">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Livestock Nutrition Solutions
              </p>
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-6">
                Cattle
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-8">
                Private label nutritional supplements for cattle
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Ayurudnik Remedies develops private label nutritional supplement solutions for cattle, supporting health, productivity, metabolic balance, and resilience across different production stages and farm conditions.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us about cattle supplements"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request cattle supplement details via WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Request Details
                </button>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
              <img 
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Cattle supplemented tablets for livestock nutrition"
                className="w-full h-full object-cover rounded"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white" data-testid="portfolio-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Product Portfolio
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-12">
              Ayurudnik – Cattle Nutritional Supplements
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-zinc-900">
                <thead>
                  <tr className="bg-[#0B0B0B]">
                    <th className="text-left py-4 px-4 border border-white font-[Georgia] text-base sm:text-lg font-normal text-white">
                      Supplement
                    </th>
                    <th className="text-left py-4 px-4 border border-white font-[Georgia] text-base sm:text-lg font-normal text-white">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supplements.map((supplement, index) => (
                    <tr
                      key={index}
                      className="hover:bg-zinc-100 transition-colors"
                      data-testid={`supplement-row-${index}`}
                    >
                      <td className="py-4 px-4 border border-zinc-900 align-top font-[Georgia] text-base sm:text-lg font-normal text-[#0B0B0B] w-1/4">
                        {supplement.name}
                      </td>
                      <td className="py-4 px-4 border border-zinc-900 text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {supplement.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Formulation Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-zinc-50" data-testid="custom-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Tailored Solutions
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-8 leading-tight">
              Custom Cattle Supplement Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              In addition to standard formulations, Ayurudnik Remedies offers custom cattle supplement development, allowing formulations to be adapted to farm conditions, production goals, and market requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="contact-section">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/dogCTA.jpeg"
            alt="Cattle nutrition and supplement solutions"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 leading-tight">
              Discuss Your Cattle Supplement Needs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
              Contact Ayurudnik Remedies to learn more about our cattle supplement portfolio or to develop a custom solution for your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300 items-center justify-center gap-2"
                aria-label="Contact us about cattle supplements"
              >
                Contact Us
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#20BA5A] transition-colors duration-300 items-center justify-center gap-2"
                aria-label="Contact us via WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
