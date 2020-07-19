import 'lazysizes'
import '@brainhubeu/react-carousel/lib/style.css'

import '../styles/index.css'

// TODO: Create hook to detect user color preferences and hook up to the dark boolean

export default function MyApp({ Component, pageProps }) {

  return (
    <div className={`mx-auto md:px-8`}>
      <Component {...pageProps} />
    </div>
  )
}
