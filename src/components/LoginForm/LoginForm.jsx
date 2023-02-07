import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import Logo from 'components/Logo/Logo';
import { Wrapper } from 'components/UI/Wrapper/Wrapper.styled';
import { ValidationMessage } from 'components/UI/ValidationMessage/ValidationMessage.styled';
import {
  FormWrapper,
  Form,
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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      const user = {
        email,
        password,
      };

      dispatch(logIn(user));
      resetForm();
    },
    validationSchema: loginSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <FormWrapper>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
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
            type="password"
            name="password"
            id="password"
            placeholder=" "
            value={values.password}
            onChange={handleChange}
          />
          <Label htmlFor="password">Password</Label>
          <Icon>
            <MdLock size={20} />
          </Icon>
          {errors.password && touched.password && (
            <ValidationMessage>{errors.password}</ValidationMessage>
          )}
        </Wrapper>
        <ButtonsWrapper>
          <Button type="submit">Log in</Button>
          <Button type="button" secondary="true" as={Link} to="/register">
            Registration
          </Button>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
}
