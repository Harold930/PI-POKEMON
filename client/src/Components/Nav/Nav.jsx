import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPokemonByName } from '../../Redux/action';
import nav from './nav.module.css'

export default function Nav(){
    
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setName(e.target.value);
    }
    function handleCLick(e){
        e.preventDefault();
        dispatch(getPokemonByName(name.toLowerCase()));
        setName('')
    }
    return(
        <nav className = {nav.nav}>
           <NavLink to = '/home/pokemons/create'>
            <h1>CREATE POKEMON</h1>
           </NavLink> 
           <NavLink to = '/home'>
            <h1>HOME</h1>
           </NavLink>
           <div>
                <button onClick={handleCLick}><NavLink to={`/home/pokemons/search?name=${name}`}>Unalupita</NavLink></button>
                <input type="text" placeholder='Search by name' value={name} onChange={handleChange}/>
           </div>
        </nav>
    )
}
