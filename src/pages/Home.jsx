import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Factory, Truck, Users, Microscope, FlaskConical, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Statistics } from '../components/Statistics';

export const Home = () => {
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);
  const processRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === processRef.current) {
              setIsProcessVisible(true);
            }
            if (entry.target === whyChooseRef.current) {
              setIsWhyChooseVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }
    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, []);

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
                image: '/tablet1.png'
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

          <div ref={whyChooseRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                title: 'GMP-Certified Manufacturing',
                description: 'Internationally compliant facilities with strict quality control at every stage.',
                icon: Factory,
                bgColor: 'bg-orange-50',
                iconColor: 'text-orange-600',
                hoverBg: 'group-hover:bg-orange-100'
              },
              {
                title: 'Clinically Backed Formulations',
                description: 'Products developed through research, testing, and field validation.',
                icon: CheckCircle2,
                bgColor: 'bg-blue-50',
                iconColor: 'text-blue-600',
                hoverBg: 'group-hover:bg-blue-100'
              },
              {
                title: 'Global Supply Capability',
                description: 'Reliable production and logistics supporting distributors and exporters worldwide.',
                icon: Truck,
                bgColor: 'bg-green-50',
                iconColor: 'text-green-600',
                hoverBg: 'group-hover:bg-green-100'
              },
              {
                title: 'Private Label Expertise',
                description: 'End-to-end support from formulation to packaging and scale-up.',
                icon: Users,
                bgColor: 'bg-purple-50',
                iconColor: 'text-purple-600',
                hoverBg: 'group-hover:bg-purple-100'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`group transition-all duration-[1400ms] ease-out ${
                    isWhyChooseVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                  data-testid={`why-item-${index}`}
                >
                  {/* Card */}
                  <div className="bg-white border border-zinc-300 p-6 sm:p-7 md:p-8 h-full group-hover:border-zinc-500 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-250">
                    {/* Icon */}
                    <div className={`mb-4 sm:mb-5 md:mb-6 w-16 h-16 rounded-lg ${item.bgColor} ${item.hoverBg} flex items-center justify-center transition-all duration-300`}>
                      <Icon size={36} strokeWidth={1.5} className={`${item.iconColor} transition-colors duration-300`} />
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden" data-testid="how-we-work">
        {/* Subtle industrial texture background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-3">
              Our Process
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#0B0B0B]">
              From Science to Solution
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Connecting Line - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute top-[72px] left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200" 
                 style={{ marginLeft: '12%', marginRight: '12%' }}>
            </div>

            {/* Process Steps Grid */}
            <div ref={processRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {[
                { 
                  step: 'Research', 
                  description: 'Veterinary science meets innovation',
                  icon: Microscope,
                  number: '01',
                  color: 'blue',
                  bgColor: 'bg-blue-50',
                  borderColor: 'border-blue-200',
                  hoverBg: 'group-hover:bg-blue-600',
                  hoverBorder: 'group-hover:border-blue-600',
                  iconColor: 'text-blue-600'
                },
                { 
                  step: 'Formulation', 
                  description: 'Precision in every ingredient',
                  icon: FlaskConical,
                  number: '02',
                  color: 'teal',
                  bgColor: 'bg-teal-50',
                  borderColor: 'border-teal-200',
                  hoverBg: 'group-hover:bg-teal-600',
                  hoverBorder: 'group-hover:border-teal-600',
                  iconColor: 'text-teal-600'
                },
                { 
                  step: 'Manufacturing', 
                  description: 'GMP-certified production',
                  icon: Factory,
                  number: '03',
                  color: 'orange',
                  bgColor: 'bg-orange-50',
                  borderColor: 'border-orange-200',
                  hoverBg: 'group-hover:bg-orange-600',
                  hoverBorder: 'group-hover:border-orange-600',
                  iconColor: 'text-orange-600'
                },
                { 
                  step: 'Distribution', 
                  description: 'Global reach, local support',
                  icon: Globe,
                  number: '04',
                  color: 'green',
                  bgColor: 'bg-green-50',
                  borderColor: 'border-green-200',
                  hoverBg: 'group-hover:bg-green-600',
                  hoverBorder: 'group-hover:border-green-600',
                  iconColor: 'text-green-600'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative transition-all duration-[1400ms] ease-out ${
                      isProcessVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                    data-testid={`process-step-${index}`}
                  >
                    {/* Card */}
                    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full border border-zinc-100">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#0B0B0B] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                        {item.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-lg ${item.bgColor} border-2 ${item.borderColor} flex items-center justify-center mb-6 ${item.hoverBorder} ${item.hoverBg} transition-all duration-300`}>
                        <Icon className={`w-7 h-7 ${item.iconColor} group-hover:text-white transition-colors duration-300`} strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-3 tracking-tight">
                        {item.step}
                      </h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 md:py-32 relative" 
        style={{backgroundImage: 'url(/hero.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
        data-testid="cta-section"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-medium mb-8 text-white">
              Partner With Us
            </h2>
            <p className="text-zinc-100 text-lg mb-12">
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
        </div>
      </section>
    </div>
  );
};
