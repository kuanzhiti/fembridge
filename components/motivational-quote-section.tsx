import { Sparkles } from 'lucide-react'

export function MotivationalQuoteSection() {
  return (
    <section id="quote" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-orange-50 to-purple-50 dark:from-purple-950/30 dark:via-orange-950/30 dark:to-purple-950/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Sparkles className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400" />
        
        <div className="space-y-4">
          <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-balance">
            "Your potential is limitless. The only barriers are the ones we accept."
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Every woman who breaks through opens doors for those who follow. You are not alone on this journey.
          </p>
        </div>

        <div className="pt-8 space-y-2">
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Remember</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-balance">
            The world needs your talent, your perspective, and your voice. You belong in every space you choose to enter. 
            <span className="block mt-2 text-purple-600 dark:text-purple-400 font-semibold">Let's rise together.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
