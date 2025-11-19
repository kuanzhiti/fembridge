import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance text-gray-900 dark:text-white">
            Break Barriers.
            <span className="block bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
              Build Your Future.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
            Empowering women to thrive in male-dominated fields through skills development, mentorship, and community support.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Start Your Journey
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
