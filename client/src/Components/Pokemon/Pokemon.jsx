import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import putinzard from '../../img/putinzard.jpg'

export default function Pokemon(props){
console.log(putinzard)
    return (
        <div>
            <h3>{props.pokemon.name}</h3>
            <Link to = {`/pokemons/${props.pokemon.id}`} > 
                <img src={props.pokemon.sprite ? props.pokemon.sprite : `${putinzard}`}  width="80" height="100" alt="Dont found" />
            </Link>
            <div>
                {props.pokemon.types.map((type,i) => (
                    <li key = {i}>{type}</li>
                ))}
            </div>
        </div>
    )

}