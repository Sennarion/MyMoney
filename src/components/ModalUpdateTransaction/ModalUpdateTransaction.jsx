import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { closeModalUpdateTransaction } from 'redux/global/slice';
import Button from 'components/UI/Button/Button';
import {
  Modal,
  ModalTitle,
  Form,
  Input,
  ButtonWrapper,
  InputWrapper,
  Icon,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { selectTransactionToUpdate } from 'redux/global/selectors';
import { updateTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarEvent } from 'react-icons/bs';
import { changeTransaction } from 'utils/transactionCreator';
import { transactionSchema } from 'utils/validationSchema';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.styled';
import { ValidationMessage } from 'components/UI/ValidationMessage/ValidationMessage.styled';
import DatePicker from 'react-datepicker';
import { refreshUser } from 'redux/auth/operations';

export default function ModalUpdateTransaction() {
  const dispatch = useDispatch();

  const transactionToUpdate = useSelector(selectTransactionToUpdate);

  const { type, amount, comment, id, transactionDate } = transactionToUpdate;

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

  const formik = useFormik({
    initialValues: {
      checked: type === 'EXPENSE',
      comment,
      amount: Math.abs(amount),
      date: new Date(transactionDate),
    },
    onSubmit: (values, { resetForm }) => {
      const transaction = changeTransaction(values);
      dispatch(closeModalUpdateTransaction());
      dispatch(updateTransaction({ transaction, id }));
      dispatch(refreshUser());
      resetForm();
    },
    validationSchema: transactionSchema,
  });

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } =
    formik;

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <ModalTitle>Change transaction</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Wrapper limited="true">
              <Input
                type="text"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                placeholder="0.00"
              />
              {errors.amount && touched.amount && (
                <ValidationMessage>{errors.amount}</ValidationMessage>
              )}
            </Wrapper>
            <Wrapper limited="true">
              <Input
                as={DatePicker}
                selected={values.date}
                onChange={val => setFieldValue('date', val)}
                dateFormat="dd.MM.yyyy"
              />
              {errors.date && touched.date && (
                <ValidationMessage>{errors.date}</ValidationMessage>
              )}
              <Icon>
                <BsCalendarEvent />
              </Icon>
            </Wrapper>
          </InputWrapper>
          <Wrapper>
            <Input
              type="text"
              name="comment"
              value={values.comment}
              onChange={handleChange}
              placeholder="Comment"
            />
            {errors.comment && touched.comment && (
              <ValidationMessage>{errors.comment}</ValidationMessage>
            )}
          </Wrapper>
          <ButtonWrapper>
            <Button type="submit">Change</Button>
            <Button
              type="button"
              secondary="true"
              onClick={() => dispatch(closeModalUpdateTransaction())}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </Backdrop>
  );
}
