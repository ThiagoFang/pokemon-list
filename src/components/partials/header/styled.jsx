import styled from 'styled-components'

export const HeaderArea = styled.header`
    align-items: center;
    justify-content: center;
    background: #E3350D;
    height: 90px;

    a{
        text-decoration: none;
    }

    .container{
        justify-content: space-between;
        align-items: center;
    }

    .logo-area .logo{
        height: 50px;
    }

    .navigation-menu-area .navigation-menu-list{
        display: flex;
        list-style: none;

        .navigation-menu-item {
            font-weight: 700;
            font-size: 18px;
            text-transform: uppercase;
            margin-right: 20px;
            
            a{
                color: #FFF;
            }
        }
    }

    @media (max-width: 1260px) {
        .container {
            padding: 0 40px;

            .navigation-menu-area .navigation-menu-list .navigation-menu-item {
                font-size: 14px;
            }
        }
    }
`;