import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const TableHeadData = styled.th`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
`;
