import React from 'react';

const Votacao = ({children}) => {

     const apurarVotos = () => {

          let empate = false;
     
          // Obtém a cidade com mais votos.
          let cidadeVencedora = children.filter(element => {
               return element.hasOwnProperty("props") && element.props.hasOwnProperty("nome")
          }).map(element => {
               return document.getElementById(element.props.nome)
          }).reduce((maior, atual) => {
               empate = (maior.value === atual.value);
               if(maior.value < atual.value) {
                    maior = atual;
                    empate = false;
               }
               return maior;
          });

          // Configura o texto do resultado.
          document.getElementById("resultado").innerHTML = (empate) ? "Houve um Empate!" : cidadeVencedora.id;
     }

     return (
          <div>
               {children}
               <button onClick={apurarVotos}>Apurar Votos</button>
               
               <br/>
               <p>Cidade Vencedora: </p>
               <a id="resultado"></a>
          </div>
     );
};

export default Votacao;