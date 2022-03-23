import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { PokeInfoSearchArea } from "./styled";

export const PokeInfoSearch = () => {
    const navigate = useNavigate()
    
    const [pokemonName, setPokemonName] = useState('')
    
    const handleSearch = e => {
        e.preventDefault()
        
        if(pokemonName != '') {
            navigate(`/pokemon/${pokemonName}`)
        }
    }

    return(
        <PokeInfoSearchArea>
            <form onSubmit={handleSearch}>
                <input
                    placeholder="Type a pokemon name" 
                    value={pokemonName}
                    onChange={e=>setPokemonName(e.target.value)}
                    type="text"
                />
                <button className="search-button">
                    <img src={require('../../assets/icons/search_white.png')} alt="" />
                </button>
            </form>
        </PokeInfoSearchArea>
    )
}