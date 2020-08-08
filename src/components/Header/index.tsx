import { Layout, Menu } from 'antd';

import { LogoContainer } from './styled';

const { Header } = Layout;

export default function LayoutHeader() {
  return (
    <>
      <Header>
        <LogoContainer>Next.js base project</LogoContainer>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </>
  );
}
