import React, { useEffect, useState } from "react";
import { 
  Wind, 
  Target, 
  Dumbbell, 
  Activity, 
  Heart, 
  Feather, 
  Droplets, 
  Zap, 
  Shield, 
  ShieldCheck, 
  Moon, 
  Baby,
  Pill,
  Leaf,
  Sparkles,
  FlaskConical,
  Pipette,
  Bot,
  Fish,
  Package,
  Boxes,
  FileText,
  Award,
  ArrowRight,
  MessageCircle,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

export const PrivateLabelCustomSolutions = () => {
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

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Custom Made Solutions for Animal Health | Private Label Manufacturing | Ayurudnik";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Custom animal health solutions for livestock, pets, and hobby animals. Private label manufacturing with flexible formulations, packaging options, and targeted nutritional support.";
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "private label animal nutrition, custom animal health solutions, livestock nutrition, pet supplements, animal health manufacturing, veterinary formulations, custom made supplements";
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: "og:title", content: "Custom Made Solutions for Animal Health | Ayurudnik" },
      { property: "og:description", content: "Custom animal health solutions for livestock, pets, and hobby animals. Private label manufacturing with flexible formulations and packaging options." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = tag.content;
    });

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Custom Made Animal Health Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Ayurudnik"
      },
      "description": "Custom animal health solutions for livestock, pets, and hobby animals with private label manufacturing capabilities",
      "serviceType": "Private Label Manufacturing",
      "areaServed": "International",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": window.location.href
      },
      "offers": {
        "@type": "Offer",
        "description": "Custom formulations for animal health including supplements, medications, and nutritional products"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(structuredData);

    // Cleanup function
    return () => {
      document.title = "Ayurudnik";
    };
  }, []);
  const animalCategories = [
    {
      title: "Livestock",
      description: "Cattle, goats, sheep, poultry, and swines",
      image: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Hobby Animals",
      description: "Horses, pigeons, birds, fish",
      image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Pets",
      description: "Dogs & Cats",
      image: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const healthSolutions = [
    { icon: Wind, name: "Respiration" },
    { icon: Target, name: "Digestion" },
    { icon: Dumbbell, name: "Muscle Support" },
    { icon: Activity, name: "Joint Support" },
    { icon: Heart, name: "Recovery" },
    { icon: Feather, name: "Support for skin, hair & hooves" },
    { icon: Droplets, name: "Detox" },
    { icon: Zap, name: "Mineral, vitamin & electrolyte balance" },
    { icon: Shield, name: "Anti-stress" },
    { icon: ShieldCheck, name: "Resistance" },
    { icon: Moon, name: "Relaxation" },
    { icon: Baby, name: "Reproduction" }
  ];

  const ingredients = [
    { icon: Pill, name: "Vitamins" },
    { icon: Award, name: "Minerals" },
    { icon: Sparkles, name: "Trace elements" },
    { icon: Leaf, name: "Herbs" },
    { icon: FlaskConical, name: "Extracts" },
    { icon: Droplets, name: "Essential oils" },
    { icon: Pipette, name: "Tinctures" },
    { icon: Bot, name: "Proteins" },
    { icon: Fish, name: "Vegetable and fish oils" }
  ];

  const productForms = [
    { icon: Droplets, name: "Liquid" },
    { icon: Package, name: "Powder" },
    { icon: FileText, name: "Paste" },
    { icon: Boxes, name: "Pellets" },
    { icon: Pill, name: "Tablets" },
    { icon: Heart, name: "Semi-moist snacks (soft chews)" }
  ];

  return (
    <div data-testid="custom-solutions-page">
      {/* WhatsApp Redirect Modal */}
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#16a34a">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Yes, Open WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-32 bg-white" data-testid="hero-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Private Label
              </p>
              <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
                Custom Made Solutions for Animal Health
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                Thanks to our continuous research and development, we provide custom recipes tailored to the specific needs of your animals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#0B0B0B] text-white text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center gap-2"
                  aria-label="Request a custom animal health solution"
                >
                  Request Custom Solution
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center gap-2"
                  aria-label="Contact our animal health solutions team via WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact Our Team
                </button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Scientist conducting laboratory research on animal nutrition products and health formulations"
                className="w-full h-full object-cover"
                data-testid="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for All Animal Species */}
      <section className="py-24 bg-zinc-50" data-testid="animal-species-section" aria-labelledby="species-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Comprehensive Coverage
            </p>
            <h2 id="species-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              Solutions for All Animal Species
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              We develop customized nutritional and functional solutions for all animal species, adapting formulations to species, lifecycle, and usage requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {animalCategories.map((category, index) => (
              <article 
                key={index}
                className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                data-testid={`animal-category-${index}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={`${category.title} - ${category.description} health and nutrition solutions`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#0B0B0B] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-zinc-600">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Made Products - Solutions for Your Needs */}
      <section className="py-24 bg-white" data-testid="health-solutions-section" aria-labelledby="solutions-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Targeted Solutions
            </p>
            <h2 id="solutions-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              Custom Made Products – Solutions for Your Needs
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Thanks to our research and development expertise, we have experience creating targeted solutions for the following needs:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" role="list">
            {healthSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  className="bg-zinc-50 p-8 text-center hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 group"
                  data-testid={`health-solution-${index}`}
                  role="listitem"
                >
                  <Icon 
                    size={36} 
                    strokeWidth={1.5} 
                    className="mx-auto mb-4 text-[#0B0B0B] group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-medium uppercase tracking-[0.05em]">
                    {solution.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High Quality Ingredients */}
      <section className="py-24 bg-zinc-50" data-testid="ingredients-section" aria-labelledby="ingredients-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Quality First
              </p>
              <h2 id="ingredients-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-8">
                High Quality Ingredients
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                Our formulations are built using carefully selected, high-quality ingredients that support effective and reliable solutions.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {ingredients.map((ingredient, index) => {
                  const Icon = ingredient.icon;
                  return (
                    <li 
                      key={index}
                      className="flex items-center gap-4 bg-white p-5 border border-zinc-200 hover:border-[#0B0B0B] transition-colors duration-300"
                      data-testid={`ingredient-${index}`}
                    >
                      <Icon size={24} strokeWidth={1.5} className="text-[#0B0B0B] flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-medium text-zinc-700">
                        {ingredient.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative h-[600px]">
              <img 
                src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Natural botanical extracts, essential oils, and high-quality ingredients used in animal health formulations"
                className="w-full h-full object-cover"
                data-testid="ingredients-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production & Packaging Options */}
      <section className="py-24 bg-white" data-testid="product-forms-section" aria-labelledby="packaging-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Various product forms and packaging options for animal health supplements including bottles, jars, and containers"
                className="w-full h-full object-cover"
                data-testid="packaging-image"
                loading="lazy"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Flexible Manufacturing
              </p>
              <h2 id="packaging-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-8">
                Production & Packaging Options
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                Choose the product form that fits your animal's needs. Customize packaging to your brand and order in small or large bulk quantities.
              </p>

              <div className="grid grid-cols-2 gap-4" role="list">
                {productForms.map((form, index) => {
                  const Icon = form.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-zinc-50 p-6 text-center hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 group"
                      data-testid={`product-form-${index}`}
                      role="listitem"
                    >
                      <Icon 
                        size={32} 
                        strokeWidth={1.5} 
                        className="mx-auto mb-4 text-[#0B0B0B] group-hover:text-white transition-colors"
                        aria-hidden="true"
                      />
                      <h3 className="text-xs font-medium uppercase tracking-[0.05em]">
                        {form.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="final-cta-section" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Professional veterinarian providing animal care in modern facility"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium mb-8 leading-tight">
              Let's Build Your Custom Solution
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-12">
              Contact our team to discuss your animal species, functional requirements, and branding needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-white text-[#0B0B0B] text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 flex items-center gap-2"
                aria-label="Contact our animal health solutions team via WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact Us
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white text-sm font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300"
                aria-label="Request a quote for custom animal health products"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
