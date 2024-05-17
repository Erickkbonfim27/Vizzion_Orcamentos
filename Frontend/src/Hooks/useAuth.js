import api from "../Utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "./useFlashMessage";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function register(user) {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await api.post("/user/register", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      // tratar erro
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  async function login(user) {
    let msgText = "Login realizado com sucesso!";
    let msgType = "success";

    try {
      const infos = await api.post("/user/login", user).then((Response) => {
        return Response.data
      })
      console.log(infos)
      await authUser(infos)
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }

    setFlashMessage(msgText, msgType);
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.Token));

    navigate("/");
  }

  function logout() {
    const msgText = "Logout realizado com sucesso!";
    const msgType = "success";

    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate("/user/login");

    setFlashMessage(msgText, msgType);
  }

  return { authenticated, loading, register, login, logout };
}
 