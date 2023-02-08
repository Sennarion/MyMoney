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

export const TableRow = styled.tr`
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const TableBodyData = styled.td`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
`;

export const ColoredData = styled(TableBodyData)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme, positive }) =>
    positive ? theme.colors.accentGreen : theme.colors.accentPink};
`;
