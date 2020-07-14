import Link from 'next/link'
import Default from '../components/layouts/Default'
import SEO from '../components/SEO'
import config from '../utils/config'
import { formatPath } from '../utils/formatPath'
import { frontMatter as blogPosts } from './blog/**/*.mdx'

export default function Home() {
  return (
    <Default>
      <SEO
        title="Starter Index"
        description="Ueki dev starter repo"
        image={config.images.default}
        url={config.liveUrl}
      />
      <div className="md:flex">
        <div>
          <h1 className="text-2xl font-bold">Starter index</h1>
          <div className="border-l-4 border-black pl-2">
            <ul>
              <li>Typescript</li>
              <li>Image optimization</li>
              <li>SEO component</li>
              <li>Functional Contact form with simple validations</li>
              <li>Tailwindcss for rapid prototyping</li>
              <li>
                MDX blog support with:{' '}
                <ul>
                  <li>Enhanced Frontmatter</li>
                  <li>Reading Times</li>
                  <li>Formatted Dates</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Blog */}
          <section className="flex-1">
            <Link href="/blog">
              <h2 className="text-xl md:text-2xl font-bold cursor-pointer hover:text-blue-500">
                Blog
              </h2>
            </Link>
            <hr className={`mb-2 border-white`} />
            {blogPosts.map((post) => {
              return (
                <Link href={formatPath(post.__resourcePath)} key={post.title}>
                  <div>
                    <div className="mb-4 cursor-pointer hover:text-blue-500">
                      <span className="italic">{post.date}</span> -{' '}
                      <span className="mr-1 font-bold">{post.title}</span>
                      <div className={`mt-1 border-l-2 border-white pl-2`}>
                        {post.excerpt}...
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </section>
        </div>
      </div>
    </Default>
  )
}
