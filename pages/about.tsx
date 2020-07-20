import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import OptimizedImage from '../components/OptimizedImage'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Next Blog Starter - About"
        description="Next Blog Starter - About"
        url="about"
      />
      <div className="px-2 md:flex md:flex-col md:justify-center">
        <section className="mx-auto w-full my-4 px-4 md:py-6 md:flex">
          <div className="w-full">
            <div className="flex flex-col justify-center align-middle">
              <h3 className="text-center text-3xl font-extrabold text-purple-600 mb-2">
                Who we are
              </h3>
              <hr className="border-t-4 self-center border-purple-600 w-1/12" />
            </div>
            <p className="leading-loose text-xl my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              dolores deserunt! Asperiores earum quidem dolore mollitia nam
              magni culpa modi, eligendi eaque exercitationem sunt ullam
              incidunt reiciendis! Temporibus, natus. Veritatis.
            </p>
            <p className="leading-loose text-xl my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              dolores deserunt! Asperiores earum quidem dolore mollitia nam
              magni culpa modi, eligendi eaque exercitationem sunt ullam
              incidunt reiciendis! Temporibus, natus. Veritatis.
            </p>
          </div>
          <div className="md:w-2/3">
            <OptimizedImage
              fileName="baby-floor.jpg"
              altText="baby on clean carpet"
              classes="rounded-md"
            />
          </div>
        </section>
        <section className="mx-auto w-full my-4 px-4 md:py-6">
          <div>
            <h3 className="text-3xl font-extrabold text-purple-600 mb-2">
              Where we started
            </h3>
          </div>

          <p className="leading-loose text-xl my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            dolores deserunt! Asperiores earum quidem dolore mollitia nam magni
            culpa modi, eligendi eaque exercitationem sunt ullam incidunt
            reiciendis! Temporibus, natus. Veritatis.
          </p>
        </section>
      </div>
    </DefaultLayout>
  )
}
