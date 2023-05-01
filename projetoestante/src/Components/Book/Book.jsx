import React from "react";
import './Book.css';
import Rating from "react-rating";
import starempty from "/Users/lhays/Desktop/React Afro Tech/projetoestante/src/starempty.png";
import starfull from "/Users/lhays/Desktop/React Afro Tech/projetoestante/src/starfull.png";



function Book(props){
    return(
        <div id="bookstar">
           
                <img id="capalivro" src={props.imagem} alt="imagem"/> 


                <Rating
                    emptySymbol={<img id="starem" src={starempty} className="icon" />}
                    fullSymbol={<img id="starfu" src={starfull} className="icon" />}
                />

            
                    
                   
            
            
            </div>
       
    )
}

export default Book;