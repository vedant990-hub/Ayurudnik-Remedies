import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <div data-testid="products-page">
      {/* Hero */}
      <section className="py-32 bg-white" data-testid="products-hero">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Our Portfolio
            </p>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
              Comprehensive Animal Health Solutions
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From preventive care to therapeutic interventions, our product range covers the complete spectrum of animal health needs. Each formulation is designed with precision, tested rigorously, and manufactured under GMP standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white" data-testid="product-categories">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              What We Offer
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 sm:mb-8">
              Our Products
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Quality veterinary and nutritional supplement formats for multiple animal species.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
            {[
              {
                title: 'Liquid Supplements',
                description: 'Fast-absorbing liquid formulations for precise dosing and high bioavailability.',
                link: '/products/liquids',
                image: '/liquid1.png'
              },
              {
                title: 'Powdered Supplements',
                description: 'Versatile powder formulations for daily nutrition, performance, and recovery support.',
                link: '/products/powders',
                image: '/powder1.png'
              },
              {
                title: 'Tablets & Boluses',
                description: 'Stable, accurately dosed tablet formulations for professional livestock applications.',
                link: '/products/tablets',
                image: 'https://images.pexels.com/photos/3880180/pexels-photo-3880180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Soft Chews',
                description: 'Palatable functional soft chews designed for companion animal supplementation.',
                link: '/products/soft-chews',
                image: '/softchew1.png'
              }
            ].map((format, index) => (
              <Link 
                key={index}
                to={format.link}
                data-testid={`product-format-${index}`}
                className="block bg-white"
              >
                <div className="h-full flex flex-col">
                  {/* Image - Prominent */}
                  <div className="mb-8 sm:mb-10 md:mb-12 h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-sm flex-shrink-0">
                    <img 
                      src={format.image}
                      alt={format.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="px-6 sm:px-7 md:px-8 pb-6 sm:pb-7 md:pb-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium mb-4 sm:mb-5 md:mb-6 text-[#0B0B0B] leading-tight">
                      {format.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed flex-grow mb-6 sm:mb-7 md:mb-8">
                      {format.description}
                    </p>
                    
                    {/* CTA Link */}
                    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-[#0B0B0B] hover:text-zinc-600 transition-colors">
                      Learn More <ArrowRight size={14} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
