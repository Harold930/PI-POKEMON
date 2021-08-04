import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemons from '../Pokemons/Pokemons';

export default function Home(){

    return (
        <div>
            <h2>SOY HOME</h2>
        <Pokemons />
        </div>
    )

}