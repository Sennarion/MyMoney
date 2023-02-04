import styled from 'styled-components';
import { Form, Field } from 'formik';
import plusIcon from '../../images/icons/plus.svg';
import minusIcon from '../../images/icons/minus.svg';
import DatePicker from 'react-datepicker';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
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

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  transition: color ${({ theme }) => theme.animation.cubicBezier};

  &[data-active='true'] {
    &:nth-of-type(1) {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
    &:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
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
    top: 50%;
    transform: translate(-100%, -50%);
    left: 50%;
    background: ${({ theme }) => theme.colors.accentGreen} url(${plusIcon})
      center no-repeat;

    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    height: ${({ theme }) => theme.spacing(11)};
    width: ${({ theme }) => theme.spacing(11)};
    border-radius: 50%;
    transition: transform ${({ theme }) => theme.animation.cubicBezier},
      background-color ${({ theme }) => theme.animation.cubicBezier},
      box-shadow ${({ theme }) => theme.animation.cubicBezier},
      background-image ${({ theme }) => theme.animation.cubicBezier};
  }

  &[value='true'] {
    &::after {
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      background-color: ${({ theme }) => theme.colors.accentPink};
      background-image: url(${minusIcon});
      transform: translate(0, -50%);
    }
  }
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const TransactionForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const SumInput = styled(Field)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  padding: ${({ theme }) => theme.spacing(2)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(47.5)};
  }
`;

export const DateWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: ${({ theme }) => theme.spacing(1)};
    right: ${({ theme }) => theme.spacing(2)};
    fill: ${({ theme }) => theme.colors.secondaryTextColor};
    pointer-events: none;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  outline: none;
  background-color: transparent;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: ${({ theme }) => theme.spacing(47.5)};
  } ;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7.5)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  } ;
`;

export const CommentInput = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.primaryTextColor};
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;

export const ButWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
