import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Powders = () => {
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

  const standardApplications = [
    'Joint support (e.g. glucosamine, collagen, green-lipped mussel)',
    'Digestive health (fiber, probiotics, herbal blends)',
    'Immune support',
    'Skin & coat health',
    'Urinary support',
    'General vitality & multivitamin formulas'
  ];

  const horseApplications = [
    'Muscle development',
    'Rehabilitation',
    'Performance and endurance support'
  ];

  const typicalWeights = [
    '100 g',
    '250 g',
    '500 g',
    '1 kg',
    '5 kg',
    'Bulk packaging available'
  ];

  const packagingFormats = [
    'Pots with measuring spoon (scoop)',
    'Resealable bags',
    'Custom packaging (e.g. sachets, buckets, or cans)'
  ];

  return (
    <div data-testid="powders-page">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="powders-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Versatile Supplement Solutions
              </p>
              <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] leading-[1.1] mb-4 sm:mb-6">
                Powdered Nutritional Supplements
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 font-semibold">
                Powders as food supplements: Flexible and powerful solutions for your brand
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                At Ayurudnik Remedies, we develop high-quality feed supplement powders for dogs, cats, horses, and other animals. This versatile supplement form is ideal for animals that benefit from high-dose, easy-to-mix formulas, suitable for both daily use and targeted health support.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                Our powders are available as standard formulations or as fully customized private-label solutions. They are carefully produced using quality ingredients and a consistent, well-soluble structure, ensuring reliable dosing and ease of use.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us for powdered supplements"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request powdered supplements details via WhatsApp"
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
                src="https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Powdered nutritional supplements for animals"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="benefits-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Product Advantages
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
              Benefits of Powdered Nutritional Supplements
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
              Powders offer flexibility and potency across a wide range of applications:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    High dosage possible
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Ideal for delivering larger quantities of active ingredients
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Easy to mix
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Blends effortlessly with food or liquids
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Longer shelf life
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Stable formulations compared to liquid forms
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Suitable for multiple animal species
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Dogs, cats, horses, and small pets
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Fully customizable
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Taste, color, active ingredients, and packaging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weights & Packaging Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="packaging-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Flexible Options
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Available Weights & Packaging Options
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              Ayurudnik powder supplements are offered in multiple sizes, depending on application and animal species.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                Typical Weights per Package
              </h3>
              <div className="space-y-4">
                {typicalWeights.map((weight, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {weight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                Packaging Formats
              </h3>
              <div className="space-y-4">
                {packagingFormats.map((format, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {format}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0B0B0B] text-white p-8 md:p-12">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              All packaging can be fully personalized with your branding, labels, and color preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Application Areas Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="applications-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Health Support Areas
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Application Areas
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              Ayurudnik powdered supplements can be developed for a wide variety of health goals:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                Standard Applications
              </h3>
              <div className="space-y-4">
                {standardApplications.map((application, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {application}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                For Horses – Specialized Applications
              </h3>
              <div className="space-y-4">
                {horseApplications.map((application, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Raw materials can be fully adjusted to match your quality standards and brand philosophy
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Completely unique powder formulas can be developed for specific health challenges
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Our team supports ingredient selection and formulation composition
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Minimum order quantity: 100 kg
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Smallest package size: 100 g
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Packaging format is entirely your choice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="cta-section" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/cosmeticCTA.jpeg"
            alt="Pet cosmetics development and formulation"
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
              Develop Your Pet Cosmetic Line with Ayurudnik Remedies
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-8 sm:mb-12 leading-relaxed">
              Partner with our team to create high-quality, private-label pet cosmetic solutions tailored to your brand and market needs.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Contact our pet cosmetics team via WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact Our Team
              </button>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Request pet cosmetics product details"
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
