import axios from 'axios';
import { useEffect, useState } from 'react';

export function Questao05() {

     const [paises, setPaises] = useState([]);
     const [paisBase, setPaisBase] = useState("africa");
     const [paisChave, setPaisChave] = useState({ name: "", population: 0 });

     const baseURI = "https://restcountries.com/v2/region/africa?fields=name,population";

     useEffect(() => {
          axios.get(`https://restcountries.com/v2/region/${paisBase}?fields=name,population`)
               .then(resposta => setPaises(resposta.data))
               .catch(erro => alert(erro));
     }, [paisBase])

     function paraAmericas() {
          setPaisBase("americas");
          setPaisChave(paises.reduce((paisMaisPopuloso, pais) => {
               return (paisMaisPopuloso.population < pais.population) ? pais : paisMaisPopuloso
          }, { name: "", population: 0 }))
     }

     function paraAfrica() {
          setPaisBase("africa");
          setPaisChave(paises.reduce((paisMaisPopuloso, pais) => {
               return (paisMaisPopuloso.population < pais.population) ? pais : paisMaisPopuloso
          }, { name: "", population: 0 }))
     }

     function paraAsia() {
          setPaisBase("asia");
          setPaisChave(paises.reduce((paisMenosPopuloso, pais) => {
               return (paisMenosPopuloso.population > pais.population) ? pais : paisMenosPopuloso
          }))
     }

     return (
          <div className="container-sm" style={{ width: 400 }}>
               <h1>Questão 05</h1>
               <a>Continente do País: {paisBase.charAt(0).toUpperCase() + paisBase.slice(1)} </a><br/>
               <a>Nome País: {(paisChave != undefined) ? paisChave.name : ""}</a><br/>
               <a>População do País: {(paisChave != undefined) ? paisChave.population : ""}</a><br/>  

               <button onClick={paraAfrica} className="btn btn-outline-primary ms-3 mt-3" >Maior População da Africa</button>
               <button onClick={paraAmericas} className="btn btn-outline-secondary ms-3 mt-3">Maior População das Americas</button>
               <button onClick={paraAsia} className="btn btn-outline-success ms-3 mt-3" >Menor População da Asia</button>
          </div>
     );
}