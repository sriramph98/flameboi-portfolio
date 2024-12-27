'use client'

interface CardProps {
  title: string;
  subtitle?: string;
  href: string;
  image?: string;
}

export function Card({ title, subtitle, href, image }: CardProps) {
  let formattedHref = href || '#';
  if (formattedHref !== '#' && !formattedHref.startsWith('http://') && !formattedHref.startsWith('https://')) {
    formattedHref = `https://${formattedHref}`;
  }

  return (
    <a
      href={formattedHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer"
    >
      <div className="aspect-square w-full bg-neutral-100 mb-4">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            Image
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
          {title}
        </h3>
        {subtitle && (
          <p className="text-neutral-500 mt-1">{subtitle}</p>
        )}
      </div>
    </a>
  );
} 