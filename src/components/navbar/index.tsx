import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarLink from './navbar-link';
import NavbarVisitorMenu from './navbar-visitor-menu';
import AuthContext from '../../features/auth/auth-context';
import Cart from '../cart/cart';
import { CartItemType } from '../../types/cart-item-type';

const Navbar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  // useEffect(({ cart }) => {
  //   const count = 0;
  //   cart.array.forEach(element => {

  //   });
  // }, [cart, cartCount]);

  const { loggedIn } = useContext(AuthContext);

  return (

    <AppBar position="fixed" sx={{ bgcolor: 'darkBlue.main' }}>
      <Container sx={{ px: { xs: 0, sm: 0 } }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Personal Blog
          </Typography>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/products">Products</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <Box sx={{ display: 'flex' }}>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <Cart />
          </Drawer>
          <IconButton aria-label="cart" sx={{ zIndex: 100 }} onClick={() => setCartOpen(true)}>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon htmlColor="white" />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
