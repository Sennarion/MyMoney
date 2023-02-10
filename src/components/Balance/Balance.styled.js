import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-size: ${({ theme }) => theme.fontSizes.max};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    margin-bottom: 0;
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 100%;
  }
`;

export const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.min};
  line-height: calc(18 / 12);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const BalanceStatus = styled.h2`
  font-size: inherit;
  color: ${({ theme, negative }) =>
    negative ? theme.colors.alert : theme.colors.primaryTextColor};
`;
