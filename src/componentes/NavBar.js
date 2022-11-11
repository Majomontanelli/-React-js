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
              <Nav.Link to="/" href="#QuienesSomos">Quienes somos</Nav.Link>
              <Nav.Link to="/" href="#Contacto">Categoria</Nav.Link>
              <Nav.Link to="/color/verde" href="#Tienda">Termos</Nav.Link>
              <Nav.Link href="#"><CartWidget /></Nav.Link>
            </Nav>
          </NavBarbootstrap.Collapse>
        </Container>
      </NavBarbootstrap>
  );
 
}

export default NavBar;