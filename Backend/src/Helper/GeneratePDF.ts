import { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { createWriteStream } from "fs";
import * as Path from "path";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class GeradorPDF {
  public static async gerarPDFdoOrcamento(
    orcamento: any[],
    user: any
  ): Promise<void> {
    const ReportTitle: Content = {
      text: "Orçamento -- Vizzion    " + user.Nome,
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 90],
    };
    const items = orcamento.map((item, index) => {
      return [
        {
          text: index + 1,
          fontSize: 9,
        },
        {
          text: item.Produto,
          fontSize: 9,
        },
        {
          text: item.Quantidade,
          fontSize: 9,
        },
        {
          text: item.Marca,
          fontSize: 9,
        },
      ];
    });

    const details: Content = {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*"],
        body: [
          [
            { text: "indíce", style: "tableHeader", fontSize: 10 },
            { text: "produto", style: "tableHeader", fontSize: 10 },
            { text: "Quantidade", style: "tableHeader", fontSize: 10 },
            { text: "marca", style: "tableHeader", fontSize: 10 },
          ],
          ...items,
        ],
      },
      layout: 'lightHorizontalLines'
    };

    const footer = (currentPage: number, pageCount: number): Content => {
      return {
        text: currentPage + "/" + pageCount,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      };
    };

    const docDefinitions: TDocumentDefinitions = {
      pageSize: "A4",
      pageMargins: [15, 50, 15, 40],
      header: ReportTitle,
      content: [details],
      footer: footer,
      defaultStyle: {
        font: "Roboto",
      },
    };

    const pdfDoc = pdfMake.createPdf(docDefinitions);
    const pdfBuffer = await new Promise<Buffer>((Resolve, Reject) => {
      pdfDoc.getBuffer((buffer: Buffer) => {
        Resolve(buffer);
      });
    });
    const fileName = `${Date.now()}_${Math.floor(Math.random() * 1000)}_${
      user.Nome
    }.pdf`;

    const filePath = Path.join(__dirname, "../Orcamentos", fileName);
    const fileStream = createWriteStream(filePath);
    fileStream.write(pdfBuffer); 
    fileStream.end();
    console.log(`PDF gerado com sucesso em: ${filePath}`);
  }
} 
export default GeradorPDF;
