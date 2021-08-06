import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../../Redux/action';

export default function Nav(){
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
            <button onClick={handleCLick}>Unalupita</button>
            <input type="text" placeholder='Search by name' value={name} onChange={handleChange}/>
        </nav>
    )
}
