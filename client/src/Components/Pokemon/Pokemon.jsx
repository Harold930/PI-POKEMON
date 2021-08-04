import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Pokemon(){

    return (
        <div>
            <h4>SOY POKEMON</h4>
            <Link to = '/pokemons/id'>Link al detalle del pokemon</Link>
        </div>
    )

}