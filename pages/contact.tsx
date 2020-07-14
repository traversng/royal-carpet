import DefaultLayout from '../components/layouts/Default'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'


export default function () {
  return (
    <DefaultLayout>
      <SEO title='Travis Ueki - Contact' description='Travis Ueki - Contact' url='contact' />
      <div className="md:flex-col content-center align-middle">
      <ContactForm />
      </div>
    </DefaultLayout>
  )
}
