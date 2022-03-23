import { useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";

import { PokeSearchHomeArea } from "./styled";

export const PokeSearchHome = () => {
    const navigate = useNavigate();

    const [pokemonSearch, setPokemonSearch] = useState('');
    const [placeHolderState, setPlaceHolderState] = useState('');

    useEffect(()=>{
        const number = sortNumber()
        setPlaceHolderState(searchPlaceHolder[number])
    },[])

    const searchPlaceHolder = [
        'Type a pokemon name',
        'Try type Ditto',
        'Try type Arceus',
        'Try type Rayquasa',
        'Try type Charizard',
        'Try type Golbat '
    ]

    const sortNumber = () => {
        const number = Math.floor(Math.random() * 6)
        return number
    }

    const handleSearchPokemon = e => {
        e.preventDefault()
        if(pokemonSearch !== '') {
            const pokeName = pokemonSearch.toLowerCase()
            navigate(`/pokemon/${pokeName}`)
        }
    }

    return(
        <PokeSearchHomeArea>
            <form onSubmit={handleSearchPokemon} className="search-area">
                    <input 
                        className="pokemon-name-input" 
                        type="text" 
                        placeholder={placeHolderState}
                        value={pokemonSearch}
                        onChange={e=>setPokemonSearch(e.target.value)}
                    />
                    <button className='search-button'>SEARCH</button>
                </form>
        </PokeSearchHomeArea>
    )
}