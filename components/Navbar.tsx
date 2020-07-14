import Link from 'next/link'

export default function () {
  return (
    <nav className="mx-auto flex py-2 justify-between mb-4 md:mb-8 w-full">
      <div className="cursor-pointer md:text-center mx-auto">
        <div className="text-center">
          <Link href="/">
            <h2 className="text-2xl font-mono font-bold flex-grow lg:flex-1 hover:text-blue-500">
              <a>Next Blog Starter</a>
            </h2>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/about">
            <a className="cursor-pointer hover:text-blue-500 text-xl px-2">About</a>
          </Link>
          <Link href="/blog">
            <a className="cursor-pointer hover:text-blue-500 text-xl px-2">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="cursor-pointer hover:text-blue-500 text-xl px-2">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
