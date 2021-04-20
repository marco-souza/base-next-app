import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

export default function LayoutFooter(): JSX.Element {
  return (
    <>
      <Footer data-testid="footer" />
    </>
  );
}
