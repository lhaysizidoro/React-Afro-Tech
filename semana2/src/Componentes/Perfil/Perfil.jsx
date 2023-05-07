import React, { useState, useEffect } from "react"
import'./Perfil.css';







function Perfil(props){
    const [contagem, setContagem] = useState(0)
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
     
           </div>
    )
    }

export default Perfil;