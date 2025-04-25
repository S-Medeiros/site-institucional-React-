import { Container } from "react-bootstrap";
import mascote from "../../assets/mascote.png"
import { Link } from "react-router-dom";

const ClubeDeDesconto = () => {
    return ( <>
    
        <Container>
            <div className="d-flex align-items-center justify-content-center p-5">
                <div className="d-flex flex-column gap-5">
                    <h1>Cadastre-se <span className="clubeSpan"><br />GRÁTIS</span> para economizar <sapn className="clubeSpan">MAIS!</sapn></h1>
                    <Link
                      target="_blank"
                      to="https://cadastramento-medeiros.mercafacil.com/home"
                      className="btn-encarte d-flex justify-content-center border border-success"
                    >
                      Cadastre-se agora
                    </Link>
                        
                </div>

                <img src={mascote} alt="mascote" className="w-25" />
            </div>
        </Container>


    
    </> );
}
 
export default ClubeDeDesconto;