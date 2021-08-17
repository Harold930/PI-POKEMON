import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import putinzard from '../../img/putinzard.jpg';
import pokemon from './pokemon.module.css';

export default function Pokemon(props){

    return (
        <div className={pokemon.box}>
            <h3>{props.pokemon.name}</h3>
            <Link to = {`/home/pokemons/${props.pokemon.id}`} > 
                <img src={props.pokemon.sprite ? props.pokemon.sprite : `${putinzard}`}  width="180" height="180" alt="Dont found" />
            </Link>
            <div className={pokemon.font}>
                {props.pokemon.types.map((type,i) => (
                    <li key = {i}>{type}</li>
                ))}
            </div>
        </div>
    )
}