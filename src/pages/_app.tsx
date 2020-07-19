import { Helmet } from 'react-helmet';
import { Layout, Breadcrumb, Menu } from 'antd';
import SideMenu from 'components/SideMenu';
import 'pages/styles.css';

const { Header, Content, Footer } = Layout;

export default function PageLayout({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PodCodar Code School</title>
      </Helmet>

      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
