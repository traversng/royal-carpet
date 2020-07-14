import Link from 'next/link'
import Default from '../../components/layouts/Default'
import BlogList from '../../components/BlogList'
import SEO from '../../components/SEO'
import { frontMatter as blogPosts } from './**/*.mdx'

// TODO: limit to 3 latest posts

export default function () {
  return (
    <Default>
      <SEO
        title="Travis Ueki - Blog"
        description="Travis Ueki - Blog"
        url="blog"
      />
      <h1 className="text-xl font-bold">Blog</h1>
      <section>
        <BlogList posts={blogPosts} />
      </section>
    </Default>
  )
}
