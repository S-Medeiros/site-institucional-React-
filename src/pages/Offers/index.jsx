import { Container } from "react-bootstrap";
import Of_flv1 from "../../assets/01.png";
import Of_flv2 from "../../assets/02.png";
import Of_flv3 from "../../assets/03.png";
import Of_flv4 from "../../assets/04.png";
import Encarte1 from "../../assets/encarte-01.jpg";
import Encarte2 from "../../assets/encarte-02.jpg";
import Encarte3 from "../../assets/encarte-03.jpg"
import Encarte4 from "../../assets/encarte-04.jpg"
import EncarteSemanal1 from "../../assets/ENCARTE_SEMANAL_02_page-0001.jpg"
import EncarteSemanal2 from "../../assets/ENCARTE_SEMANAL_02_page-0002.jpg"
import { Link } from "react-router-dom";


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >


            <h1 className="text-dark-green ">Confira os nossos encartes de oferta!</h1>
            <img src={Encarte1} alt="Encarte1" className="img-fluid "/>
            <img src={Encarte2} alt="Encarte2" />
            <img src={Encarte3} alt="Encarte3" />
            <img src={Encarte4} alt="Encarte4" />
            <h3 className="text-light bg-primary">Encarte Mensal - Ofertas validas de <strong>05 de Maio até o dia 11 de Maio</strong> de 2025</h3>

            <div className="d-flex gap-2 flex-wrap">
              <div>
                <img className="w-50" src={Of_flv1} alt="Of-FLV" />
                <img className="w-50" src={Of_flv2} alt="Of-FLV" />
              </div>
              <div>
                <img className="w-50" src={Of_flv3} alt="Of-FLV" />
                <img className="w-50" src={Of_flv4} alt="Of-FLV" />
              </div>

              <h3 className="text-light bg-primary">Encarte Clube de descontos - Ofertas validas de <strong>04 a 06 de Maio</strong> de 2025</h3>
            </div>

            <img src={Encarte4} alt="Encarte4" />
            <h3 className="text-light bg-primary">OFERTAS VÁLIDAS DE <strong>30.ABR A 04.MAI DE 2025</strong></h3>

            <img src={EncarteSemanal1} alt="EncarteSemanal" />
            <img src={EncarteSemanal2} alt="EncarteSemanal" />
            <h3 className="text-light bg-primary">OFERTAS VALIDADS DE <strong>04 A 06 DE MAIO DE 2025</strong></h3>

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