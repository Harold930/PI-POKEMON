import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonById, getPokemonByName } from '../../Redux/action';
import putinzard from '../../img/putinzard.jpg';
import detail from './detail.module.css';

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
        <div className={detail.contain}>
            <div className={detail.detail}>
                    <h2 className={detail.name_id}>{pokemonById.name}</h2>
                    <h3 className={detail.name_id}>#{pokemonById.id}</h3>
                <div className={detail.img_types}>
                            <div className={detail.types}>
                                {
                                    pokemonById.types && pokemonById.types.map((pokemon,i) => (
                                        <li key = {i}>{pokemon}</li>
                                        ))
                                    }
                                </div>
                            
                            <img src={pokemonById.sprite ? pokemonById.sprite : `${putinzard}`} width="180" height="150" alt='Dont found' />
                    </div>
                    <div className={detail.stats}>
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
    
            </div>
    )
}   else {
        return (
            <div className={detail.contain}>
                <h1>
                    Pokemon dont found 
                </h1>
            </div>
        )
    }
} 