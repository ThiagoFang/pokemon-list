import styled from "styled-components";

export const PokeEvolutionArea = styled.div`
    margin-top: 20px;
    padding: 15px 20px;
    padding-bottom: 30px;
    border-radius: 10px;
    width: 60%;
    background-color: #2592BE;
    box-shadow: 0 0 5px #777;

    a{
        text-decoration: none;
        color: #000;
    }

    .evolution-area-title {
        color: #FFF;
        font-size: 28px;
        margin: 0px 0px 30px 25px;

        &::after {
            content: "";
            display: inline-block;
            position: relative;
            height: 0.5em;
            vertical-align: bottom;
            width: 60%;
            margin-right: -100%;
            margin-left: 10px;
            border-top: 2px solid #FFF;
        }
    }

    .evolution-area{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 40px;

        .evolution-box-title{
            margin: 10px 0 10px 0;
        }

        .evolution-box{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;
            background-color: #FFF;
            border: 1px solid #E3350D;
            padding: 10px;
            width: 140px;
            transform: scale(1.2);
            transition: .3s;
            border-radius: 10px;

            &:hover {
                transform: scale(1.3);
                box-shadow: 0 0 15px #444;

                img{
                    transform: scale(1.3);
                }
            }

            img{
                height: 100px;
                transition: .5s;
            }
        }
    }

    @media (max-width: 440px) {
        padding-bottom: 0;

        .evolution-area-title{
            margin: 0;
            text-align: center;
            &::after{
                display: none;
            }
        }

        .evolution-area{
            flex-direction: column;
            padding: 10px;

            .evolution-box-title{
                font-size: 14px;
            }

            .evolution-box{
                margin: 30px 0;
                width: 100px;

                img{
                    height: 70px;
                }
            }
        }
    }
`;