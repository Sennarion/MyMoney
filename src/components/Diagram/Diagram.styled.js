import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const DiagramPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
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
  width: 100%;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
