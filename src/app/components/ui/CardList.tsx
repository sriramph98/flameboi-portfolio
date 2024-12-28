'use client'
import { useState } from 'react';
import { Card } from './Card';

interface CardListProps {
  items: Array<{
    title: string;
    description?: string;
    link: string;
    image?: string;
    streamingOptions?: Array<{ platform: string; url: string; }>;
  }>;
  showListenButton?: boolean;
}

export function CardList({ items, showListenButton }: CardListProps) {
  const [currentCard, setCurrentCard] = useState(1);

  return (
    <>
      <div 
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory h-[calc(100vh-160px)] items-center gap-6"
        onScroll={(e) => {
          const container = e.currentTarget;
          const scrollLeft = container.scrollLeft;
          const cardWidth = container.clientWidth;
          const newCard = Math.round(scrollLeft / cardWidth) + 1;
          setCurrentCard(newCard);
        }}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              subtitle={item.description || ''}
              href={item.link}
              image={item.image}
              className="w-full md:w-[280px] flex-shrink-0 snap-center first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0"
              isSquare={true}
              showListenButton={showListenButton}
              streamingOptions={item.streamingOptions}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center h-64">
            <h2 className="text-2xl font-semibold">No items available</h2>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm md:hidden">
        {currentCard}/{items.length}
      </div>
    </>
  );
} 