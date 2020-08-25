import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import OptimizedImage from '../components/OptimizedImage'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Royalty Carpet & Tile - Contact"
        description="Royalty Carpet & Tile - Contact"
        url="contact"
      />
      <div className="container mx-auto md:flex md:items-center md:justify-between md:p-6">
        <div className="w-full md:w-2/5">
          <OptimizedImage
            altText="Owners Craig and Kelly"
            fileName="owners.jpg"
            classes="w-full rounded-sm"
          />
        </div>
        <div className="p-4 md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  )
}
