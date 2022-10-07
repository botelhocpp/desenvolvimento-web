import Votacao from './components/Votacao';
import Cidade from './components/Cidade';

function App() {
  return (
    <div className="App">
      <h1>Responda a Pergunta:</h1>
      <h3>"A melhor cidade do Ceará para se morar é ___________".</h3>
      <h4>Alternativas:</h4>
      <Votacao>
        a) <Cidade nome="Quixadá" />
        <br/>
        b) <Cidade nome="Fortaleza"/>
        <br/>
        c) <Cidade nome="Boa Viagem" />
        <br/>
        d) <Cidade nome="Jericoacoara"/>
        <br/>
        e) <Cidade nome="Quixeramobim" mostrarQuantidade />
        <br/>
        <br/>
      </Votacao>
    </div>
  );
}

export default App;
