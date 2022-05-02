import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
