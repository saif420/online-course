import React from 'react';
import {Navbar,Nav,} from 'react-bootstrap';
import './Navba.css';

const Navba = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Saif
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Books</Nav.Link>
                        <Nav.Link href="#pricing">Course</Nav.Link>
                        <Nav.Link href="#pricing">Log-In</Nav.Link>
                        <Nav.Link href="#pricing">Contect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navba;