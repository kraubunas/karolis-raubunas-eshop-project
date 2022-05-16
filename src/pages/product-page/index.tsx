/* eslint-disable no-console */
import React from 'react';
import {
  Box, Typography, Container, Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import Section from '../../components/section';
import ProductCard from '../../components/product-card/product-card';
import { useRootSelector } from '../../store';

const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

  //   useEffect(() => {
  //     axios.get<Product[]>('http://localhost:8000/products')
  //       .then(({ data }) => setProducts(data))
  //       .catch(console.error);
  //   }, []);

  const products = useRootSelector((state) => state.products);
  const cart = useRootSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (id: string): void => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id },
    });
  };

  return (
    <Container sx={(theme) => theme.mixins.container}>
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
          {products.map((product) => (
            <Grid key={product.id} item xs={4}>
              <ProductCard {...product} addToCart={addToCart} />
            </Grid>
          ))}
        </>
      </Section>

      <Typography
        component="h1"
        variant="h3"
        sx={{
          color: 'lightBlue.main',
        }}
      >
        Cart

      </Typography>
      <Box component="pre">
        {JSON.stringify(cart, null, 2)}
      </Box>
    </Container>
  );
};

export default ProductsPage;
