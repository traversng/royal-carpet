import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import OptimizedImage from '../components/OptimizedImage'
import { GoogleMapImage } from '../components/GoogleMap'

export default function () {
  return (
    <DefaultLayout>
      <SEO
        title="Royalty Carpet & Tile - Contact Us Today"
        description="Contact us today for a free quote! Highly reviewed and in business for over 32 years. Round Rock, Pflugerville, Hutto, Cedar Park, Georgetown, Leander and between."
        url="contact"
      />
      <div className="container mx-auto md:flex md:items-center md:justify-between md:p-6">
        <div className="w-full md:w-2/5">
          <OptimizedImage
            altText="Royalty Carpet and Tile Owners Craig and Kelly"
            fileName="owners.jpg"
            classes="w-full rounded-sm"
          />
        </div>
        <div className="p-4 md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="flex justify-center">
        <GoogleMapImage />
      </div>
    </DefaultLayout>
  )
}
