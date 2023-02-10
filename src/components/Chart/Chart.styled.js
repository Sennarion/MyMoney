import styled from 'styled-components';

export const CharWrapper = styled.div`
  position: relative;
  min-width: 280px;
  min-height: 280px;
`;

export const Balance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Number = styled.p`
  font-size: inherit;
  color: ${({ theme, negative }) =>
    negative ? theme.colors.alert : theme.colors.primaryTextColor};
`;
