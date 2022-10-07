import React from "react";

const Filho = ({nomePai, clique}) => {
     return (
          <div>
               <button onClick={() => clique("VSF")}>
                    Oi, papai {nomePai}!
               </button>
          </div>
     );
}

export default Filho; 