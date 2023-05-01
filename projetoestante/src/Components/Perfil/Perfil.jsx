import React from "react";
import'./Perfil.css';
//import Botao from "../Botao/Botao";
//import {BsFillBookmarkCheckFill} from "react-icons/bs";


function Perfil(props){
    return(  
        <div id="profile">
        <div id="fotoperfil">
            <img id="ftperfil" src={props.imagem}  alt="imagem"/> 
    
        </div>

        <div id="nomeuser">
            <p>Olá,</p>
            <h1>{props.nome}</h1>
            <p id="arroba">@nicorobin</p>
        </div>


        <div id="cont1">
            <h4> 78 <br/> Lidos</h4>
        </div>

        <div id="cont2">
            <h4> 50 <br/>Vou ler</h4>
        </div>
    </div>
    )
        
}

export default Perfil;