import styled from "styled-components";

export const HomePokemonArea = styled.div`
    display: flex;
    padding: 50px 0;

    .stats-area{
        margin-left: 20px;
        color: #FFF;
    }

    .poke-image{
        height: 300px;
        transition: all.4s;

        &:hover{
            transform: scale(1.2);
        }
    }

    @media (max-width: 440px) {
        flex-direction: column;
        padding: 20px 0;

        .poke-image{
            height: 150px;
        }
    }
`;