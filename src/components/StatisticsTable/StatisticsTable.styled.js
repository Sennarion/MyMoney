import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(4)};
  overflow: hidden;
`;

export const Head = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Row = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.small};

  transition: background-color ${({ theme }) => theme.animation.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ColorWrapper = styled.td`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Color = styled.span`
  display: inline-block;
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const TotalTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const Expenses = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
`;

export const Income = styled.span`
  color: ${({ theme }) => theme.colors.accentGreen};
`;
