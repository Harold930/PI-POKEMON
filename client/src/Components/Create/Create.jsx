import React, { useState } from 'react';

export default function Create(){

    const [input, setInput] = useState({
        name: '',
        attack: '',
        speed: '',
        defense: '',
        height: '',
        weight: '',
    });

    return(
            <div>
                <form action="sumbit"></form>
                <h3>soy create</h3>
            </div>
    )
}