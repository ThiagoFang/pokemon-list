import { Link } from "react-router-dom";

import { Container } from "../../components/MainComponents";
import { NotFoundArea } from "./styled";

export const NotFound= () => {
    return(
        <NotFoundArea>
            <Container className="notFound-container">
                <img src={require("../../assets/images/lost.png")} alt=""/>
                <span>Ops, You look lost a trainer!</span>
                <Link to="/">BACK TO HOME</Link>
            </Container>
        </NotFoundArea>
    )
}