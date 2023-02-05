import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(18)};
    border-radius: ${({ theme }) => theme.spacing(4)};
    width: auto;
    height: auto;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  line-height: calc(28 / 18);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
