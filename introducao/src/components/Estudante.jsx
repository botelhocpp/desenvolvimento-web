import React from "react";

const estudante = ({nome, curso, universidade}) => {
     return (
          <div>
               Nome: {nome} <br/>
               Curso: {curso} <br/>
               Universidade: {universidade} <br/>
          </div>
     );
};

export default estudante;