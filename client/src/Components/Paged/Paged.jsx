import React from 'react';
import stylePaged from './paged.module.css';

export default function Paged ({pokemons, pokemonsPerPage, paged}){

    const arrayNumPg = [];

    for(let i = 1; i <= Math.ceil(pokemons/pokemonsPerPage); i++){
        arrayNumPg.push(i);
    }

    return(
        <div className={stylePaged.paged}>
                {
                   arrayNumPg && arrayNumPg.map((num,i) => (
                        <span key={i}>
                            <button key={i} onClick={()=>paged(num)} className={stylePaged.button}>{num}</button>
                        </span>
                    ))
                }
        </div>
    )
}