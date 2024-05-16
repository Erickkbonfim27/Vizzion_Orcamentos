import { Request, Response } from "express";
import Nodemailer from "nodemailer";

class EmailManage {
  public static sendEmail(
    endereco: Array<string>,
    ModeloEmail: any,
    req: Request,
    res: Response
  ): void {
    const user: string = "vizzion.startup@gmail.com";
    const pass: string = "471876160404Vizzion#$";

    const trasnporter = Nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    trasnporter
      .sendMail({
        from: user,
        to: endereco,
        replyTo: user,
        subject: "Novo orçamento recebido!!!",
        html: ModeloEmail,
      })
      .then((response) => {
        res.status(200).json({
          message: "disparo enviado com sucesso!",
          response,
        });
        console.log(response);
      });
  }

  public EmailModel(Data: any, req: Request, res: Response) {
    const { Usuario, pdf } = Data;

    if (!Usuario || pdf) {
      res.status(200).json({
        message: "erro com dados da variavel Data",
      });
      return;
    }
    const emailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Seu Título Aqui</title>
    </head>
    <body style="font-family: Arial, sans-serif;">

      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="text-align: center;">Olá, ${Data.Usuario.Nome}!</h1>
        <p>Você tem ${Data.pdf} anos.</p>
        <p>Este é um exemplo básico de HTML para um e-mail.</p>
        <p>Você pode adicionar mais conteúdo aqui.</p>
        <p>Por favor, sinta-se à vontade para personalizar conforme necessário.</p>
        <p>Atenciosamente,</p>
        <p>Sua Assinatura</p>
      </div>

    </body>
    </html>
  `;
  }
}

export default EmailManage;
