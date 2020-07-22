import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

export default function () {
  return (
    <footer className="gradient-brand p-4 md:flex md:justify-center md:px-6">
      <div className='flex justify-center align-middle'>
        <button className='btn bg-black border-none m-2'>Book Online Now</button>
        <button className='btn bg-black border-none m-2'>Gift Certificates</button>
      </div>
      <div className="flex p-4 justify-between md:justify-center">
        <a
          href="https://www.facebook.com/RoyaltyCarpet/"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaFacebook className="text-3xl text-white hover:text-blue-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/travis-ueki/"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaInstagram className="text-3xl text-white hover:text-blue-300" />
        </a>
        <a
          href="https://twitter.com/traversng"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaYelp className="text-3xl text-white hover:text-blue-300" />
        </a>
      </div>
    </footer>
  )
}
