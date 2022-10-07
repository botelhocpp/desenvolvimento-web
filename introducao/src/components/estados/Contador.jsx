import React from "react";
import {useState} from "react";

const Contador = ({}) => {

     const [contador, setContador] = useState(0);
     const [ande, setAnde] = useState(false);
     // let contador = 0;

     const contar = () => {
          setContador((prev) => prev + 1);
          //setContador(contador + 1);
     };

     const modificarAnde = () => {
          setAnde(!ande);
     }

     const renderizarAnde = () => {
          if(ande) {
               return (
                    <img src="https://www.quixada.ufc.br/wp-content/uploads/2016/02/Andr%C3%A9_Ribeiro_Braga1-225x300.png" alt="Andé" width={44} height={60}/>
               );
          }
          return null;
     }

     return (
          <div>
               <h2>Contador: {contador}</h2>
               <button onClick={contar}>Acrescentar</button> <br/>
               <button onClick={modificarAnde}>{(ande) ? "Apagar Ande" : "Mostrar Ande"}</button><br/>
               {
                    renderizarAnde()
               }
          </div>
     );
}

export default Contador; 