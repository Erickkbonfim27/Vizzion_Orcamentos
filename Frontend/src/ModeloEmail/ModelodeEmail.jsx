import React from 'react'
import ReactDOMServer from 'react-dom/server';
import logoVizzzion from '../Assets/Vizzion-logo-escura.png';

export default function EmailModel1() {
        /*const EmailContent = () => (
        <div>
          
        </div>
      );
      const htmlContent = ReactDOMServer.renderToStaticMarkup(<EmailContent />);
  
      return htmlContent
      */
      return(
        <div className='ModelodeEmail'>
            <header>
                <img src={logoVizzzion} alt="logovizzion" />
                <h3>Orçementos pendendentes</h3>
            </header>
            <dir className='ModeloEmailMainContent'>


              
            </dir>

        </div>
      )
}
