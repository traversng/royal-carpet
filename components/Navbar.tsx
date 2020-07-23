import Link from 'next/link'
import { useState } from 'react'

import Menu from '../components/svgs/Menu'
import Close from '../components/svgs/Close'
import OptimizedImage from '../components/OptimizedImage'

const links = [
  { text: 'About', url: '/about' },
  { text: 'Results', url: '/results' },
  // { text: 'Contact', url: '/contact' },
  { text: 'Social', url: '/social' },
]

export default function () {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap gradient-brand p-6">
        <div className="flex items-center flex-shrink-1 text-white">
          <Link href="/">
            <a>
              <OptimizedImage
                fileName="logo.png"
                altText="Royalty Carpet and Tile Logo"
                classes="w-1/2 md:w-1/5"
              />
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          {/* Hamburger */}
          <button
            className="rounded-md border border-white focus:outline-none"
            onClick={() => setHidden(!hidden)}
          >
            {hidden ? <Menu /> : <Close />}
          </button>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div
            className={`text-sm md:flex-grow md:flex md:justify-end ${
              hidden ? 'hidden' : ''
            }`}
          >
            <div>
              {links.map((link) => {
                return (
                  <Link href={link.url}>
                    <a className="mx-1 block mt-4 text-lg font-semibold md:inline-block md:mt-0 text-white hover:text-blue-400 mr-4">
                      {link.text}
                    </a>
                  </Link>
                )
              })}
              <Link href="contact">
                <a className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-blue-400 mt-4 md:mt-0">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
