import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../../Redux/action';
import Pokemons from '../Pokemons/Pokemons';

export default function Home(){
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);

    useEffect(()=>{
        dispatch(getAllPokemons())
    },[]);

    return (
        <div>
            <h2>SOY HOME</h2>
        <Pokemons pokemons={pokemons}/>
        </div>
    )

}