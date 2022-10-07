import OlaMundo from "./components/OlaMundo"
import Estudante from "./components/Estudante"
import {Vecna as V, Eleven} from "./components/StrangerThings"
import Calculadora from "./components/Calculadora"
import IMC from "./components/IMC"

import './App.css';
import Pai from "./components/paifilho/Pai"
import Contador from "./components/estados/Contador"
import VotaCidades from "./components/estados/VotaCidades"
/*
function App() {
  return (
    <div className="App">

      <h1>Estudante:</h1>

      <Estudante
        nome="Pedro Boleto"
        curso ="Engenharia de CORNO"
        universidade = "UFC Quixas"
      />

      <V/>

      <Eleven/>

      <Calculadora op="SOMA" x={4} y={2} />
      <Calculadora op="SUBTRACAO" x={4} y={2} />
      <Calculadora op="MULTIPLICACAO" x={4} y={2} />
      <Calculadora op="DIVISAO" x={4} y={2} />

      <IMC altura={1.77} massa={70}/>

    </div>
  );
}
*/


function App() {
  return (
    <div className="App">
      <Pai/>
      <Contador/>
      <VotaCidades/>
    </div>
  );
}

export default App;
