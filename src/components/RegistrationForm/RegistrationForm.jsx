import { Formik, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from 'components/UI/Button/Button';
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
} from '../LoginForm/LoginForm.styled';
import { ProgressBarContainer, ProgressBar } from './RegistrationForm.styled';
import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { registerSchema } from 'utils/validationSchema';
import { changeProgressBar } from 'utils/changeProgressBar';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: '0%',
    background: 'transparent',
  });

  const handlePassword = someValue => {
    setPassword(someValue);
  };

  useEffect(() => {
    changeProgressBar(password, setProgressBarStyles);
  }, [password]);

  const onSubmit = ({ username, email, password }, { resetForm }) => {
    const user = {
      username,
      email,
      password,
    };

    setProgressBarStyles({
      width: '0%',
      backgroundColor: 'transparent',
    });

    dispatch(register(user));
    resetForm();
  };

  return (
    <FormWrapper>
      <Logo />
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <StyledForm autoComplete="off">
            <Wrapper>
              <Input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder=" "
              />
              <Label htmlFor="email">E-mail</Label>
              <Icon>
                <MdEmail size={20} />
              </Icon>
              <ErrorMessage
                name="email"
                render={message => <ErrorMess>{message}</ErrorMess>}
              />
            </Wrapper>
            <Wrapper>
              <Input
                autoComplete="off"
                type="password"
                value={values.password}
                onChange={e => {
                  setFieldValue('password', e.currentTarget.value);
                  let someValue = e.currentTarget.value;
                  handlePassword(someValue);
                }}
                name="password"
                id="password"
                placeholder=" "
              />
              <Label autoComplete="off" htmlFor="password">
                Password
              </Label>
              <Icon>
                <MdLock size={20} />
              </Icon>
              <ErrorMessage
                name="password"
                render={message => <ErrorMess>{message}</ErrorMess>}
              />
              {password.length > 0 && (
                <ProgressBarContainer>
                  <ProgressBar style={{ ...progressBarStyles }}></ProgressBar>
                </ProgressBarContainer>
              )}
            </Wrapper>
            <Wrapper>
              <Input
                autoComplete="off"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=" "
              />
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Icon>
                <MdLock size={20} />
              </Icon>
              <ErrorMessage
                name="confirmPassword"
                render={message => <ErrorMess>{message}</ErrorMess>}
              />
            </Wrapper>
            <Wrapper>
              <Input
                autoComplete="off"
                type="username"
                name="username"
                id="username"
                placeholder=" "
              />
              <Label htmlFor="username">First Name</Label>
              <Icon>
                <FaUser size={20} />
              </Icon>
              <ErrorMessage
                name="username"
                render={message => <ErrorMess>{message}</ErrorMess>}
              />
            </Wrapper>
            <ButtonsWrapper>
              <Button type="submit">Register</Button>
              <Button type="button" secondary="true" as={Link} to="/login">
                Log in
              </Button>
            </ButtonsWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
}
