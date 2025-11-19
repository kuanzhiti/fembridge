import { Button } from "@/components/ui/button"
import { useState } from "react"
import { saveBookmark, hasBookmark, removeBookmark } from "@/lib/bookmarks"

export default function CourseCard({ course }: any) {
  const [saved, setSaved] = useState(hasBookmark(course.id))

  function toggleSave() {
    if (saved) {
      removeBookmark(course.id)
      setSaved(false)
    } else {
      saveBookmark(course)
      setSaved(true)
    }
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{course.title}</h3>

      <p className="text-sm text-gray-600 mt-1">
        {course.provider} • {course.level} • {course.duration_weeks} weeks
      </p>

      <p className="mt-3 text-gray-700 text-sm">{course.description}</p>

      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-xs text-gray-500">
            Skills: {course.skills.join(", ")}
          </p>
          <p className="text-xs text-gray-500">
            Jobs: {course.jobs.join(", ")}
          </p>
        </div>

        <Button variant="outline" onClick={toggleSave}>
          {saved ? "Saved" : "Save"}
        </Button>
      </div>
    </div>
  )
}
