import React from "react"

function calculadora({x, y, op}) {

     let result;

     function soma() {
          return x + y;
     }

     function subtracao() {
          return x - y;
     }

     function multiplicacao() {
          return x * y;
     }

     function divisao() {
          return x / y;
     }

     switch(op) {
          case "SOMA":
               result = "A soma é " + soma();
               break;
          case "SUBTRACAO":
               result = "A diferença é " + subtracao();
               break;
          case "MULTIPLICACAO":
               result = "O produto é " + multiplicacao();
               break;
          case "DIVISAO":
               result = "O quociente é " + divisao();
               break;
     }

     return (
          <div>
               <h4>{result}</h4>
          </div>
     )
}

export default calculadora;