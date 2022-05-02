import React, { useContext } from 'react';
import { Typography, Container, Box } from '@mui/material';
import AuthContext from '../../features/auth/auth-context';

const ProfilePage: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center' }}
      >
        {`Hello, ${user?.email}`}
      </Typography>
    </Container>
  );
};

export default ProfilePage;
