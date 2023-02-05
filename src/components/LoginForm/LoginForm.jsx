import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import Logo from 'components/Logo/Logo';
import {
  FormWrapper,
  StyledForm,
  Wrapper,
  Label,
  Icon,
  Input,
  ErrorMess,
  ButtonsWrapper,
} from './LoginForm.styled';
import Button from 'components/UI/Button/Button';
import { MdEmail, MdLock } from 'react-icons/md';

export default function LoginForm() {
  const dispatch = useDispatch();

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorMess>{message}</ErrorMess>}
      />
    );
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Email may contain letters, @, numbers. For example bar.ba@test.co.uk.'
      )
      .required(),
    password: yup
      .string()
      .matches(
        /^.{6,12}$/,
        'Password must contain minimum 6 to 12 include symbols.'
      )
      .required(),
  });

  const onSubmit = ({ email, password }, { resetForm }) => {
    const user = {
      email,
      password,
    };

    dispatch(logIn(user));
    resetForm();
  };

  return (
    <FormWrapper>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Wrapper>
            <Input type="email" name="email" id="email" placeholder=" " />
            <Label htmlFor="email">E-mail</Label>
            <Icon>
              <MdEmail size={20} />
            </Icon>
            <FormError name="email" />
          </Wrapper>
          <Wrapper>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=" "
            />
            <Label htmlFor="password">Password</Label>
            <Icon>
              <MdLock size={20} />
            </Icon>
            <FormError name="password" />
          </Wrapper>
          <ButtonsWrapper>
            <Button type="submit">Log in</Button>
            <Button type="button" secondary="true" as={Link} to="/register">
              Registration
            </Button>
          </ButtonsWrapper>
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
}
