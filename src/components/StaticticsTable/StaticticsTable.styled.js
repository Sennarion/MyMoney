import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(5)};
`;

export const StyledTable = styled.table`
  width: ${({ theme }) => theme.spacing(70)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(84)};
  }
`;
export const TableHead = styled.thead`
  display: block;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(5)};
  background: #ffffff;
  border-radius: ${({ theme }) => theme.spacing(7.5)};
  height: ${({ theme }) => theme.spacing(14.5)};
  width: ${({ theme }) => theme.spacing(70)};
  margin-bottom: ${({ theme }) => theme.spacing(3.5)};
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(84)};
  }
`;
export const Head = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Row = styled.tr`
  display: flex;
  align-items: center;
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.spacing(4.5)};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  height: ${({ theme }) => theme.spacing(10)};
`;
export const ColorWrapper = styled.div`
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
  margin-top: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme }) => theme.spacing(4)};
`;
export const TotalTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.spacing(4)};
  line-height: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  display: flex;
  justify-content: space-between;
`;
export const Expenses = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
`;
export const Income = styled.span`
  color: ${({ theme }) => theme.colors.accentGreen};
`;
