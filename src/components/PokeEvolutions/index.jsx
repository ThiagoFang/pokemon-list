import { useEffect, useState } from 'react';
import pokeApi from '../../helpers/pokeApi';
import { Link } from 'react-router-dom';

import { PokeEvolutionArea } from './styled'


export const PokeEvolution = (data) => {
    const [counter, setCounter] = useState(1);

    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loadingChain, setLoadingChain] = useState(true);

    const [baseEvolutionName, setBaseEvolutionName] = useState('');
    const [baseEvolutionimage, setBaseEvolutionImage] = useState('');

    const [firstEvolutionName, setFirstEvolutionName] = useState('');
    const [firstEvolutionImage, setFirstEvolutionImage] = useState('');

    const [secondEvolutionName, setSecondeEvolutionName] = useState('');
    const [secondEvolutionImage, setSecondEvolutionImage] = useState('');


    useEffect(()=>{
        const getEvolutionChain = async () => {
            const json = await pokeApi.getData(data.data)
            setEvolutionChain(json)
            setBaseEvolutionName(json.chain.species.name)
            
            if(json.chain.evolves_to.length > 0) {
                setFirstEvolutionName(json.chain.evolves_to[0].species.name)

                if(json.chain.evolves_to[0].evolves_to.length > 0) {
                    setSecondeEvolutionName(json.chain.evolves_to[0].evolves_to[0].species.name)
                }
            }
            
            setLoadingChain(false)
        }
        getEvolutionChain()
    }, []);

    useEffect(()=> {
        if(firstEvolutionName != '') {
            const getFirstEvolutionData = async () => {
                const json = await pokeApi.getPokemonData(`pokemon/${firstEvolutionName}`)
                setFirstEvolutionImage(json.sprites.other.dream_world.front_default)
            }
            getFirstEvolutionData()
        }
    },[firstEvolutionName])

    useEffect(()=>{
        if(baseEvolutionName != '') {
            const getbaseEvolutionData =  async () => {
                const json = await pokeApi.getPokemonData(`pokemon/${baseEvolutionName}`)
                setBaseEvolutionImage(json.sprites.other.dream_world.front_default)
            }
            getbaseEvolutionData()
        }
    },[baseEvolutionName])

    useEffect(()=>{
        if(secondEvolutionName != '') {
            const getSecondEvolutionData = async () => {
                const json = await pokeApi.getPokemonData(`pokemon/${secondEvolutionName}`)
                setSecondEvolutionImage(json.sprites.other.dream_world.front_default)
            }
            getSecondEvolutionData()
        }
    },[secondEvolutionName])

    return(
        <PokeEvolutionArea>
            <h3>Evolves to</h3>
            <div className='evolution-area'>
                {!loadingChain &&
                    <>
                        {evolutionChain.chain.species &&
                            <div className='evolution-box'>    
                                <Link to={`/pokemon/${baseEvolutionName}`}>
                                    <h3>{baseEvolutionName}</h3>
                                    <img src={baseEvolutionimage} alt="" />
                                </Link>
                            </div>
                        }

                        {evolutionChain.chain.evolves_to.length > 0 && 
                            <div className='evolution-box'>    
                                <Link to={`/pokemon/${firstEvolutionName}`}>
                                    <h3>{firstEvolutionName}</h3>
                                    <img src={firstEvolutionImage} alt="" />
                                </Link>
                            </div>
                        }

                        {evolutionChain.chain.evolves_to.length > 0 &&
                            <>
                            {evolutionChain.chain.evolves_to[0].length > 0 &&
                                <>
                                    {evolutionChain.chain.evolves_to[0].evolves_to.length > 0 &&
                                    <div className='evolution-box'>    
                                        <Link to={`/pokemon/${firstEvolutionName}`}>
                                            <h3>{secondEvolutionName}</h3>
                                            <img src={secondEvolutionImage} alt="" />
                                        </Link>
                                    </div>
                                    }
                                </>
                            }
                            </>
                        }

                        
                    </>
                }
            </div>
        </PokeEvolutionArea>
    );
}