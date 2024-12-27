interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      {children}
    </div>
  )
} 