import {
  Card, Typography, Button, Box,
} from '@mui/material';
import React from 'react';
import { QuantityPicker } from 'react-qty-picker';
import { AddShoppingCart } from '@mui/icons-material';
import Product from '../../types/products';
import Img from '../img';

type ProductCardProps = Product & {
  addToCart: (itemId: string) => void,
};

const ProductCard: React.FC<ProductCardProps> = ({
  id, name, category, price, image, addToCart,
}) => (
  <Card sx={(theme) => theme.mixins.box}>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>
      {`${name}`}
    </Typography>
    <Img src={image[0]} sx={{ height: 200, width: '100%' }} alt="" />
    <Typography variant="h6" component="p">
      {`${category}`}
    </Typography>
    <Typography variant="body1">{`${price}`}</Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2,
    }}
    >
      <QuantityPicker min={0} max={5} width="50px" />
      <Button variant="contained" color="primary" sx={{ display: 'flex', gap: 3 }} onClick={() => addToCart(id)}>
        <AddShoppingCart />
        Add to basket
      </Button>
    </Box>
  </Card>

);

export default ProductCard;
