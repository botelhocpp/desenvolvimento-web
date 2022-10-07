import React from 'react';
import {useState} from 'react';

const Cidade = ({nome, mostrarQuantidade}) => {
     let [quantidadeVotos, contadorVotos] = useState(0);

     return (
          <>
               <button id={nome} value={quantidadeVotos} onClick={() => contadorVotos(prev => prev + 1)}>{nome}</button>
               <a id="quantidade">{quantidadeVotos}</a>
          </>
     );
};

export default Cidade;