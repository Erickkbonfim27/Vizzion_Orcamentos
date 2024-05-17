import React, { useContext, useState } from "react";
import Input from "../../Components/Input/input";
import { Link } from "react-router-dom";

/* imagens */
import UperBackgroundFotoLogin from "../../Assets/foto-fundo-login.svg";

/* Contexto */
import { Context } from "../../Context/UserContext"

export default function Login() {
  const [user, setUser] = useState({})
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }
  function HandleSubmit(e) {
    e.preventDefault()
    login(user)
  }

  return (
    <div className="Login">
      <div className="loginLeft">
        <div className="LoginLeft">
          <h1 className="LoginTitle">Login</h1>
          <form onSubmit={HandleSubmit}>
            <Input
              type="email"
              text="Email"
              nome="Email"
              placeholder="Digite seu email"
              handleOnChange={handleChange}
            />
            <Input
              type="password"
              text="Senha"
              nome="Senha"
              placeholder="Digite sua senha"
              handleOnChange={handleChange}
            />
            <input type="submit" value="Entrar" />
          </form>
          <div className="Links">
            <p className="hasnoaccount">
              Ainda não tem uma conta?{" "}
              <Link to="/user/register">Clique aqui e cadastre-se</Link>
            </p>
            <Link to="/recoverpassword" className="recover">
              Esqueceu a senha? clique aqui
            </Link>
          </div>
        </div>
      </div>
      <div className="loginRight">
        <div className="LoginRigthAssets">
          <img
            src={UperBackgroundFotoLogin}
            alt="Foto fundo login"
            className="LoginRigthFotologin"
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
