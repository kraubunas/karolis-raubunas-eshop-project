import React from 'react';
import { useRootSelector } from '../../store';

const Cart: React.FC = () => {
  const cart = useRootSelector((state) => state.cart);

  return (

    <div>
      {JSON.stringify(cart, null, 2)}
      {console.log(cart)}
    </div>
  );
};

export default Cart;
