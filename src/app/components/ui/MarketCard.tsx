'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface MarketCardProps {
  title: string;
  price: string;
  href: string;
  image?: string;
  className?: string;
}

export function MarketCard({ 
  title, 
  price,
  href,
  image,
  className = '',
}: MarketCardProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [shouldScrollTitle, setShouldScrollTitle] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      setShouldScrollTitle(titleRef.current.scrollWidth > titleRef.current.clientWidth);
    }
  }, [title]);

  return (
    <div className={`flex flex-col items-center mx-auto max-w-[400px] ${className}`}>
      <div className="flex-1 w-full">
        <div className="aspect-square w-full bg-neutral-100 mb-2 rounded-lg overflow-hidden">
          {image ? (
            <Image 
              src={image} 
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              Image
            </div>
          )}
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="overflow-hidden flex-1">
              <h3 
                ref={titleRef}
                className={`text-xl font-semibold whitespace-nowrap ${
                  shouldScrollTitle ? 'animate-scroll-text hover:animation-play-state-paused' : ''
                }`}
              >
                {title}
              </h3>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-1.5 rounded-full bg-neutral-100 text-black font-medium hover:bg-neutral-200 transition-colors ml-4 flex-shrink-0"
            >
              Get
            </a>
          </div>
          <div className="overflow-hidden">
            <p className="text-neutral-500 text-sm font-normal">
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 