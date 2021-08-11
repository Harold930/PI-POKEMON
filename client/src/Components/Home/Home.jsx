import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons,getTypes,sortByAttack, sortAlphabetically } from '../../Redux/action';
import Pokemons from '../Pokemons/Pokemons';
import Filter from '../Filter/Filter';
import Paged from '../Paged/Paged';

export default function Home(){
    
    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);
    
    const [sort, setSort] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [pokemonsPerPage,setPokemonsPerPage] = useState(9);
    const positionLastPokemon = currentPage * pokemonsPerPage;
    const positionFirstPokemon = positionLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(positionFirstPokemon, positionLastPokemon);


    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getTypes());
    },[]);

    function paged(numPg){
        setCurrentPage(numPg);
    }

    function handleSortByAttack(e){
        e.preventDefault();
        dispatch(sortByAttack(e.target.value));
        setCurrentPage(1);
        setSort(`Sorted ${e.target.value}`);
    }

    function handleSortByAlphabetically(e){
        e.preventDefault();
        dispatch(sortAlphabetically(e.target.value))
        setCurrentPage(1);
        setSort(`Sorted ${e.target.value}`);
    }

    return (
    <div>
        <Filter types={types} />
        <span>Sort by attack:</span>
        <select onChange={(e) => handleSortByAttack(e)}> 
            <option value="desc">Higher to lower</option>
            <option value="asc">Lower to higher</option>
        </select>
        <span>Sort alphabetically:</span>
        <select onChange={handleSortByAlphabetically}> 
            <option value="asc_name">A-Z</option>
            <option value="desc_name">Z-A</option>
        </select>
        <Pokemons pokemons={currentPokemons}/>
        <Paged
         pokemons={pokemons.length}
         pokemonsPerPage={pokemonsPerPage}
         paged={paged}
        />
    </div>
    )

}