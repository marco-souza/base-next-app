import Head from 'next/head';
import 'pages/styles.css';

export default function PageLayout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next.js Base Project</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
