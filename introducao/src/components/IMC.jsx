import React from "react"

function imc({massa, altura}) {

     const valorImc = (massa/(altura**2)).toFixed(2);

     let resultado = "Obesidade III (mórbida)";

     if(valorImc < 17) {
          resultado = "Muito abaixo do peso";
     }
     else if(valorImc < 18.49) {
          resultado = "Abaixo do peso";
     }
     else if(valorImc < 24.99) {
          resultado = "Peso normal";
     }
     else if(valorImc < 29.99) {
          resultado = "Acima do peso";
     }
     else if(valorImc < 34.99) {
          resultado = "Obesidade I";
     }
     else if(valorImc < 39.99) {
          resultado = "Obesidade II (severa)";
     }

     return (
          <>
          <h4>IMC é {valorImc}</h4>
          <p>{resultado}</p>
          </>
     );
}

export default imc; 