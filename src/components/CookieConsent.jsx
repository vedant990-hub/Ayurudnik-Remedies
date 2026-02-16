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
      className="fixed bottom-6 left-6 z-50 bg-zinc-900 border-2 border-zinc-700 shadow-2xl rounded-lg max-w-sm"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      data-testid="cookie-consent-banner"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="p-6">
        {/* Text Content */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-2">
            🍪 We use cookies
          </h3>
          <p className="text-sm text-zinc-200 leading-relaxed">
            We use cookies to improve your browsing experience.{' '}
            <a 
              href="/cookie-policy.html"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            data-testid="cookie-accept-button"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
