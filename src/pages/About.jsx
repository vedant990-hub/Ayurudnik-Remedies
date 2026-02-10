import React from 'react';
import { Award, Globe, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="about-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-6 sm:mb-8">
              About Ayurudnik Remedies
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              Ayurudnik Remedies is a B2B manufacturer of veterinary and animal nutrition products, specializing in private-label development and institutional partnerships. We deliver compliant, repeatable manufacturing from concept to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="mission-vision">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="border border-zinc-200 p-6 sm:p-8 md:p-12 bg-white">
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Mission
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Develop reliable private-label veterinary and nutrition products with consistent quality and documented manufacturing controls.
              </p>
            </div>

            <div className="border border-zinc-200 p-6 sm:p-8 md:p-12 bg-white">
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Vision
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Be a trusted manufacturing partner for compliant, science-led animal health and nutrition solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How We Work */}
      <section className="py-16 sm:py-20 md:py-24 bg-white" data-testid="how-we-work">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Process
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B] mb-6">
              How We Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              Private-label manufacturing is managed through a structured process that aligns technical requirements, regulatory compliance, and delivery planning.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                step: '01',
                title: 'Discovery & Requirements',
                description: 'Define objectives, target species, and technical scope.'
              },
              {
                step: '02',
                title: 'Formulation & Regulatory Alignment',
                description: 'Develop compliant formulations using approved ingredients.'
              },
              {
                step: '03',
                title: 'Testing & Optimization',
                description: 'Validate stability and performance through pilot batches.'
              },
              {
                step: '04',
                title: 'Packaging & Branding',
                description: 'Confirm packaging formats and label specifications.'
              },
              {
                step: '05',
                title: 'Production & Delivery',
                description: 'Manufacture under certified controls and deliver on schedule.'
              }
            ].map((row) => (
              <div
                key={row.step}
                className="border border-zinc-200 bg-white px-6 sm:px-8 py-6 grid grid-cols-1 md:grid-cols-[72px_1fr] gap-4"
              >
                <div className="text-sm sm:text-base font-medium text-[#0B0B0B]">
                  {row.step}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0B0B0B] mb-2">
                    {row.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {row.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timelines */}
      <section className="py-16 sm:py-20 md:py-24 bg-zinc-50" data-testid="development-timelines">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 p-6 sm:p-8">
              <h3 className="text-lg font-medium text-[#0B0B0B] mb-2">
                Custom-Made Solutions
              </h3>
              <p className="text-sm text-zinc-600">
                Average timeline: 3–6 months
              </p>
            </div>
            <div className="bg-white border border-zinc-200 p-6 sm:p-8">
              <h3 className="text-lg font-medium text-[#0B0B0B] mb-2">
                Ready-for-Market Products
              </h3>
              <p className="text-sm text-zinc-600">
                Average timeline: 1–2 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-16 sm:py-20 md:py-24 bg-white" data-testid="trust-compliance">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Trust & Compliance
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B]">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'GMP Certified Manufacturing' },
              { icon: Shield, title: 'ISO 9001:2015 Quality Systems' },
              { icon: Globe, title: 'Export & Regulatory Compliance Support' },
              { icon: Target, title: 'Documented Batch & Quality Control' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="border border-zinc-200 p-6 bg-white">
                  <Icon size={28} strokeWidth={1.5} className="text-[#0B0B0B] mb-4" />
                  <h3 className="text-sm sm:text-base font-medium text-[#0B0B0B]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24 bg-zinc-50" data-testid="about-cta">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border border-zinc-200 bg-white p-8 sm:p-10 md:p-12 text-center">
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-medium text-[#0B0B0B] mb-6">
              Looking for a reliable private-label manufacturing partner?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#0B0B0B] text-white h-12 px-8 text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
