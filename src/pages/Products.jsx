import React from 'react';
import { Pill, Leaf, FlaskConical, Package } from 'lucide-react';

export const Products = () => {
  const productCategories = [
    {
      icon: Pill,
      name: 'Antibiotics & Antimicrobials',
      description: 'Advanced formulations for bacterial and parasitic infections',
      products: [
        'Broad-spectrum antibiotics',
        'Targeted antimicrobial agents',
        'Combination therapy solutions',
        'Injectable and oral formulations'
      ]
    },
    {
      icon: Leaf,
      name: 'Nutritional Supplements',
      description: 'Essential vitamins, minerals, and growth promoters',
      products: [
        'Multi-vitamin complexes',
        'Calcium & mineral supplements',
        'Growth enhancers',
        'Immunity boosters'
      ]
    },
    {
      icon: FlaskConical,
      name: 'Veterinary Pharmaceuticals',
      description: 'Therapeutic solutions for various animal health conditions',
      products: [
        'Anti-inflammatory agents',
        'Analgesics and pain management',
        'Hormonal preparations',
        'Cardiovascular support'
      ]
    },
    {
      icon: Package,
      name: 'Feed Additives',
      description: 'Performance-enhancing feed supplements',
      products: [
        'Digestive enzymes',
        'Probiotic formulations',
        'Toxin binders',
        'Feed efficiency enhancers'
      ]
    }
  ];

  return (
    <div data-testid="products-page">
      {/* Hero */}
      <section className="py-32 bg-white" data-testid="products-hero">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Our Portfolio
            </p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
              Comprehensive Animal Health Solutions
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From preventive care to therapeutic interventions, our product range covers the complete spectrum of animal health needs. Each formulation is designed with precision, tested rigorously, and manufactured under GMP standards.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-zinc-50" data-testid="product-grid">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-zinc-200 p-10 hover:border-zinc-900 transition-colors duration-300"
                  data-testid={`product-category-${index}`}
                >
                  <Icon size={40} strokeWidth={1.5} className="mb-6 text-[#0B0B0B]" />
                  <h2 className="font-['Playfair_Display'] text-3xl font-medium mb-4 text-[#0B0B0B]">
                    {category.name}
                  </h2>
                  <p className="text-zinc-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.products.map((product, pIndex) => (
                      <li 
                        key={pIndex}
                        className="flex items-start gap-3 text-sm text-zinc-700"
                      >
                        <span className="inline-block w-1 h-1 bg-[#0B0B0B] mt-2"></span>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Species Coverage */}
      <section className="py-24 bg-white" data-testid="species-coverage">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Application
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B]">
              Multi-Species Solutions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-zinc-200">
            {[
              'Cattle',
              'Poultry',
              'Swine',
              'Equine',
              'Companion Animals'
            ].map((species, index) => (
              <div 
                key={index}
                className="bg-white p-8 text-center hover:bg-zinc-50 transition-colors"
                data-testid={`species-${index}`}
              >
                <div className="text-4xl font-['Playfair_Display'] font-bold text-zinc-100 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-medium text-[#0B0B0B]">
                  {species}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label */}
      <section className="py-24 bg-[#0B0B0B] text-white" data-testid="private-label">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">
                For Partners
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8 leading-tight">
                Private Label & Custom Formulations
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Partner with us to develop and manufacture custom formulations under your brand. Our private label services include formulation development, regulatory support, packaging design, and scalable manufacturing.
              </p>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-white mt-2"></span>
                  <span>Minimum order quantities tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-white mt-2"></span>
                  <span>Complete regulatory documentation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-white mt-2"></span>
                  <span>Flexible packaging and labeling options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-white mt-2"></span>
                  <span>Dedicated account management</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[500px]">
              <img 
                src="https://images.pexels.com/photos/12951634/pexels-photo-12951634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Manufacturing vats"
                className="w-full h-full object-cover grayscale-img"
                data-testid="private-label-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-white" data-testid="quality-assurance">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Our Promise
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8 text-[#0B0B0B]">
              Quality at Every Step
            </h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Every product undergoes multi-stage quality control testing, from raw material verification to finished product stability studies. Our commitment to quality ensures consistent, reliable results that veterinarians and animal owners can trust.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
