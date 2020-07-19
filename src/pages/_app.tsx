import Head from 'next/head';
import 'pages/styles.css';

export default function PageLayout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Base Next.js App</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
