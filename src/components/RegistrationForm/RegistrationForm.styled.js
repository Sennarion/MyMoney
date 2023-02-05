import styled from 'styled-components';

export const ProgressBarContainer = styled.span`
  position: absolute;
  bottom: -${({ theme }) => theme.spacing(3)};
  left: 0;

  display: block;
  width: 100%;
  height: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.secondaryTextColor};
  opacity: 0.4;
  overflow: hidden;
`;

export const ProgressBar = styled.span`
  display: block;
  height: 100%;
  max-width: 100%;
`;
