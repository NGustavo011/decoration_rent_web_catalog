import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@/themes/defaultTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from '@/contexts/cart/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <ChakraProvider theme={defaultTheme}>
            <Component {...pageProps} key={router.asPath} />
        </ChakraProvider>
      </CartProvider>
    </>
  );
}

export default MyApp;
