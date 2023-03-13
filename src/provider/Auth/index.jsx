/* eslint-disable react/jsx-no-constructed-context-values */
// import { createContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import React, { createContext, useContext } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // const history = useHistory();
  // const [userId, setUserId] = useState(
  //   JSON.parse(localStorage.getItem('@Technomind:userId')) || 0
  // );
  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem('@Technomind:user')) || ''
  // );

  // const handleRegister = (data) => {
  //   boraMarcarApi
  //     .post('/register', data)
  //     .then(() => {
  //       toast.success('Conta criada com sucesso!');
  //       history.push('/login');
  //     })
  //     .catch(() => toast.error('Email já cadastrado!'));
  // };

  const handleLogin = () => {};
  // data
  // {
  // boraMarcarApi
  //   .post('/login', data)
  //   .then(({ data }) => {
  //     localStorage.setItem(
  //       '@BoraMarcar:userToken',
  //       JSON.stringify(data.accessToken)
  //     );
  //     localStorage.setItem(
  //       '@BoraMarcar:userId',
  //       JSON.stringify(data.user.id)
  //     );
  //     setUserId(data.user.id);
  //     setUserToken(data.accessToken);
  //     history.push('/dashboard');
  //   })
  //   .catch(() => toast.error('Email ou senha incorretos!'));
  // };

  // const handleLogout = () => {
  //   localStorage.clear();
  //   setUserToken('');
  //   setUserId(0);
  // };

  return (
    <AuthContext.Provider
      value={{
        // userToken,
        // userId,
        handleLogin,
        // handleLogout,
        // handleRegister,
        // setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
