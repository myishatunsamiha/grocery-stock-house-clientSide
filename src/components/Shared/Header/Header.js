import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../UserAccount/Loading/Loading';
import './Header.css';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    const handleSignOut = async (event) => {
        await signOut(auth);
        navigate('/login');
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><strong className='text-success'>Grocery Stock House</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#header">header</Nav.Link>
                        <Nav.Link href="home#inventories">Inventories</Nav.Link>
                        <Nav.Link href="home#mainfeatures">Main Features</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to='addservice'>Add</Nav.Link>
                                <Nav.Link as={Link} to='manage'>Manage</Nav.Link>
                                <Nav.Link as={Link} to='orders'>Orders</Nav.Link>
                            </>
                        }

                        {
                            user?.auth?.emailVerified ? <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>SignOut</button> :
                                loading ? '' : <><Nav.Link as={Link} to="/login">Login</Nav.Link><Nav.Link as={Link} to="/register">Register</Nav.Link> </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;