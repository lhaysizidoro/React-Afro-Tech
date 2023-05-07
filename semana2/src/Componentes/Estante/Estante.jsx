import React from "react";
import './Estante.css';
import livro1 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro1.jpeg';
import livro2 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro2.jpeg';
import livro3 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro3.jpeg';
import livro4 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro4.jpeg';
import livro5 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro5.jpeg';
import livro6 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro6.jpeg';
import livro7 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro7.png';
import livro8 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro8.png';
import Book from '/Users/lhays/Desktop/React Afro Tech/semana2/src/Componentes/Book/Book';

function Estante(props){
    return(
        <div className="estant">
        <Book imagem={livro1} />
        <Book imagem={livro2} />
        <Book imagem={livro3} />
        <Book imagem={livro4} />
        <Book imagem={livro5} />
        <Book imagem={livro6} />
        <Book imagem={livro7} />
        <Book imagem={livro8} />
        </div>



    )
}

export default Estante;