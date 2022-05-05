/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Typography, Container, Grid,
} from '@mui/material';
import axios from 'axios';
import Product from '../../types/products';
import Section from '../../components/section';
import ProductCard from '../../components/product-card/product-card';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>('http://localhost:8000/products')
      .then(({ data }) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          color: 'lightBlue.main',
        }}
      >
        {products.length === 0 ? 'There is no products' : 'Products'}
      </Typography>

      <Section sx={(theme) => theme.mixins.section}>
        <>
          {products.map(({ id, ...productProps }) => (
            <Grid key={id} item xs={4}>
              <ProductCard {...productProps} />
            </Grid>
          ))}
        </>
      </Section>

    </Container>
  );
};

export default ProductsPage;
