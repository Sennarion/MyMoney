import styled from 'styled-components';

export const ButtonAddTransactionStyled = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;
