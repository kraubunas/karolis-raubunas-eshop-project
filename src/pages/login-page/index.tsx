import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import * as Yup from 'yup';

import { FormikConfig, useFormik } from 'formik';
import AuthContext from '../../features/auth/auth-context';
import AuthForm from '../../components/auth-form';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  password: Yup.string()
    .max(32, 'Password must contain 32 characters or less')
    .min(8, 'Password must containe 8 characters or more')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login, loading } = useContext(AuthContext);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const nextPage = searchParams.get('next') ?? '/';
    login({ email, password }, nextPage);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginValues>({
    initialValues,
    onSubmit: handleLogin,
    validationSchema,
  });

  return (
    <AuthForm
      formTitle="Login"
      submitText="Login"
      btnActive={dirty && isValid}
      onSubmit={handleSubmit}
    >
      <TextField
        name="email"
        type="email"
        label="Email"
        fullWidth
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        disabled={loading}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default LoginPage;
