import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { SuccessStoriesSection } from '@/components/success-stories-section'
import { MotivationalQuoteSection } from '@/components/motivational-quote-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <MotivationalQuoteSection />
      <Footer />
    </main>
  )
}
