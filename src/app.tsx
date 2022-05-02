import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import ProductsPage from './pages/product-page';
import LandingPageLayout from './components/landing-page-layout';
import AboutPage from './pages/about-page';
import { AuthProvider } from './features/auth/auth-context';
import LoginPage from './pages/login-page';
import ProfilePage from './pages/profile-page';
import RegisterPage from './pages/register-page';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<ProductsPage />} />
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
    </BrowserRouter>
  </AuthProvider>
);

export default App;
