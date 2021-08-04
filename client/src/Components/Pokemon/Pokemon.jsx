import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Pokemon(props){

    return (
        <div>
            <h3>{props.pokemon.name}</h3>
            <img src={props.pokemon.sprite} alt="Dont found" />
            <div>
                {props.pokemon.types.map((pokemon,i) => (
                    <li key = {i}>{pokemon}</li>
                    ))}
            </div>
            <Link to = {`/detail/${props.pokemon.id}`} >MORE INFORMATION</Link>
        </div>
    )

}