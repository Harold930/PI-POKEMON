import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByPokemons, filterByType, sortAlphabetically, sortByAttack } from '../../Redux/action';

export default function FilterAndSort({types}){
    
    const dispatch = useDispatch();

    function handleFilterByType(e){
        dispatch(filterByType(e.target.value))
    }

    function handleFilterPokemons(e){
        dispatch(filterByPokemons(e.target.value))
    }

    function handleSortByAttack(e){
        dispatch(sortByAttack(e.target.value))
    }

    function handleSortByAlphabetically(e){
        dispatch(sortAlphabetically(e.target.value))
    }

return (
        <div>
        <span>Pokemons:</span>
        <select onChange={handleFilterPokemons}>
            <option value="all">All</option>
            <option value="create">Created</option>
            <option value="from_api">From API</option>
        </select>
        <span>Filter by type:</span>
        <select onChange={(e) => handleFilterByType(e)}>
            {
                types?.map((type,i) => (
                    <option value={type.name.toLowerCase()} key ={i}>{type.name.toUpperCase()}</option>
                ))
            }
        </select>
        <span>Sort by attack:</span>
        <select onChange={(e) => handleSortByAttack(e)}> 
            <option value="desc">Higher to lower</option>
            <option value="asc">Lower to higher</option>
        </select>
        <span>Sort alphabetically:</span>
        <select onChange={handleSortByAlphabetically}> 
            <option value="desc">A-Z</option>
            <option value="asc">Z-A</option>
        </select>
        </div>
)
}