import styled from 'styled-components';
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: start;
  line-height: calc(45 / 30);

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    position: relative;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const DiagramPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const TableWrapper = styled.div`
  width: ${({ theme }) => theme.spacing(70)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(84)};
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: ${({ theme }) => theme.spacing(100)};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: ${({ theme }) => theme.spacing(100)};
  }
`;
