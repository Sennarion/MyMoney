import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'redux/transactions/selectors';
import { openModalAddTransaction } from 'redux/global/slice';
import {
  ButtonWrapper,
  Button,
  Span,
  Icon,
} from './ButtonAddTransaction.styled';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  return (
    <>
      {categories.length > 0 && (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => dispatch(openModalAddTransaction())}
          >
            <Icon size={20} />
            <Span />
            <Span />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
}
