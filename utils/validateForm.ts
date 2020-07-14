export const validateForm = (values) => {
  let errors: any = {}

  if (!values.name || values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!values.message || values.message.length < 5) {
    errors.message = 'Talk to me, you should have more to say'
  }

  if(!values.email) {
    errors.email = 'Email address is required'
  }

  if(!values.company || values.company.length < 2) {
    errors.company = 'Company name must be at least 2 characters'
  }

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  return errors
}
