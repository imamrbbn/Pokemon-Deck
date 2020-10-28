export function fetchPokemons(){
  return (dispatch) => {
    const pokemonCardUrl = 'https://api.pokemontcg.io/v1/cards'
    dispatch({type: "CHANGE_LOADING_STATUS", loadingStatus: true})
    // setLoading(true)
    fetch(pokemonCardUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          {
          type: "FETCH_POKEMONS",
          pokemons: data.cards
        }
        )
      })
      .catch((err) => console.log(err))
      // setError(err))
      .finally(() => dispatch({type: "CHANGE_LOADING_STATUS", loadingStatus: false}))
    }
  }

export function fetchPokemonDetail(id){
  return (dispatch) => {
    const pokemonCardUrl = `https://api.pokemontcg.io/v1/cards/${id}`
    dispatch({type: "CHANGE_LOADING_STATUS", loadingStatus: true})

    fetch(pokemonCardUrl)
    .then((res) => res.json())
    .then((data) => {
      dispatch(
          {
          type: "FETCH_POKEMONDETAIL",
          pokemonDetail: data.card
        }
        )
      })
      .catch((err) => console.log(err))
      // setError(err))
      .finally(() => dispatch({type: "CHANGE_LOADING_STATUS", loadingStatus: false}))
    }
  }

// export function incrementAge() {
//     return {
//         type: "CHANGE_AGE"
//     };
// }
