import {useState, useEffect} from "react"
import {Container, Row, Col} from 'react-bootstrap';

export const HomePage = () => {
    const [text, setText] = useState('');
    const aboutText = "About";

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col>
                        <span className = "tagline">InvestHER</span>
                        <span className = "image-fidhack"></span>
                        <img className = "image" src={"https://media.istockphoto.com/id/1474378063/vector/numbers-in-blue-falling-financial-figures-number-algebra-abstract-crowded-numbers-pattern.jpg?s=170667a&w=0&k=20&c=DpHY-XGgmBnvKMA3slZJRdBqS7MiW3K2Js1i73xBzFs="} alt="Funnn"/>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}