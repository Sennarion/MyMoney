import styled from 'styled-components';

export const BalanceStatus = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  line-height: calc(45 / 30);

  color: ${({ theme, negative }) =>
    negative ? theme.colors.alert : theme.colors.primaryTextColor};
`;
