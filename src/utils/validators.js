import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  text: yup.string().required('Task text is required'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});