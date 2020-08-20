import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import OptimizedImage from '../components/OptimizedImage'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Travis Ueki - Contact"
        description="Travis Ueki - Contact"
        url="contact"
      />
      <div className="container mx-auto md:flex md:flex-col md:items-center md:justify-center">
        <div className="w-full">
          <OptimizedImage
            altText="Owners Craig and Kelly"
            fileName="owners.jpg"
            classes="w-full rounded-sm"
          />
        </div>
        <div className="px-4">
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  )
}
