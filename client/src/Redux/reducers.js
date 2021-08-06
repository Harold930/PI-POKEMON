

const initialState = {
  pokemons:[],
  allPokemons: [],
  types:[],
  pokemonById:{},
  pokemonByName:{}
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
                pokemonByName: action.payload
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
            var arraySort = [];
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
        console.log(arraySort)
            return {
                ...state,
                pokemons: arraySort
            }
        // case 'SORT_ALPHABETICALLY':
        //     if(action.payload === 'asc'){

        //     }
        //     if(action.payload === 'desc'){
   
        //    }
   
        //        return {
   
        //        }
        default: return state;
    }
}

export default rootReducer;