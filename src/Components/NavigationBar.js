import {Navbar, Container, Nav, NavbarBrand, NavLink} from "react-bootstrap";
import '../style/LandingPage.css';

const NavigationBar = () => {
    return (
        <Navbar className="NavBG" id="home">
            <Container>
                <NavbarBrand className="small">
                    <Nav.Link href="#home">PUSAT INFORMASI</Nav.Link>
                </NavbarBrand>
                    <Nav>
                        <Nav.Link href="#latest">Berita Terkini</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;