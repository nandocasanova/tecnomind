import React from 'react';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position='top-right' reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
