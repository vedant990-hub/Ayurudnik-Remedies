import React, { useState } from 'react';
import { ArrowRight, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Horses = () => {
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
      name: 'Stress & Anxiety',
      description: 'Supports relaxation and emotional balance during transport, competitions, or environmental changes.'
    },
    {
      name: 'Skin & Coat',
      description: 'Promotes healthy skin and a shiny coat with omega fatty acids, vitamins, and trace minerals.'
    },
    {
      name: 'Multivitamin',
      description: 'Provides essential vitamins and minerals to support overall vitality, immunity, and performance.'
    },
    {
      name: 'Hoof Support',
      description: 'Strengthens hoof structure, supports growth, and helps improve brittle or weak hooves.'
    },
    {
      name: 'Booster / Performance Support',
      description: 'Delivers fast support before or after exertion with electrolytes, amino acids, and B vitamins.'
    },
    {
      name: 'Gastro Support',
      description: 'Helps protect the stomach lining and supports acid balance for horses prone to gastric issues.'
    },
    {
      name: 'Gut Health',
      description: 'Supports digestion, nutrient absorption, and immune health with prebiotics, probiotics, and fibers.'
    },
    {
      name: 'Muscle Recovery / Acidification Support',
      description: 'Helps reduce muscle acid buildup and supports faster recovery during intensive training or competition.'
    },
    {
      name: 'Custom Equine Formula',
      description: 'A fully tailored supplement developed to match your brand\'s specific equine health focus.'
    }
  ];

  return (
    <div data-testid="horses-page">      {/* WhatsApp Modal */}
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
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="horses-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Equine Nutrition Solutions
              </p>
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
                Horses
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-8">
                Nutritional supplements for horses
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Ayurudnik Remedies specializes in nutritional solutions for equine health and performance, providing supplements designed to support fitness, endurance, immunity, joint function, skin health, and overall well-being for horses across all disciplines.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us about equine supplements"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request equine supplement details via WhatsApp"
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
                src="https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional horse training and equine care"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-zinc-50" data-testid="portfolio-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Product Portfolio
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] mb-4">
              Ayurudnik – Equine Nutritional Supplements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {supplements.map((supplement, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 p-6 md:p-8 hover:border-zinc-900 transition-colors duration-300"
                data-testid={`supplement-card-${index}`}
              >
                <h3 className="font-[Georgia] text-lg font-normal mb-3 text-[#0B0B0B]">
                  {supplement.name}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {supplement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Formulation Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="custom-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Tailored Solutions
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-8 leading-tight">
                Custom Equine Supplement Solutions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                In addition to standard formulations, Ayurudnik Remedies develops custom equine supplements aligned with specific performance goals, training intensity, management systems, and brand positioning. Formulations are adapted for professional equine use with consistency and reliability in mind.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center">
              <img 
                src="/horse-2.png"
                alt="Equine supplement formulation and care"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Use Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-zinc-50" data-testid="professional-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center order-last lg:order-first">
              <img 
                src="/Equine_Management.png"
                alt="Professional equine management and training"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Professional Standards
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-12 leading-tight">
                Developed for Professional Equine Management
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-zinc-600">
                    Suitable for sport, leisure, and breeding horses
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-zinc-600">
                    Designed for use in training and competition routines
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-zinc-600">
                    Focus on formulation stability, dosing accuracy, and performance support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="contact-section">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/horseCta.png"
            alt="Equine supplement solutions"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 60%' }}
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 leading-tight">
              Discuss Your Equine Supplement Needs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
              Contact Ayurudnik Remedies to learn more about our equine supplement portfolio or to develop a custom solution for your horses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300 items-center justify-center gap-2"
                aria-label="Contact us about equine supplements"
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
