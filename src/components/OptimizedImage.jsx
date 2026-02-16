import React from 'react';

/**
 * OptimizedImage Component
 * Wrapper for img tags with built-in optimization for Netlify deployment
 * Includes lazy loading, async decoding, and proper attributes for fast loading
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
