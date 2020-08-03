import { TiPhoneOutline } from 'react-icons/ti'
import Rating from 'react-rating'

import Default from '../components/layouts/Default'
import SEO from '../components/SEO'
import config from '../utils/config'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedCarousel from '../components/OptimizedCarousel'
import { reviews } from '../data/reviews'

const carouselImages = [
  {
    fileName: 'baby-floor.jpg',
    altText: 'baby-floor',
    title: 'Carpet cleaning',
    description: 'Baby on clean carpet after a cleaning service',
  },
  {
    fileName: 'baby-floor.jpg',
    altText: 'baby-floor',
    title: 'Tile cleaning',
    description: 'Baby on clean carpet after a cleaning service',
  },
  {
    fileName: 'baby-floor.jpg',
    altText: 'baby-floor',
    title: 'Upholstery cleaning',
    description: 'Baby on clean carpet after a cleaning service',
  },
]

export default function Home() {
  return (
    <Default>
      <SEO
        title="Royalty Carpet & Tile"
        description="Royalty Carpet & Tile Serving all of Austin"
        image={config.images.default}
        url={config.liveUrl}
      />
      <div className="w-full rounded-sm md:flex md:justify-center">
        <OptimizedImage
          altText="baby on clean carpet"
          fileName="baby-floor.jpg"
          classes="md:max-w-screen-xl"
        />
      </div>

      <div className="container mx-auto">
        <div className="px-2">
          <section className="mx-auto md:w-2/3 my-4 px-4 md:py-6 flex flex-col items-center">
            <h3 className="text-3xl text-center font-extrabold  mb-2">
              Serving All of Austin
            </h3>
            <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
            <p className="font-medium text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              dolores deserunt! Asperiores earum quidem dolore mollitia nam
              magni culpa modi, eligendi eaque exercitationem sunt ullam
              incidunt reiciendis! Temporibus, natus. Veritatis.
            </p>
            <div className="flex justify-center flex-wrap my-4">
              <span className="flex rounded-full bg-brand-med px-3 py-1 text-xs font-bold mr-3 my-2 text-white">
                Round Rock
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Pflugerville
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Hutto
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Austin
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Cedar Park
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Georgetown
              </span>
              <span className="flex rounded-full bg-brand-med px-2 py-1 text-xs font-bold mr-3 my-2 text-white">
                Leander
              </span>
            </div>
          </section>
          <section className="mx-auto w-full py-4 md:py-6">
            <div className="md:flex md:justify-center">
              <div className="md:w-4/5">
                <OptimizedCarousel content={reviews} />
              </div>
            </div>
          </section>
          <section className="mx-auto w-full px-4 md:py-6">
            <div className="md:flex my-16 md:py-20">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="carpet.jpg"
                  altText="baby-floor"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Carpet Cleaning</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  dolores deserunt! Asperiores earum quidem dolore mollitia nam
                  magni culpa modi, eligendi eaque exercitationem sunt ullam
                  incidunt reiciendis! Temporibus, natus. Veritatis.
                </p>
              </div>
            </div>
            <div className="md:flex my-16 md:py-20 flex-row-reverse">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="tile.jpg"
                  altText="baby-floor"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Tile & Grout</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  dolores deserunt! Asperiores earum quidem dolore mollitia nam
                  magni culpa modi, eligendi eaque exercitationem sunt ullam
                  incidunt reiciendis! Temporibus, natus. Veritatis.
                </p>
              </div>
            </div>
            <div className="md:flex my-16 md:py-20">
              <div className="w-full rounded-md max-w-screen-sm h-40 md:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage
                  fileName="couch.jpg"
                  altText="baby-floor"
                  classes=""
                />
              </div>
              <div className="md:p-16">
                <div className="flex">
                  {/* <TiPhoneOutline className="hidden md:block text-3xl m-2" /> */}
                  <h3 className="text-2xl  my-2 font-bold">Upholstery</h3>
                </div>
                <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
                <p className="font-medium text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  dolores deserunt! Asperiores earum quidem dolore mollitia nam
                  magni culpa modi, eligendi eaque exercitationem sunt ullam
                  incidunt reiciendis! Temporibus, natus. Veritatis.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Default>
  )
}
