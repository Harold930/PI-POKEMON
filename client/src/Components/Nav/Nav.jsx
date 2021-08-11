import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../../Redux/action';

export default function Nav({match}){
    // console.log(match.name)
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setName(e.target.value);
    }
    function handleCLick(e){
        e.preventDefault();
        dispatch(getPokemonByName(name));
    }
    return(
        <nav>
           <Link to = '/pokemons/create'>
            <h1>CREATE POKEMON</h1>
           </Link> 
           <Link to = '/home'>
            <h1>HOME</h1>
           </Link>
            <button onClick={handleCLick}><Link to={`/pokemons/search?name=${name}`}>Unalupita</Link></button>
            <input type="text" placeholder='Search by name' value={name} onChange={handleChange}/>
        </nav>
    )
}
