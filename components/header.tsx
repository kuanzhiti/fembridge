'use client'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200 dark:bg-slate-950/95 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
            FB
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">FemBridge</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
            Features
          </a>
          <a href="#stories" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
            Success Stories
          </a>
          <a href="#quote" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
            Inspiration
          </a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>
    </header>
  )
}
