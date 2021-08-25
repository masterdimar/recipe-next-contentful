import '../styles/global.css'
import Layout from '../components/layout'
import { ChakraProvider } from "@chakra-ui/react"

function RecipeApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
        
    </ChakraProvider>
  )
}

export default RecipeApp
