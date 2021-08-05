import React from 'react';

export default function FilterAndSort({types}){

return (
        <div>
        <span>Pokemons:</span>
        <select>
            <option value="all">All</option>
            <option value="create">Created</option>
            <option value="from_api">From API</option>
        </select>
        <span>Filter by type:</span>
        <select>
            {
                types?.map((type,i) => (
                    <option value={type.name.toLowerCase()} key ={i}>{type.name.toUpperCase()}</option>
                ))
            }
        </select>
        <span>Sort by attack:</span>
        <select> 
            <option value="asc">Higher to lower</option>
            <option value="desc">Lower to higher</option>
        </select>
        <span>Sort alphabetically:</span>
        <select> 
            <option value="desc">A-Z</option>
            <option value="asc">Z-A</option>
        </select>
        </div>
)
}