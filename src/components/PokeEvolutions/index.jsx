import { useEffect, useState } from 'react';
import pokeApi from '../../helpers/pokeApi';
import { Link } from 'react-router-dom';

import { PokeEvolutionArea } from './styled'


export const PokeEvolution = (data) => {
    const [counter, setCounter] = useState(1);

    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loadingChain, setLoadingChain] = useState(true);

    const [baseEvolution, setBaseEvolution] = useState(false)
    const [baseEvolutionName, setBaseEvolutionName] = useState('');
    const [baseEvolutionimage, setBaseEvolutionImage] = useState('');

    const [firstEvolution, setFirstEvolution] = useState(false)
    const [firstEvolutionName, setFirstEvolutionName] = useState('');
    const [firstEvolutionImage, setFirstEvolutionImage] = useState('');

    const [secondEvolution, setSecondEvolution] = useState(false)
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
                setFirstEvolution(true)
            }
            getFirstEvolutionData()
        }
    },[firstEvolutionName])

    useEffect(()=>{
        if(baseEvolutionName != '') {
            const getbaseEvolutionData =  async () => {
                const json = await pokeApi.getPokemonData(`pokemon/${baseEvolutionName}`)
                setBaseEvolutionImage(json.sprites.other.dream_world.front_default)
                setBaseEvolution(true)
            }
            getbaseEvolutionData()
        }
    },[baseEvolutionName])

    useEffect(()=>{
        if(secondEvolutionName != '') {
            const getSecondEvolutionData = async () => {
                const json = await pokeApi.getPokemonData(`pokemon/${secondEvolutionName}`)
                setSecondEvolutionImage(json.sprites.other.dream_world.front_default)
                setSecondEvolution(true)
            }
            getSecondEvolutionData()
        }
    },[secondEvolutionName])

    return(
        <PokeEvolutionArea>
            <h3 className='evolution-area-title'>Evolves to</h3>
            <div className='evolution-area'>
                {!loadingChain &&
                    <>
                        {baseEvolution &&
                            <div className='evolution-box'>    
                                <Link to={`/pokemon/${baseEvolutionName}`}>
                                    <img src={baseEvolutionimage} alt="" />
                                    <h3 className="evolution-box-title">{baseEvolutionName}</h3>
                                </Link>
                            </div>
                        }

                        {firstEvolution &&
                            <div className='evolution-box'>    
                                <Link to={`/pokemon/${firstEvolutionName}`}>
                                    <img src={firstEvolutionImage} alt="" />
                                    <h3 className="evolution-box-title">{firstEvolutionName}</h3>
                                </Link>
                            </div>
                        }

                        {secondEvolution &&
                            <div className='evolution-box'>    
                                <Link to={`/pokemon/${secondEvolutionName}`}>
                                    <img src={secondEvolutionImage} alt="" />
                                    <h3 className="evolution-box-title">{secondEvolutionName}</h3>
                                </Link>
                            </div>
                        }
                        
                    </>
                }
            </div>
        </PokeEvolutionArea>
    );
}