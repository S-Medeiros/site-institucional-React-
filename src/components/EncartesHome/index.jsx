import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MascoteEncarte from "../../assets/mascote-encarte.png";
import CestaDeFrutas from "../../assets/cesta-de-frutas.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const EncartesHome = () => {
  return (
    <>
        <Container>
            <Row className="p-5 d-flex gap-5 justify-content-center">
                <Col sm={6} md={6} lg={2} className="d-flex justify-content-center">
                    <img className="mascote-encarte hide-mobile" src={MascoteEncarte} alt="Mascote Encarte" />
                </Col>
                
                <Col sm={6} md={6} lg={4} className="conteudo-encartes d-flex justify-content-center">
                    <h3 className="titulo-encarte">Encartes</h3>
                    <h3 className="subtitulo-encartes">Confira as ofertas do Medeiros Supermercado</h3>

                    <div>
                      <Link
                      target="_blank"
                      to="/ofertas"
                      className="btn-encarte border-success">
                        OFERTAS DA SEMANA
                      </Link>
                    </div>

                    <div className="hide-mobile cesta-frutas">
                        <img className="cesta-frutas-img" src={CestaDeFrutas} alt="cesta de frutas" />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
export default EncartesHome;
