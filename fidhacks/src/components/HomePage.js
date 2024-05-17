import {useState, useEffect} from "react"
import {Container, Row, Col} from 'react-bootstrap';

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs = {12} md = {6} xl = {7}>
                        <span className = "tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Krisha"} <span className = "wrap">{text}</span></h1>
                            <p> As a freshman at UNC, I'm passionate about research and AI. Alongside my studies, I serve as a COMP 110 Teaching Assistant, where I have the privilege of guiding fellow students through the fundamentals of computer science. Additionally, I'm deeply involved as a social media manager for Winspire, where I leverage my creativity and strategic thinking to curate engaging content and foster meaningful connections with our audience. These roles not only complement my academic pursuits but also provide valuable opportunities for leadership, collaboration, and communication. Through my involvement in both teaching and social media management, I'm dedicated to making a positive impact within the UNC community and beyond, while furthering my interests in technology and innovation.</p>
                    </Col>
                </Row>
            </Container>
        </section> 
    )