import React from 'react';

/**
 * OptimizedImage Component - Production Grade
 * Advanced image optimization with modern formats, responsive sizing, and lazy loading
 * 
 * Supports:
 * - WebP and AVIF formats with PNG/JPG fallback
 * - Responsive images with srcset
 * - Lazy loading with loading="lazy"
 * - Eager loading for priority images (LCP)
 * - Async decoding for non-blocking rendering
 * - Automatic image compression via Netlify
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  sizes = 'auto',
  responsive = false,
  width,
  height,
  ...props 
}) => {
  // Generate modern format URLs (WebP/AVIF)
  const generateSrcSet = (imagePath) => {
    if (!imagePath) return '';
    
    // Extract file extension and base path
    const lastDot = imagePath.lastIndexOf('.');
    const basePath = imagePath.substring(0, lastDot);
    const ext = imagePath.substring(lastDot + 1).toLowerCase();
    
    // Don't modify SVG or if already using a data URL
    if (ext === 'svg' || imagePath.startsWith('data:')) {
      return '';
    }

    // Return srcset with multiple formats
    // Format: original 1x, original 2x for high DPI screens
    return `${basePath}.webp 1x, ${basePath}@2x.webp 2x`;
  };

  // Generate responsive sizes for different breakpoints
  const getResponsiveSizes = () => {
    if (!responsive) return 'auto';
    // Mobile: 100vw, Tablet: 50vw, Desktop: 33vw
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  // Extract file extension
  const lastDot = src?.lastIndexOf('.') || -1;
  const ext = src?.substring(lastDot + 1).toLowerCase() || 'png';
  const basePath = src?.substring(0, lastDot) || '';

  // For logos and icons, use native img (since they're small and critical)
  if (priority && (ext === 'svg' || src?.includes('logo'))) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="eager"
        decoding="async"
        width={width}
        height={height}
        {...props}
      />
    );
  }

  // For regular images, use picture element with modern formats
  if (ext !== 'svg') {
    return (
      <picture>
        {/* AVIF format (highest compression) */}
        <source 
          srcSet={`${basePath}.avif 1x, ${basePath}@2x.avif 2x`}
          type="image/avif"
          sizes={getResponsiveSizes()}
        />
        
        {/* WebP format (better compression than PNG/JPG) */}
        <source 
          srcSet={`${basePath}.webp 1x, ${basePath}@2x.webp 2x`}
          type="image/webp"
          sizes={getResponsiveSizes()}
        />
        
        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          className={className}
          loading={priority ? 'eager' : loading}
          decoding="async"
          sizes={getResponsiveSizes()}
          width={width}
          height={height}
          {...props}
        />
      </picture>
    );
  }

  // SVG files - no optimization needed
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default OptimizedImage;
