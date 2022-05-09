import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../UserAccounts/Loading/Loading';
import './Header.css';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    const handleSignOut = async (event) => {
        await signOut(auth);
        navigate('/');
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
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.emailVerified && <>
                                <Nav.Link as={Link} to='/inventories'>Manage Items</Nav.Link>
                                <Nav.Link as={Link} to='/additem'>Add items</Nav.Link>
                                <Nav.Link as={Link} to='/myitems'>My items</Nav.Link>
                            </>
                        }

                        {
                            user?.emailVerified ? <button className="btn btn-link text-danger text-decoration-none ps-0" style={{ width: '60px' }} onClick={handleSignOut}>Logout</button> :
                                loading ? '' : <><Nav.Link as={Link} to="/login">Login</Nav.Link><Nav.Link as={Link} to="/register">Register</Nav.Link> </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;