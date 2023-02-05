import { Formik, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
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

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');

  const [progressBarStyles, setProgressBarStyles] = useState({
    width: '0%',
    backgroundColor: 'transparent',
  });

  const handlePassword = someValue => {
    setPassword(someValue);
  };

  useEffect(() => {
    const updatedProgressBarStyles = {
      backgroundColor: 'red',
      boxShadow: '0px 1px 8px rgba(204, 36, 36, 0.5)',
    };
    let totalStrength = 0;
    if (password.length > 1) {
      const stengthByLength = Math.min(12, Math.floor(password.length / 6));
      totalStrength = stengthByLength + password.length;
    } else {
      totalStrength = 0;
    }
    updatedProgressBarStyles.width = `${totalStrength * 10}%`;
    if (totalStrength > 8) {
      updatedProgressBarStyles.backgroundColor = '#24CCA7';
      updatedProgressBarStyles.boxShadow =
        '0px 1px 8px rgba(36, 204, 167, 0.5)';
    } else if (totalStrength > 6) {
      updatedProgressBarStyles.backgroundColor = 'orange';
      updatedProgressBarStyles.boxShadow =
        '0px 1px 8px rgba(204, 173, 36, 0.5)';
    }

    setProgressBarStyles(updatedProgressBarStyles);
  }, [password]);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorMess>{message}</ErrorMess>}
      />
    );
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const userSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Email may contain letters, @, numbers. For example bar.ba@test.co.uk'
      )
      .required(),
    password: yup
      .string()
      .matches(
        /^.{6,12}$/,
        'Password must contain minimum 6 to 12 include symbols.'
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Your passwords do not match.')
      .required(),
    username: yup
      .string()
      .matches(
        /^.{1,12}$/,
        'Username must contain minimum 1 to 12 include symbols.'
      )
      .required(),
  });

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
        initialValues={initialValues}
        validationSchema={userSchema}
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
              <FormError name="email" />
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
              <FormError name="password" />
              <ProgressBarContainer>
                <ProgressBar style={{ ...progressBarStyles }}></ProgressBar>
              </ProgressBarContainer>
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
              <FormError name="confirmPassword" />
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
              <FormError name="username" />
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
