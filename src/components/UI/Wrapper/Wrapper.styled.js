import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    max-width: ${({ limited }) => (limited ? '50%' : 'auto')};
  }
`;
