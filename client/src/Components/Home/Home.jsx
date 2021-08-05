import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons,getTypes } from '../../Redux/action';
import Pokemons from '../Pokemons/Pokemons';
import FilterAndSort from '../FilterAndSort/FilterAndSort';

export default function Home(){
    
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);

    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[]);

    return (
    <div>
        <FilterAndSort types={types}/>
        <Pokemons pokemons={pokemons}/>
    </div>
    )

}