import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoHeader from "../../assets/logo-site.svg"
import LogoInstagram from "../../assets/fontawesome-instagram.svg"
import LogoFacebook from "../../assets/fontawesome-facebook.svg"

const Header = () => {
    return ( 
    <div className="custom-dark-green">
        <div className="container d-flex justify-content-between py-3">
          
            <a href="/"><img src={LogoHeader} alt="logo-header" /></a>

            <div className='d-flex gap-5'>

              <div className='d-flex gap-3 icons'>
                <a href="https://www.facebook.com/medeirossupermercados/" target='_blank'><img src={LogoInstagram} alt="logo-instagram" className='icons' /></a>
                <a href="https://www.instagram.com/medeirossupermercados"target='_blank'><img src={LogoFacebook} alt="logo-faceboook" className='icons' /></a>
                
              </div>

              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav " />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto custom-nav">
                      <Nav.Link className="_header_item" href="./index.html">Início</Nav.Link>
                      <Nav.Link className="_header_item" href="./ofertas">Ofertas</Nav.Link>
                      <Nav.Link className="_header_item" href="./lojas.html">Lojas</Nav.Link>
                      <Nav.Link className="_header_item" href="./sobre.html">Sobre nós</Nav.Link>
                      <Nav.Link className="_header_item" href="./trabalhe_conosco.html">Trabalhe conosco</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
        </div>
    </div> );
}
 
export default Header;