import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPokemonByName } from '../../Redux/action';
import nav from './nav.module.css';
import icono from '../../img/lupa.webp';

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
           <NavLink to = '/home/pokemons/create'  style={{ textDecoration: 'none' }}>
            <h1 className={nav.font}>CREATE POKEMON</h1>
           </NavLink> 
           <NavLink to = '/home'  style={{ textDecoration: 'none' }}>
            <h1 className={nav.font} >HOME</h1>
           </NavLink>
           <div>
                <button onClick={handleCLick}><NavLink to={`/home/pokemons/search?name=${name}`}  style={{ textDecoration: 'none' }}><img src={icono} className={nav.button}/></NavLink></button>
                <input type="text" placeholder='Search by name' value={name} onChange={handleChange} className={nav.input}/>
           </div>
        </nav>
    )
}
