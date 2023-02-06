import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: auto;
    height: auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.spacing(4)};
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(18)};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.spacing(10)};
  transform: translateY(-50%);
  transform-origin: top left;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  transition: transform ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};
`;

export const Icon = styled.span`
  position: relative;
  display: flex;
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.spacing(3)};
  transform: translateY(-50%);

  svg {
    transition: fill ${({ theme }) => theme.animation.cubicBezier};
    fill: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

export const Input = styled(Field)`
  min-width: ${({ theme }) => theme.spacing(70)};
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(10)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  transition: border-color ${({ theme }) => theme.animation.cubicBezier};

  &:focus {
    outline: transparent;
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus ~ span {
    svg {
      fill: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  &:focus + Label {
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:focus + Label,
  &:not(:placeholder-shown) + Label {
    transform: translateY(-170%) scale(0.8);
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    min-width: ${({ theme }) => theme.spacing(100)};
  }
`;

export const ErrorMess = styled.p`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(-4)};
  right: 0;
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.min};
  color: ${({ theme }) => theme.colors.alert};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
