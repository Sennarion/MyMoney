import styled from 'styled-components';
import bg from '../../images/icons/wave.svg';

export const CurrencyWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
  }
`;

export const TableWrapper = styled.div`
  position: relative;
  background: url(${bg}) bottom / 100% no-repeat;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: ${({ theme }) => theme.spacing(4)};
  min-height: 152px;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    min-height: 184px;
    width: 100%;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.min};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export const TableData = styled.td`
  width: 33%;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

export const TableHeadData = styled(TableData)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
