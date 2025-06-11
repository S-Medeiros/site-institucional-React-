import { Container } from "react-bootstrap";
import EncarteSemanal1 from "../../assets/01.jpg"
import EncarteSemanal2 from "../../assets/02.jpg"
import EncarteSemanal3 from "../../assets/001.jpg"
import EncarteSemanal4 from "../../assets/002.jpg"
import EncarteSemanal5 from "../../assets/003.jpg"
import EncarteSemanal6 from "../../assets/004.png"
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
            <img src={EncarteSemanal3} alt="Encarte3" className="img-fluid "/>
            <img src={EncarteSemanal4} alt="Encarte4" className="img-fluid "/>
            <img src={EncarteSemanal5} alt="Encarte5" className="img-fluid "/>
            <img src={EncarteSemanal6} alt="Encarte6" className="img-fluid "/>


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