import styled from "styled-components";

export const PokemonInfoArea = styled.section`

    .pokemon-info-container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;

        .error-image{
            width: 40%;
        }

        .error-link{
            font-size: 24px;
            color: #E3350D;
            font-weight: 600;
        }

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
    }

    @media (min-width: 441px) and (max-width: 768px) {
        .pokemon-info-container{

            .pokemon-stats-area .pokemon-card{
                width: 200px;
            }

            .pokemon-stats-area{
                
                h2 {
                    text-align: center;
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: 440px) {
        .pokemon-info-container{
            padding: 0;

            .error-image{
                width: 80%;
            }

            .error-title{
                font-size: 20px;
                text-align: center;
            }

            .error-link{
                font-size: 20px;
            }

            .pokemon-stats-area{
                flex-direction: column;
                align-items: center;

                .pokemon-card{
                    width: 200px;
                }
                .pokemon-stats{
                    margin-left: 0;

                    h2 {
                        text-align: center;
                        margin: 0;
                    }
                }
            }
        }
    }
`;