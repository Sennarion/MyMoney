import styled from 'styled-components';

export const But = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primaryLight};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryLight : theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryLight : 'transparent'};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;

  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  }
`;
