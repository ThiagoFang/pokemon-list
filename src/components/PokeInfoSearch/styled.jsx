import styled from "styled-components";

export const PokeInfoSearchArea = styled.div`
    margin: 10px 0 50px 0;
    width: 30%;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #FFF;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0 0 3px #333;

        input{
            background: #FFF;
            border: none;
            width: 80%;
            padding: 10px 0 10px 30px;
            font-size: 15px;

            &:focus{
                outline: none;
            }
        }

        button {
            flex: 1;
            height: 100%;
            border: none;
            background-color: #2592BE;
            height: 45px;
            cursor: pointer;

            img {
                height: 30px;
            }
        }
        
    }
`