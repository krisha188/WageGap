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
                        <p className = "about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <img className = "image" src={"https://media.istockphoto.com/id/1474378063/vector/numbers-in-blue-falling-financial-figures-number-algebra-abstract-crowded-numbers-pattern.jpg?s=170667a&w=0&k=20&c=DpHY-XGgmBnvKMA3slZJRdBqS7MiW3K2Js1i73xBzFs="} alt="Funnn"/>
                        <span className = "features">Key Features</span>
                    </Col>
                </Row>
                <Row className="images-row">
                    <Col className="item-container">
                        <button className="item-button">
                            <div className="item">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsX65OG92zaaFmnBwWTU63MMXE6L_drUB3HeYOPU_-kA&s"} alt="Image" className="fixed-size" />
                                <div className="overlay">
                                    <h5>Salary Negotiator</h5>
                                </div>
                            </div>
                        </button>
                    </Col>
                    <Col className="item-container">
                        <button className="item-button">
                            <div className="item">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4mWgOuztUG3saw9yOKTbASAadXq_qnt0fwmJ9jNzu_UrhARq3UuY1-RV7NfAIOtzncI&usqp=CAU"} alt="Image" className="fixed-size" />
                                <div className="overlay">
                                    <h5>Investment Advice</h5>
                                </div>
                            </div>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}