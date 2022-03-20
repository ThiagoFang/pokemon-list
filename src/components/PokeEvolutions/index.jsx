import { useEffect, useState } from 'react';
import pokeApi from '../../helpers/pokeApi';
import { Link } from 'react-router-dom';

import { PokeEvolutionArea } from './styled'

export const PokeEvolution = (data) => {
    const [evolutionData, setEvolutionData] = useState([]);

    useEffect(()=>{
        getEvolutionData()
    },[])

    const getEvolutionData = async () => {
        const json = await pokeApi.getData(data.data)
        setEvolutionData(json)
    }

    return(
        <PokeEvolutionArea>
            <h3>Evolve to</h3>
            <div className='evolution-area'>
                {evolutionData.chain &&
                    <div className='evolution-box'>
                        {evolutionData.chain.evolves_to.length == 0 && 
                            <div>...</div>
                        }

                        {evolutionData.chain.evolves_to.length > 0 && 
                            <div>...</div>
                        }

                    </div>
                }
            </div>
        </PokeEvolutionArea>
    );
}