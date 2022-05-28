import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarLink, { CartStyle } from './navbar-link';
import NavbarVisitorMenu from './navbar-visitor-menu';
import Cart from '../cart/cart';
import { CartItem } from '../../types/cart-item-type';
import { useRootSelector } from '../../store/hooks';
import { selectLoggedIn } from '../../store/selectors';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';

const Navbar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const cartItemsCount = useRootSelector(selectCartItemsCount);

  // useEffect(({ cart }) => {
  //   const count = 0;
  //   cart.array.forEach(element => {

  //   });
  // }, [cart, cartCount]);

  const loggedIn = useRootSelector(selectLoggedIn);

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
            {loggedIn ? <NavbarAuthMenu /> : null}
          </Box>
          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <Cart id="1" itemId="5" amount={0} />
          </Drawer>
          <CartStyle>
            <IconButton aria-label="cart" sx={{ zIndex: 100 }} onClick={() => setCartOpen(true)}>
              <Badge badgeContent={cartItemsCount} color="primary">
                <ShoppingCartIcon htmlColor="white" />
              </Badge>
            </IconButton>
          </CartStyle>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
