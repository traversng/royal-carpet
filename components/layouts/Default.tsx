import React from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'

class Default extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    // window['$crisp'] = []
    // window['CRISP_WEBSITE_ID'] =
    //   process.env.CRISP_ID || '2bba5423-0238-4656-a21a-b1b22117986a'

    // ;(function () {
    //   var d = document
    //   var s: any = d.createElement('script')

    //   s.src = 'https://client.crisp.chat/l.js'
    //   s.async = 1
    //   d.getElementsByTagName('head')[0].appendChild(s)
    // })()

    window['_chatlio'] = window['_chatlio'] || []
    !(function () {
      var t = document.getElementById('chatlio-widget-embed')
      if (t && window['ChatlioReact'] && window['_chatlio'].init)
        return void window['_chatlio'].init(t, window['ChatlioReact'])
      for (
        var e = function (t) {
            return function () {
              window['_chatlio'].push([t].concat(arguments))
            }
          },
          i = [
            'configure',
            'identify',
            'track',
            'show',
            'hide',
            'isShown',
            'isOnline',
            'page',
            'open',
            'showOrHide',
          ],
          a = 0;
        a < i.length;
        a++
      )
        window['_chatlio'][i[a]] || (window['_chatlio'][i[a]] = e(i[a]))
      var n = document.createElement('script'),
        c = document.getElementsByTagName('script')[0]
      ;(n.id = 'chatlio-widget-embed'),
        (n.src = 'https://w.chatlio.com/w.chatlio-widget.js'),
        (n.async = !0),
        n.setAttribute('data-embed-version', '2.3')
      n.setAttribute('data-widget-id', '7e2c1e35-7e41-46bb-4227-f4eac4c292f3')
      c.parentNode.insertBefore(n, c)
    })()
  }

  render() {
    return (
      <div className="flex flex-col md:mx-auto md:w-full min-h-screen">
        <Navbar />
        <main className="flex-col flex-grow w-full">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Default
