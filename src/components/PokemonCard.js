import React from 'react'

import {useHistory} from "react-router-dom";

function PokemonCard(pokemon) {
  const {id, series, imageUrl} = pokemon.pokemon
  let history = useHistory()

  function handleClick() {
    // console.log(history,'ini apa');
    history.push(`/pokemons/${id}`);
  }

  // const [pokemon, setPokemon] = useState(props.pokemon)
  const imgStyle = {
      width: "auto",
      height: "200px",
    }
  const cardStyle = {
      minWidth: "auto",
      maxWidth: "200px",
      backgroundColor: "#FFCB05"
  }
      
    return(
      <>
        <div className="card mb-3 p-2 shadow" type="button" onClick={handleClick} 
          id="pokemonCard" style={cardStyle}  data-testid="pokemonDeck">
            {pokemon.name}
        {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
        <img src={imageUrl} className="card-img-top" alt="" style={imgStyle}></img>
          <div className="card-footer mt-3">
            <small className="text-muted">Series: Pokemon {series}</small>
          </div>
      </div>

      {/* router */}
      {/* <Switch>
        <Route path={`/pokemons/:name`}>
          <PokemonDetail/>
        </Route>
      </Switch> */}
      </>

      
    )
}

export default PokemonCard