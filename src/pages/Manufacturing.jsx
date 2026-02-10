import React from 'react';
import { 
  Check, 
  Package, 
  Leaf, 
  FlaskConical, 
  Zap, 
  Factory, 
  Palette,
  Dog,
  Bird,
  Beef,
  Fish,
  FileText,
  ArrowRight,
  Clock,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Manufacturing = () => {
  const whatWeOfferCards = [
    {
      icon: FlaskConical,
      title: 'Custom Formulations',
      description: 'Tailored recipes for your specific needs and animals'
    },
    {
      icon: Zap,
      title: 'Ready-to-Market Products',
      description: 'Pre-formulated solutions for rapid market entry'
    },
    {
      icon: Factory,
      title: 'GMP Manufacturing',
      description: 'Certified production with consistent quality assurance'
    },
    {
      icon: Palette,
      title: 'Branding & Packaging',
      description: 'Complete customization from label to final packaging'
    }
  ];

  const customFeatures = [
    'Custom formulations tailored to your specifications',
    'Full ingredient flexibility and R&D support',
    'Complete control over formulation and claims'
  ];

  const readyMarketFeatures = [
    'Pre-tested formulations ready for branding',
    'Faster time to market with proven recipes',
    'Flexible adaptation to your requirements'
  ];

  const speciesData = [
    {
      icon: Dog,
      name: 'Dogs & Cats',
      tags: ['Digestive', 'Skin & Coat', 'Joint', 'Anti-stress']
    },
    {
      icon: '🐴',
      name: 'Horses',
      tags: ['Gastric', 'Joint', 'Hoof', 'Respiratory']
    },
    {
      icon: Bird,
      name: 'Poultry & Birds',
      tags: ['Vitamins', 'Electrolytes', 'Liver', 'Endurance']
    },
    {
      icon: Beef,
      name: 'Cattle & Swine',
      tags: ['Metabolic', 'Heat Stress', 'Intestinal', 'Growth']
    },
    {
      icon: '🦜',
      name: 'Hobby Poultry',
      tags: ['Eggshell', 'Moulting', 'Parasite', 'Gut Health']
    },
    {
      icon: Fish,
      name: 'Aquaculture',
      tags: ['Immunity', 'Growth', 'Water Quality', 'Stress']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Introduction',
      description: 'Discuss your goals, target market, and requirements'
    },
    {
      number: '02',
      title: 'Formulation & Compliance',
      description: 'Develop or select formulation with regulatory alignment'
    },
    {
      number: '03',
      title: 'Testing & Optimization',
      description: 'Quality testing and formulation refinement'
    },
    {
      number: '04',
      title: 'Branding & Packaging',
      description: 'Design labels and select packaging options'
    },
    {
      number: '05',
      title: 'Production & Delivery',
      description: 'GMP-certified manufacturing and fulfillment'
    }
  ];

  const moqData = [
    {
      product: 'Soft Chews (Heart / Square / Bone Shape)',
      moq: '160 kg',
      packSize: '30 g',
      packaging: 'Pots, bags, buckets'
    },
    {
      product: 'Pastes',
      moq: '500 syringes',
      packSize: '30 ml',
      packaging: 'Syringes'
    },
    {
      product: 'Liquids',
      moq: '100 L',
      packSize: '50 ml',
      packaging: 'Bottles, jerry cans, bulk containers'
    },
    {
      product: 'Powders',
      moq: '100 kg',
      packSize: '100 g',
      packaging: 'Pots, bags, buckets'
    },
    {
      product: 'Pellets',
      moq: '500 kg',
      packSize: '100 g',
      packaging: 'Pots, bags, buckets'
    },
    {
      product: 'Cold Press PET FOOD (Dogs & Cats)',
      moq: '160 kg',
      packSize: '100 g',
      packaging: 'Pots, bags, buckets'
    }
  ];

  return (
    <div data-testid="manufacturing-page">
      {/* Hero Section */}
      <section 
        className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100" 
        data-testid="manufacturing-hero"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMi00djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-6">
              Build Your Brand with Confidence
            </h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              GMP-certified private label solutions from formulation to final product
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white px-8 py-4 text-lg font-medium hover:bg-zinc-800 transition-colors group"
              >
                Start Your Private Label Journey 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#moq-section" 
                className="inline-flex items-center gap-2 border-2 border-[#0B0B0B] text-[#0B0B0B] px-8 py-4 text-lg font-medium hover:bg-[#0B0B0B] hover:text-white transition-colors"
              >
                View MOQ Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6 text-[#0B0B0B]">
              What We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeOfferCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index} 
                  className="border border-zinc-200 p-8 hover:border-[#0B0B0B] hover:shadow-lg transition-all duration-300 group bg-white"
                >
                  <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-[#0B0B0B] transition-colors">
                    <Icon className="w-7 h-7 text-[#0B0B0B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-medium mb-3 text-[#0B0B0B]">
                    {card.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Made vs Ready-to-Market Comparison */}
      <section className="py-24 bg-zinc-50" id="custom-solutions" data-testid="custom-solutions">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6 text-[#0B0B0B]">
              Choose Your Path
            </h2>
            <p className="text-lg text-zinc-600">
              Two flexible approaches to bring your animal health brand to market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Custom Made Column */}
            <div className="bg-white border-2 border-zinc-200 p-10 hover:border-[#0B0B0B] transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Playfair_Display'] text-3xl font-medium text-[#0B0B0B]">
                  Custom Made
                </h3>
                <span className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 text-sm font-medium">
                  <Clock size={16} />
                  3–6 months
                </span>
              </div>
              
              <ul className="space-y-4">
                {customFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ready-to-Market Column */}
            <div className="bg-white border-2 border-zinc-200 p-10 hover:border-[#0B0B0B] transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Playfair_Display'] text-3xl font-medium text-[#0B0B0B]">
                  Ready-to-Market
                </h3>
                <span className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 text-sm font-medium">
                  <Clock size={16} />
                  1–2 months
                </span>
              </div>
              
              <ul className="space-y-4">
                {readyMarketFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Species We Serve - Icon Grid */}
      <section className="py-24 bg-white" id="ready-market" data-testid="ready-market">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6 text-[#0B0B0B]">
              Species We Serve
            </h2>
            <p className="text-lg text-zinc-600">
              Comprehensive solutions for all animal health markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speciesData.map((species, index) => {
              const Icon = typeof species.icon === 'string' ? null : species.icon;
              return (
                <div 
                  key={index} 
                  className="border border-zinc-200 p-8 bg-white hover:border-[#0B0B0B] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {Icon ? (
                      <Icon className="w-10 h-10 text-[#0B0B0B]" />
                    ) : (
                      <span className="text-4xl">{species.icon}</span>
                    )}
                    <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#0B0B0B]">
                      {species.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {species.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-zinc-100 text-zinc-700 px-3 py-1 text-sm group-hover:bg-[#0B0B0B] group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Process Flow */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6 text-[#0B0B0B]">
              How It Works
            </h2>
            <p className="text-lg text-zinc-600">
              A streamlined process from concept to delivery
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-6 bg-white border-l-4 border-[#0B0B0B] p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#0B0B0B] text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-2 text-[#0B0B0B]">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block">
                      <ArrowRight className="text-zinc-300" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Order Quantities - Enhanced Table */}
      <section className="py-24 bg-white" id="moq-section" data-testid="moq-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-6 text-[#0B0B0B]">
              Minimum Order Quantities
            </h2>
            <p className="text-base text-zinc-600">
              MOQ represents the smallest production quantity per product type
            </p>
          </div>

          <div className="border-2 border-zinc-200 overflow-hidden rounded-lg bg-white shadow-sm max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0B0B0B] text-white">
                    <th className="text-left px-8 py-5 text-sm font-bold uppercase tracking-wider">Product Type</th>
                    <th className="text-left px-8 py-5 text-sm font-bold uppercase tracking-wider">MOQ</th>
                    <th className="text-left px-8 py-5 text-sm font-bold uppercase tracking-wider">Pack Size</th>
                    <th className="text-left px-8 py-5 text-sm font-bold uppercase tracking-wider">Packaging</th>
                  </tr>
                </thead>
                <tbody>
                  {moqData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-zinc-200 hover:bg-zinc-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'
                      }`}
                    >
                      <td className="px-8 py-5 text-base text-zinc-800 font-medium">{row.product}</td>
                      <td className="px-8 py-5 text-base text-[#0B0B0B] font-bold">{row.moq}</td>
                      <td className="px-8 py-5 text-base text-zinc-700">{row.packSize}</td>
                      <td className="px-8 py-5 text-base text-zinc-700">{row.packaging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <div className="bg-zinc-50 border-2 border-zinc-200 p-12">
              <h3 className="font-['Playfair_Display'] text-3xl font-medium mb-4 text-[#0B0B0B]">
                Ready to Start Your Private Label Journey?
              </h3>
              <p className="text-lg text-zinc-600 mb-8">
                Let's discuss your requirements and bring your animal health brand to market
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#0B0B0B] text-white px-10 py-4 text-lg font-medium hover:bg-zinc-800 transition-colors group"
              >
                Get in Touch 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
