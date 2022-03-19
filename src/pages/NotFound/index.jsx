import { Link } from "react-router-dom";

import { Container } from "../../components/MainComponents";
import { NotFoundArea } from "./styled";

export const NotFound= () => {
    return(
        <NotFoundArea>
            <Container className="notFound-container">
                <img src={require("../../assets/images/lost.png")} alt=""/>
                <span>Ops, Você parece perdido treinador!</span>
                <Link to="/">VOLTAR AO INICIO</Link>
            </Container>
        </NotFoundArea>
    )
}