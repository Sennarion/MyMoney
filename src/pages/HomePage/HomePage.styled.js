import styled from 'styled-components';

export const BgWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(71, 85, 234, 0.1) 0%,
    rgba(0, 208, 168, 0.1) 61%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
    gap: ${({ theme }) => theme.spacing(34)};
  }
`;
