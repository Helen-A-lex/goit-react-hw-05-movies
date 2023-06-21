import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #8e8e8e;
  box-shadow: 1px 16px 35px -14px rgba(66, 68, 90, 1);

  > nav {
    display: flex;
    gap: 20px;
  }
`;
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: #03a9f4;
  }
`;
