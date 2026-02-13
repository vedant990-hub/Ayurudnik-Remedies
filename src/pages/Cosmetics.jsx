import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, X, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cosmetics = () => {
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

  return (
    <div data-testid="cosmetics-page">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="cosmetics-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Pet Care Solutions
              </p>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] leading-[1.1] mb-4 sm:mb-6">
                Cosmetics for Pets
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 font-semibold">
                Advanced Pet Cosmetic Solutions
              </p>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-6">
                Ayurudnik Remedies develops premium, science-driven pet cosmetic solutions designed to support skin, coat, and overall animal well-being. Our formulations combine carefully selected natural ingredients with high manufacturing standards to deliver safe, effective, and gentle care.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact us for pet cosmetics"
                >
                  Contact Us
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request pet cosmetics details via WhatsApp"
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
                src="/cosmetic-1.png"
                alt="Professional pet grooming and cosmetic care products"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gentle & Effective Care Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="gentle-care-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center order-last lg:order-first">
              <img 
                src="/Gentle-Effective%20Care-cosmetic.png"
                alt="Pet grooming and care routine"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Care & Wellness
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
                Gentle & Effective Care
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Our formulas are gentle, effective, and enriched with high-quality ingredients. Whether for cleaning, soothing, or protecting, our products support optimal care and contribute to a healthy and comfortable pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Product Portfolio - Redesigned */}
      <section className="py-16 sm:py-20 md:py-28 bg-white" data-testid="portfolio-section">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-3">
              Product Architecture
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-4">
              Professional Cosmetic Product Range
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 uppercase tracking-[0.15em] font-medium">
              Engineered for Compliance, Performance, and Brand Scalability
            </p>
          </div>

          <ProductArchitectureGrid />
        </div>
      </section>

      {/* Custom Formulation Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="formulation-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Innovation
              </p>
              <h2 className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B0B0B] mb-6 leading-tight">
                Custom Formulation / R&D Expertise
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                Our dedicated R&D team collaborates closely with clients to develop bespoke pet cosmetic formulations aligned with brand positioning, regulatory frameworks, and market demand. From concept development to formulation optimization, we deliver scalable, compliant, and high-performance cosmetic solutions.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center">
              <img 
                src="/cosmetic-3.png"
                alt="Laboratory formulation and product development"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="ingredients-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center order-last lg:order-first">
              <img 
                src="/cosmetic-5.png"
                alt="Natural ingredients and botanical extracts"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Quality Standards
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
                Scientifically Selected Natural Ingredients
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-4">
                Ayurudnik Remedies prioritizes high-purity, naturally derived raw materials with proven functional benefits. Ingredients such as medical-grade honey, aloe vera, coconut oil, and calendula extracts are selected for their documented roles in skin regeneration, barrier protection, antimicrobial activity, and coat health.
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 font-semibold uppercase tracking-[0.1em]">
                Our formulations are developed under strict quality protocols to ensure consistency, safety, and efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="packaging-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Customization
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 leading-tight">
                Flexible, Brand-Ready Packaging
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
                We offer a wide range of customizable packaging formats, including droppers, spray bottles, jars, and tubes. Packaging volume, materials, and labeling can be adapted to meet brand identity, regulatory compliance, and market preferences.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded flex items-center justify-center">
              <img 
                src="/cosmetic-6.png"
                alt="Cosmetic packaging formats and containers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOQ Section */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="moq-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Production Specifications
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-8 leading-tight">
              Minimum Order Quantity
            </h2>
            
            <div className="border-2 border-[#0B0B0B] bg-white p-8 md:p-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0B0B0B] rounded flex items-center justify-center flex-shrink-0">
                  <Package size={32} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1">
                    Cosmetic Products
                  </p>
                  <p className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium text-[#0B0B0B]">
                    Minimum production volume of 100 liters
                  </p>
                </div>
              </div>
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
const ProductArchitectureGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const products = [
    {
      title: 'Anti-Itch Sprays',
      description: 'Targeted dermal relief formulations designed to reduce irritation and support skin barrier recovery using bioactive botanical compounds.',
      authority: 'Private Label Ready'
    },
    {
      title: 'Anti-Tick & Flea Sprays',
      description: 'Protective formulations engineered for effective pest control while maintaining coat integrity and dermatological safety.',
      authority: 'Export Compliant'
    },
    {
      title: 'Shampoos & Conditioners',
      description: 'Mild surfactant systems developed for routine grooming, coat nourishment, and long-term skin health optimization.',
      authority: 'Scalable Production'
    },
    {
      title: 'Body Sprays',
      description: 'Daily-use freshness formulations designed to maintain hygiene and odor control in companion and livestock animals.',
      authority: 'Private Label Manufacturing'
    },
    {
      title: 'Eye & Ear Cleaners',
      description: 'Precisely balanced formulations for hygienic maintenance and microbial control in sensitive anatomical regions.',
      authority: 'Export Compliant'
    },
    {
      title: 'Paw Balms',
      description: 'Lipid-rich protective systems engineered to restore and reinforce the paw barrier against environmental stressors.',
      authority: 'Custom Formulation Available'
    },
    {
      title: 'Honey-Based Ointments',
      description: 'Naturally active formulations with documented antimicrobial and tissue-support properties for wound care.',
      authority: 'Scalable Production'
    },
    {
      title: 'Environmental Sprays',
      description: 'Odor-neutralizing solutions engineered for pet-safe environmental hygiene and microbial control.',
      authority: 'Private Label Manufacturing'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {products.map((product) => (
          <motion.div
            key={product.title}
            variants={itemVariants}
            className="product-auth-card group relative bg-white border border-zinc-200 p-8 hover:shadow-[0_8px_24px_rgba(11,11,11,0.1)] hover:border-zinc-300 transition-all duration-300 rounded-sm overflow-hidden"
          >
            {/* Left Indicator Line */}
            <motion.div
              className="absolute left-0 top-0 w-1 h-12 bg-[#0B0B0B] group-hover:bg-zinc-700 transition-colors duration-300"
            />

            {/* Content with left padding for indicator */}
            <div className="pl-0">
              <motion.h3
                className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium text-[#0B0B0B] mb-4 uppercase tracking-[0.04em]"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {product.title}
              </motion.h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Technical Authority Micro-Line */}
              <div className="flex items-center pt-4 border-t border-zinc-100">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">
                  • {product.authority}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Section Divider */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent my-12"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center' }}
      />

      {/* CTA */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
      >
        <Link
          to="/contact"
          className="group text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#0B0B0B] pb-2 border-b-2 border-transparent hover:border-[#0B0B0B] transition-all duration-300 inline-flex items-center gap-2 relative"
        >
          Request Product Specifications
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={14} strokeWidth={2} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};