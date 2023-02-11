import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'utils/validationSchema';
import { changeProgressBar } from 'utils/changeProgressBar';
import { Button, Logo, Wrapper, ValidationMessage } from 'components';
import {
  FormWrapper,
  Form,
  Label,
  Icon,
  Input,
  ButtonsWrapper,
} from '../LoginForm/LoginForm.styled';
import { ProgressBarContainer, ProgressBar } from './RegistrationForm.styled';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: '0%',
    background: 'transparent',
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ username, email, password }, { resetForm }) => {
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
    },
    validationSchema: registerSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  useEffect(() => {
    changeProgressBar(values.password, setProgressBarStyles);
  }, [values.password]);

  return (
    <FormWrapper>
      <Logo />
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={values.email}
            onChange={handleChange}
          />
          <Label htmlFor="email">E-mail</Label>
          <Icon>
            <MdEmail size={20} />
          </Icon>
          {errors.email && touched.email && (
            <ValidationMessage>{errors.email}</ValidationMessage>
          )}
        </Wrapper>
        <Wrapper>
          <Input
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            placeholder=" "
            value={values.password}
            onChange={handleChange}
          />
          <Label autoComplete="off" htmlFor="password">
            Password
          </Label>
          <Icon>
            <MdLock size={20} />
          </Icon>
          {errors.password && touched.password && (
            <ValidationMessage>{errors.password}</ValidationMessage>
          )}
          {values.password.length > 0 && (
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
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Icon>
            <MdLock size={20} />
          </Icon>
          {errors.confirmPassword && touched.confirmPassword && (
            <ValidationMessage>{errors.confirmPassword}</ValidationMessage>
          )}
        </Wrapper>
        <Wrapper>
          <Input
            autoComplete="off"
            type="username"
            name="username"
            id="username"
            placeholder=" "
            value={values.username}
            onChange={handleChange}
          />
          <Label htmlFor="username">First Name</Label>
          <Icon>
            <FaUser size={20} />
          </Icon>
          {errors.username && touched.username && (
            <ValidationMessage>{errors.username}</ValidationMessage>
          )}
        </Wrapper>
        <ButtonsWrapper>
          <Button type="submit">Register</Button>
          <Button type="button" secondary="true" as={Link} to="/login">
            Log in
          </Button>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}
