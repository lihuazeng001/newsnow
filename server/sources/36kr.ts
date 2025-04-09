import type { NewsItem } from "@shared/types"

export async function get36kr(): Promise<NewsItem[]> {
  const res = await myFetch("https://36kr.com/hot-list/catalog")
  const html = await res.text()
  
  // 使用正则表达式提取新闻数据
  const newsPattern = /<a.*?class="article-item-title.*?href="(.*?)".*?>(.*?)<\/a>/g
  const matches = [...html.matchAll(newsPattern)]
  
  return matches.map((match, index) => {
    const [, path, title] = match
    return {
      id: `36kr-${index}`,
      title: title.trim(),
      url: path.startsWith("http") ? path : `https://36kr.com${path}`,
      source: "36kr"
    }
  })
}
