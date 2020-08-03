import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="p-4 w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className='flex flex-col justify-between items-center md:flex-row'>
          <button className="btn m-2">
            Book Online Now
          </button>
          <button className="btn m-2">
            Gift Certificates
          </button>
        </div>
        <div className='flex justify-between items-center my-4 md:justify-center'>
        <a
          href="https://www.facebook.com/RoyaltyCarpet/"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaFacebook className="text-3xl hover:text-blue-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/travis-ueki/"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaInstagram className="text-3xl hover:text-blue-300" />
        </a>
        <a
          href="https://twitter.com/traversng"
          className="cursor-pointer hover:text-blue-500 px-2"
        >
          <FaYelp className="text-3xl hover:text-blue-300" />
        </a>
        </div>
      </div>
    </footer>
  )
}
