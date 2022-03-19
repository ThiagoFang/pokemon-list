import { Link } from "react-router-dom"

import { HeaderArea } from "./styled"
import { Container } from '../../MainComponents'

export const Header = () => {
    return (
        <HeaderArea>
            <Container className="container">
                <Link to="/" className="logo-area">
                    <img className="logo" src={require("../../../assets/icons/pokeball_icon_white.png")} alt="" />
                </Link>

                <nav className="navigation-menu-area">
                    <ul className="navigation-menu-list">
                        <li className="navigation-menu-item">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="navigation-menu-item">
                            <Link to="/about">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </HeaderArea>
    )
}