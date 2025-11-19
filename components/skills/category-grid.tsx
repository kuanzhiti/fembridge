"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Category = {
  id: string
  title: string
  icon: string
  description: string
}

export default function CategoryGrid() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((cat) => (
        <Link href={`/skills/${cat.id}`} key={cat.id}>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-950/20 transition cursor-pointer">
            <div className="text-3xl">{cat.icon}</div>
            <h3 className="text-xl font-semibold mt-3 dark:text-white">{cat.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{cat.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
