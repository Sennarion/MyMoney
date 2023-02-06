import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(70)};
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, secondary }) =>
    secondary ? 'transparent' : theme.colors.primaryLight};
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.primaryLight : 'transparent'};
  border-radius: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.primaryLight : theme.colors.white};

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
