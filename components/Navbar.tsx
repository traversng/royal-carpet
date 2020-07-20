import Link from 'next/link'
import { useState } from 'react'

import Menu from '../components/svgs/Menu'
import Close from '../components/svgs/Close'

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
      <nav className="flex items-center justify-between flex-wrap bg-purple-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <h3 className="cursor-pointer font-semibold text-3xl tracking-tight hover:text-purple-600">
              Royal Carpet & Tile
            </h3>
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
            className={`text-sm md:flex-grow md:flex md:justify-end ${hidden ? 'hidden' : ''}`}
          >
            <div>
              {links.map((link) => {
                return (
                  <Link href={link.url}>
                    <a className="mx-1 block mt-4 text-lg font-semibold md:inline-block md:mt-0 text-white hover:text-purple-600 mr-4">
                      {link.text}
                    </a>
                  </Link>
                )
              })}
              <Link href="contact">
                <a className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-600 hover:bg-white mt-4 md:mt-0">
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
