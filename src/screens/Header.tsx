import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext";

function Header() {
    useEffect(() => {
        document.title = "Oikos Nomos"
     }, []);
     const { state } = useContext(UserContext);
    return (
        <div style={{ color: "white", backgroundColor: "gray" }}>
        <Container>
            <Row style={{ height: 80 }}>
                <Col sm={6} md={4} lg={3} className="text-start py-4 "><Link className="text-decoration-none text-reset" to="/">
                    Oikos Nomos</Link></Col>
                <Col sm={0} md={4} lg={6} className="py-4 d-sm-none d-md-block d-lg-block"></Col>
                <Col sm={6} md={4} lg={3} className="text-end py-4">{state.name} | {state.balance} Moedas</Col>
            </Row>
        </Container>
        </div>
    )
}

export default Header