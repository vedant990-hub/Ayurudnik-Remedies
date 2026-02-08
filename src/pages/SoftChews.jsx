import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SoftChews = () => {
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

  const standardFormulations = [
    'Calming',
    'Hip & Joint',
    'Skin & Coat',
    'Digestion',
    'Dental',
    'Urinary Support (cats)'
  ];

  const advancedFormulations = [
    'Anti-Itch',
    'Anal Gland Support',
    'Anti-Tick',
    'All-in-One Formulas'
  ];

  return (
    <div data-testid="soft-chews-page">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="soft-chews-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Functional Pet Nutrition
              </p>
              <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] leading-[1.1] mb-4 sm:mb-6">
                Supplemented Soft Chews for Dogs and Cats
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 font-semibold">
                Functional, Palatable Supplements Tailored to Your Brand
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                Ayurudnik Remedies specializes in the development and production of private-label supplemented soft chews for dogs and cats. These functional chews combine high palatability with precise nutritional support, making daily supplementation simple, effective, and enjoyable for pets.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                Our soft chews are formulated using carefully selected, high-quality ingredients and can be tailored to specific health objectives—ranging from joint and skin support to calming and digestive formulations.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us for soft chews"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request soft chews details via WhatsApp"
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
                src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Supplemented soft chews for dogs and cats"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Soft Chews Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="why-soft-chews-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Product Benefits
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
              Why Soft Chews?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-8">
              Supplemented soft chews are one of the most effective delivery forms for pet nutrition:
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    High palatability
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Voluntary intake without food mixing
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Accurate dosing
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Easy portioning by weight class
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    Targeted functionality
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Balanced active ingredients per health goal
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[#0B0B0B] mb-1">
                    High compliance
                  </p>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Perceived as a reward, increasing owner trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shapes, Weights & Customization Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="customization-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Product Specifications
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Shapes, Weights & Customization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-4 text-[#0B0B0B]">
                Standard Shapes
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Heart', 'Round', 'Bone', 'Star', 'Mouse'].map((shape, index) => (
                  <span 
                    key={index}
                    className="text-sm text-zinc-600 bg-white px-4 py-2 border border-zinc-200"
                  >
                    {shape}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-4 text-[#0B0B0B]">
                Custom Shapes
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                Unique shapes or sizes can be developed to align with your brand identity.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Custom molds are created to ensure full product differentiation.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-8">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-4 text-[#0B0B0B]">
                Weights per Chew
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">
                    1 g
                  </p>
                  <p className="text-sm text-zinc-600">
                    Cats and small dogs
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0B0B0B] mb-1">
                    2.5–4 g
                  </p>
                  <p className="text-sm text-zinc-600">
                    Medium to large dogs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0B0B] text-white p-8 md:p-12">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Soft chews can be supplied in bulk, bags, jars, or fully branded retail packaging, according to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Application Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="applications-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Formulation Range
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Areas of Application
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                Standard Formulations
              </h3>
              <div className="space-y-4">
                {standardFormulations.map((formulation, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {formulation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-[#0B0B0B] p-8 md:p-12">
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium mb-6 text-[#0B0B0B]">
                Advanced & Specialized
              </h3>
              <div className="space-y-4">
                {advancedFormulations.map((formulation, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-zinc-700">
                      {formulation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom-Made Soft Chews Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="custom-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Innovation & R&D
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
                Custom-Made Soft Chews
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Have a unique concept or unmet market need? Our team supports you from initial idea through formulation, testing, and final production, ensuring performance, compliance, and scalability.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Research and development laboratory"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="key-info-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Technical Specifications
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6">
              Key Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Raw materials and formulations can be fully adapted to your quality standards
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Custom formulas and novel concepts are fully supported by our R&D team
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Dental chew variants are available to support oral hygiene and stress reduction
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Minimum order quantity: 130 kg
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Smallest retail pack: 90 g
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                Packaging format and fill size are fully customizable
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
