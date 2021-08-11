import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Pokemon(props){

    return (
        <div>
            <h3>{props.pokemon.name}</h3>
            <Link to = {`/pokemons/${props.pokemon.id}`} > 
                <img src={props.pokemon.sprite} alt="Dont found" />
            </Link>
            <div>
                {props.pokemon.types.map((type,i) => (
                    <li key = {i}>{type}</li>
                ))}
            </div>
        </div>
    )

}