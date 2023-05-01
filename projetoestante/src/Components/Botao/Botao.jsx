import React from "react";
import "./Botao.css";

function Botao(props){
    return(
        <button id="btn">
           <img src={props.icone}/>
           {props.nome}
           
           
        </button>
    );
}
export default Botao;