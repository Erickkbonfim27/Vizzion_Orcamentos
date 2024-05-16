import jwt from "jsonwebtoken";
import { SECRET } from "./assets";
import User from "../Model/User";

class ManageTokens {
  public static async CreateToken(newUser: any, req: any, res: any) {
    try {
      const token = jwt.sign(
        {
          name: newUser.Nome,
          id: newUser._id,
        },
        SECRET
      );
      console.log("token emitido com sucesso");
      7;
      console.log(token);
      res.status(200).json({
        message: "Autenticação realizada com sucesso!",
        Token: token,
        userID: newUser._id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Autententicação falha! tente novamente mais tarde!",
      });
    }
  }
  public static GetToken(req: any): string | null {
    const AuthHeader: string | undefined = (req.headers as any).authorization;
    if (!AuthHeader) {
      console.log("Cabeçalho de autorização ausente na requisição");
      return null;
    }

    const tokenParts: string[] = AuthHeader.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      console.log("Formato inválido do cabeçalho de autorização");
      return null;
    }

    const token: string = tokenParts[1];
    console.log("Token do cabeçalho da requisição:", token);
    return token;
  }
  public static async GetUserByToken(token:any) {
    if (!token) {
      return console.log("sem token, erro na funcao ManageToken");
    }
    const decoded: any = jwt.verify(token, SECRET);
    const userId = decoded.id;
    const user = await User.findOne({ _id: userId } as any);
    return user;
  }
  public static Checktoken(req: any, res: any, next: any): void {
    if (!req.headers.authorization) {
      res.status(401).json({
        message: "acesso bloqueado",
      });
      return;
    }
    try {
      const token = ManageTokens.GetToken(req);
      if (!token) {
        res.status(401).json({
          message: "Acesso Negado",
        });
        return;
      }
      const verfied = jwt.verify(token, SECRET);
      req.user = verfied;
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Token Inválido",
      });
    }
  }
}
export default ManageTokens;
