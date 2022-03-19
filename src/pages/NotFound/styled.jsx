import styled from 'styled-components' 

export const NotFoundArea = styled.section`
    height: calc( 100vh - 100px);

    .notFound-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        img{
            margin-bottom: 20px;
        }

        span{
            font-size: 34px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        a{
            color: #E3350D;
            font-size: 24px;
            font-weight: bold;
        }
    }

    @media (max-width: 425px) {
        .notFound-container{

            img {
                width: 300px;
            }

            span {
                font-size: 24px;
                text-align: center;
            }

            a{
                font-size: 20px;
            }
        }
    }
`;