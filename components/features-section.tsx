import Link from 'next/link'
import { BookOpen, Briefcase, Users } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Skills Development',
    description: 'Access comprehensive learning resources, courses, and workshops designed to help you master in-demand skills.',
    icon: BookOpen,
    bgColor: 'from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-950/20',
    href: '/skills'
  },
  {
    id: 2,
    title: 'Career Growth',
    description: 'Get guidance on career advancement, job placement support, and opportunities in tech and engineering.',
    icon: Briefcase,
    bgColor: 'from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-950/20'
  },
  {
    id: 3,
    title: 'Mentorship',
    description: 'Connect with experienced mentors who\'ve broken barriers and can guide you towards success.',
    icon: Users,
    bgColor: 'from-purple-100 via-orange-100 to-purple-50 dark:from-purple-900/20 dark:via-orange-900/20 dark:to-purple-950/20'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Your Path to Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three powerful pillars to support your growth and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            const cardContent = (
              <div
                className={`group p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 bg-gradient-to-br ${feature.bgColor} cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            )

            return feature.href ? (
              <Link key={feature.id} href={feature.href!}>
                {cardContent}
              </Link>
            ) : (
              <div key={feature.id}>{cardContent}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
