import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/use-local-storage';
import Credentials from '../../types/credentials';
import User from '../../types/user';
import UserRegistration from '../../types/user-registration';
import AuthService, { AuthPromise } from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (credentials: Credentials, next: string) => void,
  register: (credentials: UserRegistration) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const authenticate = async (credentials: Credentials, authMethod: AuthPromise, next = '/') => {
    try {
      const loggedInUser = await authMethod(credentials);
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const login: AuthContextType['login'] = async (credentials: Credentials, next) => {
    if (error) {
      setError(null);
    }
    authenticate(credentials, AuthService.login, next);
  };

  const register: AuthContextType['register'] = async (userRegistration) => {
    if (error) setError(null);

    if (userRegistration.password !== userRegistration.repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    const credentials: Credentials = {
      email: userRegistration.email,
      password: userRegistration.password,
    };
    authenticate(credentials, AuthService.register);
  };

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
    register,
    logout,
  }), [loggedIn, user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
