"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function RoadmapModal({ selectedIds, onClose }: any) {
  const [roadmap, setRoadmap] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function build() {
    setLoading(true)
    const res = await fetch("/api/roadmap", {
      method: "POST",
      body: JSON.stringify({ selection: selectedIds })
    })
    const json = await res.json()
    setRoadmap(json.roadmap)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">6-Week Roadmap</h2>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>

        {!roadmap.length && (
          <Button onClick={build} disabled={loading}>
            {loading ? "Generating..." : "Build Roadmap"}
          </Button>
        )}

        {roadmap.length > 0 && (
          <div className="space-y-4">
            {roadmap.map((week: any) => (
              <div key={week.week} className="border rounded p-3">
                <p className="font-semibold">Week {week.week}: {week.focus}</p>
                <ul className="list-disc ml-5 text-sm mt-2">
                  {week.tasks.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
