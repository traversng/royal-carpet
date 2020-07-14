import Link from 'next/link'

import OptimizedImage from './OptimizedImage'
import config from '../utils/config'
import { formatPath } from '../utils/formatPath'
import { FrontMatter } from '../types'

// TODO: add basic post search filter when posts get over 10

export default function ({ posts }: { posts: FrontMatter[]}) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link key={post.__resourcePath} href={formatPath(post.__resourcePath)}>
            <div className="max-w-sm w-full lg:max-w-full lg:flex cursor-pointer my-4">
              <OptimizedImage
                classes="w-full md:w-full lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden"
                fileName={post.postImage || config.images.defaultPostImage}
                altText={post.altText || 'Travis Ueki'}
              />
              <div className="flex-grow border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-black rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-white font-bold text-xl hover:text-blue-500">
                    {post.title}
                  </div>
                  <p className="text-gray-200 italic">{post.readingTime.text}</p>
                  <p className="text-sm text-gray-400 flex items-center">
                    {post.excerpt}
                  </p>
                  <p className="text-gray-200 text-base">{post.excerpt}</p>
                </div>
                <div className="flex items-center">
                  <OptimizedImage
                    classes="w-10 h-10 rounded-full mr-4"
                    fileName={config.images.default}
                    altText={post.author || 'Avatar of Travis Ueki'}
                  />
                  <div className="text-sm">
                    <p className="text-white leading-none">{post.author}</p>
                    <p className="text-white">{post.date}</p>
                  </div>
                </div>
                <div className="py-2">
                  {post.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="inline-block border border-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
