import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import {Questao01} from './components/questao01/Questao01';
import {Questao01A} from './components/questao01/Questao01A';
import {Questao01B} from './components/questao01/Questao01B';
import {Questao02} from './components/questao02/Questao02';
import {Questao03} from './components/questao03/Questao03';
import {Questao04} from './components/questao04/Questao04';
import {Questao05} from './components/questao05/Questao05';

function renderizarQuestao01() {
     return (
          <div className="App">
               <Questao01>
                    <Questao01A/>
                    <Questao01B/>
               </Questao01>
          </div>
     );
}

function renderizarQuestao02() {
     return (
          <div className="App">
               <Questao02/>
          </div>
     );
}

function renderizarQuestao03() {
     return (
          <div className="App">
               <Questao03/>
          </div>
     );
}

function renderizarQuestao04() {
     return (
          <div className="App">
               <Questao04/>
          </div>
     );
}

function renderizarQuestao05() {
     return (
          <div className="App">
               <Questao05/>
          </div>
     );
}

export function App() {
     let questao = Number(prompt("Qual questão quer ver?"));
     switch(questao) {
          case 1: return renderizarQuestao01();
          case 2: return renderizarQuestao02();
          case 3: return renderizarQuestao03();
          case 4: return renderizarQuestao04();
          case 5: return renderizarQuestao05();
     }
}