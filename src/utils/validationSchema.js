import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required field'),
  password: yup
    .string()
    .min(6, 'too short')
    .max(12, 'too long')
    .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))/, 'too simple')
    .required('required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords must match')
    .required('required field'),
  username: yup
    .string()
    .min(1, 'too short')
    .max(12, 'too long')
    .required('required field'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required field'),
  password: yup.string().required('required field'),
});

export const transactionSchema = yup.object().shape({
  amount: yup
    .string()
    .matches(/^\d+(\.\d+)*$/, 'only numbers')
    .required(),
  comment: yup.string().min(2).max(20),
  date: yup.date().required('date is a required field'),
});
