import React from 'react';

/**
 * Premium MarqueeStrip Component
 * Production-grade horizontal scrolling credibility strip for B2B veterinary manufacturing
 * 
 * Features:
 * - Gradient fade overlays (left/right)
 * - Smooth 30s animation with hover slowdown
 * - Responsive typography
 * - Elegant dot separators
 * - Premium subtle background
 * - Hardware-accelerated animation
 * - Fully accessible
 */
export const MarqueeStrip = React.memo(() => {
  // Core credibility items
  const items = [
    'GMP Certified',
    'Private Label Specialists',
    'Export-Ready Manufacturing',
    'Custom Formulations'
  ];

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-animate {
          animation: marqueeScroll 10s linear infinite;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-backface-visibility: hidden;
        }

        /* Smooth hover slowdown instead of complete stop */
        .marquee-animate:hover {
          animation-duration: 15s;
        }

        /* Even faster on mobile */
        @media (max-width: 768px) {
          .marquee-animate {
            animation-duration: 8s;
          }

          .marquee-animate:hover {
            animation-duration: 12s;
          }
        }

        /* Respect user motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .marquee-animate {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      {/* Premium Container */}
      <div 
        className="relative w-full bg-neutral-900 overflow-hidden"
        data-testid="marquee-strip"
        role="region"
        aria-label="Manufacturing credentials: GMP Certified, Private Label Specialists, Export-Ready Manufacturing, Custom Formulations"
      >
        {/* Premium vertical padding */}
        <div className="py-5 md:py-6 lg:py-7">
          {/* Main scrolling content */}
          <div className="marquee-animate flex">
            {duplicatedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-shrink-0 px-6 md:px-8 lg:px-10"
              >
                {/* Dot separator before item (except first item of each set) */}
                {index > 0 && index % items.length !== 0 && (
                  <span className="mr-6 md:mr-8 lg:mr-10 text-neutral-600">•</span>
                )}

                {/* Elegant text with premium typography */}
                <span className="text-xs md:text-sm lg:text-base font-semibold tracking-widest text-neutral-300 whitespace-nowrap">
                  {item}
                </span>

                {/* Dot separator after last item of each set */}
                {index % items.length === items.length - 1 && (
                  <span className="ml-6 md:ml-8 lg:ml-10 text-neutral-600">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Left gradient fade overlay - Premium fade effect */}
        <div
          className="absolute inset-y-0 left-0 w-12 md:w-20 lg:w-32 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Right gradient fade overlay - Premium fade effect */}
        <div
          className="absolute inset-y-0 right-0 w-12 md:w-20 lg:w-32 bg-gradient-to-l from-neutral-900 via-neutral-900/50 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>
    </>
  );
});

MarqueeStrip.displayName = 'MarqueeStrip';
