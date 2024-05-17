import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Logo from "../../Assets/vizzion-Logo.png";

/* Contetxto */
import { Context } from "../../Context/UserContext";

/* Hooks */

export default function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <nav className="Navbar">
      <div className="Navbar_Logo">
        <img src={Logo} alt="Vizzion" />
      </div>
      <ul className="Links">
        {authenticated ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/vizzion/dashboard">Dashboard</Link>
            </li>
            <li>
              <span>
                <Link to="/user/profile" className="PerfilLinkNavbar">Perfil</Link>
                <i className="bi bi-person-circle"></i>
              </span>
            </li>
            <li>
              <Link onClick={logout}>Sair</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/solucoes">Soluções</Link>
            </li>
            <li>
              <Link to="/comercial">Comercial</Link>
            </li>
            <li>
              <span>
                <Link to="/user/login">Login</Link>
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
