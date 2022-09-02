import React from 'react';
import '../assets/css/movies.css'

function Movies(props){

    return(
        <div className="Movies">

           <h2>{props.title}</h2>
           <p>Nota do filme: {props.score} </p>
           <p>Este filme é: {props.score > 5 ? 'Bom' : 'Ruim'} </p>
           {/* <ul>
            { props.genres.map((genre, id) => {    NÃO FUNCIONA MAS ESSA É A FORMA DE ITERAR SOBRE
                <li key={genre + id}>filme</li>         UM ARRAY
            })}
           </ul> */}
        </div>
    )
}

export default Movies;