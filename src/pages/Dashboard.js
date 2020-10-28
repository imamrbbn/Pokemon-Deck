import React, {useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import PokemonCard from '../components/PokemonCard'
import Loading from '../components/Loading'
import { fetchPokemons} from '../store/action/pokemonAction'
// import useFetch from '../services/hooks/useFetch'

function Dashboard() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemons())
    },[])
    const pokemons = useSelector((state) => state.pokemonReducer.pokemons)
    const loading = useSelector((state) => state.pokemonReducer.loadingStatus)

    const [search, setSearch] = useState('')
    
    // const {data:pokemons,loading} = useFetch('https://api.pokemontcg.io/v1/cards')

    function searchPokemon(word) {
        const {value} = word.target
        setSearch(value)
    }

    return (
        <div className="container" data-testid="container">
              {loading=== true && <Loading/>}
            <input className="form-control my-3 mx-auto" type="search" placeholder="Search Pokemon ohyeaaaa" aria-label="Search" 
				value={search} style={{width:"50%"}} data-testid="searchTools"
				onChange={(word) => searchPokemon(word)}
				/>

            <div className="card-deck">
                {pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search)).map((pokemon, i) => {
                    return (
                        <PokemonCard 
                            pokemon = {pokemon} 
                            key= {i} />
                    )
                })}
            </div>
        </div>
    )
}

export default (Dashboard)

    // function useQuery () {
    //     return new URLSearchParams(useLocation().search)
    // }
    // query.get('id')


    // <pre>{JSON.stringify(pokemons, null, 2)}</pre>
    // <<<<<<<<<<<<<<<<OPTION 1 WITHOUT HOOSK>>>>>>>>>>>>>>>>>>>>
    // const [statePokemon, setPokemons] = useState({
    //     pokemons: [],
    //     // search: ''
    // })

    // useEffect(() => {
    //     fetch("https://api.pokemontcg.io/v1/cards")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log('cek fetch',data.cards)
    //         setPokemons({
    //             pokemons: data.cards
    //         })
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => {})
    // }, [])


        // <-----------------filter with useEffect-------------->
    // const [filteredPokemons, setFilteredPokemons] = useState([])

    // useEffect(() => {
    //     const filter = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search))
    //     setFilteredPokemons(filter)
    //     console.log(filter, filteredPokemons,'<<<<<<<<<<<<');
    // },[search])

    // useEffect(() => {
    //     setFilteredPokemons(pokemons)
    //     console.log('test');
    // },[pokemons])