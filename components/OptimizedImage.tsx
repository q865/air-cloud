// components/OptimizedImage.tsx
import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width = 800, height = 600, className }) => {
  return (
    <div className={`relative w-full h-auto ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority
      />
    </div>
  );
};

export default OptimizedImage;

