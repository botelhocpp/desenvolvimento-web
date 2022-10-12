import axios from 'axios';
import { useEffect, useState } from 'react';

export function Questao05() {

     const [paises, setPaises] = useState([]);
     const [paisBase, setPaisBase] = useState("africa");

     let paisChave;

     const baseURI = "https://restcountries.com/v2/region/africa?fields=name,population";

     useEffect(() => {
          axios.get(`https://restcountries.com/v2/region/${paisBase}?fields=name,population`)
               .then(resposta => setPaises(resposta.data))
               .catch(erro => alert(erro));

          if(paisBase === "asia") {
               paisChave = paises.reduce((paisMenosPopuloso, pais) => {
                    return (paisMenosPopuloso.population > pais.population) ? pais : paisMenosPopuloso
               })
          }
          else {
               paisChave = paises.reduce((paisMaisPopuloso, pais) => {
                    return (paisMaisPopuloso.population < pais.population) ? pais : paisMaisPopuloso
               }, { name: "", population: 0 })
          }
     }, [paisBase])

     function paraAmericas() {
          setPaisBase("americas");
     }

     function paraAsia() {
          setPaisBase("asia");
     }

     return (
          <div className="container-sm" style={{ width: 400 }}>

               <a>País: {paisChave.name}</a>
               <a>País: {paisChave.name}</a>
               
               <br/>

               <button onClick={paraAsia} className="btn btn-outline-primary ms-3 mt-3" >Maior População da Africa</button>
               <button onClick={paraAmericas} className="btn btn-outline-secondary ms-3 mt-3">Maior População das Americas</button>
               <button onClick={paraAsia} className="btn btn-outline-success ms-3 mt-3" >Menor População da Asia</button>
          </div>
     );
}