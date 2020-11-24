import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa'

import OptimizedImage from '../components/OptimizedImage'
import BBB from '../components/svgs/BBB'
import { GoogleMapImage } from '../components/GoogleMap'

export default function () {
  return (
    <footer className="p-4 bg-gray-200 md:flex md:flex-col md:items-center md:justify-center md:px-6">
      <div className="w-full flex-col items-center justify-center md:flex md:flex-row">
        <div className="my-4 flex justify-between md:justify-center">
          <div className="flex items-center md:w-1/2">
            <a
              href="https://www.facebook.com/RoyaltyCarpet/"
              className="cursor-pointer hover:text-blue-500 px-2"
            >
              <FaFacebook className="text-3xl md:text-6xl hover:text-blue-300" />
            </a>
            <a
              href="https://www.yelp.com/biz/royalty-carpet-and-tile-cleaning-round-rock"
              className="cursor-pointer hover:text-blue-500 px-2"
            >
              <FaYelp className="text-3xl md:text-6xl hover:text-blue-300" />
            </a>
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
      <div className="flex justify-center">
        <address>
          2007 Montclair Dr <br />
          Round Rock, TX 78664
        </address>
        {/* <GoogleMapImage /> */}
      </div>
    </footer>
  )
}
