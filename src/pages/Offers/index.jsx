import { Container } from "react-bootstrap";
import Encarte1 from "../../assets/24-27fev1.jpeg"
import Encarte2 from "../../assets/24-27fev2.jpeg"


const Offers = () => {
    return ( <>
    <Container className="p-5">
        <div className="p-5 d-flex flex-column gap-5" >
            <h1 className="text-dark-green ">Confira os nossos encartes de oferta</h1>
            <img src={Encarte1} alt="Encarte1" className="img-fluid "/>
            <h3 className="text-light bg-primary">Ofertas validas até o dia: 23/04/2025</h3>
            <img src={Encarte2} alt="Encarte2" className="img-fluid "/>
        </div>

    </Container>
    
    </> );
}
 
export default Offers;