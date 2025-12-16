import { Container } from "react-bootstrap";
import EncarteSemanal1 from "../../assets/encartes/01.jpg";
import EncarteSemanal2 from "../../assets/encartes/02.jpg";
import EncarteSemanal3 from "../../assets/encartes/03.jpg";
import EncarteSemanal4 from "../../assets/encartes/04.png";
import EncarteSemanal5 from "../../assets/encartes/1CARNE.png";
import EncarteSemanal6 from "../../assets/encartes/2CARNE.png";
import EncarteSemanal7 from "../../assets/encartes/3CARNE.png";
import EncarteSemanal8 from "../../assets/encartes/4CARNE.png";
import EncarteSemanal9 from "../../assets/encartes/5CARNE.png";
import EncarteSemanal10 from "../../assets/encartes/clube01.jpg";
import EncarteSemanal11 from "../../assets/encartes/clube02.jpg";
import EncarteSemanal12 from "../../assets/encartes/clube03.jpg";
import EncarteSemanal13 from "../../assets/encartes/clube04.jpg";
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="d-flex flex-column gap-5" >
            <h1 className="text-dark-green">Confira os nossos encartes de oferta!</h1>
              <img src={EncarteSemanal1} alt="Encarte1" className="img-fluid"/>
              <img src={EncarteSemanal2} alt="Encarte2" className="img-fluid"/>
              <img src={EncarteSemanal3} alt="Encarte3" className="img-fluid"/>
              <img src={EncarteSemanal4} alt="Encarte4" className="img-fluid"/>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal5} alt="Encarte5" className="img-fluid"/>
                <img src={EncarteSemanal6} alt="Encarte6" className="img-fluid"/>
              </div>
              <div className="d-flex w-50 gap-3">
                <img src={EncarteSemanal7} alt="Encarte7" className="img-fluid"/>
                <img src={EncarteSemanal8} alt="Encarte8" className="img-fluid"/>
              </div>
              <img src={EncarteSemanal9} alt="Encarte9" className="img-fluid"/>
              <img src={EncarteSemanal10} alt="Encarte10" className="img-fluid"/>
              <img src={EncarteSemanal11} alt="Encarte11" className="img-fluid"/>
              <img src={EncarteSemanal12} alt="Encarte12" className="img-fluid"/>
              <img src={EncarteSemanal13} alt="Encarte13" className="img-fluid"/>
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