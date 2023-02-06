import styled from 'styled-components';

export const ValidationMessage = styled.span`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(-4)};
  right: 0;
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.min};
  color: ${({ theme }) => theme.colors.alert};
`;
