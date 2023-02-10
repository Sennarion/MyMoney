import styled from 'styled-components';

export const BalanceStatus = styled.h2`
  font-size: inherit;
  color: ${({ theme, negative }) =>
    negative ? theme.colors.alert : theme.colors.primaryTextColor};
`;
