import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonById, getPokemonByName } from '../../Redux/action';
import putinzard from '../../img/putinzard.jpg'

export default function Detail({match}){
    console.log(match.params.id);

    const dispatch = useDispatch()
    const pokemonById = useSelector(state => state.pokemonById_Name);
    

    useEffect(() => {
        if(match.params.id){
            dispatch(getPokemonById(match.params.id));
        }
    },[dispatch]);

    

    console.log(pokemonById)
    if(pokemonById.msg !== 'Pokemon dont found'){
    return(
            <div>
                <h2>{pokemonById.name}</h2>
                <h3>#{pokemonById.id}</h3>
                <img src={pokemonById.sprite ? pokemonById.sprite : `${putinzard}`} width="80" height="100" alt='Dont found' />
               <div>
                    {
                        pokemonById.types && pokemonById.types.map((pokemon,i) => (
                            <li key = {i}>{pokemon}</li>
                        ))
                    }
                </div>
               <div>  
                   <span>
                       Hp: {pokemonById.hp}
                   </span>
                   <span>
                       Attack: {pokemonById.attack}
                   </span>
                   <span>
                       Defense: {pokemonById.defense}
                   </span>
                   <span>
                       Speed: {pokemonById.speed}
                   </span>
                   <span>
                       Height: {pokemonById.height}
                   </span>
                   <span>
                       Weight: {pokemonById.weight}
                   </span>
                 
               </div>
            </div>
    )
}   else {
        return (
            <div>
                <h1>
                    Pokemon dont found 
                </h1>
            </div>
        )
    }
} 