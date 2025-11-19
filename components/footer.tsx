import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                FB
              </div>
              <span className="font-bold text-gray-900 dark:text-white">FemBridge</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Empowering women to lead in tech and engineering.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Courses</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Mentors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 FemBridge. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400 fill-purple-600 dark:fill-purple-400" /> for women in tech
          </div>
        </div>
      </div>
    </footer>
  )
}
