import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
