import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { selectCategories } from 'redux/transactions/selectors';
import { closeModalUpdateTransaction } from 'redux/global/slice';
import Button from 'components/UI/Button/Button';
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
  Icon,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { selectTransactionToUpdate } from 'redux/global/selectors';
import { updateTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarEvent } from 'react-icons/bs';
import { createTransaction } from 'utils/transactionCreator';
import { transactionSchema } from 'utils/validationSchema';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.styled';
import Select from 'react-select';
import { ValidationMessage } from 'components/UI/ValidationMessage/ValidationMessage.styled';
import { selectStyles } from 'utils/selectStyles';
import DatePicker from 'react-datepicker';

export default function ModalUpdateTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const transactionToUpdate = useSelector(selectTransactionToUpdate);

  const { amount, categoryId, comment, type, id, transactionDate } =
    transactionToUpdate;

  const options = categories
    .filter(el => el.name !== 'Income')
    .map(el => ({
      value: el.id,
      label: el.name,
    }));

  const incomeCategoryId = categories.find(el => el.name === 'Income').id;
  const transactionToUpdateCategory = categories.find(
    el => el.id === categoryId
  );

  const transactionToUpdateCategoryNew = {
    value: transactionToUpdateCategory.id,
    label: transactionToUpdateCategory.name,
  };

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
      checked: type === 'EXPENCE',
      category: transactionToUpdateCategoryNew,
      comment,
      amount,
      date: new Date(transactionDate),
    },
    onSubmit: (values, { resetForm }) => {
      const transaction = createTransaction(values, incomeCategoryId);
      dispatch(closeModalUpdateTransaction());
      dispatch(updateTransaction(transaction, id));
      resetForm();
    },
    validationSchema: transactionSchema,
  });

  const { handleSubmit, handleChange, setFieldValue, values, touched, errors } =
    formik;

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
            <Button type="submit">Add</Button>
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
