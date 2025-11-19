"use client"

import { useEffect, useState } from "react"

export default function AiRecommendations() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch("/api/ai/recommendations")
      .then((r) => r.json())
      .then((d) => setList(d.recommendations))
  }, [])

  return (
    <div className="p-4 border rounded-xl bg-white">
      <h3 className="font-semibold mb-3">Recommended For You</h3>

      {list.map((c: any) => (
        <div key={c.id} className="mb-3">
          <p className="text-sm font-medium">{c.title}</p>
          <p className="text-xs text-gray-500">{c.provider}</p>
        </div>
      ))}
    </div>
  )
}
