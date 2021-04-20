import { Layout, Breadcrumb as Bd } from 'antd';
import styled from 'styled-components';

export const Breadcrumb = styled(Bd)`
  margin: 16px 0;
`;

export const Content = styled(Layout.Content)`
  padding: 24px;
  min-height: 280px;
  padding: '0 50px';
`;

export const Container = styled.div`
  background: #fff;
  padding: 1.5rem;
  min-height: 280px;

  &,
  & iframe {
    border-radius: 3px;
  }
`;

export const LogoContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  padding: 0 1rem;
  color: white;
  float: left;
`;
