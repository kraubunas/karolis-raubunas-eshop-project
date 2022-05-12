import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import HomePage from './pages/home-page';
import ProductsPage from './pages/product-page';
import LandingPageLayout from './components/landing-page-layout';
import AboutPage from './pages/about-page';
import LoginPage from './pages/login-page';
import ProfilePage from './pages/profile-page';
import RegisterPage from './pages/register-page';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';
import { AuthProvider } from './features/auth/auth-context';
import store from './store/index';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <ReduxProvider store={store}>

        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="auth/login"
              element={(
                <RequireVisitor>
                  <LoginPage />
                </RequireVisitor>
          )}
            />
            <Route
              path="auth/register"
              element={(
                <RequireVisitor>
                  <RegisterPage />
                </RequireVisitor>
          )}
            />
            <Route
              path="profile"
              element={(
                <RequireAuth>
                  <ProfilePage />
                </RequireAuth>
          )}
            />

          </Route>
        </Routes>
      </ReduxProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
