import { Outlet } from "react-router-dom";

import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown,
} from "react-bootstrap";

import logo from "../../assets/apple-touch-icon.png";
import Footer from "../footer-bar/footer-bar.component";

const Navigation = () => {
    let expand = "md";

    return (
        <>
            <Navbar
                key={expand}
                variant="light"
                bg="light"
                expand={expand}
                className=""
            >
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} width="auto" height="40" alt="logo" />{" "}
                        Yong Sung John Lee{" "}
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body
                            style={{
                                fontFamily: "Bree Serif",
                            }}
                        >
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <NavDropdown
                                    title="Services"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="/projects/websites">
                                        Websites
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/projects/games">
                                        Games
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/projects/other">
                                        Other Software Projects
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet />
            <Footer/>
        </>
    );
};

export default Navigation;
