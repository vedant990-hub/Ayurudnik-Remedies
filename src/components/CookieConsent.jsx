import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const modalRef = useRef(null);
  const acceptButtonRef = useRef(null);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Focus the accept button when modal opens
    if (acceptButtonRef.current) {
      acceptButtonRef.current.focus();
    }

    // Handle ESC key to close modal
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleReject();
      }
    };

    // Focus trap
    const handleTab = (e) => {
      if (!modalRef.current) return;
      
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible && !showToast) {
    return null;
  }

  return (
    <>
      {/* Modal */}
      {isVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          data-testid="cookie-consent-modal"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={handleReject}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleReject}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Close cookie consent"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 
                  id="cookie-modal-title"
                  className="font-['Playfair_Display'] text-2xl sm:text-3xl font-medium text-[#0B0B0B] mb-3"
                >
                  Cookie Preferences
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>

              {/* Link to full policy */}
              <div className="mb-6 p-4 bg-zinc-50 rounded border border-zinc-200">
                <p className="text-sm text-zinc-700">
                  For more details about how we handle your data, please review our{' '}
                  <a 
                    href="/cookie-policy.html"
                    className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  ref={acceptButtonRef}
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  data-testid="cookie-accept-button"
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-6 py-3 border-2 border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-medium text-sm rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                  data-testid="cookie-reject-button"
                >
                  Reject All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in"
          role="status"
          aria-live="polite"
          data-testid="cookie-toast"
        >
          <p className="text-sm font-medium">Cookie preferences saved</p>
        </div>
      )}
    </>
  );
};
