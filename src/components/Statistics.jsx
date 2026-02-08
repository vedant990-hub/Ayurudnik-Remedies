import React, { useEffect, useRef, useState } from 'react';

const StatCounter = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateCount();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B] mb-3 tracking-tight">
        {count}
        <span className="text-3xl md:text-4xl lg:text-5xl">{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-zinc-600 font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

export const Statistics = () => {
  const stats = [
    { target: 20, label: 'Clients', suffix: '+' },
    { target: 150, label: 'Developed Supplements', suffix: '+' },
    { target: 99, label: 'Healthy Animals', suffix: 'K+' },
  ];

  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B0B0B] mb-6">
            Why Trust Us
          </h2>
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Our proven track record speaks for itself. Years of expertise, thousands of satisfied customers, and countless success stories.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-center items-center md:border-r md:last:border-r-0 border-zinc-300 md:pr-8 lg:pr-12"
            >
              <StatCounter
                target={stat.target}
                label={stat.label}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
