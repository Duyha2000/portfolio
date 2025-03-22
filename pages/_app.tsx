import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { EmptyLayout } from '../components/layout/Empty'
import { AppPropsWithLayout } from '../components/models/common'
import '../components/styles/global.css'
import GlobalStyles from '../components/styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
