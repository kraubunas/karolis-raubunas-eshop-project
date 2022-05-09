import React, { useContext } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AuthContext from '../features/auth/auth-context';

type AuthFormProps = {
  formTitle: string,
  submitText: string,
  btnActive?: boolean,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const contentWidth = 400;

const AuthForm: React.FC<AuthFormProps> = ({
  formTitle,
  submitText,
  btnActive = true,
  onSubmit,
  children,
}) => {
  const { loading, error, clearError } = useContext(AuthContext);

  return (
    <Container sx={{ position: 'relative', pt: 20 }}>
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: contentWidth,
              mt: 12,
            }}
            color="error"
            onClose={clearError}
          >
            {error}
          </Alert>
        </Box>
      )}
      <Paper
        component="form"
        elevation={3}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          p: 3,
          width: contentWidth,
        }}
        onSubmit={onSubmit}
      >
        <LoginIcon color="primary" sx={{ fontSize: 45 }} />
        <Typography component="h1" variant="h4">{formTitle}</Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 1 / 1,
          my: 2,
        }}
        >
          {children}
        </Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          disabled={!btnActive || loading}
        >
          {loading ? <CircularProgress /> : submitText}
        </Button>
      </Paper>
    </Container>
  );
};

export default AuthForm;
