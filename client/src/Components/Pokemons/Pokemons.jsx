import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon'

export default function Pokemons(props){

    return (
        <div>
        {props.pokemons.map((pokemon,i) => (
            <Pokemon pokemon={pokemon} key = {i}/>
        ))}
    </div>
    )

}