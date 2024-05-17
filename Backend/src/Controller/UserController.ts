import User from "../Model/User";
import Bcrypt from "bcrypt";
import ManageTokens from "../Helper/Manage-Token";
import { ObjectId } from "mongoose";
import { SECRET } from "../Helper/assets";
import Jwt from "jsonwebtoken";

class UserController {
  public static async Register(req: any, res: any) {
    const {
      Nome,
      Email,
      NomeEmpresa,
      Endereco,
      Documento,
      Senha,
      ContraSenha,
    } = req.body;

    if (
      !Nome ||
      !Email ||
      !NomeEmpresa ||
      !Endereco ||
      !Documento ||
      !Senha ||
      !ContraSenha
    ) {
      res.status(422).json({
        message: "Por favor, preencha todos os dados do formulário",
      });
      return;
    }
    const verifyUserExists = async (Email: String) => {
      let userEmail = Email;
      const userExists: any = await User.findOne({ Email: userEmail } as any);
      if (userExists) {
        res.status(406).json({
          message: "Este email está em uso, por favor cadastre outro",
        });
        return;
      }
    };
    verifyUserExists(Email).catch((error) => console.log(error));
    const salt: any = Bcrypt.genSaltSync(12);
    const hashedPassword: any = Bcrypt.hashSync(Senha, salt);
    const user = new User({
      Nome,
      Email,
      NomeEmpresa,
      Endereco,
      Obras: {},
      Documento,
      Senha: hashedPassword,
      Orcamentos: {},
    });
    const newUser = await user.save();
    await ManageTokens.CreateToken(newUser, req, res);
  }
  public static async Login(req: any, res: any) {
    const { Email, Senha } = req.body;
    if (!Email || !Senha) {
      res.status(422).json({
        message:
          "Os dados de formulário são necessários, portanto preencha todos os campos.",
      });
      return;
    }
    const user = await User.findOne({ Email: Email } as any);
    if (!user) {
      res.status(400).json({
        message: "Não há usuários cadastrados com este email!",
      });
      return;
    }
    const CheckedPassworld = await Bcrypt.compare(Senha, user.Senha);
    if (!CheckedPassworld) {
      res.status(422).json({
        message: "Senha Inválida",
      });
      return;
    }
    await ManageTokens.CreateToken(user, req, res);
  }
  public static async EditUser(req: any, res: any) {
    const id: ObjectId = req.params.id;
  }
  public static async CheckUser(req: any, res: any) {
    let currentUser;

    if (req.headers.authorization) {
      const SECRET = "GhetyAsP347tui";

      const token = await ManageTokens.GetToken(req);
      if (!token) {
        res.status(401).send("Token inválido ou ausente");
        return;
      }

      try {
        const decoded: any = Jwt.verify(token, SECRET);
        currentUser = await User.findById(decoded.id);
      } catch (error) {
        console.error(
          "Erro ao verificar o token ou encontrar o usuário:",
          error
        );
        res.status(401).send("Token inválido");
        return;
      }
    } else {
      currentUser = null;
    }

    res.status(200).send(currentUser);
  }
}

export default UserController;
