import React from "react";
import Review from "../../Componentes/Review/Review";
import livro1 from '/Users/lhays/Desktop/React Afro Tech/semana2/src/assets/livro1.jpeg';



function Resenhas(props) {
    return (
        <Review
        imagem={livro1}
        titulo="Um passeio incrível através de gerações"
        texto="Sem palavras para descrever todas as emoções que essa leitura proporcionou. A narrativa é rica em simbolismo e oferece uma reflexão sobre a natureza humana e a solidão que permeia a existência de cada indivíduo. ">
        </Review>
       
    )
}

export default Resenhas;