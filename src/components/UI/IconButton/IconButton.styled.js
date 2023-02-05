import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primaryLight};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryLight : theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(2)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryLight : 'transparent'};

  transition: background-color ${({ theme }) => theme.animation.cubicBezier},
    box-shadow ${({ theme }) => theme.animation.cubicBezier};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
