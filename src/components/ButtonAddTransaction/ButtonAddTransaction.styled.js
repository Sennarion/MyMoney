import styled, { keyframes } from 'styled-components';
import IconButton from 'components/UI/IconButton/IconButton';
import { HiPlus } from 'react-icons/hi';

const sploosh = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(71, 85, 234, 0.7);
    background: rgba(71, 85, 234, 0.7);
  }
  80% {
    background: rgba(0, 208, 168, 0);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(66, 166, 223, 0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  3.3% {
    transform: scale(1.1);
  }
  16.5% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Button = styled(IconButton)`
  animation: ${pulse} 2s ease-out;
  animation-iteration-count: infinite;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;

  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.spacing(2)};

  animation: ${sploosh} 2s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-iteration-count: infinite;

  &:nth-child(2) {
    animation-delay: 0.33s;
    animation-duration: 2.2s;
  }
`;

export const Icon = styled(HiPlus)`
  position: relative;
  z-index: 100;
`;
