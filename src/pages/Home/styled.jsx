import styled from 'styled-components'

export const PageArea = styled.main`
    background: #E3350D;
    height: calc( 100vh - 90px);

    .home-container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        .search-area{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .pokemon-name-input{
                height: 40px;
                width: 80%;
                padding: 5px;
                border: none;
                text-align: center;
                font-size: 20px;
                border-radius: 30px;
                margin-bottom: 30px;
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
                transition: .4s;

                &:focus{
                    outline: none;
                    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
                }

            }

            .search-button {
                border: none;
                background-color: #30A7D7;
                padding: 10px 40px;
                border-radius: 20px;
                color: #FFF;
                font-size: 18px;
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
                transition: .3s;
                cursor: pointer;

                &:hover{
                    background-color: #0095D1;
                    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
`;

export const PokemonArea = styled.section`

`;