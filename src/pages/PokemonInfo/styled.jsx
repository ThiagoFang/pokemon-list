import styled from "styled-components";

export const PokemonInfoArea = styled.section`

    .pokemon-info-container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
        min-height: calc(100vh - 90px);

        .pokemon-stats-area{
            display: flex;

            .pokemon-card{
                display: flex;
                flex-direction: column;
                width: 400px;
                border-radius: 20px 20px 0 0;
                transition: all.3s;

                &:hover{
                    transform: scale(1.1);

                    img{
                        transform: scale(1.1);
                    }
                }

                .pokemon-data {
                    box-sizing: border-box;
                    height: 100px;
                    padding: 20px;
                    font-weight: bold;
                    font-size: 18px;
                    text-transform: uppercase;
                    border-radius: 20px 20px 0 0;

                    span{
                        color: #535353;
                    }
                }

                .pokemon-img-area {
                    flex: 1;
                    display: flex;
                    padding: 10px;
                    align-items: center;
                    justify-content: center;

                     img{
                         width: 100%;
                         position: relative;
                         top:-40px;
                         transition: .5s;
                     }
                }
            }
            
            .pokemon-stats{
                width: 140px;
                margin-left: 40px;
            }
        }
        
        
        .evolutions-area {
            box-sizing: border-box;
            background-color: #4D4D4D;
            height: 250px;
            padding: 30px;
            margin-top: 20px;
            border-radius: 20px;
            width: 80%;
        }

    }
`;