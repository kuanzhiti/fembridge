import { NextResponse } from "next/server"
import { courses } from "@/lib/data/courses"

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const level = searchParams.get("level")
  const free = searchParams.get("free")

  let output = courses

  if (category) output = output.filter((c) => c.category === category)
  if (level) output = output.filter((c) => c.level === level)
  if (free === "true") output = output.filter((c) => c.price === "Free")

  return NextResponse.json(output)
}
