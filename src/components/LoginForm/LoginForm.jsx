import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import Logo from 'components/Logo/Logo';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.styled';
import { ValidationMessage } from 'components/UI/ValidationMessage/ValidationMessage.styled';
import {
  FormWrapper,
  StyledForm,
  Label,
  Icon,
  Input,
  ButtonsWrapper,
} from './LoginForm.styled';
import Button from 'components/UI/Button/Button';
import { MdEmail, MdLock } from 'react-icons/md';
import { loginSchema } from 'utils/validationSchema';

export default function LoginForm() {
  const dispatch = useDispatch();

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
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Wrapper>
            <Input type="email" name="email" id="email" placeholder=" " />
            <Label htmlFor="email">E-mail</Label>
            <Icon>
              <MdEmail size={20} />
            </Icon>
            <ErrorMessage
              name="email"
              render={message => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
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
            <ErrorMessage
              name="password"
              render={message => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
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
