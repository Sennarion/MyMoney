import styled from 'styled-components';

export const TransactionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const TransactionItem = styled.li`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
`;

export const TransactionInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const TransactionInfoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.white};
  border-left: ${({ theme }) => theme.spacing(1)} solid;
  border-color: ${({ theme, positive }) =>
    positive ? theme.colors.accentGreen : theme.colors.accentPink};
`;

export const TransactionLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TransactionAmount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme, positive }) =>
    positive ? theme.colors.accentGreen : theme.colors.accentPink};
`;
