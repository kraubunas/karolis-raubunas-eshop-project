import React from 'react';
import {
  Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { useRootSelector } from '../../store';
import { selectCartItems, selectProductsItems } from '../../store/selectors';

const Cart: React.FC = () => {
  const cart = useRootSelector(selectCartItems);

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
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              {/* <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.category}</TableCell> */}
              <TableCell align="right">{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
