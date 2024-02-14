import React from 'react';
import useAuth from '../hooks/useAuth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { jwtDecode } from 'jwt-decode';

export default function Routes() {
  const { user, token } = useAuth();

  if (!token) {
    return <AuthRoutes />;
  }

  const decodedToken = jwtDecode(token);

  if (decodedToken.exp * 1000 < new Date().getTime()) {
    return <AuthRoutes />;
  }

  return <AppRoutes isAdmin={user.admin} />;
}
