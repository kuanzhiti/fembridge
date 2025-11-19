const KEY = "heroute_bookmarks_v1"

export function getBookmarks() {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem(KEY) || "[]")
}

export function saveBookmark(item: any) {
  const arr = getBookmarks()
  if (!arr.find((x: any) => x.id === item.id)) {
    arr.push(item)
    localStorage.setItem(KEY, JSON.stringify(arr))
  }
}

export function removeBookmark(id: string) {
  const arr = getBookmarks().filter((x: any) => x.id !== id)
  localStorage.setItem(KEY, JSON.stringify(arr))
}

export function hasBookmark(id: string) {
  return getBookmarks().some((x: any) => x.id === id)
}
