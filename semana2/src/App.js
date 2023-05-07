import React, { useState, useContext } from 'react';
import './App.css';
import robin from './assets/robin.jpeg';
import Perfil from './Componentes/Perfil/Perfil';
import Header from './Componentes/Header/Header';
import Review from './Componentes/Review/Review';
import livro1 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro1.jpeg';
import Estante from './Componentes/Estante/Estante';
import Avaliados from './Paginas/Avaliados/Avaliados';
import Home from './Paginas/Home/Home';
import Resenhas from './Paginas/Resenhas/Resenhas';
import Lidos from './Paginas/Lidos/Lidos';
import Desejados from './Paginas/Desejados/Desejados';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Menu from './Componentes/Menu/Menu';
import ContagemContext from './ContagemContext/ContagemContext';
import {GiSpellBook} from "react-icons/gi";








function App() {
    const [contagem, setContagem] = useState(0)
  return (
  
  

    <div className="App">
    
      <Router>

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Lidos' element={<Lidos />} />
          <Route path='/Desejados' element={<Desejados />} />
          <Route path='/Avaliados' element={<Avaliados />} />
          <Route path='/Resenhas' element={<Resenhas />} />
        </Routes>


        <div className='topo'>
          <Header id="headerr"
            titulo="Leiturinhas."
            icone={GiSpellBook} />
              <Menu />

              
              
    

    
          <Perfil id="Perfil"
            imagem={robin}
            nome="Nico Robin"></Perfil>
            
            <div className='conte'>
            <ContagemContext.Provider value={{contagem, setContagem}}>
        
            <span><h3>Livros Lidos:</h3>{contagem}</span>
        
      </ContagemContext.Provider>
      </div> 
            
            
            
            
            
          
        
        </div>
        
    
        <br></br>
        <br></br>

        <div className='grid'>
          <h1>Minha biblioteca</h1>
        <div className='estante'>

        <ContagemContext.Provider value={{contagem, setContagem}}>
         
             <Estante />
          </ContagemContext.Provider>
            
           

          </div>

          <div className='esquerda'>
       
          </div>

          <div className='direita'>
      

           


            
          </div>






          <div className='resenha'>


          <ContagemContext.Provider value={{contagem, setContagem}}>
            <Review
              imagem={livro1}
              titulo="Um passeio incrível através de gerações"
              texto="Sem palavras para descrever todas as emoções que essa leitura proporcionou. A narrativa é rica em simbolismo e oferece uma reflexão sobre a natureza humana e a solidão que permeia a existência de cada indivíduo. " />
              </ContagemContext.Provider>
              
          

          </div>
        </div>

    
       
      
    </Router>
    </div>
  );

}

export default App;