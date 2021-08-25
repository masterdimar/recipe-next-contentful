// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

function RecipeApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
        
    </ChakraProvider>
  )
}

export default RecipeApp
