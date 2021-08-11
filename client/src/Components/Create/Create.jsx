import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../Redux/action';

export default function Create(){
    
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    console.log(types)
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
        types:[]
    });

    function handleInput(e){

        e.preventDefault();

        if(e.target.name === 'types'){
            const typesSelection = input.types;
            setInput({
                ...input,
                [e.target.name]: typesSelection.push(e.target.value)
            })
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
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
    return(
        <div>
            <form >  
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
                <div>
                    <label>Types:</label>
                        <div>
                        {types.map((type) =>{
                                <span key = {type.id}>
                                    <input 
                                    type="checkbox" 
                                    name='types'
                                    value={type.name}
                                    onChange={handleCheckBox}
                                    />
                                    <label name={type}>{type.name}</label>
                                </span>
                            })}
                        </div>
                </div>
            </form>
        </div>
    )
}