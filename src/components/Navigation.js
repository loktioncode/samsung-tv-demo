
import './Nav.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import NavItem from './NavItem';

const Navigation = () => {
    return (
        <div className="Nav">
            <Navbar collapseOnSelect expand='sm' bg="light" >

                <Navbar.Brand href="#home">
                    <img
                        src="../images/ms.png"
                        width="60"
                        height="30"
                        className="d-inline-block "
                        alt="Micosoft logo"
                    />
                </Navbar.Brand>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavItem title="Bere testing" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
