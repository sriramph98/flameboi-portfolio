'use client'
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card } from './Card';
import { MarketCard } from './MarketCard';

interface CardListProps {
  items: Array<{
    title: string;
    description?: string;
    subtitle?: string;
    link: string;
    image?: string;
    streamingOptions?: Array<{ platform: string; url: string; }>;
  }>;
  showListenButton?: boolean;
  isMarketplace?: boolean;
}

export function CardList({ items, showListenButton, isMarketplace }: CardListProps) {
  const [currentCard, setCurrentCard] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Gradient Mask */}
      <div className={`fixed left-0 top-1/2 -translate-y-1/2 h-[400px] w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-[1] transition-opacity duration-200 hidden md:block ${showLeftArrow ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Right Gradient Mask */}
      <div className={`fixed right-0 top-1/2 -translate-y-1/2 h-[400px] w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-[1] transition-opacity duration-200 hidden md:block ${showRightArrow ? 'opacity-100' : 'opacity-0'}`} />

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className={`fixed left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center z-[2] transition-opacity duration-200 hover:bg-neutral-50 hidden md:flex ${
          showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FiChevronLeft className="text-2xl" />
      </button>

      <button
        onClick={() => scroll('right')}
        className={`fixed right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center z-[2] transition-opacity duration-200 hover:bg-neutral-50 hidden md:flex ${
          showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FiChevronRight className="text-2xl" />
      </button>

      <div 
        className="relative flex overflow-x-auto hide-scrollbar h-[calc(100vh-160px)] items-center md:gap-6 snap-x snap-mandatory md:snap-none px-16"
        onScroll={(e) => {
          const container = e.currentTarget;
          const scrollLeft = container.scrollLeft;
          const cardWidth = window.innerWidth;
          const newCard = Math.round(scrollLeft / (cardWidth + 24)) + 1;
          setCurrentCard(newCard);
          handleScroll();
        }}
        ref={scrollContainerRef}
      >
        <div className="flex md:gap-6">
          {items.length > 0 ? (
            items.map((item, index) => (
              isMarketplace ? (
                <MarketCard
                  key={index}
                  title={item.title}
                  price={item.subtitle || ''}
                  href={item.link}
                  image={item.image}
                  className="w-screen md:w-[280px] flex-shrink-0 snap-center md:snap-align-none px-4 md:px-0"
                />
              ) : (
                <Card
                  key={index}
                  title={item.title}
                  subtitle={item.description || ''}
                  href={item.link}
                  image={item.image}
                  className="w-screen md:w-[280px] flex-shrink-0 snap-center md:snap-align-none px-4 md:px-0"
                  isSquare={true}
                  showListenButton={showListenButton}
                  streamingOptions={item.streamingOptions}
                />
              )
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center h-64">
              <h2 className="text-2xl font-semibold">No items available</h2>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm md:hidden">
        {currentCard}/{items.length}
      </div>
    </>
  );
} 