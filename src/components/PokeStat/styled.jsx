import styled from "styled-components";

export const PokeStatArea = styled.div`
    transition: .2s;

    &:hover{
        transform: scale(1.05);

        h3{
            color: #222;
        }
        
        .stat-bar .stat-bar-progression {
            background-color: #2592BE;
        }
    }

    h3{
        margin: 4px 0px 2px 10px;
        font-size: 16px;
        color: #444;
    }

    .stat-bar{
        background-color: #CCC;
        height: 15px;
        border-radius: 20px;
        overflow: hidden;

        .stat-bar-progression{
            background-color: #30A7D7;
            height: 100%;
            transition: .3s;
        }
    }
`;