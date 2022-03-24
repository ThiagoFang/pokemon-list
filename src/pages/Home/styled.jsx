import styled from 'styled-components'

export const PageArea = styled.main`
    background: #E3350D;
    height: calc( 100vh - 90px);

    .home-container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;

        .classic-title{
            color: #FFF;
        }
    }

    @media (max-width: 440px) {
        height: auto;
        
        .home-container{

            .classic-title{
                font-size: 22px;
                text-align: center;
            }
        }
    }
    
`;

export const PokemonArea = styled.section`

`;