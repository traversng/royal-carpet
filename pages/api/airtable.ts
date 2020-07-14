import Airtable from 'airtable'
import redirect from 'nextjs-redirect'

import nodemailer from 'nodemailer'

const contactAddress = process.env.CONTACT_ADDRESS
const mailer = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
})

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'appy5sxsYsOzq7hKb'
)

const addRecordToTable = (email, company, name, message) =>
  new Promise((resolve, reject) => {
    base('Contacts').create(
      {
        Name: name,
        Company: company,
        Email: email,
        Message: message,
      },
      function (err, record) {
        if (err) {
          console.error(err)
          reject(err)
          return
        }
        resolve(record.getId())
      }
    )
  })

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).end()
  }

  const { email, company = 'company name', name, message } = JSON.parse(
    req.body
  )
  const host = req.headers.origin

  if (!host) {
    return redirect(`${host}/error`, { statusCode: 401 })
  }
  
  try {
    await addRecordToTable(email, company, name, message)
    await mailer.sendMail({
      from: email,
      to: [contactAddress, 'travueki@gmail.com'],
      subject: `Ueki.dev Contact form`,
      html: `<h2>Name: ${name}</h2>
            <h2>Email: ${email}</h2>
            <h2>Company: ${company}</h2>
            <h2>Message: ${message}</h2>`,
    })
  } catch (error) {
    console.error(error)
    return redirect(`${host}/error`, { statusCode: 401 })
  }
  
  redirect(`${host}/success`)
  return res.send(200)
}
