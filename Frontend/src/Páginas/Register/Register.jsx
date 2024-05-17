import React, { useContext, useState } from "react";
import Input from "../../Components/Input/input";
import { Link } from "react-router-dom";

/* imagens */
import UperBackgroundFotoLogin from "../../Assets/foto-fundo-login.svg";
import FormAsset from "../../Assets/Rectangle 17.png";

/* Context  */
import { Context } from "../../Context/UserContext";

export default function Register() {
  const [user, setUser] = useState({})
  const { register } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value})
    console.log(user)
  }
  function HandleSubmit(e) {
    e.preventDefault()
    register(user)
  }

  return (
    <div className="Register">
      <div className="RegisterLeft">
        <div className="RegisterLeftz">
          <h1 className="RegisterTitle">Cadastre-se</h1>
          <form onSubmit={HandleSubmit}>
            <section className="inlineForm">
              <Input
                type="text"
                text="Nome"
                nome="Nome"
                placeholder="Digite seu Nome"
                handleOnChange={handleChange}
              />
              <Input
                type="email"
                text="Email"
                nome="Email"
                placeholder="Digite seu email"
                handleOnChange={handleChange}
              />
            </section>
            <section className="inlineForm">
              <Input
                type="text"
                text="Nome da Empresa"
                nome="NomeEmpresa"
                placeholder="Digite o nome da sua empresa"
                handleOnChange={handleChange}
              />
              <Input
                type="text"
                text="CNPJ OU CPF"
                nome="Documento"
                placeholder="Digite seu CNPJ ou CPF"
                handleOnChange={handleChange}
              />
            </section>
            <section className="inlineForm3">
              <div className="Endereco">
                <Input
                  type="text"
                  text="Endereço"
                  nome="Endereco"
                  placeholder="Digite o endereco da sua empresa"
                  handleOnChange={handleChange}
                />
              </div>
              <div className="CheckObraAtiva">
                <img src={FormAsset} alt="formasset" />
                <input
                  type="checkbox"
                  className="checkdeobras"
                  name="ObraAtiva"
                  id="ObraAtiva"
                  onChange={handleChange}
                />
                <label htmlFor="ObraAtiva" className="ObraLabel">Possui Obra ativa atualmente?</label>
              </div>
            </section>
            <section className="inlineForm">
              <Input
                type="password"
                text="Senha"
                nome="Senha"
                placeholder="Digite a sua Senha"
                handleOnChange={handleChange}
              />
              <Input
                type="password"
                text="Confirme sua senha"
                nome="ContraSenha"
                placeholder="Digite sua senha novamente"
                handleOnChange={handleChange}
              />
            </section>
            <input type="submit" value="Entrar" />
          </form>
          <div className="Links">
            <p className="hasnoaccount">
              Ja tem conta?  {" "}
              <Link to="/user/login">Clique aqui e faça-login</Link>
            </p>
            <Link to="/recoverpassword" className="recover">
              Esqueceu a senha? clique aqui
            </Link>
          </div>
        </div>
      </div>
      <div className="RegisterRight">
        <div className="RegisterRigthAssets">
          <img
            src={UperBackgroundFotoLogin}
            alt="Foto fundo login"
            className="RegisterRigthFotologin"
          />
          <span className="assideSpan">
            <p>
              Uma Nova Visão <br /> de Mundo
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
