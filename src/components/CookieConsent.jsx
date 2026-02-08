import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-900 border-t border-zinc-700 shadow-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      data-testid="cookie-consent-banner"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm text-zinc-200 leading-relaxed">
            We use cookies to improve your browsing experience.{' '}
            <a 
              href="/cookie-policy.html"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more & customise
            </a>
          </p>
        </div>

        {/* Accept Button */}
        <button
          onClick={handleAccept}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
          data-testid="cookie-accept-button"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
