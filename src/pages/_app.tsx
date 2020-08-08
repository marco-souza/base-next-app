import { Layout } from 'antd';
import Head from 'next/head';
import LayoutHeader from 'components/Header';
import LayoutContent from 'components/Content';
import LayoutFooter from 'components/Footer';

import 'pages/styles.css';

export default function PageLayout({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next.js Base Project</title>
      </Head>

      <Layout>
        <LayoutHeader />

        <LayoutContent>
          <Component {...pageProps} />
        </LayoutContent>

        <LayoutFooter />
      </Layout>
    </>
  );
}
