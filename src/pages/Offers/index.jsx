import { Container } from "react-bootstrap";
import EncarteSemanal1 from "../../assets/encartes/01.jpeg";
import EncarteSemanal5 from "../../assets/encartes/05.jpeg";
/*import EncarteSemanal3 from "../../assets/encartes/03.png";
import EncarteSemanal4 from "../../assets/encartes/04.png";
import EncarteSemanal5 from "../../assets/encartes/05.jpeg";
import EncarteSemanal7 from "../../assets/encartes/07.jpeg";
import EncarteSemanal8 from "../../assets/encartes/08.jpeg";
import EncarteSemanal9 from "../../assets/encartes/09.jpeg";
import EncarteSemanal10 from "../../assets/encartes/010.jpeg";*/
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
              <img src={EncarteSemanal1} alt="Encarte1" className="img-fluid"/>
             

              

              <img src={EncarteSemanal5} alt="Encarte5" className="img-fluid"/>

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