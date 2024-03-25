import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './Nav.css';

const NavCol = () => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Laurels</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav">
                    <Nav className="nav-item">
                        <Nav.Link href="#about">Band</Nav.Link>
                        <Nav.Link href="#shows">Shows</Nav.Link>
                        <Nav.Link href="#music">Music</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavCol;