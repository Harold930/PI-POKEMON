import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons,getTypes } from '../../Redux/action';
import Pokemons from '../Pokemons/Pokemons';
import FilterAndSort from '../FilterAndSort/FilterAndSort';
import Paged from '../Paged/Paged';

export default function Home(){
    
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);
    
    const [currentPage,setCurrentPage] = useState(1);
    const [pokemonsPerPage,setPokemonsPerPage] = useState(9);
    const positionLastPokemon = currentPage * pokemonsPerPage;
    const positionFirstPokemon = positionLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(positionFirstPokemon, positionLastPokemon);

    function paged(numPg){
        setCurrentPage(numPg);
    }

    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[]);

    return (
    <div>
        <FilterAndSort types={types}/>
        <Pokemons pokemons={currentPokemons}/>
        <Paged
         pokemons={pokemons.length}
         pokemonsPerPage={pokemonsPerPage}
         paged={paged}
        />
    </div>
    )

}