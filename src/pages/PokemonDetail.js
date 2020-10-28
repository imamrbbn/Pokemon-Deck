import {useParams, useHistory} from "react-router-dom";
import React, {useEffect} from 'react'
import Tilt from 'react-tilt'
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Loading from '../components/Loading'
import { fetchPokemonDetail } from "../store/action/pokemonAction";
import {add_favorites} from '../store/action/favoriteAction'


function PokemonDetail() {
    const {id} = useParams()

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonDetail(id))
    },[])

    const pokemonDetail = useSelector((state) => state.pokemonReducer.pokemonDetail)
    // const errorStatus = useSelector((state) => state.favoriteReducer.errorStatus)
    // console.log(errorStatus);
    const loading = useSelector((state) => state.pokemonReducer.loadingStatus)
    const error = useSelector((state) => state.favoriteReducer.error)

    const {name, imageUrl, series, set, rarity, types, artist} = pokemonDetail

    const detailStyle  = {
      width: "18rem",
      backgroundColor: "rgb(255, 203, 5)",
    }
    
    let history = useHistory()

    function handleAddFavorite() {
      dispatch(add_favorites(pokemonDetail))
      history.push(`/pokemons`);

    }
   
    return(
      <>
      {loading=== true && <Loading/>}
      <div className="d-flex justify-content-center mt-5">
        <Tilt className="Tilt" options={{ max : 25 }} >
          <div className="Tilt-inner"> 
            <img src={imageUrl} className="card-img shadow" alt="pokemon"/>
          </div>
        </Tilt>
        <div className="card ml-5 " style={detailStyle}  data-testid="pokemonDetail">
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h6 className="card-subtitle mb-2 text-muted">{artist}</h6>
            <div className="card-body text-left">
              <p className="card-text">Types: {types}</p>
              <p className="card-text">Rarity: {rarity} - {set}</p>
            </div>
						<div className="card-footer">
							<small className="text-muted">Series: Pokemon {series}</small>
						</div>
          </div>
          <button type="button" className="btn btn-primary mx-auto mb-3" style={{width:"150px"}}
            onClick={handleAddFavorite}>Add To Favorite</button>
        </div>
      </div>
      </>
    )
}

export default PokemonDetail


// {
//   favorites.find((favorite) => favorite.mal_id === props.character.mal_id) ? (
//     <button className="btn btn-sm btn-warning ml-2" disabled>+ Favorite</button>
//   ) : (
//     <button
//       className="btn btn-sm btn-danger ml-2"
//       onClick={(e) => handleClickFavorites(e, props.character)}
//     >+ Favorite
//     </button>
//   )
// }

// useEffect(() => {
//   setLoading(true)
//   fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
//   .then((res) => res.json())
//   .then((data) => {
//       setPokemon({
//           pokemon: data.card
//       })
//   })
//   .catch((err) => console.log(err))
//   .finally(() => setLoading(false))
// }, [id])