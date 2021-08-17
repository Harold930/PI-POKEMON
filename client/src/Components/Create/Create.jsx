import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getAllPokemons, getTypes } from '../../Redux/action';
import create from './create.module.css';

export default function Create(){
    
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(getTypes());
    },[])

    const [input, setInput] = useState({
        name: '',
        hp:0,
        attack: 0,
        speed: 0,
        defense: 0,
        height: 0,
        weight: 0,
        sprite: '',
        types:[]
    });

    function handleInput(e){
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
    }

    function handleCheckBox(e){

        if(e.target.checked){
           setInput({
               ...input,
               types:[...input.types,e.target.value]
           });
        } else {
            setInput({
                ...input,
                types: input.types.filter(type => type !== e.target.value)
            });
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createPokemon(input));
        alert('Pokemon created succesfully');
        setInput({
            name: '',
            hp: 0,
            attack: 0,
            speed: 0,
            defense: 0,
            height: 0,
            weight: 0,
            sprite:'',
            types:[]
        });
    }

    return(
        <div className={create.create}>
            <div className={create.contain}>
            <form onSubmit={handleSubmit} >
               <div className={create.stats_name_sprite}>
                        <label className={create.label}>Name:</label>
                            <input 
                            className={create.input}
                            type="text" 
                            name='name'
                            value={input.name}
                            onChange={handleInput}
                            />
                        <label className={create.label}>Hp:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='hp'
                            value={input.hp}
                            onChange={handleInput}
                            />
                        <label className={create.label}>Attack:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='attack'
                            value={input.attack}
                            onChange={handleInput}
                            
                            />
                        <label className={create.label}>Defense:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='defense'
                            value={input.defense}
                            onChange={handleInput}
                            
                            />
                        <label className={create.label}>Speed:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='speed'
                            value={input.speed}
                            onChange={handleInput}
                            
                            />
                        <label className={create.label}>Height:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='height'
                            value={input.height}
                            onChange={handleInput}
                            
                            />
                        <label className={create.label}>Weight:</label>
                            <input 
                            className={create.input}
                            type="number" 
                            name='weight'
                            value={input.weight}
                            onChange={handleInput}
                            />
                        <label className={create.label}>Sprite:</label>
                            <input 
                            className={create.input}
                            type="text" 
                            name='sprite'
                            value={input.sprite}
                            onChange={handleInput}
                            />
                
                    <label className={create.label}>Types:</label>
                        <div>
                        {types.map((type) =>(
                                <span key = {type.id}>
                                    <input 
                                    type="checkbox" 
                                    name='types'
                                    value={type.name}
                                    onChange={handleCheckBox}
                                    />
                                    <label className={create.labelCheck}>{type.name}</label>
                                </span>
                        ))}
                </div>
                <button type='submit' className={create.submit}>SUBMIT</button>
                </div>

            </form>
                        </div>
        </div>
    )
}