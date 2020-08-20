import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

import OptimizedImage from '../components/OptimizedImage'
import BBB from '../components/svgs/BBB'

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="my-4 flex justify-between md:justify-center">
          <div className="px-2 md:flex md:items-center">
            <a
              href="https://www.facebook.com/RoyaltyCarpet/"
              className="cursor-pointer hover:text-blue-500 px-2"
            >
              <FaFacebook className="text-3xl hover:text-blue-300" />
            </a>
            <a
              href="https://www.yelp.com/biz/royalty-carpet-and-tile-cleaning-round-rock"
              className="cursor-pointer hover:text-blue-500 px-2"
            >
              <FaYelp className="text-3xl hover:text-blue-300" />
            </a>
          </div>
          <div className="grid grid-cols-2 justify-between items-center px-2 md:flex-row md:w-3/4 lg:grid-cols-5">
            <a
              href="https://www.housecallpro.com/superpro/"
              className="cursor-pointer hover:text-blue-500 px-2 w-full"
            >
              <OptimizedImage
                fileName="Superpro_badge_Plain_Level1.png"
                classes=""
                altText="Plain 2019 Superpro badge from Housecall Pro"
              />
            </a>
            <a
              href="https://www.bbb.org/us/tx/round-rock/profile/tile-and-grout-cleaning/royalty-carpet-tile-cleaning-0825-1000150483"
              className="cursor-pointer hover:text-blue-500 px-2 w-full"
            >
              <BBB />
            </a>
            <button className="btn w-full">Book Online Now</button>
            <button className="btn w-full">Gift Certificates</button>
            <a
              href="https://rockincityrollergirls.org/"
              className="cursor-pointer hover:text-blue-500 px-2 w-full"
            >
              <OptimizedImage
                fileName="roller.png"
                classes=""
                altText="Plain 2019 Superpro badge from Housecall Pro"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
