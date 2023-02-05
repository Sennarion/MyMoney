import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'redux/transactions/selectors';
import { openModalAddTransaction } from 'redux/global/slice';
import IconButton from 'components/UI/IconButton/IconButton';
import { ButtonWrapper } from './ButtonAddTransaction.styled';
import { HiPlus } from 'react-icons/hi';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  return (
    <>
      {categories.length > 0 && (
        <ButtonWrapper>
          <IconButton
            type="button"
            onClick={() => dispatch(openModalAddTransaction())}
          >
            <HiPlus size={20} />
          </IconButton>
        </ButtonWrapper>
      )}
    </>
  );
}
