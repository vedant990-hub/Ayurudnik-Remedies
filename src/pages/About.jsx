import React, { useEffect, useRef } from 'react';
import { Award, Globe, Target, TrendingUp, Shield } from 'lucide-react';

export const About = () => {
  const coreValueRefs = useRef([]);

  useEffect(() => {
    if (!coreValueRefs.current.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      coreValueRefs.current.forEach((el) => {
        if (el) el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    coreValueRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" data-testid="about-hero">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              About Us
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#0B0B0B] leading-[1.1] mb-6 sm:mb-8">
              About Ayurudnik Remedies
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 mb-3 sm:mb-4 leading-relaxed">
              Ayurudnik Remedies is a B2B manufacturer of animal nutrition and veterinary supplement products, focused on private label and institutional partners.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed">
              We combine Ayurvedic formulation science with controlled manufacturing to deliver safe, consistent, and compliant products from our Nashik facility, built around repeatable processes and documented quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-zinc-50" data-testid="mission-vision">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="border border-zinc-200 p-6 sm:p-8 md:p-12 bg-white">
              <Target size={40} strokeWidth={1.5} className="mb-4 sm:mb-6 text-[#0B0B0B]" />
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Mission
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                Develop and manufacture reliable private label supplements for animal health brands, distributors, and veterinary partners. Deliver consistent quality, traceable sourcing, and production that supports real-world performance.
              </p>
            </div>

            <div className="border border-zinc-200 p-6 sm:p-8 md:p-12 bg-white">
              <TrendingUp size={40} strokeWidth={1.5} className="mb-4 sm:mb-6 text-[#0B0B0B]" />
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Vision
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                Become a trusted global manufacturing partner for science-backed Ayurvedic animal health products, known for compliance, precision, and long-term partner success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-18 md:py-24 lg:py-24 bg-white" data-testid="company-story">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
                Our Journey
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 text-[#0B0B0B] leading-tight">
                Our Approach
              </h2>
              <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
                <p>
                  Formulation is built on science-backed Ayurvedic principles with validated raw materials selected for safety and efficacy across target species.
                </p>
                <p>
                  Manufacturing follows certified standards with controlled processes, documentation, and batch traceability to ensure repeatable outcomes.
                </p>
                <p>
                  Quality control includes in-process checks and final release testing to maintain compliance, stability, and batch-to-batch consistency.
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img 
                src="https://images.pexels.com/photos/5953729/pexels-photo-5953729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Manufacturing facility"
                className="w-full h-full object-cover grayscale-img"
                data-testid="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0B0B0B] text-white" data-testid="core-values">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
              Our Foundation
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'Quality',
                description: 'Documented processes, controlled manufacturing, and strict release criteria to deliver consistent, compliant products.'
              },
              {
                title: 'Expertise',
                description: 'Formulation knowledge across Ayurvedic science, nutrition, and veterinary requirements to meet market needs.'
              },
              {
                title: 'Flexibility',
                description: 'Adaptable production and packaging options to fit private label specifications without compromising standards.'
              },
              {
                title: 'Customer Focus',
                description: 'Clear communication, dependable timelines, and shared accountability across development and supply.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                ref={(el) => (coreValueRefs.current[index] = el)}
                style={{ transitionDelay: `${index * 120}ms` }}
                className="core-values-card bg-[#0B0B0B] p-10 border border-zinc-800 h-full"
                data-testid={`value-${index}`}
              >
                <h3 className="core-values-title text-lg font-medium mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white" data-testid="certifications">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Accreditations
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B]">
              Certified Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'GMP Certified' },
              { icon: Shield, title: 'ISO 9001:2015' },
              { icon: Globe, title: 'Export Compliance Support' },
              { icon: Target, title: 'Quality Management Systems' }
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="text-center border border-zinc-200 p-8 hover:border-zinc-900 transition-colors"
                  data-testid={`certification-${index}`}
                >
                  <Icon size={48} strokeWidth={1.5} className="mx-auto mb-4 text-[#0B0B0B]" />
                  <h3 className="text-lg font-medium text-[#0B0B0B]">
                    {cert.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
