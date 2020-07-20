import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

export default function () {
  return (
    <footer className="w-full bg-purple-900">
      <div className="flex mx-auto w-1/2 py-6 justify-between md:justify-center">
        <a
          href="https://github.com/traversng"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaFacebook className="text-3xl text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/travis-ueki/"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaInstagram className="text-3xl text-white" />
        </a>
        <a
          href="https://twitter.com/traversng"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaYelp className="text-3xl text-white" />
        </a>
      </div>
    </footer>
  )
}
