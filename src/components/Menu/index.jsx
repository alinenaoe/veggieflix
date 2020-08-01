/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      this.oldScroll = this.scrollY;
    };
  });

  return (
    <nav className="Menu" style={{ visibility: scrolling ? 'hidden' : 'visible', opacity: scrolling ? 0 : 1 }}>
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/new/video">
        Cadastrar novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
