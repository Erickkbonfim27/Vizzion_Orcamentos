import api from "./api";
import {useState} from 'react'

export default async function GetUser() {
    const [token] = useState(localStorage.getItem('token') || '')
    try {
        const response = await api.get('/user/checkuser', {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          });
        const user = response.data;
        console.log(user);
        return user;
    } catch (error) {
        console.error('Erro ao obter usuário:', error);
        return null;
    }
}
