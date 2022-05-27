import React from 'react';
import {
  Typography, Container,
} from '@mui/material';
import { useRootSelector } from '../../store/hooks';
import { selectUser } from '../../store/selectors';

const ProfilePage: React.FC = () => {
  const user = useRootSelector(selectUser);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center', mt: 15 }}
      >
        {`Hello, ${user?.email}`}
      </Typography>
    </Container>
  );
};

export default ProfilePage;
