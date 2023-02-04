import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(9)};
`;

export const NavItem = styled(NavLink)`
  display: block;
  border-radius: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;

  &.active {
  }
`;

export const Icon = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primaryLight};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
