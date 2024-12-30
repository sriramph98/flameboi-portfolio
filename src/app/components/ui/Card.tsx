'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { StreamingMenu } from './StreamingMenu';

interface CardProps {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  isSquare?: boolean;
  showListenButton?: boolean;
  isMarketplace?: boolean;
  streamingOptions?: Array<{ platform: string; url: string; }>;
}

export function Card({ 
  title, 
  subtitle, 
  href, 
  image,
  children,
  className = '',
  isSquare = true,
  showListenButton = false,
  isMarketplace = false,
  streamingOptions = []
}: CardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [shouldScrollSubtitle, setShouldScrollSubtitle] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      setShouldScroll(titleRef.current.scrollWidth > titleRef.current.clientWidth);
    }
    if (subtitleRef.current) {
      setShouldScrollSubtitle(subtitleRef.current.scrollWidth > subtitleRef.current.clientWidth);
    }
  }, [title, subtitle]);

  return (
    <div className={`flex flex-col items-center mx-auto max-w-[400px] ${className}`}>
      {children ? children : (
        <div className="flex-1 w-full">
          <div className={`${isSquare ? 'aspect-square' : 'aspect-video'} w-full bg-neutral-100 mb-2 rounded-lg overflow-hidden`}>
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
      )}
      <div className="p-2 w-full">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="overflow-hidden flex-1">
              <h3 
                ref={titleRef}
                className={`text-xl font-semibold whitespace-nowrap ${
                  shouldScroll ? 'animate-scroll-text hover:animation-play-state-paused' : ''
                }`}
              >
                {title}
              </h3>
            </div>
            {showListenButton && (
              <div className="relative ml-4 flex-shrink-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(true);
                  }}
                  className="inline-block px-6 py-1.5 rounded-full bg-neutral-100 text-black font-medium hover:bg-neutral-200 transition-colors"
                >
                  Listen Now
                </button>
                <StreamingMenu
                  isOpen={isMenuOpen}
                  onClose={() => setIsMenuOpen(false)}
                  options={streamingOptions}
                />
              </div>
            )}
            {isMarketplace && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-neutral-100 text-black font-medium hover:bg-neutral-200 transition-colors ml-4 flex-shrink-0"
              >
                Get
              </a>
            )}
          </div>
          {subtitle && (
            <div className="overflow-hidden">
              <p 
                ref={subtitleRef}
                className={`text-neutral-500 text-sm font-normal w-full whitespace-nowrap ${
                  shouldScrollSubtitle ? 'animate-scroll-text hover:animation-play-state-paused' : ''
                }`}
              >
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 