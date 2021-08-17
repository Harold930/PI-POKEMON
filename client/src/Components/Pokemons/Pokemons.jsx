import React, { useEffect } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import pokemons from './pokemons.module.css';

export default function Pokemons(props){

    return (
        <div className={pokemons.pokemons}>
        {props.pokemons.map((pokemon,i) => (
                <Pokemon pokemon={pokemon} key = {i}/>
        ))}
    </div>
    )

}