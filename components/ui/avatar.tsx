/* avatar.tsx */
import React from 'react'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export const Avatar: React.FC<AvatarProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full overflow-hidden select-none ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`flex items-center justify-center w-full h-full text-sm font-bold ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
