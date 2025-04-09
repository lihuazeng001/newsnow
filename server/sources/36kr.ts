import type { NewsItem } from "@shared/types"

export async function get36kr(): Promise<NewsItem[]> {
  const res = await myFetch("https://36kr.com/api/newsflash", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://36kr.com/"
    }
  })
  const data = await res.json()
  
  return data.data.items.map(item => ({
    id: `36kr-${item.id}`,
    title: item.title,
    url: `https://36kr.com/newsflash/${item.id}`,
    source: "36kr"
  }))
}
