import {useState, useEffect} from 'react';

export function Questao02() {

     const [resultado, setResultado] = useState("");

     function somarOperandos() {
          setResultado(Number(document.getElementById("operando01").value) + Number(document.getElementById("operando02").value));
     }

     function subtrairOperandos() {
          setResultado(Number(document.getElementById("operando01").value) - Number(document.getElementById("operando02").value));
     }

     function multiplicarOperandos() {
          setResultado(Number(document.getElementById("operando01").value) * Number(document.getElementById("operando02").value));
     }

     function dividirOperandos() {
          if(Number(document.getElementById("operando02").value) == 0 || Number(document.getElementById("operando02").value) == "") {
               alert("O segundo operando não deve ser zero nem vazio!");
          }
          else {
               setResultado(Number(document.getElementById("operando01").value) / Number(document.getElementById("operando02").value));
          }
     }

     function resetarTudo() {
          setResultado("");
          document.getElementById("operando01").value = "";
          document.getElementById("operando02").value = "";
     }

     return (
          <div className="container-sm" style={{width:400}}>
                    <h1>Questão 02</h1>
                    <input className="form-control mt-3" type="text" id="operando01" placeholder="Insira o primeiro operando" />
                    <input className="form-control mt-3" type="text" id="operando02" placeholder="Insira o segundo operando" />
                    <button onClick={somarOperandos} className="btn btn-outline-primary mt-3" id="somar">+</button>
                    <button onClick={subtrairOperandos} className="btn btn-outline-primary ms-3 mt-3" id="subtrair">-</button>
                    <button onClick={multiplicarOperandos} className="btn btn-outline-primary ms-3 mt-3" id="multiplicar">*</button>
                    <button onClick={dividirOperandos} className="btn btn-outline-primary ms-3 mt-3" id="dividir">/</button>
                    <button onClick={resetarTudo} className="btn btn-outline-danger ms-3 mt-3" id="dividir">Limpar</button>
                    <input placeholder="Preencha os operandos para obter o resultado!" className="form-control mt-3" type="text" id="resultado" value={resultado} readOnly />
          </div>
     );
}