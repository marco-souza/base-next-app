import { Layout, Menu } from 'antd';
import React from 'react';

import { LogoContainer } from 'components/@core/styled';

const { Header } = Layout;

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <Header>
        <LogoContainer data-testid="logo">Next.js base project</LogoContainer>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </>
  );
}
