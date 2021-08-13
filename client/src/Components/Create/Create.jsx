import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getAllPokemons, getTypes } from '../../Redux/action';

export default function Create(){
    
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(getTypes());
    },[])

    const [input, setInput] = useState({
        name: '',
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
        <div>
            <form onSubmit={handleSubmit}>  
                <label>Name:</label>
                    <input 
                    type="text" 
                    name='name'
                    value={input.name}
                    onChange={handleInput}
                    />
                <label>Attack:</label>
                    <input 
                    type="number" 
                    name='attack'
                    value={input.attack}
                    onChange={handleInput}

                    />
                <label>Defense:</label>
                    <input 
                    type="number" 
                    name='defense'
                    value={input.defense}
                    onChange={handleInput}

                    />
                <label>Speed:</label>
                    <input 
                    type="number" 
                    name='speed'
                    value={input.speed}
                    onChange={handleInput}

                    />
                <label>Height:</label>
                    <input 
                    type="number" 
                    name='height'
                    value={input.height}
                    onChange={handleInput}

                    />
                <label>Weight:</label>
                    <input 
                    type="number" 
                    name='weight'
                    value={input.weight}
                    onChange={handleInput}
                    />
                <label>Sprite:</label>
                    <input 
                    type="text" 
                    name='sprite'
                    value={input.sprite}
                    onChange={handleInput}
                    />
                <div>
                    <label>Types:</label>
                        <div>
                        {types.map((type) =>(
                                <span key = {type.id}>
                                    <input 
                                    type="checkbox" 
                                    name='types'
                                    value={type.name}
                                    onChange={handleCheckBox}
                                    />
                                    <label name={type}>{type.name}</label>
                                </span>
                        ))}
                        </div>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}