import React from "react";
import './Header.css'
import {GiSpellBook} from "react-icons/gi";




function Header(props){
  return (
    <header>
      <GiSpellBook/>
      {props.titulo}
     
      
    </header>
  )
  }



export default Header;