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
      <div className="px-2 container mx-auto md:flex md:flex-col md:justify-center">
        <section className="mx-auto w-full my-4 px-4 md:py-6 md:flex">
          <div className="w-full mb-4">
            <div className="flex flex-col justify-center align-middle">
              <h3 className="text-3xl font-bold  mb-2">
                In a nutshell
              </h3>
              <hr className="border-t-4 border-brand-medium w-1/12 mb-4" />
            </div>
            <div>
              <h3 className="font-bold text-xl ">Owner operated.</h3>
              <span className="text-sm italic text-gray-600">
                which means you have an owner at each job.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We have been in business since 1986.
              </h3>
              <span className="text-sm italic text-gray-600">
                We have the experience and knowledge.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We believe what we do is important
              </h3>
              <span className="text-sm italic text-gray-600">
                We choose chemicals that protect you and us while doing an
                amazing job.
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">We take pride in our work</h3>
              <span className="text-sm italic text-gray-600">
                We don't take shortcuts!
              </span>
            </div>
            <div>
              <h3 className="font-bold text-xl ">
                We believe in respecting your time, family, pets, furniture, and
                wall corners.
              </h3>
              <span className="text-sm italic text-gray-600">
                We truly want you to be a forever friend.
              </span>
            </div>
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
            <h3 className="text-3xl font-extrabold  mb-2">
              Where we started
            </h3>
            <hr className="border-t-4 border-brand-medium w-1/12 mb-4" />
          </div>
          <p className="leading-loose my-4">
            Royalty Carpet & Upholstery Cleaning has been a family business
            since 1986. Robert Winchell opened Royalty Carpet & Upholstery
            Cleaning in 1986 after retiring from the Air Force in Merced,
            California. In 2010 his son, Craig Winchell, took over the family
            business and renamed the company to Royalty Carpet & Tile Cleaning,
            which modernizes the company name while keeping up with the flooring
            trend of hard surfaces. In 2018 Kelly McNeil joined the family
            business and the company relocated to Round Rock, TX.
          </p>
          <p className="leading-loose my-4">
            It's important for us to continue to focus on our customers and to
            treat each person and each job as a unique opportunity to establish
            a long term relationship. With over 32 years in the business, we
            couldn't have done it without our wonderful customers and while we
            miss them terribly, we are excited to start this new chapter.
          </p>
          <p className="leading-loose my-4">
            Our company mission statement, "personalized service, committed to
            excellence" applies to everything that we do and adds value to every
            job. We take our time to listen to you in order to find the best
            solution. Each job is unique and we bring our wealth of knowledge
            and experience to make sure that you are happy!
          </p>
        </section>
      </div>
    </DefaultLayout>
  )
}
