

const initialState = {
  pokemons:[],
  types:[],
  pokemonById:{},
  pokemonByName:{}
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        default: return state;
    }
}

export default rootReducer;