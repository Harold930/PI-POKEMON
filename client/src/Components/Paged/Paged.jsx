import React from 'react';

export default function Paged ({pokemons, pokemonsPerPage, paged}){

    const arrayNumPg = [];

    for(let i = 1; i <= Math.ceil(pokemons/pokemonsPerPage); i++){
        arrayNumPg.push(i);
    }

    return(
        <nav>
            <ul>
                {
                   arrayNumPg && arrayNumPg.map((num,i) => (
                        <li key={i}>
                            <button key={i} onClick={()=>paged(num)}>{num}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}