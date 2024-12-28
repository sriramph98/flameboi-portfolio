interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full flex flex-col px-4">
      {children}
    </div>
  )
} 