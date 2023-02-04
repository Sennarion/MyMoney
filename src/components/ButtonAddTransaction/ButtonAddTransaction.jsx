import React from 'react';
import { ButtonAddTransactionStyled } from './ButtonAddTransaction.styled';
import { HiPlus } from 'react-icons/hi';

export const ButtonAddTransaction = ({ onClick }) => {
  return (
    <ButtonAddTransactionStyled type="button" onClick={onClick}>
      <HiPlus size={20} />
    </ButtonAddTransactionStyled>
  );
};
