import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
           <Link to = '/pokemons/create'>
            <h1>CREATE POKEMON</h1>
           </Link> 
           <Link to = '/home'>
            <h1>HOME</h1>
           </Link>
            <input type="text" placeholder='Search by name'/>
        </nav>
    )
}