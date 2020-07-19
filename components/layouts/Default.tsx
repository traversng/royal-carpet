import React from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'

class Default extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window['$crisp'] = []
    window['CRISP_WEBSITE_ID'] =
      process.env.CRISP_ID || '2bba5423-0238-4656-a21a-b1b22117986a'

    ;(function () {
      var d = document
      var s: any = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }

  render() {
    return (
      <div className="flex flex-col container mx-auto min-h-screen">
        <Navbar />
        <main className="md:mx-auto flex-col flex-grow md:flex md:justify-center">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Default
