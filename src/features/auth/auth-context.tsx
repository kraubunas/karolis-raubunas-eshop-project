import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pause from '../../components/helpers/pause';
import useLocalStorage from '../../hooks/use-local-storage';
import Credentials from '../../types/credentials';
import User from '../../types/user';
import UserRegistration from '../../types/user-registration';
import AuthService, { AuthPromise } from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  loading: boolean,
  clearError: VoidFunction,
  login: (credentials: Credentials, next: string) => void,
  register: (credentials: UserRegistration) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<AuthContextType['user']>('user', null);
  const [error, setError] = useState<AuthContextType['error']>(null);
  const [loading, setLoading] = useState<AuthContextType['loading']>(false);

  const authenticate = async (credentials: Credentials, authMethod: AuthPromise, next = '/') => {
    try {
      setLoading(true);
      await pause(3000);
      const loggedInUser = await authMethod(credentials);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    } finally {
      setLoading(false);
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
    setUser(null);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn: Boolean(user),
    error,
    loading,
    clearError,
    login,
    register,
    logout,
  }), [user, error, loading]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
