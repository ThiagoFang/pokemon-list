import { Container } from "../../components/MainComponents";
import { PageArea, PokemonArea } from './styled';
import { PokeSearchHome } from '../../components/PokeSearchHome';
import { HomePokemon } from "../../components/HomePokemon";

export const Home = () => {

    return (
        <PageArea>
            <Container className="home-container">
                <h1 className='classic-title'>Who is that pokémon?</h1>
                <HomePokemon />
                <PokeSearchHome />
            </Container>

            <PokemonArea>
                <Container className='pokemon-container'>

                </Container>
            </PokemonArea>          
        </PageArea>
    )
}


// <img className="main-pokeball" src={require("../../assets/images/PokeBall.png")} alt="" />