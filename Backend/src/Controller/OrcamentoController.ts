import User from "../Model/User";
import ManageTokens from "../Helper/Manage-Token";
import { Request, Response, request } from "express";
import GeradorPDF from "../Helper/GeneratePDF";
import { endereco } from "../Helper/assets";
import EmailManage from "../Helper/ManageEmail";

class OrcamentoController {
  public static async PegarTodosOrcamentosDoUsuario(req: any, res: any) {}
  public static async CriarUmNovoOrcamento(req: any, res: any) {
    const { orcamento } = req.body;
    if (!orcamento.item) {
      res.status(422).json({
        message: "O orçamento precisa ter pelo menos um produto",
      });
      return;
    }
  }
  public static async DispatchOrc(Req: Request, Res: Response) {
    const orcamento = Req.body;
    const token = ManageTokens.GetToken(Req);
    ManageTokens.GetUserByToken(token)
      .then((user) => {
        if (!user) {
          Res.status(422).json({
            message: "Erro com o usuário",
          });
          return;
        }
        if (!orcamento) {
          Res.status(422).json({
            message: "Erro ao receber o orçamento",
          });
          return;
        }
        GeradorPDF.gerarPDFdoOrcamento(orcamento, user)
          .then(() => {  
            console.log("PDF gerado com sucesso!");
            //EmailManage.sendEmail(endereco,)
          })
          .catch((error) => console.error("Erro ao gerar o PDF:", error));
      })
      .catch((error) => {
        console.log(error);
      });

    /*
    - Disparar o PDF para o email dos lojistas
    - Retornar Mensagem de sucesso
    */
  }
  public static async DispararOrcamento(req: any, res: any) {}
}
export default OrcamentoController;
