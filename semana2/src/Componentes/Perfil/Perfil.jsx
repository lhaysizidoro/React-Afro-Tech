import React from "react"
import'./Perfil.css';


function Perfil(props){
    
    return(  
        <div id="profile">
        <div id="fotoperfil">
            <img id="ftperfil" src={props.imagem}  alt="imagem"/> 
    
        </div>

        <div id="nomeuser">
            
            <p>Olá, <br/>
                
                <span id="nomeprincipal">{props.nome}</span> 
                <br/>
                @{props.nome}</p>
        
        </div>
     
           </div>
    )
    }

export default Perfil;