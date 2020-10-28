import React from 'react'
import Tilt from 'react-tilt'

function FavoriteCard(pokemon) {
  const {name, types, rarity, series, imageUrl, set} = pokemon.pokemon


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
        <div className="card mb-3 p-2 shadow" id="pokemonCard" style={cardStyle}>
					
          {pokemon.name}
        	{/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}

					<Tilt className="Tilt" options={{ max : 25 }} >
						<div className="Tilt-inner"> 
							<img src={imageUrl} className="card-img-top shadow-lg" alt="pokemon" style={imgStyle}></img>
							</div>
					</Tilt>

					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">Types: {types}</p>
						<p className="card-text">Rarity: {rarity} - {set}</p>
					</div>

						<div className="card-footer">
							<small className="text-muted">Series: Pokemon {series}</small>
						</div>

				</div>
      </>
    )
}

export default FavoriteCard