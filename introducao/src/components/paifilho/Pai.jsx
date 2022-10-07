import React from "react";
import Filho from "./Filho";

const Pai = () => {

     const callbackPai = (msg) => {
          alert("Oi meu filho, " + msg + ".");
     };

     return (
          <div>
               <Filho nomePai="Pedim" clique={callbackPai} />
          </div>
     );
}

export default Pai; 