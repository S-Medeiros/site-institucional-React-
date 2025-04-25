import { Container } from "react-bootstrap";
import Encarte1 from "../../assets/ENCARTE01.jpg"
import Encarte2 from "../../assets/ENCARTE02.jpg"
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
            <img src={Encarte1} alt="Encarte1" className="img-fluid "/>
            <img src={Encarte2} alt="Encarte2" className="img-fluid "/>
            <h3 className="text-light bg-primary">Encartes FDS - Ofertas validas de <strong>25 a 27 de Abril</strong> de 2025</h3>

          <Link className="d-flex justify-content-center" to="https://drive.google.com/drive/folders/1AlLyojjIG41AMrJc-_-aCtztK5tEKoYZ">
            <button className="btn-encarte">BAIXE NOSSO ENCARTE</button>
          </Link>
        </div>

    </Container>
    
    </> );
}
 
export default Offers;