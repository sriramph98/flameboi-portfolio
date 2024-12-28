'use client'

import Image from 'next/image';
import { useState } from 'react';
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
  streamingOptions = []
}: CardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`block ${className}`}>
      {children ? children : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block group cursor-pointer"
        >
          <div className={`${isSquare ? 'aspect-square' : 'aspect-video'} w-full bg-neutral-100 mb-2 rounded-lg overflow-hidden`}>
            {image ? (
              <Image 
                src={image} 
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                Image
              </div>
            )}
          </div>
        </a>
      )}
      <div className="p-2">
        <div className="flex justify-between items-start">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer"
          >
            <h3 className="text-xl font-semibold group-hover:opacity-70 transition-opacity">
              {title}
            </h3>
            {subtitle && (
              <p className="text-neutral-500 mt-2 text-sm line-clamp-2 font-normal">{subtitle}</p>
            )}
          </a>
          {showListenButton && (
            <div className="relative ml-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(true);
                }}
                className="inline-block px-6 py-2 rounded-full bg-neutral-100 text-black font-medium hover:bg-neutral-200 transition-colors"
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
        </div>
      </div>
    </div>
  );
} 