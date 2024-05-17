import {useState, useEffect} from "react"
import {Container, Row, Col} from 'react-bootstrap';

export const HomePage = () => {
    const [text, setText] = useState('');

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs = {12} md = {6} xl = {7}>
                        <span className = "tagline">Investment</span>
                        <h1>{About} <span className = "wrap">{text}</span></h1>
                            <p> lorem ipsum. </p>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}