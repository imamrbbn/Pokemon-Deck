import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducer from "./reducers/pokemonReducer"
import favoriteReducer from './reducers/favoriteReducer'

// const store = createStore(reducer);

const reducer = combineReducers({
    pokemonReducer,
    favoriteReducer
  })

const store = createStore(reducer, applyMiddleware(thunk))

// console.log(store.getState(), " ini data di dalam store ");
export default store;
