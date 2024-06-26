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
                        <span className = "tagline">FidHacks 2024</span>
                        <p className = "about"> InvestHER is a comprehensive website dedicated to addressing the financial challenges faced by women in 2024. Despite the progress in gender equality, women still earn less than men for similar roles and qualifications across various industries, placing them at a wealth disadvantage. InvestHER aims to bridge this gap by providing resources to enhance financial literacy among women, recognizing that lower financial literacy significantly contributes to the wealth disparity. The platform offers educational materials, workshops, and personalized financial advice to empower women with the knowledge needed to manage personal finances effectively. Additionally, InvestHER acknowledges the societal expectations placed on women to take on primary caregiving roles, which often strain their financial resources. By offering support and strategies for balancing these responsibilities, InvestHER strives to help women achieve financial independence and stability.</p>
                        <img className = "image" src={"http://localhost:3000/hercopy.png"} alt="Funnn"/>
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