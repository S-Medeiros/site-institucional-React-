import { Container } from "react-bootstrap";
import EncarteSemanal0 from "../../assets/encartes/00-carnes.jpeg";
import EncarteSemanal1 from "../../assets/encartes/01-carnes.jpeg";
import EncarteSemanal2 from "../../assets/encartes/02-carnes.jpeg";
import EncarteSemanal3 from "../../assets/encartes/03-carnes.jpeg";
import EncarteSemanal4 from "../../assets/encartes/04-carnes.jpeg";
import EncarteSemanal5 from "../../assets/encartes/00-flv.jpeg";
import EncarteSemanal6 from "../../assets/encartes/01-flv.jpeg";
import EncarteSemanal7 from "../../assets/encartes/02-flv.jpeg";
import EncarteSemanal8 from "../../assets/encartes/03-flv.jpeg";
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="d-flex flex-column gap-5" >
            <h1 className="text-dark-green">Confira os nossos encartes de oferta!</h1>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal0} alt="Encarte0" className="img-fluid"/>
                <img src={EncarteSemanal1} alt="Encarte1" className="img-fluid"/>
              </div>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal2} alt="Encarte2" className="img-fluid"/>
                <img src={EncarteSemanal3} alt="Encarte3" className="img-fluid"/>
              </div>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal4} alt="Encarte4" className="img-fluid"/>
                <img src={EncarteSemanal5} alt="Encarte5" className="img-fluid"/>
              </div>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal6} alt="Encarte6" className="img-fluid"/>
                <img src={EncarteSemanal7} alt="Encarte7" className="img-fluid"/>
              </div>
              <img src={EncarteSemanal8} alt="Encarte8" className="img-fluid"/>

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