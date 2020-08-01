import React from 'react';
import { FooterBase } from './styles';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';
import email from '../../assets/img/email.svg';

function Footer() {
  return (
    <FooterBase>

      <h3>Aline Naoe</h3>
      <div className="contact">
        <a href="https://github.com/alinenaoe" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/alinenaoe/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto:alinenaoe@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <img src={email} alt="" />
        </a>
      </div>
      <span>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </span>
    </FooterBase>
  );
}

export default Footer;
