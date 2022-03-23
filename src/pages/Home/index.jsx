import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { Container } from "../../components/MainComponents";
import { PageArea, PokemonArea } from './styled';
import { PokeSearchHome } from '../../components/PokeSearchHome';

export const Home = () => {

    return (
        <PageArea>
            <Container className="home-container">
                <h1 className='classic-title'>Who is that pokemon?</h1>
                <img className="main-pokeball" src={require("../../assets/images/PokeBall.png")} alt="" />
                <PokeSearchHome />
            </Container>

            <PokemonArea>
                <Container className='pokemon-container'>

                </Container>
            </PokemonArea>          
        </PageArea>
    )
}