import React from 'react';
import {
  Typography, Container, Paper, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import { useRootSelector } from '../../store/hooks';
import { selectUser } from '../../store/selectors';

const ProfilePage: React.FC = () => {
  const user = useRootSelector(selectUser);

  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: 'center', mt: 15,
        }}
      >
        {`Hello, ${user?.email}`}
      </Typography>
      <Paper sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '600px', mt: 3, py: 3,
      }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 2 }}>Create new product</Typography>
        <Container sx={{
          mt: 1, display: 'flex', flexDirection: 'column', gap: 2,
        }}
        >
          <TextField type="text" required label="Product name" />
          <TextField type="url" required label="Image URL" />
          <TextField type="text" required label="Price in €" />
          <FormControl>
            <FormLabel>Category</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="candlestick" control={<Radio />} label="Candlestick" />
              <FormControlLabel value="candle" control={<Radio />} label="Candle" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained">Add product</Button>
        </Container>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
