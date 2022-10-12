import axios from 'axios';
import {useEffect, useState} from 'react';

export function Questao04() {

     const [paises, setPaises] = useState([]);

     const baseURI = "https://restcountries.com/v2/region/africa?fields=name,population";

     useEffect(() => {
          axios.get(baseURI)
          .then(resposta => setPaises(resposta.data))
          .catch(erro => alert(erro));
     }, [])

     return (
          <div className="container-sm">
               <h1>Questão 04</h1>
               {
                    paises.reduce((paisMaisPopuloso, pais) => {
                         return (paisMaisPopuloso.population < pais.population) ? pais : paisMaisPopuloso
                    }, {name:"",population:0}).name
               }
          </div>
     );
}