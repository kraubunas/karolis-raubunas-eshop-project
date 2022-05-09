import React, { useContext } from 'react';
import { Alert, TextField } from '@mui/material';
import { FormikConfig, useFormik } from 'formik';
import * as Yup from 'yup';
import AuthForm from '../../components/auth-form';
import AuthContext from '../../features/auth/auth-context';

type RegisterValues = {
  email: string,
  password: string,
  repeatPassword: string,
};

type RegisterFormikConfig = FormikConfig<RegisterValues>;

const initialValues: RegisterValues = {
  email: '',
  password: '',
  repeatPassword: '',
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
  repeatPassword: Yup.string()
    .max(32, 'Password must contain 32 characters or less')
    .min(8, 'Password must containe 8 characters or more')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const RegisterPage: React.FC = () => {
  const { register, loading } = useContext(AuthContext);

  const handleRegister: RegisterFormikConfig['onSubmit'] = ({ email, password, repeatPassword }) => {
    register({ email, password, repeatPassword });
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
  } = useFormik<RegisterValues>({
    initialValues,
    onSubmit: handleRegister,
    validationSchema,
  });

  return (
    <AuthForm
      formTitle="Register"
      submitText="Register"
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
        helperText={touched.email && errors.email ? <Alert severity="error">{touched.email && errors.email}</Alert> : null}
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
        helperText={touched.password && errors.password ? <Alert severity="error">{touched.password && errors.password}</Alert> : null}
        disabled={loading}
      />
      <TextField
        name="repeatPassword"
        type="password"
        label="Repeat password"
        fullWidth
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.repeatPassword && Boolean(errors.repeatPassword)}
        helperText={touched.repeatPassword && errors.repeatPassword ? <Alert severity="error">{touched.repeatPassword && errors.repeatPassword}</Alert> : null}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default RegisterPage;
