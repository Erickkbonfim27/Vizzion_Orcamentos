import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

/* Componentes*/
import CardSolucao from "../Components/Cards/CardSolucao";
import Input from "../Components/Input/input";
import TextArea from "../Components/Input/TextArea";

/* Classes e funções */
import { Messages } from "../Hooks/SendMessage";

/*Imagens e vetores */
import Banner from "../Assets/fundo-banner.png";
import CircleAsset from "../Assets/Texto-Asset-UpperTitle.svg";
import MainUmBanner from "../Assets/Rectangle 10.svg";
import MainUmDetaisl from "../Assets/detalhes.svg";
import CardVManage from "../Assets/Card3.svg";
import CardVBuy from "../Assets/FotoCardDois.svg";
import CardVCalc from "../Assets/Card1.svg";
import BannerMainDois from "../Assets/Group 2.svg";
import Pontilhado from "../Assets/Pontilhado.svg";
import Elipse from "../Assets/Ellipse 21.svg";

export default function Home() {
  const message = new Messages();
  const [contato, setContato] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    message.SendMessage(contato)
  }
  function handleChange(e) {
    setContato({ ...contato, [e.target.name]: e.target.value })
    console.log(contato)
  }

  return (
    <div className="Home">
      <div className="Banner">
        <div className="Textos">
          <h1>
            Mais eficiência <br /> e economia <br /> para sua obra
          </h1>
          <Link to="/comercial">Conheça agora</Link>
        </div>
        <span>
          <img src={Banner} alt="banner" />
        </span>
      </div>
      <div className="Main_top">
        <div className="Textos">
          <img src={CircleAsset} alt="circle" />
          <h1>
            Reduza custos e saiba tudo <br /> Que acontece na sua obra, <br />{" "}
            Quando acontece
          </h1>
          <p>
            Conheça o único sistema de gestão de obras que utiliza tecnologia de
            satélite da América Latina, Além de contar com diversas ferramentas
            para otimizar as ações do dia-a-dia, como encontrar mão de obra ou
            achar o melhor preço para o material da sua construção.
          </p>
          <Link to="/comercial">Conheça agora</Link>
        </div>
        <div className="assideImages">
          <span>
            <img src={MainUmDetaisl} alt="detalhes" />
          </span>
          <img src={MainUmBanner} alt="banenr" />
        </div>
      </div>
      <div className="Solucoes">
        <h1>
          Nossas <br /> Soluções
        </h1>
        <div className="Cards">
          <CardSolucao
            Titulo="VIZZION MANAGE"
            Imagem={CardVManage}
            Descricao="Ferramenta para gestão de obras, com monitoramento ativo de obra via satélite e gestão facilitada com I.A"
          />
          <CardSolucao
            Titulo="VIZZION BUY"
            Imagem={CardVBuy}
            Descricao="software para facilitar encontrar o melhor preço para os materiais da sua obra, de forma fácil, rápida e unificada."
          />
          <CardSolucao
            Titulo="VIZZION CALC"
            Imagem={CardVCalc}
            Descricao="Saiba quanto vai gastar de cada material para o seu projeto sem precisar conhecer a fundo os materiais."
          />
        </div>
      </div>
      <div className="Main_Banner">
        <div className="textos">
          <h3>
            Quanto dinheiro <br /> você deixa de <br /> ganhar
          </h3>
          <p>
            Por gasto em duplicidade com materiais, pagamentos indevidos, falta
            de previsões, compras desnecessárias, dificuldades com a gestão da
            equipe de campo.
          </p>
          <Link to="/Comercial">Otimize sua operação</Link>
        </div>
        <img src={BannerMainDois} alt="bannerdois" />
      </div>
      <div className="Contato">
        <div className="assetsContatoHome">
          <span className="Pontilhado">
            <img src={Pontilhado} alt="pontilhado" />
          </span>
          <span className="Elipse">
            <img src={Elipse} alt="Elipse" />
          </span>
        </div>
        <div className="Textos">
          <span>#Entreemcontato</span>
          <h2>
            ficou com dúvida ou quer <br /> saber mais?
          </h2>
          <p>Ficaremos feliz em conversar!!!</p>
        </div>
        <div className="Formulario">
          <form onSubmit={handleSubmit}>
            <div className="headerForm">
              <div className="inputSet">
                <Input
                  type="text"
                  text="Nome"
                  nome="Nome"
                  placeholder="Digite seu Nome"
                  handleOnChange={handleChange}
                />
              </div>
              <div className="inputSet">
                <Input
                  type="tel"
                  text="phone"
                  nome="Telefone"
                  placeholder="Digite seu Nome"
                  handleOnChange={handleChange}
                />
              </div>
            </div>
            <section className="areaDaMensagem">
              <TextArea
                text="Descrição"
                nome="Descricao"
                placeholder="Digite sua mensagem"
                rows="8"
                handleOnChange={handleChange}
              />
            </section>
            <div className="formsend">
              <div className="lgpdAccept">
                <input type="checkbox" name="lgpd" id="lgpd" />
                <p>
                  Estou ciente das finalidades para utilização de meus dados
                  pessoais por parte do grupo Vizzion e concordo com os termos
                  deste tratamento descrito na Política de Privacidade
                  disponibilizada.
                </p>
              </div>
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
