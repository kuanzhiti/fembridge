import { NextResponse } from "next/server"
import { courses } from "@/lib/data/courses"

export function GET() {
  const picks = courses.filter((c) => c.level === "Beginner").slice(0, 4)
  return NextResponse.json({ recommendations: picks })
}
