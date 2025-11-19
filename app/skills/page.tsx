import CategoryGrid from "@/components/skills/category-grid"
import AiRecommendations from "@/components/skills/ai-recommendations"

export default function SkillsPage() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen w-full py-10">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div>
                <h1 className="text-3xl font-bold dark:text-white">Skills Library</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Explore curated courses across Tech, Finance, Engineering, Trading, and more.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <CategoryGrid />
                </div>

                <div className="space-y-6">
                    <AiRecommendations />
                </div>
            </div>
        </div>
    </div>

  )
}
