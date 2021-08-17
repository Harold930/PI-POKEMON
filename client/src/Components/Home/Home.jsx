import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons,getTypes,sortByAttack, sortAlphabetically, filterByPokemons,filterByType } from '../../Redux/action';
import Pokemons from '../Pokemons/Pokemons';
import Paged from '../Paged/Paged';
import home from './home.module.css'
// import './home.module.css'

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

    function handleFilterByType(e){
        dispatch(filterByType(e.target.value));
    }

    function handleFilterPokemons(e){
        dispatch(filterByPokemons(e.target.value));
    }

    return (
    <div >
        <div className={home.filterSort}>
            <div className={home.input}>
                <span>Pokemons:</span>
                <select onChange={handleFilterPokemons} >
                    <option value="all" >All</option>
                    <option value="create" >Created</option>
                    <option value="from_api" >From API</option>
                </select>
            </div>
            <div className={home.input}>
                <span >Filter by type:</span>
                <select onChange={(e) => handleFilterByType(e)} >
                    {
                        types?.map((type,i) => (
                            <option value={type.name.toLowerCase()} key ={i}>{type.name.toUpperCase()}</option>
                            ))
                        }
                </select>
            </div >
            <div className={home.input}>
                <span>Sort by attack:</span>
                <select onChange={(e) => handleSortByAttack(e)} > 
                    <option value="desc">Higher to lower</option>
                    <option value="asc">Lower to higher</option>
                </select>
            </div>
            <div className={home.input}>
                <span>Sort alphabetically:</span>
                <select onChange={handleSortByAlphabetically}> 
                    <option value="asc_name">A-Z</option>
                    <option value="desc_name">Z-A</option>
                </select>
            </div>
        </div>
        <Pokemons pokemons={currentPokemons}/>
            <Paged
            pokemons={pokemons.length}
            pokemonsPerPage={pokemonsPerPage}
            paged={paged}
            />
    </div>
    )

}