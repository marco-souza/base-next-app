import Head from 'next/head';
import 'pages/styles.css';

export default function PageLayout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>PodCodar Code School</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
