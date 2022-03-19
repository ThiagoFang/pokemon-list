import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { Container } from "../../components/MainComponents";
import { PageArea, PokemonArea } from './styled';

export const Home = () => {
    const navigate = useNavigate();

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState('');

    const [loading, setLoading] = useState(true);
    const [searchError, setSeatchError] = useState(false);

    const handleSearchPokemon = e => {
        e.preventDefault()
        const pokeName = pokemonSearch.toLowerCase()
        navigate(`/pokemon/${pokeName}`)
    }


    return (
        <PageArea>
            <Container className="home-container">
                <img className="main-pokeball" src={require("../../assets/images/PokeBall.png")} alt="" />
                <form onSubmit={handleSearchPokemon} className="search-area">
                    <input 
                        className="pokemon-name-input" 
                        type="text" 
                        placeholder='Digite o nome de um Pokemon'
                        value={pokemonSearch}
                        onChange={e=>setPokemonSearch(e.target.value)}
                    />
                    <button className='search-button'>Pesquisar</button>
                </form>
            </Container>

            <PokemonArea>
                <Container className='pokemon-container'>

                </Container>
            </PokemonArea>          
        </PageArea>
    )
}