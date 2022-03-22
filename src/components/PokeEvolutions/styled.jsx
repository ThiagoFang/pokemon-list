import styled from "styled-components";

export const PokeEvolutionArea = styled.div`
    box-sizing: border-box;
    margin-top: 20px;
    padding: 15px 20px;
    border-radius: 20px;
    width: 60%;
    background-color: #777;

    a{
        text-decoration: none;
        color: #000;
    }

    h3 {
        margin: 0;
        padding: 0;
    }

    .evolution-area{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;

        h1{
            margin: 0;
            margin-bottom: 30px;
        }

        .evolution-box{
            box-sizing: border-box;
            background-color: #CCC;
            padding: 10px;
            width: 140px;
            transform: scale(1.2);

            img{
                width: 100%;
            }
        }
    }
`;