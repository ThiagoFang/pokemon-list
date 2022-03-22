import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import pokeApi from '../../helpers/pokeApi';

import { PokemonInfoArea } from "./styled";
import { Container } from '../../components/MainComponents';
import { colorSwitch } from '../../helpers/colorSwitch';
import { PokeStat } from '../../components/PokeStat';
import { PokeEvolution } from '../../components/PokeEvolutions';

export const PokemonInfo = () => {
    const { name } = useParams()

    const [pokeInfo, setPokeInfo] = useState([])
    const [pokemonSprite, setPokemonSprite] = useState('')
    const [pokemonColor, setPokemonColor] = useState('')
    const [pokemonStats, setPokemonStats] = useState([])
    
    const [evolutionChain, setEvolutionChain] = useState('')

    useEffect( async ()=>{
        const endpoint = `pokemon/${name}`
        const json = await pokeApi.getPokemonData(endpoint)

        setPokeInfo(json)
        setPokemonSprite(json.sprites.other)
        setPokemonStats(json.stats)
    },[name])

    useEffect(()=>{
        getPokeSpecie()
    },[pokeInfo])
    

    const getPokeSpecie = async () => {
        const endpoint = pokeInfo.species.url
        const json = await pokeApi.getData(endpoint)

        const colorAuth = colorSwitch(json.color.name)
        setPokemonColor(colorAuth)
        setEvolutionChain(json.evolution_chain.url)
    }
    
    return(
        <PokemonInfoArea>
            <Container className='pokemon-info-container'>
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
                    <div className='pokemon-stats'>
                        <h2>Stats</h2>
                        {pokemonStats.map((item, key)=>(
                            <PokeStat key={key} data={item} prop={key}/>
                        ))}
                    </div>
                </div>
                { evolutionChain.length > 0 &&
                    <PokeEvolution data={evolutionChain}/>
                }
            </Container>      
        </PokemonInfoArea>
    );
}