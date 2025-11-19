"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation";
import CourseCard from "@/components/skills/course-card"
import RoadmapModal from "@/components/skills/roadmap-modal"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data/categories";

export default function CategoryPageClient() {
  const { category } = useParams();
  const [courses, setCourses] = useState<any[]>([])
  const [filters, setFilters] = useState({ level: "", free: false })
  const [selected, setSelected] = useState<string[]>([])
  const [openRoadmap, setOpenRoadmap] = useState(false)

  useEffect(() => {
    if (!category) return;
    fetch(`/api/courses?category=${category}`)
      .then((r) => r.json())
      .then(setCourses)
  }, [category])

  const filtered = courses
    .filter((c) => !filters.level || c.level === filters.level)
    .filter((c) => !filters.free || c.price.toLowerCase() === "free")

  function toggleSelect(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold capitalize">{category}</h1>
          <p className="text-gray-500">
            Curated courses for {category}. Select courses to build a roadmap.
          </p>
          <p className="text-sm mt-2 text-indigo-600">
            Selected: {selected.length}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            className="border rounded px-2 py-1"
            value={filters.level}
            onChange={(e) =>
              setFilters({ ...filters, level: e.target.value })
            }
          >
            <option value="">All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.free}
              onChange={(e) =>
                setFilters({ ...filters, free: e.target.checked })
              }
            />
            Free Only
          </label>

          <Button onClick={() => setOpenRoadmap(true)}>
            Build Roadmap
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {filtered.map((c) => (
          <div key={c.id} className="relative">
            <CourseCard course={c} />
            <label className="absolute top-2 right-2 text-xs flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(c.id)}
                onChange={() => toggleSelect(c.id)}
              />
              Select
            </label>
          </div>
        ))}
      </div>

      {openRoadmap && (
        <RoadmapModal
          selectedIds={selected}
          onClose={() => setOpenRoadmap(false)}
        />
      )}
    </div>
  )
}
