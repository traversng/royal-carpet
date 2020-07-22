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
      <div className="container mx-auto">
        <div className="flex flex-col justify-center align-middle">
          <h3 className="text-center text-3xl font-extrabold text-brand mt-4 mb-2">
            Expect Results
          </h3>
          <hr className="border-t-4 self-center border-brand w-1/12" />
        </div>
        <div className="grid gap-2 px-4 md:gap-6 md:grid-cols-3">
          <div className="my-6">
            <h3 className="text-2xl text-brand mb-4 font-bold md:my-4">
              Carpet Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/baby-floor.jpg`)}
              rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-2xl text-brand my-4 font-bold">
              Tile Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/baby-floor.jpg`)}
              rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
          <div className="my-6">
            <h3 className="text-2xl text-brand my-4 font-bold">
              Upholstery Cleaning - Round Rock
            </h3>
            <ReactCompareImage
              leftImage={require(`../assets/images/baby-floor.jpg`)}
              rightImage={require(`../assets/images/clean-carpet-feet.jpg`)}
            />
            <p className="my-4 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, laborum. Esse molestiae odio hic quibusdam ullam
              aliquid cupiditate nulla excepturi expedita consectetur!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 my-8">
          <h3 className="text-3xl text-center font-extrabold text-brand mb-2">
            Reviews
          </h3>
          <hr className="border-t-4 self-center border-brand w-1/12 mb-2 md:mb-4" />
          <div className="grid grid-cols-1 grid-gap-2 md:grid-cols-3">
            <div className="p-4 leading-relaxed">
              <h3 className="text-brand">Best Service Ever!</h3>
              <p className="text-gray-600 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                beatae incidunt, voluptate cumque amet asperiores? Quisquam,
                reiciendis ratione laborum quis nesciunt ea laboriosam amet
                aspernatur libero inventore repellendus aperiam alias?
              </p>
              <h4 className="font-bold text-brand">- Jon Snow</h4>
              <p className="text-sm text-gray-600">source: Facebook</p>
            </div>
            <div className="p-4 leading-relaxed">
              <h3 className="text-brand">Best Service Ever!</h3>
              <p className="text-gray-600 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                beatae incidunt, voluptate cumque amet asperiores? Quisquam,
                reiciendis ratione laborum quis nesciunt ea laboriosam amet
                aspernatur libero inventore repellendus aperiam alias?
              </p>
              <h4 className="font-bold text-brand">- Jon Snow</h4>
              <p className="text-sm text-gray-600">source: Facebook</p>
            </div>
            <div className="p-4 leading-relaxed">
              <h3 className="text-brand">Best Service Ever!</h3>
              <p className="text-gray-600 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                beatae incidunt, voluptate cumque amet asperiores? Quisquam,
                reiciendis ratione laborum quis nesciunt ea laboriosam amet
                aspernatur libero inventore repellendus aperiam alias?
              </p>
              <h4 className="font-bold text-brand">- Jon Snow</h4>
              <p className="text-sm text-gray-600">source: Facebook</p>
            </div>
            <div className="p-4 leading-relaxed">
              <h3 className="text-brand">Best Service Ever!</h3>
              <p className="text-gray-600 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                beatae incidunt, voluptate cumque amet asperiores? Quisquam,
                reiciendis ratione laborum quis nesciunt ea laboriosam amet
                aspernatur libero inventore repellendus aperiam alias?
              </p>
              <h4 className="font-bold text-brand">- Jon Snow</h4>
              <p className="text-sm text-gray-600">source: Facebook</p>
            </div>
            <div className="p-4 leading-relaxed">
              <h3 className="text-brand">Best Service Ever!</h3>
              <p className="text-gray-600 italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                beatae incidunt, voluptate cumque amet asperiores? Quisquam,
                reiciendis ratione laborum quis nesciunt ea laboriosam amet
                aspernatur libero inventore repellendus aperiam alias?
              </p>
              <h4 className="font-bold text-brand">- Jon Snow</h4>
              <p className="text-sm text-gray-600">source: Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
