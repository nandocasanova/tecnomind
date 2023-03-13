import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <input type='text' placeholder='Pesquisar...' />;
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/'>Produtos</Link>
          </li>
          <li>
            <Link to='/login'>Entrar</Link>
          </li>
          <li>
            <Link to='/register'>Registrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
