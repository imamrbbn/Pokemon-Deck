const initialState = {
    pokemons: [],
    pokemonDetail: {},
    loadingStatus: false
  };
  
  function pokemonReducer(state = initialState, action) {
  // console.log(state.loadingStatus, 'sebelum');
  // console.log(action,'ini apa');
  switch (action.type) {
  
      case "FETCH_POKEMONS":
        return {
          ...state,
          pokemons: action.pokemons
        }
        
      case "FETCH_POKEMONDETAIL":
      return {
        ...state,
        pokemonDetail: action.pokemonDetail
      }
      case "CHANGE_LOADING_STATUS":
       
        return {
          ...state,
          loadingStatus: action.loadingStatus
        }

    default:
      return state;
  }
}

export default pokemonReducer;

    // case "CHANGE_AGE":
    //   return {
    //     ...state,
    //     age: age + 1
    //   };

  // function reducer(state = initialState, action) {
    // Ketika ada sebuah action, maka kita harus membuat state yang baru
    // if (action.type === "CHANGE_NAME") {
    //   console.log("reducer nya dijalankan", state, action);
    //   const newState = {
    //     ...state,
    //     name: action.payload
    //   };
  
    //   return newState;
    // }
  
    // if (action.type === "CHANGE_AGE") {
    //   console.log(action, state);
    //   return {
    //     ...state,
    //     age: state.age + 1
    //   };
    // }