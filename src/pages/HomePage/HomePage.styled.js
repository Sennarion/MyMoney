import styled from 'styled-components';

export const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  z-index: 0;

  &::before {
    content: '';
    position: fixed;
    left: -25px;
    right: -25px;
    top: -25px;
    bottom: -25px;
    z-index: -1;
    filter: blur(25px);

    background: ${({ theme }) => theme.colors.bgGradient};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(7)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(8)} 0;
    gap: ${({ theme }) => theme.spacing(5)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(12)} 0;
    gap: ${({ theme }) => theme.spacing(34)};
  }
`;
