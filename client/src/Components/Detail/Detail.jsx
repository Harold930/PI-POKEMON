import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonById } from '../../Redux/action';

export default function Detail({match}){
// console.log(match.params.id);

const dispatch = useDispatch()
    const pokemonById = useSelector(state => state.pokemonById);

    useEffect(() => {
        dispatch(getPokemonById(match.params.id));
    },[]);

    

    console.log(pokemonById)

    return(

            <div>
                <h2>{pokemonById.name}</h2>
                <h3>#{pokemonById.id}</h3>
                <img src={pokemonById.sprite} alt='Dont found' />
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
}