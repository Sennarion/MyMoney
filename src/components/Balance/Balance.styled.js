import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-size: ${({ theme }) => theme.fontSizes.max};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    margin-bottom: 0;
  }
`;

export const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.min};
  line-height: calc(18 / 12);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
