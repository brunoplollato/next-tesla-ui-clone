import { ModelsContextProvider } from '../contexts/ModelsContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <ModelsContextProvider>
    <Component {...pageProps} />
  </ModelsContextProvider>
  )
}

export default MyApp
