import React, { useEffect, useState } from "react";
import { 
  Zap,
  Clock,
  Palette,
  Factory,
  Check,
  Dog,
  Bird,
  Beef,
  Leaf,
  Heart,
  Shield,
  TrendingUp,
  Truck,
  Award,
  ArrowRight,
  MessageCircle,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

export const PrivateLabelReadyMarket = () => {
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
    document.title = "Ready-to-Market Private Label Solutions | Animal Health | Ayurudnik";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Ready-to-market animal health and supplement solutions for rapid market entry. Professional private label products for pets, livestock, poultry, and horses with flexible branding.";
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "ready-to-market animal supplements, private label solutions, B2B animal health products, quick market entry supplements, livestock nutrition solutions";
    
    const ogTags = [
      { property: "og:title", content: "Ready-to-Market Private Label Solutions | Ayurudnik" },
      { property: "og:description", content: "Ready-to-market animal health solutions for rapid market entry. Professional private label products with flexible branding and GMP manufacturing." },
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

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ready-to-Market Animal Health Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Ayurudnik"
      },
      "description": "Ready-to-market animal health and supplement solutions for rapid market entry with professional branding options",
      "serviceType": "Private Label Manufacturing",
      "areaServed": "International",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": window.location.href
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      document.title = "Ayurudnik";
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Faster time-to-market",
      description: "Launch your product quickly with proven, market-tested formulations"
    },
    {
      icon: Zap,
      title: "Reduced formulation development effort",
      description: "Skip lengthy R&D cycles and bring solutions to market immediately"
    },
    {
      icon: Palette,
      title: "Flexible branding and dosage adaptation",
      description: "Customize composition, packaging, and labeling to your brand identity"
    },
    {
      icon: Factory,
      title: "Reliable, scalable production",
      description: "GMP-certified manufacturing with consistent quality and dependable supply"
    }
  ];

  const speciesCategories = [
    {
      title: "Pets (Dogs & Cats)",
      products: [
        "Digestive support",
        "Skin & coat support",
        "Joint support",
        "Anti-stress solutions",
        "Multivitamins"
      ],
      image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: Dog
    },
    {
      title: "Horses",
      products: [
        "Gastric support",
        "Intestinal health",
        "Joint support",
        "Hoof health",
        "Respiratory support",
        "Performance support"
      ],
      image: "https://images.pexels.com/photos/2768555/pexels-photo-2768555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: Leaf
    },
    {
      title: "Poultry & Birds",
      products: [
        "Vitamins",
        "Electrolytes",
        "Liver support",
        "Respiratory support",
        "Endurance support"
      ],
      image: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: Bird
    },
    {
      title: "Cattle & Swine",
      products: [
        "Metabolic support",
        "Heat stress solutions",
        "Intestinal health",
        "Electrolyte solutions"
      ],
      image: "https://images.pexels.com/photos/163186/cow-standing-grass-farm-163186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: Beef
    },
    {
      title: "Hobby Poultry",
      products: [
        "Eggshell quality",
        "Moulting support",
        "Parasite management",
        "Gut health"
      ],
      image: "https://images.pexels.com/photos/33537/child-bird-birds-bird-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: Heart
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Formulation Selection",
      description: "Choose from our ready-made, market-tested formulations designed for your target species and market needs."
    },
    {
      number: "02",
      title: "Customization",
      description: "Adapt composition, dosage, and labeling to your brand and market requirements with expert guidance."
    },
    {
      number: "03",
      title: "Certified Production",
      description: "Manufacturing aligned with GMP standards ensuring consistent quality and regulatory compliance."
    },
    {
      number: "04",
      title: "Delivery & Partnership",
      description: "Dependable production and supply to support long-term business growth and market success."
    }
  ];

  return (
    <div data-testid="ready-market-page">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="hero-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Ready-to-Market
              </p>
              <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] leading-[1.1] mb-4 sm:mb-6">
                Ready-to-Market Private Label Solutions for Animal Health
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-3 sm:mb-4">
                Ayurudnik Remedies offers a comprehensive portfolio of ready-for-market animal health and feed supplement solutions designed to support performance, resilience, and overall well-being.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-8 sm:mb-10">
                These formulations are developed for rapid market entry and can be adapted to meet your specific requirements, including composition, dosage, and branding.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0B0B0B] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-800 transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Request product catalogue"
                >
                  Request Product Catalogue
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#0B0B0B] text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-[#0B0B0B] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  aria-label="Contact our team via WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact Our Team
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img 
                src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional animal supplement products with premium packaging"
                className="w-full h-full object-cover"
                data-testid="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ready-Made Solutions */}
      <section className="py-24 bg-zinc-50" data-testid="benefits-section" aria-labelledby="benefits-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Key Advantages
            </p>
            <h2 id="benefits-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              Why Choose Ready-Made Solutions
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              With our ready-made solutions, you can launch quickly, reduce development time, and respond efficiently to market demand—without compromising on quality or compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={index}
                  className="bg-white p-8 border border-zinc-200 hover:border-[#0B0B0B] hover:shadow-lg transition-all duration-300"
                  data-testid={`benefit-${index}`}
                >
                  <Icon size={40} strokeWidth={1.5} className="mb-6 text-[#0B0B0B]" aria-hidden="true" />
                  <h3 className="font-['Playfair_Display'] text-xl font-medium mb-3 text-[#0B0B0B]">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Species We Serve */}
      <section className="py-24 bg-white" data-testid="species-section" aria-labelledby="species-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Market Coverage
            </p>
            <h2 id="species-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              Species We Serve – Ready to Launch
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Our ready-to-market solutions are designed for multiple animal categories, covering essential nutritional and functional needs.
            </p>
          </div>

          <div className="space-y-16">
            {speciesCategories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              return (
                <article key={index} data-testid={`species-${index}`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    <div className={isEven ? '' : 'lg:order-last'}>
                      <div className="flex items-center gap-3 mb-6">
                        <Icon size={32} strokeWidth={1.5} className="text-[#0B0B0B]" aria-hidden="true" />
                        <h3 className="font-['Playfair_Display'] text-3xl font-medium text-[#0B0B0B]">
                          {category.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {category.products.map((product, pIndex) => (
                          <li key={pIndex} className="flex items-center gap-3 text-zinc-700">
                            <Check size={18} strokeWidth={2.5} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm font-medium">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative h-80">
                      <img 
                        src={category.image}
                        alt={`${category.title} animal health supplements`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-50" data-testid="process-section" aria-labelledby="process-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Streamlined Process
            </p>
            <h2 id="process-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              How It Works
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              From formulation selection to branding and certified production, Ayurudnik Remedies delivers an efficient, compliant, and confidential process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-8 border border-zinc-200 relative"
                data-testid={`step-${index}`}
              >
                <div className="text-5xl font-bold text-zinc-200 font-['Playfair_Display'] mb-4">
                  {step.number}
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-medium mb-4 text-[#0B0B0B]">
                  {step.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
                    <ArrowRight size={24} strokeWidth={1.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Manufacturing & Quality */}
      <section className="py-24 bg-white" data-testid="quality-section" aria-labelledby="quality-heading">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <img 
                src="https://images.pexels.com/photos/3938015/pexels-photo-3938015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="GMP-certified pharmaceutical manufacturing facility with quality control"
                className="w-full h-full object-cover"
                data-testid="quality-image"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Quality Assurance
              </p>
              <h2 id="quality-heading" className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-8">
                Trusted Manufacturing & Quality
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Our expertise in formulation science and GMP-aligned manufacturing ensures reliable quality, confidentiality, and consistency—making Ayurudnik Remedies a trusted long-term private-label partner.
              </p>
              
              <div className="space-y-4">
                {[
                  "GMP-certified manufacturing facilities",
                  "Strict quality control protocols",
                  "Confidential production partnerships",
                  "Consistent batch-to-batch quality",
                  "Regulatory compliance support"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award size={20} strokeWidth={1.5} className="text-[#0B0B0B] mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="text-zinc-700 font-medium">{item}</span>
                  </div>
                ))}
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
            alt="Professional animal health setting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium mb-8 leading-tight">
              Launch Your Private Label Products Faster
            </h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-12">
              Partner with Ayurudnik Remedies to bring proven, ready-to-market animal health solutions to your customers—efficiently and confidently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#0B0B0B] text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 flex items-center gap-2"
                aria-label="Request product catalogue"
              >
                <ArrowRight size={16} strokeWidth={2} />
                Request Catalogue
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 border-2 border-white text-white text-sm font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300 flex items-center gap-2"
                aria-label="Contact us via WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
