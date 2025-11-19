import React from 'react'
import { cn } from '@/lib/utils' // make sure this exists

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const variantClasses = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white border-none',
    outline: 'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
  }

  return (
    <button
      className={cn(
        'rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
