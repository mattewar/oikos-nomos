import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header() {

    return (
        <>
            <Row style={{  color: "white", backgroundColor: "gray", height: 80 }}>
                <Col sm={6} md={4} lg={3} className="text-center py-4 "><Link className="text-decoration-none text-reset" to="/">
                Oikos Nomos</Link></Col>
                <Col sm={0} md={4} lg={6} className="text-center py-4 d-sm-none d-md-block d-lg-block"></Col>
                <Col sm={6} md={4} lg={3} className="text-center py-4">Usuário</Col>
            </Row>
        </>
    )
}

export default Header