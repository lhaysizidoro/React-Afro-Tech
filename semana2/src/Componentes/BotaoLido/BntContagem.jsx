import React, { useContext, useState } from "react";
import ContagemContext from "../../ContagemContext/ContagemContext";


function BtnContagem(){
    const [leitura, setLeitura] = useState("Marcar como lido");
    const [ativo, setAtivo] = useState(false);
    const { contagem, setContagem } = useContext(ContagemContext)

function handleClick(){
    setContagem(contagem + 1);
    setLeitura("Lido");
    setAtivo(true);
}
      
    return(
        <div className={ativo}>
            <button onClick={handleClick} disabled={ativo}>{leitura}</button>
        </div>
    );
}
export default BtnContagem;