'use client'
import { useState } from 'react';
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

  return (
    <>
      <div 
        className="flex overflow-x-auto hide-scrollbar h-[calc(100vh-160px)] items-center md:gap-6 snap-x snap-mandatory md:snap-none px-4 sm:px-6 md:px-8"
        onScroll={(e) => {
          const container = e.currentTarget;
          const scrollLeft = container.scrollLeft;
          const cardWidth = window.innerWidth;
          const newCard = Math.round(scrollLeft / (cardWidth + 24)) + 1;
          setCurrentCard(newCard);
        }}
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