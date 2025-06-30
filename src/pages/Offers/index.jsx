import { Container } from "react-bootstrap";
import EncarteSemanal1 from "../../assets/01.jpeg"
import EncarteSemanal2 from "../../assets/02.jpeg"
import EncarteSemanal3 from "../../assets/03.jpeg"
import EncarteSemanal4 from "../../assets/04.jpeg"
import EncarteSemanal5 from "../../assets/05.jpeg"
import EncarteSemanal6 from "../../assets/06.jpeg"
import EncarteSemanal7 from "../../assets/07.jpeg"
import EncarteSemanal8 from "../../assets/08.jpeg"
import EncarteSemanal9 from "../../assets/09.jpeg"

import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
            <img src={EncarteSemanal1} alt="Encarte1" className="img-fluid "/>
            <img src={EncarteSemanal2} alt="Encarte2" className="img-fluid "/>
            <img src={EncarteSemanal3} alt="Encarte3" className="img-fluid "/>
            <img src={EncarteSemanal4} alt="Encarte4" className="img-fluid "/>
            <img src={EncarteSemanal5} alt="Encarte5" className="img-fluid "/>
            <img src={EncarteSemanal6} alt="Encarte6" className="img-fluid "/>
            <img src={EncarteSemanal7} alt="Encarte7" className="img-fluid "/>
            <img src={EncarteSemanal8} alt="Encarte8" className="img-fluid "/>
            <img src={EncarteSemanal9} alt="Encarte9" className="img-fluid "/>


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