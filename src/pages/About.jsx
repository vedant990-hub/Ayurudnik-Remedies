import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Beaker, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  const heroImageRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineStepsRef = useRef([]);
  const timelinesRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll();
  const dividerParallax = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { scrollYProgress: imageScroll } = useScroll({
    target: heroImageRef,
    offset: ['start end', 'end start']
  });
  const imageScale = useTransform(imageScroll, [0, 1], [1.05, 1]);

  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 });
  const timelinesInView = useInView(timelinesRef, { once: true, amount: 0.4 });

  useEffect(() => {
    const elements = timelineStepsRef.current;
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            if (!Number.isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: '-20% 0px -45% 0px' }
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const heroVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeInOut' }
    }
  };

  const missionCard = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -28 : 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeInOut' }
    }
  });

  const timelineSteps = [
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
  ];

  const comparisonCards = [
    {
      title: 'Custom-Made Solutions',
      timeframe: '3-6 months',
      progress: '78%',
      icon: Beaker
    },
    {
      title: 'Ready-for-Market Products',
      timeframe: '1-2 months',
      progress: '42%',
      icon: Clock
    }
  ];

  const trustCards = [
    {
      title: 'GMP Certified Manufacturing',
      path: 'M5 18h14v-6c0-3.9-3.1-7-7-7h0c-3.9 0-7 3.1-7 7v6z'
    },
    {
      title: 'ISO 9001:2015 Quality Systems',
      path: 'M6 12l3 3 9-9'
    },
    {
      title: 'Export & Regulatory Compliance Support',
      path: 'M4 12a8 8 0 1 0 16 0A8 8 0 1 0 4 12m8-8v16'
    },
    {
      title: 'Documented Batch & Quality Control',
      path: 'M7 5h10v4H7zm0 6h10v8H7z'
    }
  ];

  return (
    <div data-testid="about-page" className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0B0B0B] origin-left z-50"
        style={{ scaleX: progressScale }}
      />
      {/* Hero Section - Split Layout */}
      <section
        className="relative overflow-hidden py-24 md:py-32 bg-white"
        data-testid="about-hero"
      >
        <div className="hero-aurora" aria-hidden="true" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="relative z-10"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={heroItem}
                className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4"
              >
                About Ayurudnik Remedies
              </motion.p>
              <motion.h1
                variants={heroItem}
                className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-medium text-[#0B0B0B] leading-[1.05] mb-6"
              >
                Science-Led Veterinary Manufacturing
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="text-base md:text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl"
              >
                Ayurudnik Remedies is a B2B manufacturer of veterinary and animal nutrition products, specializing in private-label development and institutional partnerships. We deliver compliant, repeatable manufacturing from concept to delivery.
              </motion.p>
              <motion.div variants={heroItem}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0B0B0B] text-white h-12 px-8 text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-800 transition-colors"
                >
                Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <div className="relative group" ref={heroImageRef}>
              <div className="overflow-hidden rounded-3xl shadow-[0_32px_60px_-24px_rgba(11,11,11,0.35)]">
                <motion.img
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop" 
                  alt="Manufacturing Facility"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                  style={{ scale: imageScale }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.div className="section-divider" style={{ y: dividerParallax }} aria-hidden="true" />

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-28 bg-zinc-50" data-testid="mission-vision">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <motion.div
              className="glass-card p-6 sm:p-8 md:p-12"
              variants={missionCard('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/40 bg-white/70 text-[#0B0B0B] mb-6"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Sparkles size={20} strokeWidth={1.5} />
              </motion.div>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Mission
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Develop reliable private-label veterinary and nutrition products with consistent quality and documented manufacturing controls.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 sm:p-8 md:p-12"
              variants={missionCard('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/40 bg-white/70 text-[#0B0B0B] mb-6"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.05 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <ShieldCheck size={20} strokeWidth={1.5} />
              </motion.div>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-[#0B0B0B]">
                Vision
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Be a trusted manufacturing partner for compliant, science-led animal health and nutrition solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div className="section-divider" style={{ y: dividerParallax }} aria-hidden="true" />

      {/* How We Work */}
      <section className="py-16 sm:py-20 md:py-28 bg-white" data-testid="how-we-work">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12" ref={timelineRef}>
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

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8">
            <div className="relative hidden lg:block">
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-zinc-200" />
              <motion.div
                className="absolute left-1/2 top-0 w-[2px] bg-[#0B0B0B] origin-top"
                animate={{ height: timelineInView ? '100%' : '0%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>

            <div className="space-y-5">
              {timelineSteps.map((row, index) => (
                <motion.div
                  key={row.step}
                  ref={(el) => {
                    timelineStepsRef.current[index] = el;
                  }}
                  data-step-index={index}
                  className={`step-card ${
                    activeStep === index
                      ? 'step-card-active'
                      : 'border-zinc-200 bg-white'
                  }`}
                  initial={{ opacity: 0, x: 28 }}
                  animate={
                    timelineInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 28 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: timelineInView ? index * 0.4 : 0,
                    ease: 'easeInOut'
                  }}
                >
                  <div className="flex items-start gap-6">
                    <motion.span
                      className="text-sm sm:text-base font-medium text-[#0B0B0B]"
                      animate={{ scale: activeStep === index ? 1.15 : 1 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      {row.step}
                    </motion.span>
                    <div>
                      <h3 className="text-lg font-medium text-[#0B0B0B] mb-2">
                        {row.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                        {row.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <motion.div className="section-divider" style={{ y: dividerParallax }} aria-hidden="true" />

      {/* Development Timelines */}
      <section className="py-16 sm:py-20 md:py-28 bg-zinc-50" data-testid="development-timelines">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12" ref={timelinesRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="glass-card p-6 sm:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeInOut' }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-[#0B0B0B] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-zinc-600">Average timeline: {card.timeframe}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-white/70 flex items-center justify-center text-[#0B0B0B]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-200/70 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[#0B0B0B]"
                      initial={{ width: '0%' }}
                      animate={timelinesInView ? { width: card.progress } : { width: '0%' }}
                      transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <motion.div className="section-divider" style={{ y: dividerParallax }} aria-hidden="true" />

      {/* Trust & Compliance */}
      <section className="py-16 sm:py-20 md:py-28 bg-white trust-grid" data-testid="trust-compliance">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Trust & Compliance
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0B0B]">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card trust-card p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.svg
                  className="w-8 h-8 text-[#0B0B0B] mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                >
                  <motion.path
                    d={item.path}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
                <h3 className="text-sm sm:text-base font-medium text-[#0B0B0B]">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.div className="section-divider" style={{ y: dividerParallax }} aria-hidden="true" />

      {/* Call to Action */}
      <section 
        className="relative py-20 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpeg)' }}
        data-testid="about-cta"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 text-left">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-zinc-200 text-base sm:text-lg max-w-2xl mb-8">
            Looking for a reliable private-label manufacturing partner? Let's build something exceptional together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0B0B0B] text-white h-12 px-8 text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-800 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
