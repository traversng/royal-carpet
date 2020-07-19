import Link from 'next/link'
import { useState } from 'react'

import Menu from '../components/svgs/Menu'
import Close from '../components/svgs/Close'

const links = [
  { text: 'About', url: '/about' },
  { text: 'Results', url: '/results' },
  { text: 'Contact', url: '/contact' },
]

export default function () {
  const [hidden, setHidden] = useState(true)

  return (
    <nav className="mx-auto flex px-2 py-1 justify-between w-full">
      <Link href="/">
        <h2 className="text-2xl cursor-pointer font-extrabold flex-grow lg:flex-1 hover:text-purple-800">
          <a className='text-purple-600'>Royal Carpet & Tile</a>
        </h2>
      </Link>
      <div className='flex flex-col items-end'>
        <div className="md:hidden">
          <button onClick={() => setHidden(!hidden)}>
            {hidden ? <Menu /> : <Close />}
          </button>
        </div>
        <div className="flex justify-center md:justify-start">
          <ul
            className={`md:flex justify-between w-full md:w-1/2 ${
              hidden ? 'hidden' : ''
            }`}
          >
            {links.map((link) => {
              return (
                <Link href={link.url}>
                  <li className="mx-1">
                    <a className="text-lg text-purple-600 hover:text-purple-800" href="#">
                      {link.text}
                    </a>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
