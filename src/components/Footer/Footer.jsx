import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to='/'>FacebookIcon</Link>
          </li>
          <li>
            <Link to='/about'>TwitterIcon</Link>
          </li>
          <li>
            <Link to='/contact'>InstagramIcon</Link>
          </li>
          <li>
            <Link to='/contact'>LinkedInIcon</Link>
          </li>
          <li>
            <Link to='/contact'>githubIcon</Link>
          </li>
        </ul>
      </nav>
      <span>©TechnoMind 2022</span>
    </footer>
  );
}

export default Footer;
