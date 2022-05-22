import React from 'react';
import { Box } from '@mui/material';
import { useRootSelector } from '../../store';

const Cart: React.FC = () => {
  const cart = useRootSelector((state) => state.cart);

  return (

    <Box>
      {JSON.stringify(cart, null, 2)}
      {console.log(cart)}
    </Box>
  );
};

export default Cart;
