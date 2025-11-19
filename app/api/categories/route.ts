import { NextResponse } from "next/server"
import { categories } from "@/lib/data/categories"

export function GET() {
  return NextResponse.json(categories)
}
