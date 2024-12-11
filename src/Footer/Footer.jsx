import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="proyecto">Este es un proyecto personal desarrollado por Francisco.</p>
      <p className="mis-contactos">Conéctate conmigo:</p>
      <div className="mis-redes">
        <p className="mi-gmail">
          <img className="imagen-gmail" src="./imagenes/gmail.png" alt="Logo de Gmail" />
          franciscoarmenio1@gmail.com
        </p>
        <a
          className="mi-linkedin"
          href="https://www.linkedin.com/in/francisco-armenio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="imagen-linkedin" src="./imagenes/linkedin.png" alt="Logo de LinkedIn" />
          Mi LinkedIn
        </a>
        <a
          className="mi-github"
          href="https://github.com/francisco-armenio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="imagen-github" src="./imagenes/github.png" alt="Logo de GitHub" />
          Mi GitHub
        </a>
      </div>
      <p className="derechos">&copy; 2024 Francisco. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
