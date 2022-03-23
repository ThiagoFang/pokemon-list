import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import pokeApi from "../../helpers/pokeApi"

import { HomePokemonArea } from "./styled"
import { PokeStat } from "../PokeStat"

export const HomePokemon = () => {
    const navigate = useNavigate()

    const [pokemonData, setPokemonData] = useState([])
    const [pokemonStats, setPokemonStats] = useState([])
    const [pokemonSprite, setPokemonSprite] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const getPokemonData = async () => {
            setLoading(true)
            const number = pokenumber()
            const json = await pokeApi.getPokemonData(`pokemon/${number}`)

            setPokemonData(json)

            setPokemonStats(json.stats)

            setPokemonSprite(json.sprites.other.dream_world.front_default)

            setLoading(false)
        }
        getPokemonData()
    }, [])

    const pokenumber = () => {
        const number = Math.floor(Math.random() * 50)
        return number
    }

    return(
        <HomePokemonArea>
            {!loading &&
                <>
                    <img className="poke-image" src={pokemonSprite} alt="" />
                    <div className="stats-area">
                        {pokemonStats.map((item, key) => (
                            <PokeStat key={key} data={item} />
                        ))
                        }
                    </div>
                </>
            }
        </HomePokemonArea>
    )
}