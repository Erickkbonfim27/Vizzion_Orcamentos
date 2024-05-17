import React from "react";
import Logo from "../../Assets/Vizzion-logo-escura.png";
import { Link } from "react-router-dom";

export default function Profile() {

  return (
    <div className="UserProfile">
      <div className="SideBarProfile">
        <img src={Logo} alt="Logo Vizzion" />
        <section className="Textos">
          <p>Vizzion Orçamentos V0.0.0.0.1</p>
        </section>
      </div>
      <div className="BodyMainProfile">
        <section className="TitleProfileBodyMain">
          <h1> Seja Bem Vindo</h1>
        </section>
        <div className="BodyMainProfileActions">
          <section className="BotoesPerfilInicial">
            <button>
              <Link to="/orc/novoorc" className="BotaoHome">Cadastrar um novo orçamento</Link>
            </button>
            <button>
              <Link to="/orc/modeloemail" className="BotaoHome">Meus Orçamentos /n modelo de email /n </Link>
            </button>
            <button>
              <Link to="/orc/lojistas" className="BotaoHome">Lojistas Parceiros</Link>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
