import fetch from 'isomorphic-unfetch'
import useForm from '../hooks/useForm'
import { validateForm } from '../utils/validateForm'

export default function () {
  const submit = async () => {
    const response = await fetch('api/contact', {
      method: 'POST',
      headers: {
        secret: process.env.SITE_SECRET,
      },
      body: JSON.stringify(values),
    })
    const data = await response.json()
    if (data) {
      setIsSubmitting(false)
    }
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
  }: {
    values: any
    errors: any
    handleChange: any
    handleSubmit: any
    isSubmitting: boolean
    setIsSubmitting: any
  } = useForm(submit, validateForm)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact</h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Full Name
            </label>
            <input
              className={`text-black appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.name ? 'border-l-4 border-red-700' : ''
              }`}
              id="grid-full-name"
              type="text"
              placeholder="Jon"
              autoComplete="name"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              autoFocus
            />
            {errors.name && <p className="text-red-700">{errors.name}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className={`text-black appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus-gray-500 ${
                errors.email ? 'border-l-4 border-red-700' : ''
              }`}
              id="grid-email"
              type="email"
              name="email"
              placeholder="jon@nightswatch.com"
              value={values.email || ''}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-700">{errors.email}</p>}
          </div>
        </div>
        <div className="w-full py-4">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-company"
          >
            Company
          </label>
          <input
            className={`text-black appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus-gray-500 ${
              errors.email ? 'border-l-4 border-red-700' : ''
            }`}
            id="company"
            type="text"
            name="company"
            placeholder="The Nights Watch Co."
            value={values.company || ''}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-700">{errors.email}</p>}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Message
            </label>
            <p className="text-gray-600 text-xs italic">How can I help you?</p>
            <textarea
              className={`text-black appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus-gray-500 ${
                errors.email ? 'border-l-4 border-red-700' : ''
              }`}
              id="grid-message"
              name="message"
              placeholder="Message"
              value={values.message || ''}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-700 mb-3">{errors.message}</p>
            )}
            <button
              type="submit"
              className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
            >
              {isSubmitting ? '...Sending' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
