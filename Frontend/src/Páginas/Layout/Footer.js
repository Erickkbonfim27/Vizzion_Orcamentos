import React from "react";
import Logo from "../../Assets/vizzion-Logo.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterDataHeader">
        <div className="footerInfo">
          <div className="Infos">
            <ul>
              <h2 className="headerFooter">Links Úteis</h2>
              <li>Cases</li>
              <li>LGPD</li>
              <li>Canais</li>
              <li>Código de ética e conduta</li>
              <li>Ouvidoria</li>
            </ul>
          </div>

          <div className="Infos">
            <ul>
              <h2 className="headerFooter">Sobre a Vizzion</h2>

              <li>Trabalhe conosco</li>
              <li>Relações com investidores</li>
              <li>Eventos participados</li>
              <li>Código de cultura</li>
            </ul>
          </div>

          <div className="Infos">
            <ul>
              <h2 className="headerFooter">Produtos</h2>

              <li>Vizzion Manage</li>
              <li>Vizzion Buy</li>
              <li>Vizzion Calc</li>
            </ul>
          </div>
        </div>

        <div className="FaleConosco">
          <h2>Fale conosco</h2>
          <div className="Icones">
            <div><i className="bi bi-instagram"></i></div>
            <div><i className="bi bi-facebook"></i></div>
            <div><i className="bi bi-linkedin"></i></div>
          </div>
          <p>vizzion.startup@gmail.com</p>
        </div>
      </div>

      <div className="LogoDireitos">
        <img src={Logo} alt="Logo-Vizzion" className="LogoVizzion" />
        <p>Todos os direitos reservados, Grupo Vizzion Tecnologia</p>
      </div>
    </footer>
  );
}
