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
      <div className="grid gap-4 px-2 md:grid-cols-3">
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 my-4 font-bold">
            Carpet Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
        </div>
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 my-4 font-bold">
            Tile Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
        </div>
        <div className="my-6">
          <h3 className="text-2xl text-purple-600 my-4 font-bold">
            Upholstery Cleaning - Round Rock
          </h3>
          <ReactCompareImage
            leftImage={require(`../assets/images/baby-floor.jpg`)}
            rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}
