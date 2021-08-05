import axios from 'axios';

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
        console.log(response.data)
        return dispatch({
            type: 'GET_TYPES',
            payload: response.data
        });
    }
}