import './Questao01B.modules.css'

export function Questao01B() {

     const disciplinas = [
          "Desenvolvimento de Software para Web",
          "Eletrônica Fundamental I",
          "Robótica I",
          "Sistemas Embarcados",
          "Técnicas de Programação para Sistemas Embarcados II"
     ];

     return (
               <table id="table01B" className="questao01B">
                    <tbody>
                         <tr>
                              <td><b>Disciplinas</b></td>
                         </tr>
                         {disciplinas.map(disciplina => <tr key={disciplina}><td>{disciplina}</td></tr>)}
                    </tbody>
               </table>
     );
}