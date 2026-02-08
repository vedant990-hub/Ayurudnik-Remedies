import React from 'react';
import { Check, Package, Leaf } from 'lucide-react';

export const Manufacturing = () => {
  const customSolutions = [
    'Respiration',
    'Digestion',
    'Muscle support',
    'Joint support',
    'Recovery',
    'Skin, hair & hooves',
    'Detox',
    'Minerals, vitamins & electrolytes',
    'Anti-stress',
    'Resistance & immunity',
    'Relaxation',
    'Reproduction'
  ];

  const ingredients = [
    'Vitamins',
    'Minerals',
    'Trace elements',
    'Herbs',
    'Extracts',
    'Essential oils',
    'Tinctures',
    'Proteins',
    'Vegetable and fish oils'
  ];

  const productFormats = [
    'Liquids',
    'Powders',
    'Pastes',
    'Pellets',
    'Tablets',
    'Semi-moist snacks (soft chews)'
  ];

  const readyMarketSpecies = [
    {
      species: 'Pets (Dogs & Cats)',
      solutions: 'Digestive, skin & coat, joint, anti-stress, multivitamins'
    },
    {
      species: 'Horses',
      solutions: 'Gastric, intestinal, joint, hoof, respiratory, performance support'
    },
    {
      species: 'Poultry & Birds',
      solutions: 'Vitamins, electrolytes, liver, respiratory, endurance support'
    },
    {
      species: 'Cattle & Swine',
      solutions: 'Metabolic, heat stress, intestinal, electrolyte solutions'
    },
    {
      species: 'Hobby Poultry',
      solutions: 'Eggshell quality, moulting, parasite and gut health'
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
      {/* Hero */}
      <section className="py-32 bg-white" data-testid="manufacturing-hero">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Private Label Solutions
            </p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-8">
              Build Your Brand with Ayurudnik
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              From concept to shelf, Ayurudnik Remedies provides complete private label solutions for animal health and supplement products. Launch your brand with confidence backed by our GMP-certified expertise.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Custom Made Solutions */}
      <section className="py-24 bg-white" id="custom-solutions" data-testid="custom-solutions">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Tailored Formulations
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8 text-[#0B0B0B]">
              Custom Made Solutions
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Thanks to our continuous research and development, we can provide custom recipes tailored to the specific needs of your animals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Animal Categories */}
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-6 text-[#0B0B0B]">
                Solutions for All Animal Species
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-bold text-zinc-700 mb-2">Livestock</h4>
                  <p className="text-zinc-600">Cattle, goats, sheep, poultry, and swine</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-700 mb-2">Hobby Animals</h4>
                  <p className="text-zinc-600">Horses, pigeons, birds, fish</p>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-700 mb-2">Pets</h4>
                  <p className="text-zinc-600">Dogs & Cats</p>
                </div>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-6 text-[#0B0B0B]">
                Custom Made Products – Solutions for Your Needs
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Thanks to our research and development expertise, we have experience with the following solution categories:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {customSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={18} className="text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Quality Ingredients & Formats */}
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-6 text-[#0B0B0B]">
                High-Quality Ingredients
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Our ingredients support the effectiveness of our solutions and include:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-12">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Leaf size={18} className="text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{ingredient}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-6 text-[#0B0B0B]">
                Production & Packaging
              </h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                Choose the product format that best fits your animal's needs. Packaging can be customized to your brand, with orders available in both small and large bulk quantities.
              </p>
              <h4 className="font-bold text-zinc-700 mb-4">Available formats:</h4>
              <div className="space-y-3">
                {productFormats.map((format, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Package size={18} className="text-[#0B0B0B] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{format}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Ready-for-Market Solutions */}
      <section className="py-24 bg-white" id="ready-market" data-testid="ready-market">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Pre-Formulated Solutions
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8 text-[#0B0B0B]">
              Ready-for-Market Solutions
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              Ayurudnik Remedies offers a comprehensive portfolio of ready-for-market animal health and feed supplement solutions designed to support performance, resilience, and overall well-being.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              These formulations are developed for rapid market entry and can be adapted to meet your specific requirements, including composition, dosage, and branding.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              With our ready-made solutions, you can launch quickly, reduce development time, and respond efficiently to market demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <h3 className="col-span-full font-['Playfair_Display'] text-3xl font-medium mb-8 text-[#0B0B0B]">
              Species We Serve with Ready-to-Launch Solutions
            </h3>
            {readyMarketSpecies.map((item, index) => (
              <div key={index} className="border border-zinc-200 p-8 bg-zinc-50 hover:border-zinc-900 transition-colors">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium mb-4 text-[#0B0B0B]">
                  {item.species}
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  {item.solutions}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 pt-16 border-t border-zinc-200">
            <h3 className="font-['Playfair_Display'] text-3xl font-medium mb-8 text-[#0B0B0B]">
              How It Works
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              From formulation selection to branding and certified production, Ayurudnik Remedies delivers an efficient, compliant, and confidential process.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Our expertise in formulation science and GMP-aligned manufacturing ensures consistent quality and dependable delivery—making us a trusted long-term partner for your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Minimum Order Quantities */}
      <section className="py-24 bg-white" id="moq-section" data-testid="moq-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              Getting Started
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium mb-8 text-[#0B0B0B]">
              Minimum Order Quantities
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed mb-4">
              Minimum order quantities (MOQ) represent the smallest amount we can produce for each product type. Understanding these quantities helps you plan production costs, inventory requirements, and market entry timelines effectively.
            </p>
            <p className="text-base text-zinc-600 leading-relaxed">
              We offer flexible packaging options for all product formats to meet your specific branding and distribution needs.
            </p>
          </div>

          <div className="border border-zinc-300 overflow-hidden rounded-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0B0B0B] text-white border-b border-zinc-300">
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">Product Type</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">Minimum Order Quantity</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">Smallest Pack Size</th>
                    <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">Packaging Options</th>
                  </tr>
                </thead>
                <tbody>
                  {moqData.map((row, index) => (
                    <tr key={index} className={`border-b border-zinc-200 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'} hover:bg-zinc-100 transition-colors`}>
                      <td className="px-6 py-4 text-sm text-zinc-800 font-medium">{row.product}</td>
                      <td className="px-6 py-4 text-sm text-zinc-800 font-bold text-[#0B0B0B]">{row.moq}</td>
                      <td className="px-6 py-4 text-sm text-zinc-700">{row.packSize}</td>
                      <td className="px-6 py-4 text-sm text-zinc-700">{row.packaging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
