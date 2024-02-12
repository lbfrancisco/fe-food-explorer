import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

import { api } from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [, setIsLoading] = useState(true);

  async function signIn({ email, password }) {
    try {
      setIsLoading(true);

      const response = await api.post('/sessions', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('@food-explorer:user', JSON.stringify(user));
      localStorage.setItem('@food-explorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível efetuar o login. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    localStorage.removeItem('@food-explorer:user');
    localStorage.removeItem('@food-explorer:token');

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@food-explorer:token');
    const user = localStorage.getItem('@food-explorer:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  const value = useMemo(() => ({
    signIn,
    signOut,
    user: data.user,
  }), [data]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
