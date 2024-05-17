import api from "../Utils/api";

export class Messages {
  async SendMessage(contato) {
    try {
      const response = await api.post("/sendmessage/contato", contato);
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }
}
