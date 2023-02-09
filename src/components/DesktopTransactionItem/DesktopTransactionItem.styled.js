import styled from 'styled-components';

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
