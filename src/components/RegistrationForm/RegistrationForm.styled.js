import styled from 'styled-components';

export const ProgressBarContainer = styled.span`
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);

  display: block;
  width: 90%;
  height: ${({ theme }) => theme.spacing(1)};
  border-top-left-radius: ${({ theme }) => theme.spacing(4)};
  border-top-right-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
`;

export const ProgressBar = styled.span`
  display: block;
  height: 100%;
  max-width: 100%;
`;
