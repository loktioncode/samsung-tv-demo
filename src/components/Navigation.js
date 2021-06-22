
import './Nav.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import NavItem from './NavItem';

const Navigation = () => {
    return (
        <div className="Nav">
            <Navbar collapseOnSelect expand='sm' bg="light"  >

                <Navbar.Brand href="#home">
                    <img
                        src="./images/logo.png"
                        width="100"
                        height="40"
                        className="d-inline-block "
                    // alt="Micosoft logo"
                    />
                </Navbar.Brand>
                <Container className="justify-content-center" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className="m-auto" >
                            <NavItem title="Consoles" />
                            <NavItem title="Games" />
                            <NavItem title="Community" />
                            <NavItem title="Accesories" />
                            <NavItem title="Xbox on Widows" />
                            <NavItem title="More" />


                        </Nav>
                        <Nav className="ml-auto">
                            <NavItem title="All Microsoft" />
                            <Nav.Link href="#home">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default Navigation;
