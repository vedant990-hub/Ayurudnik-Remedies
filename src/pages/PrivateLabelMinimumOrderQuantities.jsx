import React, { useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivateLabelMinimumOrderQuantities = () => {
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
    document.title = "Minimum Order Quantities (MOQ) | Private Label Animal Supplements | Ayurudnik";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Transparent MOQ details for private label animal nutrition products. Soft chews, pastes, liquids, powders, pellets, and cold-pressed formulations from Ayurudnik Remedies.";
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "MOQ animal supplements, minimum order quantities, private label manufacturing, bulk animal health products, veterinary supplements manufacturing";
    
    const ogTags = [
      { property: "og:title", content: "Minimum Order Quantities | Ayurudnik Private Label" },
      { property: "og:description", content: "Transparent MOQ details for private label animal nutrition products." },
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
      "@type": "WebPage",
      "name": "Minimum Order Quantities for Private Label Animal Supplements",
      "provider": {
        "@type": "Organization",
        "name": "Ayurudnik"
      },
      "description": "MOQ details for private label animal nutrition and veterinary supplement products"
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

  const moqData = [
    {
      productType: "Soft Chews (Heart / Square / Bone Shape)",
      moq: "160 kg",
      smallestPackSize: "30 g",
      packagingOptions: "Pots, bags, buckets"
    },
    {
      productType: "Pastes",
      moq: "500 syringes",
      smallestPackSize: "30 ml",
      packagingOptions: "Syringes"
    },
    {
      productType: "Liquids",
      moq: "100 L",
      smallestPackSize: "50 ml",
      packagingOptions: "Bottles, jerry cans, bulk containers"
    },
    {
      productType: "Powders",
      moq: "100 kg",
      smallestPackSize: "100 g",
      packagingOptions: "Pots, bags, buckets"
    },
    {
      productType: "Pellets",
      moq: "500 kg",
      smallestPackSize: "100 g",
      packagingOptions: "Pots, bags, buckets"
    },
    {
      productType: "Cold Press PET FODD (Dogs & Cats)",
      moq: "160 kg",
      smallestPackSize: "100 g",
      packagingOptions: "Pots, bags, buckets"
    }
  ];

  return (
    <div data-testid="moq-page">
      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
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
              <p className="text-sm text-zinc-500 mb-6">
                +91 {whatsappNumber}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleCancelWhatsApp}
                  className="flex-1 px-4 py-2 border border-zinc-300 text-zinc-700 text-sm font-medium rounded hover:bg-zinc-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmWhatsApp}
                  className="flex-1 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header / Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden min-h-96 sm:min-h-[450px] md:min-h-[550px]" data-testid="header-section" aria-labelledby="page-title">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpeg"
            alt="Manufacturing and logistics background"
            className="w-full h-full object-cover opacity-90"
            style={{ objectPosition: 'center center' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Planning & Logistics
            </p>
            <h1 
              id="page-title"
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] mb-4 sm:mb-8 leading-[1.1]"
            >
              Minimum Order Quantities
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed mb-4 sm:mb-6">
              We supply everything from small quantities to bulk products, always with packaging that meets your needs.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed">
              When starting a private label business, it's important to understand minimum order quantities. This helps you plan production costs and inventory efficiently. Below is an overview of our minimum order quantities by product type, allowing you to select the format that best suits your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* MOQ Table Section */}
      <section className="py-12 md:py-18 lg:py-24 bg-zinc-50" data-testid="moq-table-section" aria-labelledby="moq-heading">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-10 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 sm:mb-4">
              Product Specifications
            </p>
            <h2 
              id="moq-heading"
              className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B]"
            >
              MOQ Overview
            </h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded border border-zinc-200">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0B0B0B] text-white border-b border-zinc-900">
                  <th className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-left text-xs font-semibold uppercase tracking-[0.05em] text-white">
                    Product Type
                  </th>
                  <th className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-left text-xs font-semibold uppercase tracking-[0.05em] text-white">
                    Minimum Order Quantity (MOQ)
                  </th>
                  <th className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-left text-xs font-semibold uppercase tracking-[0.05em] text-white">
                    Smallest Pack Size
                  </th>
                  <th className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-left text-xs font-semibold uppercase tracking-[0.05em] text-white">
                    Packaging Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {moqData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-zinc-100 transition-colors hover:bg-zinc-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
                    }`}
                  >
                    <td className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-xs md:text-sm font-medium text-[#0B0B0B]">
                      {row.productType}
                    </td>
                    <td className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-xs md:text-sm text-zinc-700">
                      {row.moq}
                    </td>
                    <td className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-xs md:text-sm text-zinc-700">
                      {row.smallestPackSize}
                    </td>
                    <td className="px-4 md:px-6 lg:px-8 py-4 md:py-5 text-xs md:text-sm text-zinc-700">
                      {row.packagingOptions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {moqData.map((row, index) => (
              <div
                key={index}
                className="border border-zinc-200 bg-white rounded p-4 sm:p-6 space-y-3 sm:space-y-4"
              >
                <h3 className="font-['Playfair_Display'] text-base sm:text-lg font-medium text-[#0B0B0B]">
                  {row.productType}
                </h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.05em] text-zinc-500 mb-1">
                      MOQ
                    </p>
                    <p className="text-zinc-700 font-medium">{row.moq}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.05em] text-zinc-500 mb-1">
                      Smallest Pack Size
                    </p>
                    <p className="text-zinc-700">{row.smallestPackSize}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.05em] text-zinc-500 mb-1">
                      Packaging Options
                    </p>
                    <p className="text-zinc-700">{row.packagingOptions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clarification Section */}
      <section className="py-12 md:py-18 lg:py-24 bg-white" data-testid="clarification-section">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Flexibility
            </p>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium text-[#0B0B0B] mb-4 sm:mb-6">
              Tailored Solutions Available
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Minimum order quantities may vary depending on formulation, packaging customization, and market requirements. For specific requests or tailored solutions, our team can assist in determining the most suitable production plan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#0B0B0B] text-white relative overflow-hidden" data-testid="cta-section" aria-labelledby="cta-heading">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Scientists working in laboratory conducting research and quality control"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              id="cta-heading"
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 sm:mb-8 leading-[1.1]"
            >
              Need help selecting the right format or MOQ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-8 sm:mb-12 leading-relaxed">
              Our team can assist you in determining the most suitable production plan for your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0B0B0B] text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-zinc-100 transition-colors duration-300 flex items-center justify-center gap-2"
                aria-label="Contact our team"
              >
                Contact Our Team
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-xs sm:text-sm font-medium uppercase tracking-[0.1em] hover:bg-white hover:text-[#0B0B0B] transition-colors duration-300 flex items-center justify-center gap-2"
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
