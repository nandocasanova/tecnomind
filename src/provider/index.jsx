import React from 'react';
import { AuthProvider } from './Auth';

function Provider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Provider;
