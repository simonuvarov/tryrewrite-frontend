import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import DefaultSeo from '../components/DefaultSeo';
import '../css/tailwind.css';
import { useKeepAlive } from '../hooks/useKeepAlive';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  useKeepAlive();
  return (
    <>
      <DefaultSeo />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default App;
