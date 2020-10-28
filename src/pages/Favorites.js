import React, { useContext } from 'react'
import { useSelector } from "react-redux"

import FavoriteCard from '../components/FavoriteCard'
import themeContext from '../contexts/themeContext'

function Favorites() {
    const favorites = useSelector((state) => state.favoriteReducer.favorites)
    // console.log('favorites' ,favorites);
    const {theme, handleSetTheme} = useContext(themeContext)
    // console.log(theme,'ini theme yang di app');
    return(
        <div className="container mt-3">
            <h1 style={{color:"#1d2b5e"}}>My Favorite Pokemons</h1>
                <>
                    <h1>{theme}</h1>
                    <button onClick={() => handleSetTheme()}> change theme </button>
                </>
            <div className="card-deck mr-3">
                {favorites.map((pokemon, i) => {
                    return (
                        <FavoriteCard 
                            pokemon = {pokemon} 
                            key= {i} />
                        )
                    })}
            </div>
        </div>
    )
}

export default Favorites

{/* <themeContext.Consumer>
{(value) => {
    return (
    <>
    <h1>{value.theme}</h1>
    <button onClick={() => value.handleSetTheme()}> change theme </button>
        </>
    )
}} 
</themeContext.Consumer> */}