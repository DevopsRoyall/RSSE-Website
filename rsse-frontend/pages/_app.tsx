// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import { RSSEProvider } from '../components/RSSEContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RSSEProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RSSEProvider>
  );
}

export default MyApp;