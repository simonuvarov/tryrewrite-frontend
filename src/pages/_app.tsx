import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import DefaultSeo from '../components/DefaultSeo';
import '../css/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
