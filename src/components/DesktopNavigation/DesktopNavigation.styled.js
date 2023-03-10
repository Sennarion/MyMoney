import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  font-family: ${({ theme }) => theme.fonts.primary};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};

  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primaryLight};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};

  &.active {
    span {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    div {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryTextColor}; ;
`;
