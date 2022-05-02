import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/use-local-storage';
import Credentials from '../../types/credentials';
import User from '../../types/user';
import AuthService from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (credentials: Credentials, next: string) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const login: AuthContextType['login'] = async (credentials: Credentials, next) => {
    if (error) {
      setError(null);
    }
    try {
      const loggedInUser = await AuthService.login(credentials);
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }

    const logout: AuthContextType['logout'] = () => {
      setLoggedIn(false);
      navigate('/');
    };

    const clearError: AuthContextType['clearError'] = () => {
      setError(null);
    };

    const providerValue = useMemo(() => ({
      user,
      loggedIn,
      error,
      clearError,
      login,
      logout,
    }), [loggedIn, user, error]);

    return (
      <AuthContext.Provider value={providerValue}>
        {children}
      </AuthContext.Provider>
    );
  };
};

export default AuthContext;
