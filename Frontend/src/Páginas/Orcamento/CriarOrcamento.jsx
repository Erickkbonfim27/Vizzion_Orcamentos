import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Vizzion-logo-escura.png";
import Input from "../../Components/Input/input.jsx";
import Gerarorcamento from "../../Report/PdfGenerator/orcamento.jsx";
import api from "../../Utils/api.js";

export default function CriarOrcamento() {
  const [orcamento, setOrcamento] = useState([]);
  const [item, setItem] = useState({});
  const [token] = useState(localStorage.getItem('token') || '')
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get('/user/checkuser', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data)
      })
  }, [token])
  console.log(user)

  function handleManualadd(e) {
    e.preventDefault();
    setOrcamento([...orcamento, item]);
    console.log(orcamento);
  }
  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  }
  function handleRemoveItem(indexToRemove) {
    setOrcamento(prevOrcamento => prevOrcamento.filter((_, index) => index !== indexToRemove));
  }
  async function handleSent(orcamento) {
    try {
      await api.post('/orcamento/send/all', orcamento)
      console.log('Orçamento enviado com sucesso!');

    } catch (error) {
      console.error('Erro ao enviar orçamento:', error);
    }
  }

  return (
    <div className="CriarOrcamentoPag">
      <div className="SideBarOrcamentoPag">
        <img src={Logo} alt="Logo Vizzion" />
        <div className="halldelinks">
          <Link to="/user/profile">Retornar</Link>
          <Link to="/orc/novoorc/automatico">
            Crie um orçamento a partir de um arquivo existente
          </Link>
          <Link onClick={() => handleSent(orcamento)}> Orçar </Link>
          <span className="ExportarOrcamentoEmPdf">
            <Gerarorcamento orcamento={orcamento} user={user} />
          </span>
        </div>
        <section className="TextosOrcamentoPag">
          <p>Vizzion Orçamentos V0.0.0.0.1</p>
        </section>
      </div>
      <div className="BodyMainCadOrca">
        <section className="TitleProfileCadOrca">
          <h1> Cadastre um novo orçamento </h1>
        </section>
        <div className="BodyMainCadOrcamentoActions">
          <section className="ManualUploadOrcamento">
            <form onSubmit={handleManualadd}>
              <div className="formline">
                <Input
                  type="text"
                  text="Produto"
                  nome="Produto"
                  placeholder="Indique o produto"
                  handleOnChange={handleChange}
                />
                <Input
                  type="Number"
                  text="Quantidade"
                  nome="Quantidade"
                  placeholder="Digite a quantidade"
                  handleOnChange={handleChange}
                />
                <Input
                  type="text"
                  text="Marca"
                  nome="Marca"
                  placeholder="Indique a marca"
                  handleOnChange={handleChange}
                />
                <input type="submit" value="adicionar item" />
              </div>
            </form>
          </section>
          <section className="ListOrcamento">
            <ul className="ListItem">
              {orcamento.map((item, index) => (
                <li key={index}>
                  <span className="itemIndex"> Item {index + 1}: </span>
                  <div className="InfoItemContent">
                    <span className="ProdutoName">
                      Produto: <p>{item.Produto}</p>
                    </span>
                    <span className="ProdutoQuantity">
                      Quantidade: <p> {item.Quantidade} </p>
                    </span>
                    <span className="ProdutoMarca"> Marca: <p>{item.Marca}</p> </span>
                  </div>
                  <span className="RemoveItem" onClick={() => handleRemoveItem(index)}> X </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
