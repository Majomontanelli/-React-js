import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {default as NavBarbootstrap} from 'react-bootstrap/NavBar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <NavBarbootstrap bg="dark" variant="dark">
        <Container>
          <NavBarbootstrap.Brand href="#home">TERMOLAND⚡</NavBarbootstrap.Brand>
          <NavBarbootstrap.Toggle aria-controls="basic-navbar-nav" />
          <NavBarbootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Quienes somos</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <Nav.Link href="#link">Tienda</Nav.Link>
              <Nav.Link href="#link"><CartWidget /></Nav.Link>
            </Nav>
          </NavBarbootstrap.Collapse>
        </Container>
      </NavBarbootstrap>
  );
 
}

export default NavBar;