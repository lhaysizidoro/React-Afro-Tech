import React from "react";
import "./Menu.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "../../Paginas/Home/Home";
import Avaliados from "../../Paginas/Avaliados/Avaliados";
import Desejados from "../../Paginas/Desejados/Desejados";
import Lidos from "../../Paginas/Lidos/Lidos";
import Resenhas from "../../Paginas/Resenhas/Resenhas";


function Menu(){
    return(
        <nav>
       
            
            <ul>
            <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Lidos">Lidos</Link>
              </li>
              <li>
                <Link to="/Avaliados">Avaliados</Link>
              </li>
              <li>
                <Link to="/Desejados">Desejados</Link>
              </li>
              <li>
                <Link to="/Resenhas">Resenhas</Link>
              </li>
            </ul>

        </nav>
          
           
            
  
    )
}
export default Menu; 