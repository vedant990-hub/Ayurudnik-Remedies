import React from 'react';
import { ArrowRight, CheckCircle2, Factory, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Statistics } from '../components/Statistics';

export const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" data-testid="hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-industrial-factory-interior-with-workers-31565-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <h1 
              className="font-['Playfair_Display'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-4 sm:mb-6"
              data-testid="hero-title"
            >
              Purity in Every Drop
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Premium veterinary formulations and feed supplements engineered for excellence in animal health.
            </p>
            <Link 
              to="/products"
              data-testid="hero-cta"
              className="inline-flex items-center gap-3 bg-white text-[#0B0B0B] hover:bg-zinc-100 h-12 sm:h-14 px-6 sm:px-10 uppercase tracking-[0.15em] text-xs font-bold transition-all duration-300"
            >
              Explore Products <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="bg-[#0B0B0B] text-white py-12 sm:py-18 md:py-24 lg:py-32" data-testid="about-snapshot">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
                About Ayurudnik
              </p>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8 leading-tight">
                We engineer health for the animal kingdom.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                With decades of expertise in veterinary science and manufacturing excellence, Ayurudnik Remedies delivers formulations trusted by veterinarians, distributors, and animal health professionals across the globe.
              </p>
              <Link 
                to="/about"
                data-testid="about-cta"
                className="inline-flex items-center gap-3 text-white hover:text-zinc-300 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <img 
                src="https://images.pexels.com/photos/8325755/pexels-photo-8325755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Laboratory research"
                className="w-full h-full object-cover"
                data-testid="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/* Product Categories */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white" data-testid="product-categories">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Our Capabilities
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 sm:mb-8">
              Product Formats We Manufacture
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Private-label veterinary and nutritional supplement formats developed for multiple animal species.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
            {[
              {
                title: 'Liquid Supplements',
                description: 'Fast-absorbing liquid formulations for precise dosing and high bioavailability.',
                link: '/products/liquids',
                image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                title: 'Powdered Supplements',
                description: 'Versatile powder formulations for daily nutrition, performance, and recovery support.',
                link: '/products/powders',
                image: 'https://images.pexels.com/photos/6291275/pexels-photo-6291275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 md:py-36 lg:py-40 bg-gradient-to-b from-zinc-50 to-white" data-testid="why-choose-us">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 md:mb-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 sm:mb-6">
              Why Businesses Choose Us
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B] mb-6 sm:mb-8 leading-tight">
              Why Businesses Choose Ayurudnik
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Built for partners who demand reliability, quality, and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                title: 'GMP-Certified Manufacturing',
                description: 'Internationally compliant facilities with strict quality control at every stage.',
                icon: Factory
              },
              {
                title: 'Clinically Backed Formulations',
                description: 'Products developed through research, testing, and field validation.',
                icon: CheckCircle2
              },
              {
                title: 'Global Supply Capability',
                description: 'Reliable production and logistics supporting distributors and exporters worldwide.',
                icon: Truck
              },
              {
                title: 'Private Label Expertise',
                description: 'End-to-end support from formulation to packaging and scale-up.',
                icon: Users
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group"
                  data-testid={`why-item-${index}`}
                >
                  {/* Card */}
                  <div className="bg-white border border-zinc-300 p-6 sm:p-7 md:p-8 h-full group-hover:border-zinc-500 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-250">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <Icon size={40} strokeWidth={1.2} className="text-zinc-700 group-hover:text-zinc-900 transition-colors duration-250" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-['Playfair_Display'] text-base sm:text-lg md:text-lg font-semibold text-[#0B0B0B] mb-4 sm:mb-5 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-white" data-testid="how-we-work">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Our Process
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium text-[#0B0B0B]">
              From Science to Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-200">
            {[
              { step: 'Research', description: 'Veterinary science meets innovation' },
              { step: 'Formulation', description: 'Precision in every ingredient' },
              { step: 'Manufacturing', description: 'GMP-certified production' },
              { step: 'Distribution', description: 'Global reach, local support' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8"
                data-testid={`process-step-${index}`}
              >
                <div className="text-6xl font-['Playfair_Display'] font-bold text-zinc-100 mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-medium text-[#0B0B0B] mb-3">
                  {item.step}
                </h3>
                <p className="text-zinc-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-zinc-100" data-testid="cta-section">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium mb-8 text-[#0B0B0B]">
            Partner With Us
          </h2>
          <p className="text-zinc-600 text-lg mb-12 max-w-3xl mx-auto">
            Looking for a reliable animal nutrition manufacturing partner? From formulation to final delivery, we support veterinarians, distributors, and brands with high-quality supplements, private label solutions, and GMP-certified manufacturing.
          </p>
          <Link 
            to="/contact"
            data-testid="cta-contact"
            className="inline-flex items-center gap-3 bg-[#0B0B0B] text-white hover:bg-zinc-800 h-14 px-10 uppercase tracking-[0.15em] text-xs font-bold transition-all duration-300"
          >
            Get In Touch <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  );
};
