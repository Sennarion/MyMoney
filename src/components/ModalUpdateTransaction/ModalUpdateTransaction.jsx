import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { selectCategories } from 'redux/transactions/selectors';
import { closeModalUpdateTransaction } from 'redux/global/slice';
import * as yup from 'yup';
import { ErrorMess } from 'components/LoginForm/LoginForm.styled';
import Button from 'components/UI/Button/Button';
import {
  Modal,
  ModalTitle,
  TransactionForm,
  SumInput,
  CommentInput,
  Wrap,
  ButWrap,
  ToggleWrapper,
  Toggle,
  ToggleText,
  ToggleInput,
  ToggleLabel,
  DateInput,
  DateWrapper,
  Wrapper,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { selectTransactionToUpdate } from 'redux/global/selectors';
import { addTransaction } from 'redux/transactions/operations';
import SelectTransaction from 'components/SelectTransaction/SelectTransaction';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarEvent } from 'react-icons/bs';

export default function ModalUpdateTransaction() {
  const [date, setDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(true);
  const [selectId, setSelectId] = useState('');
  const [selectErrorStyle, setSelectErrorStyle] = useState({
    opacity: 0,
    height: '0px',
  });

  const initialValues = {
    transactionDate: '',
    type: 'INCOME',
    comment: '',
    amount: '',
    date: new Date(),
  };
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorMess>{message}</ErrorMess>}
      />
    );
  };

  const transactionSchema = yup.object().shape({
    amount: yup
      .string()
      .matches(/^\d+(\.\d+)*$/, 'Only numbers with dots. For example: 125.50.')
      .required(),
    comment: yup.string().min(2).max(20),
    date: yup.date().max(new Date()).required('Date is a required field.'),
  });

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const transactionToUpdate = useSelector(selectTransactionToUpdate);

  const incomeCategoryId = categories.find(el => el.name === 'Income').id;
  const filteredCategories = categories.filter(el => el.name !== 'Income');

  useEffect(() => {
    if (selectId.length > 0 && selectErrorStyle.opacity === 1) {
      setSelectErrorStyle({
        opacity: 0,
        height: '0px',
      });
    }
  }, [selectId, selectErrorStyle]);

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(closeModalUpdateTransaction());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModalUpdateTransaction());
    }
  };

  const onSelectToggle = id => {
    setSelectId(id);
  };

  const handleSubmit = ({ amount, comment, date }, { resetForm }) => {
    if (!selectId.length && isChecked) {
      setSelectErrorStyle({
        opacity: 1,
        height: 'auto',
      });
      return;
    }
    const transaction = {
      amount: isChecked ? -Number(amount) : Number(amount),
      comment,
      transactionDate: new Date(date),
      categoryId: isChecked ? selectId : incomeCategoryId,
      type: isChecked ? 'EXPENSE' : 'INCOME',
    };

    dispatch(closeModalUpdateTransaction());
    dispatch(addTransaction(transaction));

    resetForm();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <ModalTitle>Change transaction</ModalTitle>
        <ToggleWrapper>
          <ToggleText data-active={!isChecked}>Income</ToggleText>
          <Toggle>
            <ToggleInput
              type="checkbox"
              name="check"
              id="switch"
              value={isChecked}
              onChange={() => setIsChecked(prev => !prev)}
            />
            <ToggleLabel htmlFor="switch" value={isChecked} />
          </Toggle>
          <ToggleText data-active={isChecked}>Expense</ToggleText>
        </ToggleWrapper>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={transactionSchema}
        >
          {({ values, setFieldValue }) => (
            <TransactionForm>
              {isChecked && (
                <Wrapper>
                  <SelectTransaction
                    categories={filteredCategories}
                    onSelectToggle={onSelectToggle}
                  />
                  <ErrorMess style={selectErrorStyle}>
                    Category is a required field
                  </ErrorMess>
                </Wrapper>
              )}
              <Wrap>
                <Wrapper>
                  <SumInput
                    name="amount"
                    type="text"
                    placeholder="0.00"
                    value={Math.abs(transactionToUpdate.amount)}
                  />
                  <FormError name="amount" />
                </Wrapper>
                <DateWrapper>
                  <DateInput
                    showDisabledMonthNavigation
                    name="date"
                    selected={date}
                    value={transactionToUpdate.transactionDate}
                    onChange={val => {
                      setDate(val);
                      setFieldValue('date', val);
                    }}
                    dateFormat="dd.MM.yyyy"
                  />
                  <BsCalendarEvent />
                  <FormError name="date" />
                </DateWrapper>
              </Wrap>
              <Wrapper>
                <CommentInput
                  name="comment"
                  placeholder="Comment"
                  value={transactionToUpdate.comment}
                />
                <FormError name="comment" />
              </Wrapper>
              <ButWrap>
                <Button type="submit" text="true">
                  Change
                </Button>
                <Button
                  type="button"
                  secondary="true"
                  onClick={() => dispatch(closeModalUpdateTransaction())}
                >
                  Cancel
                </Button>
              </ButWrap>
            </TransactionForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
}
