import Link from 'next/link'
import { TiPhoneOutline } from 'react-icons/ti'

import Default from '../components/layouts/Default'
import SEO from '../components/SEO'
import config from '../utils/config'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedCarousel from '../components/OptimizedCarousel'

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
    title: 'Upholstry cleaning',
    description: 'Baby on clean carpet after a cleaning service',
  },
]

export default function Home() {
  return (
    <Default>
      <SEO
        title="Starter Index"
        description="Ueki dev starter repo"
        image={config.images.default}
        url={config.liveUrl}
      />
      <div className="w-full">
        <OptimizedImage
          altText="baby on clean carpet"
          fileName="baby-floor.jpg"
          classes="w-full rounded-sm"
        />
      </div>

      <div className="px-2">
        <section className="mx-auto md:w-2/3 my-4 px-4 md:py-6 flex flex-col items-center">
          <h3 className="text-3xl text-center font-extrabold text-purple-600 mb-2">
            Serving Austin
          </h3>
          <hr className="w-1/2 border-t-2 border-purple-700 mb-2" />
          <p className="font-medium text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            dolores deserunt! Asperiores earum quidem dolore mollitia nam magni
            culpa modi, eligendi eaque exercitationem sunt ullam incidunt
            reiciendis! Temporibus, natus. Veritatis.
          </p>
        </section>
        <section className="mx-auto w-full py-4 md:py-6">
          <div className="md:flex md:justify-center">
            <div className="md:w-4/5">
              <OptimizedCarousel content={carouselImages} />
            </div>
          </div>
        </section>
        <section className="mx-auto w-full px-4 md:py-6">
          <div className="md:flex my-16 md:py-20">
            <OptimizedImage
              fileName="clean-carpet-feet.jpg"
              altText="baby-floor"
              classes="w-full rounded-md"
            />
            <div className="md:p-16">
              <div className="flex">
                <TiPhoneOutline className="hidden md:block text-3xl text-purple-800 m-2" />
                <h3 className="text-2xl text-purple-600 font-bold">
                  Carpet Cleaning
                </h3>
              </div>
              <p className="font-medium text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                dolores deserunt! Asperiores earum quidem dolore mollitia nam
                magni culpa modi, eligendi eaque exercitationem sunt ullam
                incidunt reiciendis! Temporibus, natus. Veritatis.
              </p>
            </div>
          </div>
          <div className="md:flex my-16 md:py-20 flex-row-reverse">
            <OptimizedImage
              fileName="tile-grout-child.jpg"
              altText="baby-floor"
              classes="w-full rounded-md"
            />
            <div className="md:p-16">
              <div className="flex">
                <TiPhoneOutline className="hidden md:block text-3xl text-purple-800 m-2" />
                <h3 className="text-2xl text-purple-600 font-bold">
                  Tile & Grout
                </h3>
              </div>
              <p className="font-medium text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                dolores deserunt! Asperiores earum quidem dolore mollitia nam
                magni culpa modi, eligendi eaque exercitationem sunt ullam
                incidunt reiciendis! Temporibus, natus. Veritatis.
              </p>
            </div>
          </div>
          <div className="md:flex my-16 md:py-20">
            <OptimizedImage
              fileName="upholstery-cleaning-dog-on-couch.jpg"
              altText="baby-floor"
              classes="w-full rounded-md"
            />
            <div className="md:p-16">
              <div className="flex">
                <TiPhoneOutline className="hidden md:block text-3xl text-purple-800 m-2" />
                <h3 className="text-2xl text-purple-600 font-bold">
                  Upholstry
                </h3>
              </div>
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
    </Default>
  )
}
