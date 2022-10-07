import React from "react";
import {useState} from "react";

const VotaCidades = ({}) => {

     let [contadorQuixada, setContadorQuixada] = useState(0);
     let [contadorLimoeiro, setContadorLimoeiro] = useState(0);
     let [contadorCrateus, setContadorCrateus] = useState(0);

     const apurarVotos = () => {
          let ganhador = "Empate!";
          if(contadorQuixada > contadorLimoeiro && contadorLimoeiro > contadorCrateus) {
               ganhador = "Quixada";
          }
          alert("Vencedor foi: " + ganhador);
     };

     return (
          <div>
               <div>
                    <h2>Quixadá: {contadorQuixada}</h2>
                    <h2>Limoeiro do Norte: {contadorLimoeiro}</h2>
                    <h2>Crateús: {contadorCrateus}</h2>
               </div>
               <div>
                    <button onClick={() => setContadorQuixada(prev => prev + 1)}>Votar em Quixadá</button>
                    <button onClick={() => setContadorLimoeiro(prev => prev + 1)}>Votar em Limoeiro do Norte</button>
                    <button onClick={() => setContadorCrateus(prev => prev + 1)}>Votar em Crateús</button>
                    <button onClick={apurarVotos}>Apurar Votos!</button>
               </div>
          </div>
     );
}

export default VotaCidades; 