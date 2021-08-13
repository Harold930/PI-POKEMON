

const initialState = {
  pokemons:[],
  allPokemons: [],
  types:[],
  pokemonById_Name:{},
  pokemonCreated:{}
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'GET_POKEMONS_BY_NAME':
            return {
                ...state,
                pokemonById_Name: action.payload
            }
        case 'FILTER_BY_TYPE':
          const pokemonsFiltered = state.allPokemons.filter(pokemon => pokemon.types.includes(action.payload) === true);
            return {
                ...state,
                pokemons: pokemonsFiltered
            }
        case 'FILTER_BY_POKEMONS':
         var pokemons_Filtered = [];     
          switch(action.payload){
            case 'all': pokemons_Filtered = state.allPokemons; break;
            case 'create': pokemons_Filtered = state.allPokemons.filter(pokemon => typeof(pokemon.id) === 'string'); break;
            case 'from_api': pokemons_Filtered = state.allPokemons.filter(pokemon => typeof(pokemon.id) === 'number'); break;
          }
            return{
                ...state,
                pokemons: pokemons_Filtered
            }
        case 'SORT_BY_ATTACK':
            let arraySort = [];
         if(action.payload === 'asc'){
            arraySort = state.allPokemons.sort((a,b) => {
                if(a.attack > b.attack){
                    return 1;
                }
                if(a.attack < b.attack){
                    return -1;
                }
                return 0;
            });
        } else if(action.payload === 'desc'){
            arraySort = state.allPokemons.sort((a,b) => {
                if(a.attack < b.attack){
                    return 1;
                }
                if(a.attack > b.attack){
                    return -1;
                }
                return 0;
            });
        }
        console.log(arraySort ,'<<<<<<<<-------------')
            return {
                ...state,
                pokemons: arraySort
            }
        case 'SORT_ALPHABETICALLY':
            let arraySort_name = [];
            if(action.payload === 'asc_name'){
                arraySort_name = state.allPokemons.sort((a,b) => {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name){
                        return -1;
                    }
                    return 0;
                });
            }
            if(action.payload === 'desc_name'){
                arraySort_name = state.allPokemons.sort((a,b) => {
                    if(a.name < b.name){
                        return 1;
                    }
                    if(a.name > b.name){
                        return -1;
                    }
                    return 0;
                });
           }
           console.log(arraySort_name)
               return {
                ...state,
                pokemons: arraySort_name
               }
        case 'GET_POKEMONS_BY_ID':
            return {
                ...state,
                pokemonById_Name:action.payload
            }
        case 'CREATE_POKEMON':
            return {
                ...state,
                allPokemons:action.payload
            }
        default: return state;
    }
}

export default rootReducer;