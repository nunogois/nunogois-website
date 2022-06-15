import { loadBlog } from './api'

const website = 'https://www.nunogois.com'

export async function get(): Promise<unknown> {
	const posts = await loadBlog()
	const body = xml(posts)

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	}
	return {
		headers,
		body
	}
}

const xml = (
	posts
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>Nuno Góis - Full-Stack Developer</title>
    <link>${website}</link>
    <description>Full-Stack Developer from Portugal. Experienced with every step of developing and delivering software projects using .NET C#, JavaScript, Go, Python, and more.</description>
    ${posts
			.map(
				(post) =>
					`
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${website}/blog/${post.slug}/</link>
          <pubDate>${new Date(post.published_timestamp)}</pubDate>
          <content:encoded>${post.description} 
            <br />
            <a href="${website}/blog/${post.slug}">
              Read more
            </a>
          </content:encoded>
        </item>
      `
			)
			.join('')}
  </channel>
</rss>`
