import ReactCompareImage from 'react-compare-image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Rating from 'react-rating'

import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import { reviews } from '../data/reviews'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Next Blog Starter - Results"
        description="Next Blog Starter - Results"
        url="results"
      />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center align-middle">
          <h3 className="text-center text-3xl font-extrabold  mt-4 mb-2">
            Expect Results
          </h3>
          <hr className="border-t-4 self-center border-brand-medium w-1/12" />
        </div>
        <div className="grid gap-2 px-4 md:gap-6 md:grid-cols-3">
          <div className="my-6">
            <h3 className="text-2xl mb-4 font-bold md:my-4 text-center">Carpet Cleaning</h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/room-before.png`)}
              rightImage={require(`../assets/images/room-after.png`)}
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center">Carpet Care Tips</h3>
              <ul className="list-disc ml-6">
                <li>Take your shoes off</li>
                <li>Put an entry mat at all entrances</li>
                <li>Vacuum frequently (try for every other day)</li>
                <li>
                  If a spill happens, blot as much of the liquid as possible
                  before it sets. Do not scrub, it will damage the fibers of
                  your carpet.
                </li>
                <li>Call us and we can walk you through it!</li>
                <li>
                  Carpet should be professionally cleaned every 12-18 months,
                  unless someone in your household suffers from allergies and/or
                  asthma. We recommend daily vacuuming and carpets to be cleaned
                  every 6-8 months.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <h3 className="text-2xl my-4 font-bold text-center">Tile Cleaning</h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/tile-before.png`)}
              rightImage={require(`../assets/images/tile-after.png`)}
              rightImageCss={{ height: '100%' }}
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center">Tile & Grout Care Tips</h3>
              <ul className="list-disc ml-6">
                <li>Vacuum your tile so dirt does not settle in the grout</li>
                <li>
                  Clean your tile with a neutral cleaner or water. Follow the
                  instructions...many cleaners need to be rinsed with water so
                  that there is no residue. Using a stiff brush for the grout is
                  recommended.
                </li>
                <li>
                  Do not use anything that adds a shine. This will cause build
                  up and dullness over time, leading to a costly stripping
                  process in the future.
                </li>
                <li>
                  Spill something in the grout? Clean up immediately especially
                  if it is oil based. Oil can stain grout, so it is also
                  recommended to put dry baking soda over the oil spill to
                  absorb.
                </li>
                <li>
                  Tile & grout should be professionally cleaned every 12-18
                  months.
                </li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <h3 className="text-2xl my-4 font-bold text-center">Upholstery Cleaning</h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/upholstery-dirty.png`)}
              rightImage={require(`../assets/images/upholstery-clean.png`)}
              rightImageCss={{ height: '100%' }}
            />
            <div className="px-2">
              <h3 className="text-xl font-bold mt-2 text-center">Upholstery Care Tips</h3>
              <ul className="list-disc ml-6">
                <li>
                  Vacuum as much as possible for your schedule, especially if
                  you have pets. Pet coats are much oilier, and can build up a
                  smell over time.
                </li>
                <li>
                  For people, putting a cover over the arms and head area will
                  keep the oils from your body staining and attracting dirt.
                </li>
                <li>
                  Spills should be cleaned immediately with a dry towel. Blot up
                  liquid. Upholstery that is cotton or a natural fiber, water
                  will leave a water ring and will become discolored. Never rub
                  a spot, it will damage the fibers.
                </li>
                <li>
                  Upholstery should be cleaned every 12-18 months. If you have
                  pets, consider cleaning it every 6-8 months.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 my-8">
          <a
            href="https://client.housecallpro.com/reviews/Royalty-Carpet-&-Tile-Cleaning/b0c4c76e-5c25-41d4-b35f-1584f801d811"
            target="_blank"
            className="text-blue-600"
          >
            <h3 className="text-blue-600 text-3xl text-center font-extrabold  mb-2">
              Reviews
            </h3>
          </a>
          <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
          <div className="grid grid-cols-1 grid-gap-2 md:grid-cols-3">
            {reviews &&
              reviews.map((review) => {
                return (
                  <div className="p-4 leading-relaxed">
                    {review.title && <h3 className="">{review.title}</h3>}
                    <p className="text-gray-600 italic">{review.quote}</p>
                    <h4 className="font-bold ">- {review.reviewer}</h4>
                    <span>
                      {review.rating && (
                        <Rating
                          initialRating={review.rating}
                          emptySymbol={
                            <AiOutlineStar className="text-yellow-500" />
                          }
                          fullSymbol={
                            <AiFillStar className="text-yellow-500" />
                          }
                        />
                      )}
                    </span>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
