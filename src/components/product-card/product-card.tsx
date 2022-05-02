import { Card, Typography, Button } from '@mui/material';
import React from 'react';
import Product from '../../types/products';

type ProductCardProps = Omit<Product, 'id'>;

const ProductCard: React.FC<ProductCardProps> = ({ name, category, price }) => (
  <Card sx={(theme) => theme.mixins.box}>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>
      {`${name}`}
    </Typography>
    <Typography variant="h3">IMG</Typography>
    <Typography variant="h6" component="p">
      {`${category}`}
    </Typography>
    <Typography variant="body1">{`${price}`}</Typography>
    <Button variant="contained" color="primary">Add to basket</Button>
  </Card>

);

export default ProductCard;
