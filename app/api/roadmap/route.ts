import { NextResponse } from "next/server"
import { courses } from "@/lib/data/courses"

export async function POST(req: Request) {
  const body = await req.json()
  const ids = body.selection || []

  let selectedCourses = courses.filter((c) => ids.includes(c.id))
  if (!selectedCourses.length) {
    selectedCourses = courses.filter((c) => c.level === "Beginner").slice(0, 3)
  }

  const roadmap = selectedCourses.map((c, i) => ({
    week: i + 1,
    focus: c.title,
    tasks: [
      `Complete ${c.duration_weeks} weeks of modules`,
      `Build a mini project using ${c.skills[0]}`,
      `Upload portfolio entry`
    ]
  }))

  // Fill until week 6
  while (roadmap.length < 6) {
    roadmap.push({
      week: roadmap.length + 1,
      focus: "Practice & Interview Prep",
      tasks: [
        "Solve 3 practice tasks",
        "Do one mock interview",
        "Update CV"
      ]
    })
  }

  return NextResponse.json({ roadmap })
}
