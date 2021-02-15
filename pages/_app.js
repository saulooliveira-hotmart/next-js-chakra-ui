import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { RtlProvider } from '../components/rtl-provider';
import '../styles/globals.css';
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({

  /*
   * Sm: "320px",
   * md: "768px",
   * lg: "960px",
   * xl: "1200px",
   */
});
// 3. Extend the theme
const theme = extendTheme({ breakpoints });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
