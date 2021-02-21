import type { AppProps /*, AppContext */ } from 'next/app';
import DefaultSeo from '../components/DefaultSeo';
import '../css/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}

export default App;
