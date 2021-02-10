import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import '../styles/globals.css'
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  // sm: "320px",
  // md: "768px",
  // lg: "960px",
  // xl: "1200px",
})
// 3. Extend the theme
const theme = extendTheme({ breakpoints })

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
