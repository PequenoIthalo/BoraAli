import { Link } from "react-router-dom";

import "../menu/menu.css";

export default function Menu() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <div className="contanier_logo">{/* <img src="" alt=""> */}</div>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Passeios">Passeios</Link>
          </li>
          <li>
            <Link to="/QuemSomos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/LoginCadastro">Login/Cadastro</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
