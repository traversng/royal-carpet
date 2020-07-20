import ReactCompareImage from 'react-compare-image'
import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Next Blog Starter - Results"
        description="Next Blog Starter - Results"
        url="results"
      />
      <div className="flex flex-col justify-center align-middle">
        <h3 className="text-center text-3xl font-extrabold text-purple-600 mt-4 mb-2">
          Expect Results
        </h3>
        <hr className="border-t-4 self-center border-purple-600 w-1/12" />
      </div>
      <div className="grid gap-2 px-4 md:gap-6 md:grid-cols-3">
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 mb-4 font-bold md:my-4">
            Carpet Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
          <p className="my-4 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam aliquid
            cupiditate nulla excepturi expedita consectetur!
          </p>
        </div>
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 my-4 font-bold">
            Tile Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
          <p className="my-4 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam aliquid
            cupiditate nulla excepturi expedita consectetur!
          </p>
        </div>
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 my-4 font-bold">
            Upholstery Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
          <p className="my-4 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam aliquid
            cupiditate nulla excepturi expedita consectetur!
          </p>
        </div>
      </div>
    </DefaultLayout>
  )
}
