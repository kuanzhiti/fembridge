import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const successStories = [ 
  { 
    id: 1, 
    name: 'Priya Sharma', 
    role: 'Software Engineer at Tech Corp', 
    industry: 'Technology', 
    story: 'From self-doubt to leading engineering teams. Priya went from being the only woman in her department to becoming a tech lead and mentor for others.', 
    initials: 'PS' 
  }, 
  { 
    id: 2, 
    name: 'Aisha Johnson', 
    role: 'Mechanical Engineer', 
    industry: 'Aerospace', 
    story: 'Breaking glass ceilings in aerospace. Aisha now designs critical systems and advocates for diversity in STEM fields.', 
    initials: 'AJ' 
  }, 
  { 
    id: 3, 
    name: 'Maya Patel', 
    role: 'Data Science Manager', 
    industry: 'Finance', 
    story: 'From bootcamp graduate to manager. Maya built her career in data science and now leads a diverse team of analysts.', 
    initials: 'MP' 
  }, 
  { 
    id: 4, 
    name: 'Lisa Chen', 
    role: 'Electrical Engineer', 
    industry: 'Manufacturing', 
    story: 'Leading innovation in manufacturing. Lisa started as an intern and is now driving digital transformation initiatives.', 
    initials: 'LC' 
  } 
]

export function SuccessStoriesSection() {
  return (
    <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Inspiring Success Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real women breaking barriers and rewriting the narrative in male-dominated industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-purple-600 to-orange-500">
                  <AvatarFallback className="text-white font-bold bg-gradient-to-br from-purple-600 to-orange-500">{story.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{story.name}</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">{story.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{story.industry}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
