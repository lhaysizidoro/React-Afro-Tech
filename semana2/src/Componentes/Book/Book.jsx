import React, {useState,} from "react";
import './Book.css';
import Rating from "react-rating";
import starempty from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/starempty.png';
import starfull from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/starfull.png';

import BtnContagem from "../BotaoLido/BntContagem";







function Book(props) {
    const [contagem, setContagem] = useState(0)


    return (
        <div className="bookstar">

            <img id="capalivro" src={props.imagem} alt="imagem" />

            <Rating
                emptySymbol={<img id="starem" src={starempty} className="icon" />}
                fullSymbol={<img id="starfu" src={starfull} className="icon" />} />

            <BtnContagem/>





        </div >

    )
}

export default Book;