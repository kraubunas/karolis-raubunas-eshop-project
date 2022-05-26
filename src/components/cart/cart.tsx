import React from 'react';
import {
  IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRootSelector } from '../../store';
import { selectCartItems } from '../../store/selectors';
import { removeFromCart } from '../../store/actions-creators';
import { useRootDispatch } from '../../store/hooks';
import { CartItem } from '../../types/cart-item-type';

const Cart: React.FC<CartItem> = ({
  id, itemId, amount, price, category, name,
}) => {
  const cart = useRootSelector(selectCartItems);

  const dispatch = useRootDispatch();

  const removeFromCartAction = (): void => {
    const addRemoveFromCartItemAction = removeFromCart(id, itemId, amount, price, category, name);
    dispatch(addRemoveFromCartItemAction);
  };

  return (

  // <Box>
  //   {JSON.stringify(cart, null, 2)}
  //   {console.log(cart)}

  //   {
  //     cart.map((product) => (

  //     ))
  //   }
  // </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product) => (
            <TableRow
              key={product.itemId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <IconButton onClick={removeFromCartAction}>
                <CloseRoundedIcon />
              </IconButton>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
