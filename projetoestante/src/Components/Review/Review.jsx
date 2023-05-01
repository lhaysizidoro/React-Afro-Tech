import React from "react";
import "./Review.css";
import Book from "../Book/Book";





function Review(props){
    return(
    
        <div id="perfil-post">
            <Book imagem={props.imagem}/>

            <div id="texto">
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
            </div>
        

        </div>
    )
}

        




     


export default Review;