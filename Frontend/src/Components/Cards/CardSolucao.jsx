import React from 'react'

function CardSolucao({
    Titulo,
    Imagem,
    Descricao,
}) {
  return (
    <div className={`Card`}>
      <img src={Imagem} alt={Titulo} />
      <div className='CardTexts'>
        <h3>
            {Titulo}
        </h3>
        <span></span>
        <p>
            {Descricao}
        </p>
      </div>
    </div>
  )
}

export default CardSolucao