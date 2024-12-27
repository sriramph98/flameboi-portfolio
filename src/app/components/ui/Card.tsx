'use client'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`inline-flex items-center justify-center p-8 bg-cardBG ${className}`}>
      {children}
    </div>
  )
} 