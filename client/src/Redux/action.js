import axios from 'axios';

//------------------------GETS------------------------------------------------

export function getAllPokemons(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/pokemons', {responseType:'json'});
        // console.log(response.data)
        return dispatch({
            type: 'GET_ALL_POKEMONS',
            payload: response.data
        });
    }
}
export function getTypes(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/types', {responseType:'json'});
        // console.log(response.data)
        return dispatch({
            type: 'GET_TYPES',
            payload: response.data
        });
    }
}
export function getPokemonByName(name){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/pokemons/search?name=${name}`, {responseType:'json'});
        console.log(response.data)
        return dispatch({
            type: 'GET_POKEMONS_BY_NAME',
            payload: response.data
        });
    }
}
export function getPokemonById(id){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/pokemons/${id}`, {responseType:'json'});
        console.log(response.data)
        return dispatch({
            type: 'GET_POKEMONS_BY_ID',
            payload: response.data
        });
    }
}

//-------------------------------FILTER AND SORT----------------------------------------------

export function filterByType(typePokemon){
    console.log(typePokemon)
    return {
            type: 'FILTER_BY_TYPE',
            payload: typePokemon
        }
}
export function filterByPokemons(payload){
    console.log(payload)
    return {
            type: 'FILTER_BY_POKEMONS',
            payload 
        }
}
export function sortByAttack(payload){
    console.log(payload)
    return {
            type: 'SORT_BY_ATTACK',
            payload 
        }
}
export function sortAlphabetically(payload){
    console.log(payload)
    return {
            type: 'SORT_ALPHABETICALLY',
            payload 
        }
}

//-----------------------POST-----------------------------------------------------------

export function createPokemon(form){
    console.log(form);
    return async function(dispatch){
        await axios.post(`http://localhost:3001/create`, form);
        return dispatch({
            type: 'CREATE_POKEMON',
            payload: form
        });
    }
}
// --------------------------RESET-------------------------------------------
export function reset(){
    return {
            type: 'RESET',
        }
}
