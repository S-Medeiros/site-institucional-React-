import { Container } from "react-bootstrap";
import Encarte1 from "../../assets/ENCARTE01.jpg";
import Encarte2 from "../../assets/ENCARTE02.jpg";
import Encarte3 from "../../assets/ENCARTE-PARCEIRACO-MAIO.jpg"
import Encarte4 from "../../assets/ENCARTE-PARCEIRAO-MAIO2.jpg"
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>

            <img src={Encarte3} alt="Encarte3" />
            <img src={Encarte4} alt="Encarte4" />
            <h3 className="text-light bg-primary">OFERTAS VÁLIDAS DE <strong>30.ABR A 04.MAI DE 2025</strong></h3>

          <Link 
            target="_blank"
            to="https://drive.google.com/drive/folders/1AlLyojjIG41AMrJc-_-aCtztK5tEKoYZ"
            className="d-flex justify-content-center btn-encarte"
          >
            BAIXE NOSSO ENCARTE
          </Link>
        </div>

    </Container>
    
    </> );
}
 
export default Offers;