import styled from 'styled-components';
import plusIcon from '../../images/icons/plus.svg';
import minusIcon from '../../images/icons/minus.svg';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: auto;
    height: auto;
    border-radius: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(18)};
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  transition: color ${({ theme }) => theme.animation.cubicBezier};

  &:nth-of-type(1) {
    color: ${({ theme, active }) =>
      active ? theme.colors.accentGreen : theme.colors.secondaryTextColor};
  }

  &:nth-of-type(2) {
    color: ${({ theme, active }) =>
      active ? theme.colors.accentPink : theme.colors.secondaryTextColor};
  }
`;

export const Toggle = styled.div`
  position: relative;
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  margin-left: ${({ theme }) => theme.spacing(6)};
  margin-right: ${({ theme }) => theme.spacing(6)};
`;

export const ToggleLabel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    display: block;
    height: ${({ theme }) => theme.spacing(11)};
    width: ${({ theme }) => theme.spacing(11)};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: ${({ active }) =>
      active ? 'translate(0, -50%)' : 'translate(-100%, -50%)'};

    background: ${({ theme, active }) =>
      active
        ? `${theme.colors.accentPink} url(${minusIcon})
      center no-repeat`
        : `${theme.colors.accentGreen} url(${plusIcon})
      center no-repeat`};

    box-shadow: ${({ active }) =>
      active
        ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
        : '0px 6px 15px rgba(36, 204, 167, 0.5)'};

    transition: transform ${({ theme }) => theme.animation.cubicBezier},
      background-color ${({ theme }) => theme.animation.cubicBezier},
      box-shadow ${({ theme }) => theme.animation.cubicBezier},
      background-image ${({ theme }) => theme.animation.cubicBezier};
  }
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    max-width: ${({ theme }) => theme.spacing(100)};
    flex-direction: row;
  }
`;

export const Input = styled.input`
  max-width: ${({ theme }) => theme.spacing(70)};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  transition: border-color ${({ theme }) => theme.animation.cubicBezier};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    max-width: ${({ theme }) => theme.spacing(100)};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Icon = styled.span`
  position: relative;
  display: flex;
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing(3)};
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    transition: fill ${({ theme }) => theme.animation.cubicBezier};
    fill: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;
