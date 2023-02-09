import styled from 'styled-components';

export const CharWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 288px;
    height: 288px;
  }
`;

export const Balance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 18px;
  }
`;
