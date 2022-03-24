import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import pokeApi from '../../helpers/pokeApi';

import { PokemonInfoArea } from "./styled";
import { Container } from '../../components/MainComponents';
import { colorSwitch } from '../../helpers/colorSwitch';
import { PokeStat } from '../../components/PokeStat';
import { PokeEvolution } from '../../components/PokeEvolutions';
import { PokeInfoSearch } from '../../components/PokeInfoSearch';

export const PokemonInfo = () => {
    const { name } = useParams()

    const [pokeInfo, setPokeInfo] = useState([])
    const [pokemonSprite, setPokemonSprite] = useState('')
    const [pokemonColor, setPokemonColor] = useState('')
    const [pokemonStats, setPokemonStats] = useState([])

    const [loading, setLoading] = useState(false)
    const [statsLoading, setStatsLoading] = useState(false)
    const [error, setError] = useState(false)
    
    const [evolutionChain, setEvolutionChain] = useState('')
    const [evolutionLoading, setEvolutionLoading] = useState(false)

    useEffect(()=>{
        const getFirstData = async () => {
            try{
                setError(false)
                setLoading(true)
                const endpoint = `pokemon/${name}`
                const json = await pokeApi.getPokemonData(endpoint)
                setPokeInfo(json)
                setPokemonSprite(json.sprites.other)
    
                setStatsLoading(true)
                setPokemonStats(json.stats)
                setStatsLoading(false)
            
                setLoading(false)
            } catch(e) {
                setError(true)
                return
            }
        }
        getFirstData()
    },[name])

    useEffect(()=>{
        getPokeSpecie()
    },[pokeInfo])
    
    const getPokeSpecie = async () => {
        const endpoint = pokeInfo.species.url
        const json = await pokeApi.getData(endpoint)

        const colorAuth = colorSwitch(json.color.name)
        setPokemonColor(colorAuth)

        setEvolutionLoading(true)
        setEvolutionChain(json.evolution_chain.url)
        setEvolutionLoading(false)

    }
    
    return(
        <PokemonInfoArea>
            <Container className='pokemon-info-container'>
                <PokeInfoSearch />
            {error &&
                <>
                    <img className='error-image' src={require('../../assets/images/team_rocket.png')} alt="" />
                    <h1 className='error-title'>Oh no! Looks like team rocket got there first!!</h1>
                    <Link className='error-link' to="/">Back to Home</Link>
                </>
            }

            {loading && !error &&
                <div>loading data</div>
            }

            {!loading && !error &&
                <>
                    <div className='pokemon-stats-area'>
                        <div className='pokemon-card'>
                            {pokeInfo.name &&
                                <div className='pokemon-data' style={{background: pokemonColor}}>
                                    <div>{pokeInfo.name} - <span>Nº{pokeInfo.id}</span></div>
                                </div>
                            }
                            <div className='pokemon-img-area'>
                                {pokemonSprite.dream_world &&
                                    <img src={pokemonSprite.dream_world.front_default} alt="" />
                                }
                            </div>
                        </div>

                        {!statsLoading &&
                            <div className='pokemon-stats'>
                                <h2>Stats</h2>
                                {pokemonStats.map((item, key)=>(
                                    <PokeStat key={key} data={item} prop={key}/>
                                ))}
                            </div>
                        }
                    </div>
                    { !evolutionLoading &&
                        <PokeEvolution data={evolutionChain}/>
                    }
                </>  
            }
            </Container> 
        </PokemonInfoArea>
    );
}