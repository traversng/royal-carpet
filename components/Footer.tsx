import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

export default function () {
  return (
    <footer className="flex w-full py-6 justify-between bg-purple-900 md:mx-auto md:justify-center">
      <a
        href="https://github.com/traversng"
        className="cursor-pointer hover:text-blue-500 px-2"
      >
        <FaFacebook className="text-3xl text-white"/>
      </a>
      <a
        href="https://www.linkedin.com/in/travis-ueki/"
        className="cursor-pointer hover:text-blue-500 px-2"
      >
        <FaInstagram className="text-3xl text-white"/>
      </a>
      <a
        href="https://twitter.com/traversng"
        className="cursor-pointer hover:text-blue-500 px-2"
      >
        <FaYelp className="text-3xl text-white"/>
      </a>
    </footer>
  )
}
