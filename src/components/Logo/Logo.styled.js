import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const LogoImage = styled.svg`
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(12)};
    height: ${({ theme }) => theme.spacing(12)};
  }
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.max};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;
