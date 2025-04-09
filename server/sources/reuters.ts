import type { NewsItem } from "@shared/types"

export async function getReuters(): Promise<NewsItem[]> {
  const res = await myFetch("https://www.reuters.com/pf/api/v3/content/fetch/articles-by-section-alias", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.reuters.com/"
    }
  })
  const data = await res.json()
  
  return data.result.articles.map(item => ({
    id: `reuters-${item.id}`,
    title: item.title,
    url: `https://www.reuters.com${item.canonical_url}`,
    source: "reuters"
  }))
}
