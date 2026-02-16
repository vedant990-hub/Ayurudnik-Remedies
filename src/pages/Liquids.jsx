import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Beaker, Package, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Liquids = () => {
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

  const benefits = [
    'Easy to administer – directly, mixed with food, or added to drinking water',
    'High taste acceptance among animals',
    'Possibility of concentrated formulations',
    'Ideal for young, senior, or recovering animals',
    'Fully customizable flavor, color, and packaging'
  ];

  const availableVolumes = ['100 ml', '250 ml', '500 ml', '1 L', '5 L', 'Bulk'];

  const packagingOptions = [
    'Bottles with dosing cap',
    'Pump bottles',
    'Dropper bottles'
  ];

  const applicationAreas = [
    'Calming & stress balance',
    'Joint and mobility support',
    'Digestive health',
    'Immune support',
    'Skin & coat care',
    'Detox & drainage',
    'Silicium formulations for horses',
    'All-in-one holistic formulas'
  ];

  const goodToKnow = [
    'Raw materials can be fully adjusted to meet your quality standards and brand philosophy',
    'Unique formulations can be developed in addition to existing concepts',
    'Our team supports defining the optimal composition for the targeted health challenge',
    'Minimum order quantity for liquids: 100 L',
    'Smallest container size: 50 ml',
    'Packaging format can be freely selected to match your brand'
  ];

  return (
    <div data-testid="liquids-page">
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="liquids-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Liquid Formulations
              </p>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] leading-[1.1] mb-4 sm:mb-6">
                Liquid Supplements for Animals
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 font-semibold">
                Liquid nutritional supplements: Fast-acting formulas with excellent absorption
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                Ayurudnik Remedies builds on extensive expertise in liquid nutritional supplements for animals, inspired by natural and holistic principles. Liquid formulations are among the most effective supplement forms due to their rapid absorption, high acceptance rate, and precise dosing.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
                Our liquid food supplements are suitable for dogs, cats, horses, and other animals. All products are developed under private label, fully tailored to your brand identity and target audience.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us about liquid supplements"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request liquid supplement details via WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Request Details
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center">
              <img
                src="/liquid1.png"
                alt="Liquid supplement formulations and bottles"
                className="w-full h-full object-cover rounded"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-zinc-50" data-testid="benefits-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Key Advantages
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              Benefits of Liquid Nutritional Supplements for Animals
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              Liquid supplements offer practical and functional advantages for animals of all life stages:
            </p>
          </div>

          <div className="overflow-x-auto max-w-6xl mx-auto">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-3 h-3 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg font-semibold text-[#0B0B0B] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Formats & Volumes Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-amber-50/30 via-stone-50/40 to-amber-50/30" data-testid="formats-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Product Specifications
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6 leading-[1.1]">
              Available Formats & Volumes
            </h2>
            <div className="w-16 h-[2px] bg-[#0B0B0B] mb-8"></div>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              Ayurudnik liquid supplements are available in various formulations and packaging options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Typical Volumes */}
            <div className="bg-white rounded-lg shadow-lg shadow-zinc-200/50 p-10 md:p-12 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center shadow-sm">
                  <Beaker size={24} strokeWidth={1.5} className="text-[#0B0B0B]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium text-[#0B0B0B]">
                  Typical Volumes per Package
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {availableVolumes.map((volume, index) => (
                  <button 
                    key={index} 
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-zinc-200 rounded-full text-sm md:text-base font-semibold text-[#0B0B0B] hover:border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {volume}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Options */}
            <div className="bg-white rounded-lg shadow-lg shadow-zinc-200/50 p-10 md:p-12 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center shadow-sm">
                  <Package size={24} strokeWidth={1.5} className="text-[#0B0B0B]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium text-[#0B0B0B]">
                  Packaging Options
                </h3>
              </div>
              <div className="space-y-4 mb-10">
                {packagingOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-5 p-5 rounded-lg bg-gradient-to-r from-zinc-50 to-white hover:from-zinc-100 hover:to-zinc-50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                      <Droplets size={18} strokeWidth={1.5} className="text-[#0B0B0B]" />
                    </div>
                    <p className="text-sm md:text-base text-[#0B0B0B] font-semibold">
                      {option}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-stone-50 border-l-4 border-[#0B0B0B] p-6 rounded-r-lg">
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Custom packaging and labeling are available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-zinc-50" data-testid="applications-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Health Formulations
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] mb-6">
              Application Areas
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
              Ayurudnik liquid supplements can be developed to support a wide range of health goals:
            </p>
          </div>

          <div className="mb-12">
            <div className="overflow-x-auto max-w-4xl">
              <table className="w-full bg-white border border-zinc-200">
                <thead>
                  <tr className="bg-[#0B0B0B] border-b border-zinc-200">
                    <th className="px-6 py-4 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                      Formulation Focus Areas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {applicationAreas.map((area, index) => (
                    <tr key={index} className="hover:bg-zinc-50 transition-colors">
                      <td className="px-6 py-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-semibold">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#0B0B0B] rounded-full flex-shrink-0"></div>
                          {area}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed border-t border-zinc-200 pt-8">
            Our R&D team supports the development of innovative blends using herbal extracts, vitamins, minerals, and tinctures, aligned with natural and functional principles.
          </p>
        </div>
      </section>

      {/* Good to Know Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="good-to-know-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Technical Details
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Good to Know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goodToKnow.map((item, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 p-5 hover:bg-white hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-default">
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="cta-section" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/cosmeticCTA.jpeg"
            alt="Liquid supplements development and formulation"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 
              id="cta-heading"
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-[1.1]"
            >
              Develop Your Liquid Supplement Line with Ayurudnik Remedies
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-8 sm:mb-12 leading-relaxed">
              Partner with our team to create high-quality, private-label liquid supplement solutions tailored to your brand and market needs.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Contact our liquid supplements team via WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact Our Team
              </button>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Request liquid supplement product details"
              >
                Request Product Details
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

