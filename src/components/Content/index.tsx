import { Breadcrumb, Content, Container } from './styled';

export default function LayoutContent({ children }) {
  return (
    <>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Container>{children}</Container>
      </Content>
    </>
  );
}
