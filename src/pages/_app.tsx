import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@/themes/defaultTheme';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
        <ChakraProvider theme={defaultTheme}>
            <Component {...pageProps} key={router.asPath} />
        </ChakraProvider>
    </>
  );
}

export default MyApp;
