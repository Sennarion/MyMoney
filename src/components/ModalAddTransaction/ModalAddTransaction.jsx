import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Select from 'react-select';
import { selectCategories } from 'redux/transactions/selectors';
import { closeModalAddTransaction } from 'redux/global/slice';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.styled';
import { ValidationMessage } from 'components/UI/ValidationMessage/ValidationMessage.styled';
import Button from 'components/UI/Button/Button';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import { createTransaction } from 'utils/transactionCreator';
import {
  Modal,
  ModalTitle,
  Form,
  Input,
  ButtonWrapper,
  InputWrapper,
  ToggleWrapper,
  Toggle,
  ToggleText,
  ToggleInput,
  ToggleLabel,
  HalfInput,
} from './ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { addTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarEvent } from 'react-icons/bs';
import { transactionSchema } from 'utils/validationSchema';
import { selectStyles } from 'utils/selectStyles';

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const options = categories
    .filter(el => el.name !== 'Income')
    .map(el => ({
      value: el.id,
      label: el.name,
    }));

  const incomeCategoryId = categories.find(el => el.name === 'Income').id;

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(closeModalAddTransaction());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModalAddTransaction());
    }
  };

  const formik = useFormik({
    initialValues: {
      checked: true,
      category: options[0],
      comment: '',
      amount: '',
      date: format(Date.now(), 'yyyy-MM-dd'),
    },
    onSubmit: (values, { resetForm }) => {
      const transaction = createTransaction(values, incomeCategoryId);
      dispatch(closeModalAddTransaction());
      dispatch(addTransaction(transaction));
      resetForm();
    },
    validationSchema: transactionSchema,
  });

  const { handleSubmit, handleChange, setFieldValue, values, errors } = formik;

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <ModalTitle>Add transaction</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <ToggleWrapper>
            <ToggleText active={!values.checked}>Income</ToggleText>
            <Toggle>
              <ToggleInput
                id="checkbox"
                type="checkbox"
                name="checked"
                checked={values.checked}
                onChange={handleChange}
              />
              <ToggleLabel htmlFor="checkbox" active={values.checked} />
            </Toggle>
            <ToggleText active={values.checked}>Expense</ToggleText>
          </ToggleWrapper>
          <Select
            name="category"
            options={options}
            isDisabled={!values.checked}
            value={values.category}
            onChange={val => setFieldValue('category', val)}
            styles={selectStyles}
          />
          <InputWrapper>
            <Wrapper>
              <HalfInput
                type="text"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                placeholder="0.00"
              />
              {errors.amount && (
                <ValidationMessage>{errors.amount}</ValidationMessage>
              )}
            </Wrapper>
            <Wrapper>
              <HalfInput
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
              />
              {errors.date && (
                <ValidationMessage>{errors.date}</ValidationMessage>
              )}
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
            {errors.comment && (
              <ValidationMessage>{errors.comment}</ValidationMessage>
            )}
          </Wrapper>
          <ButtonWrapper>
            <Button type="submit">Add</Button>
            <Button
              type="button"
              secondary="true"
              onClick={() => dispatch(closeModalAddTransaction())}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    </Backdrop>
  );
}
