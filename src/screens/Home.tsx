import { Col, Container, Row, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Troia from "../assets/images/troia_bb.webp"

function Home() {

    return (
        <Container>
            <Row>
                <Col sm={12} md={4} lg={4} className="mt-4">
                    <Link className="text-decoration-none text-reset" to="/realm">
                        <Card>
                            <Card.Img variant="top" src={Troia} />
                            <Card.Footer className="text-muted">Tróia 1</Card.Footer>
                        </Card>
                    </Link>
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-4">
                    <Link className="text-decoration-none text-reset" to="/realm">
                        <Card>
                            <Card.Img variant="top" src={Troia} />
                            <Card.Footer className="text-muted">Tróia 2</Card.Footer>
                        </Card>
                    </Link>
                </Col>
                <Col sm={12} md={4} lg={4} className="mt-4">
                    <Link className="text-decoration-none text-reset" to="/realm">
                        <Card>
                            <Card.Img variant="top" src={Troia} />
                            <Card.Footer className="text-muted">Tróia 3</Card.Footer>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home