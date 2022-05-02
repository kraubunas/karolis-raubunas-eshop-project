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

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
