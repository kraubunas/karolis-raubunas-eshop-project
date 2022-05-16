import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarLink from './navbar-link';
import NavbarVisitorMenu from './navbar-visitor-menu';
import AuthContext from '../../features/auth/auth-context';

const Navbar: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);

  return (

    <AppBar position="static" sx={{ bgcolor: 'darkBlue.main' }}>
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
          <IconButton aria-label="cart">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon htmlColor="white" />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
