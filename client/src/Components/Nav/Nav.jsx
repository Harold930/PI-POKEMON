import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
        setName('')
    }
    return(
        <nav>
           <NavLink to = '/pokemons/create'>
            <h1>CREATE POKEMON</h1>
           </NavLink> 
           <NavLink to = '/home'>
            <h1>HOME</h1>
           </NavLink>
            <button onClick={handleCLick}><NavLink to={`/pokemons/search?name=${name}`}>Unalupita</NavLink></button>
            <input type="text" placeholder='Search by name' value={name} onChange={handleChange}/>
        </nav>
    )
}
