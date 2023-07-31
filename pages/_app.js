import '@/styles/globals.css'
import Nav from '@/components/nav/navbar'
import Footer from '@/components/footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='app_wrapper'>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
