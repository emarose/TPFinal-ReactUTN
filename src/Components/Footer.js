import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../logo.png";

function Footer() {
  return (
    <footer>
      <ul className="contact">
        <li>
          <p>Dirección: Calle Falsa 123</p>
        </li>
        <li>
          <p>Email: emanuelamerio.rose@gmail.com</p>
        </li>
        <li>
          <p>Sitio creado por Emanuel Amerio.</p>
        </li>

       
      </ul>
      <ul className="links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/ingresar">Ingresar</Link>
        </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
      </ul>
    </footer>
  );
}
export default Footer;
