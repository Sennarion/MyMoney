import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ErrorMessage, useFormik } from 'formik';
import Select from 'react-select';
import { selectCategories } from 'redux/transactions/selectors';
import { closeModalAddTransaction } from 'redux/global/slice';
import { ErrorMess } from 'components/LoginForm/LoginForm.styled';
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
} from './ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import { addTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarEvent } from 'react-icons/bs';
import { transactionSchema } from 'utils/validationSchema';

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

  const style = {
    control: base => ({
      ...base,
      width: '280px',
      border: '1px solid black',
      boxShadow: 'none',
      padding: '4px',
      borderRadius: '8px',
      '&:hover': {
        borderColor: 'black',
      },

      '@media only screen and (min-width: 768px)': {
        width: '480px',
      },
    }),
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
      console.log(transaction);

      dispatch(closeModalAddTransaction());
      dispatch(addTransaction(transaction));

      resetForm();
    },
    validationSchema: transactionSchema,
  });

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <ModalTitle>Add transaction</ModalTitle>
        <Form onSubmit={formik.handleSubmit}>
          <ToggleWrapper>
            <ToggleText active={!formik.values.checked}>Income</ToggleText>
            <Toggle>
              <ToggleInput
                id="switch"
                type="checkbox"
                name="checked"
                checked={formik.values.checked}
                onChange={formik.handleChange}
              />
              <ToggleLabel htmlFor="switch" active={formik.values.checked} />
            </Toggle>
            <ToggleText active={formik.values.checked}>Expense</ToggleText>
          </ToggleWrapper>

          {/* <select
            disabled={!formik.values.checked}
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
          <InputWrapper>
            <Select
              name="category"
              options={options}
              isDisabled={!formik.values.checked}
              value={formik.values.category}
              onChange={val => formik.setFieldValue('category', val)}
              styles={style}
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="amount"
              value={formik.amount}
              onChange={formik.handleChange}
              placeholder="0.00"
            />
            <Input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </InputWrapper>
          <Input
            type="text"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            placeholder="Comment"
          />
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

        {/* <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={transactionSchema}
        >
          {({ values, setFieldValue }) => (
            <TransactionForm>
              <Select
                options={options}
                // onChange={({ value }) => setCategory(value)}
                isDisabled={!isChecked}
                isSearchable={true}
              />
              <Wrap>
                <Wrapper>
                  <SumInput name="amount" type="text" placeholder="0.00" />
                  <ErrorMessage
                    name="amount"
                    render={message => <ErrorMess>{message}</ErrorMess>}
                  />
                </Wrapper>
                <DateWrapper>
                  <DateInput
                    name="date"
                    selected={date}
                    onChange={val => {
                      setDate(val);
                    }}
                    dateFormat="dd.MM.yyyy"
                  />
                  <BsCalendarEvent />
                  <ErrorMessage
                    name="date"
                    render={message => <ErrorMess>{message}</ErrorMess>}
                  />
                </DateWrapper>
              </Wrap>
              <Wrapper>
                <CommentInput
                  name="comment"
                  type="text"
                  placeholder="Comment"
                />
                <ErrorMessage
                  name="comment"
                  render={message => <ErrorMess>{message}</ErrorMess>}
                />
              </Wrapper>
              <ButWrap>
                <Button type="submit">Add</Button>
                <Button
                  type="button"
                  secondary="true"
                  onClick={() => dispatch(closeModalAddTransaction())}
                >
                  Cancel
                </Button>
              </ButWrap>
            </TransactionForm>
          )}
        </Formik> */}
      </Modal>
    </Backdrop>
  );
}
