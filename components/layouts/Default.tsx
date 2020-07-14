import Navbar from '../Navbar'
import Footer from '../Footer'

export default function ({children}: {children: any}) {
  return (
    <div className="flex flex-col container mx-auto min-h-screen">
      <Navbar />
      <main className="md:mx-auto flex-col flex-grow md:flex md:justify-center">{children}</main>
      <Footer />
    </div>
  )
}
