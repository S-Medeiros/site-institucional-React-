import { Container } from "react-bootstrap";
import EncarteSemanal1 from "../../assets/01.jpg"
import EncarteSemanal2 from "../../assets/02.jpg"
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
            <img src={EncarteSemanal1} alt="Encarte1" className="img-fluid "/>
            <img src={EncarteSemanal2} alt="Encarte2" className="img-fluid "/>
            {/* <h3 className="text-light bg-primary">Encarte semanal - Ofertas validas de <strong>05 de Maio até o dia 11 de Maio</strong> de 2025</h3> */}


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