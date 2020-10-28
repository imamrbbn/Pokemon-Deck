const initialState = {
    favorites: [],
		loading: false,
		error: false
  };

  function favoriteReducer(state = initialState, action) {
  // console.log('ini di reducer', action);
  // console.log('ini state', state);
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state;
  }
}

export default favoriteReducer;

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