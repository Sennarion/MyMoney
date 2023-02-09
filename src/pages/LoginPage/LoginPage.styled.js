import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(20)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(40)};
  }
`;

export const LeftSide = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(10)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
