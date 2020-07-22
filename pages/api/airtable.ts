import Airtable from 'airtable'
import redirect from 'nextjs-redirect'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID)
console.log("process.env.AIRTABLE_API_KEY", process.env.AIRTABLE_API_KEY)

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
  } catch (error) {
    console.error(error)
    return redirect(`${host}/error`, { statusCode: 401 })
  }
  
  console.log("email", email)
  redirect(`${host}/success`)
  return res.send(200)
}
