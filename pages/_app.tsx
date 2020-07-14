import 'lazysizes'

import '../styles/index.css'

// TODO: Create hook to detect user color preferences and hook up to the dark boolean

export default function MyApp({ Component, pageProps }) {

  return (
    <div className={`font-sans mx-auto px-6 md:px-8`}>
      <Component {...pageProps} />
    </div>
  )
}
