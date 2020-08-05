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
            <h3 className="text-2xl  mb-4 font-bold md:my-4">
              Carpet Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/room-before.png`)}
              rightImage={require(`../assets/images/room-after.png`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-2xl  my-4 font-bold">
              Tile Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/tile-before.png`)}
              rightImage={require(`../assets/images/tile-after.png`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-2xl  my-4 font-bold">
              Upholstery Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/up-before.png`)}
              rightImage={require(`../assets/images/up-after.png`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 my-8">
          <h3 className="text-3xl text-center font-extrabold  mb-2">
            Reviews
          </h3>
          <hr className="border-t-4 self-center border-brand-medium w-1/12 mb-2 md:mb-4" />
          <div className="grid grid-cols-1 grid-gap-2 md:grid-cols-3">
            {reviews &&
              reviews.map((review) => {
                return (
                  <div className="p-4 leading-relaxed">
                    {review.title && (
                      <h3 className="">{review.title}</h3>
                    )}
                    <p className="text-gray-600 italic">{review.quote}</p>
                    <h4 className="font-bold ">
                      - {review.reviewer}
                    </h4>
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
                    <p className="text-sm text-gray-600">
                      source: <a href={review.link} target='_blank' className='text-blue-600'>{review.source}</a>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
