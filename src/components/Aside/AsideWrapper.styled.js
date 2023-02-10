import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    max-width: 400px;

    &::after {
      content: '';
      position: absolute;
      display: block;
      right: -${({ theme }) => theme.spacing(17)};
      top: 0;
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const LeftSide = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 100%;
  }
`;
