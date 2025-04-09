import type { NewsItem } from "@shared/types"

export async function getCaixin(): Promise<NewsItem[]> {
  const res = await myFetch("https://www.caixin.com/api/news/list", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.caixin.com/"
    }
  })
  const data = await res.json()
  
  return data.data.list.map(item => ({
    id: `caixin-${item.id}`,
    title: item.title,
    url: item.url,
    source: "caixin"
  }))
}
