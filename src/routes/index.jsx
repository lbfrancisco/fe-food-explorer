import React from 'react';
import useAuth from '../hooks/useAuth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { user } = useAuth();

  return user ? <AppRoutes isAdmin={user.admin} /> : <AuthRoutes />;
}
