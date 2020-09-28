import { Layout } from 'antd';
import Head from 'next/head';
import React from 'react';

import LayoutContent from 'components/Content';
import LayoutFooter from 'components/Footer';
import LayoutHeader from 'components/Header';

import 'pages/styles.css';

export interface PageLayoutProps {
  Component: React.ComponentType;
  pageProps: unknown;
}

export default function PageLayout({
  Component,
  pageProps,
}: PageLayoutProps): JSX.Element {
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
