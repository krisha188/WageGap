import {useState, useEffect} from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import navIcon1 from "./Assets/Images/nav-icon1.svg";
import navIcon2 from "./Assets/Images/nav-icon2.svg";
import navIcon3 from "./Assets/Images/nav-icon3.svg";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         

            {/* <Nav.Link 
              href="http://127.0.0.1:5000/"
            >
              Investing Advisor
            </Nav.Link> */}

            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="http://127.0.0.1:5000/">Salary Negotiator</NavDropdown.Item>
              <NavDropdown.Item href="http://127.0.0.1:5000/">Investing Advisor</NavDropdown.Item>
               
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};