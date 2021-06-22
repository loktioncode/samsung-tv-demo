
import './Nav.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import NavItem from './NavItem';
import Logo from '../images/logo.png';

const Navigation = () => {
    return (
        <div className="Nav">
            <Navbar collapseOnSelect expand='sm' bg="light"  >

                <Navbar.Brand href="#home" className="brand">
                    <img
                        src={Logo}
                        width="150"
                        height="30"
                        className="d-inline-block"
                        alt="Micosoft logo"
                    />
                </Navbar.Brand>
                <Container className="justify-content-center" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto" >
                            <NavItem title="Consoles" />
                            <NavItem title="Games" />
                            <NavItem title="Community" />
                            <NavItem title="Accesories" />
                            <NavItem title="Xbox on Widows" />
                            <NavItem title="More" />


                        </Nav>
                        <Nav className="ml-auto">
                            <NavItem title="All Microsoft" />
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>

                            <Nav.Link href="#home">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default Navigation;
