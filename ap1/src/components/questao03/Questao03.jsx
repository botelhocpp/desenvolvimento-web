import axios from 'axios';
import {useEffect, useState} from 'react';

export function Questao03() {

     const [result, setResult] = useState([]);
     const [offset, setOffset] = useState(0);
     const baseURI = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

     useEffect(() => {
          axios.get(baseURI + offset)
          .then(resposta => setResult(resposta.data.results))
          .catch(erro => alert(erro));
     }, [offset])

     function pokemonsAnteriores() {
          if(offset !== 0) {
               setOffset(Number(offset) - 10);
          }
     }

     function pokemonsProximos() {
          setOffset(Number(offset) + 10);
     }

     return (
          <div className="container-sm" style={{width:400}}>
               <ul>
                    {result.map(pokemon => <li>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>)}
               </ul>
               <button onClick={pokemonsAnteriores} className="btn btn-outline-primary ms-3 mt-3" id="dividir">&lt;</button>
               <a>{(offset + 10)/10}</a>
               <button onClick={pokemonsProximos} className="btn btn-outline-primary ms-3 mt-3" id="dividir">&gt;</button>
          </div>
     );
}