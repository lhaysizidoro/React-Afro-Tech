import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Perfil from './Components/Perfil/Perfil';
import robin from './robin.jpeg';
import Book from './Components/Book/Book';
import livro1 from './livro1.jpeg';
import livro2 from './livro2.jpeg';
import livro3 from './livro3.jpeg';
import livro4 from './livro4.jpeg';
import livro5 from './livro5.jpeg';
import livro6 from './livro6.jpeg';
import livro7 from './livro7.png';
import livro8 from './livro8.png';
import Review from './Components/Review/Review';
import Botao from "./Components/Botao/Botao";
import {GiSpellBook} from "react-icons/gi";


function App() {
  return (
    <div className="App">

      <Header 
      titulo="Leiturinhas." />
      


      <Perfil 
      imagem={robin}
      nome="Nico Robin"/>

     <div className='menu'>
      <Botao nome="Lidos"/>
      <Botao nome="Desejados"/>
      <Botao nome="Favoritos"/>
      <Botao nome="Avaliados"/>
      <Botao nome="Resenhas"/>
     

    
    
     </div>
      <br></br>
      <br></br>
      <h3> Avaliados</h3>
      
     
     <div className='estante'>
      <Book imagem={livro1}/>

      <Book imagem={livro2}/>
      <Book imagem={livro3}/>
      <Book imagem={livro4}/>
      <Book imagem={livro5}/>
      <Book imagem={livro6}/>
      <Book imagem={livro7}/>
      <Book imagem={livro8}/>
      

      </div>
      <h3> Resenhas</h3>
      <div className='resenha'>

      
      
      <Review
      imagem={livro1}
      titulo="Um passeio incrível através de gerações"
      texto="Sem palavras para descrever todas as emoções que essa leitura proporcionou. A narrativa é rica em simbolismo e oferece uma reflexão sobre a natureza humana e a solidão que permeia a existência de cada indivíduo. "/>
     
     <br></br>
     

      </div>
      
      
    
      </div>
      




    
    
  );
}

export default App;