const pdfMake = (await import("pdfmake/build/pdfmake.min")).default;
const pdfFonts = (await import("pdfmake/build/vfs_fonts")).default;
pdfMake.vfs = pdfFonts.pdfMake.vfs;


function Gerarorcamento({orcamento, user}) {

  const GerarNovoOrcamento = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
      {
        text: "Orçamento - vizzion   " + user.Nome,
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 90],
      },
    ];
    const items = orcamento.map((item, index) => {
        return [
          {
            text: index,
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

    const details = [
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*", "*"],
          body: [
            [
              {
                text: "indíce",
                style: 'tableHeader',
                fontSize: 10,
              },
              {
                text: "produto",
                style: 'tableHeader',
                fontSize: 10,
              },
              {
                text: "Quantidade",
                style: 'tableHeader',
                fontSize: 10,
              },
              {
                text: "marca",
                style: 'tableHeader',
                fontSize: 10,
              },
            ],
            ...items
          ],
        },
        layout: 'lightHorizontalLines'
      },
    ];
    const footer = (currentPage, pageCount) => {
      return [
        {
          text: currentPage + "/" + pageCount,
          alignment: "right",
          fontSize: 9,
          margin: [0, 10, 20, 0],
        },  
      ];
    };
    const docDefinitions = {
      pageSize: "a4",
      pageMargin: [15, 50, 15, 40],
      header: [reportTitle],
      content: [details],
      footer: footer,
    };
    pdfMake.createPdf(docDefinitions).download();
  };
  const handlePDFClick = () => {
    GerarNovoOrcamento(orcamento);
    
  };

  return (
    <div className="GerarOrcamentoBotao">
      <button onClick={handlePDFClick} className="botaoEmitirOrcamento">
        Gerar o pdf do orçamento <span className="icone"> 📄 </span>
      </button>
    </div>
  );
}

export default Gerarorcamento;
