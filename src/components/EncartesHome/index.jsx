import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MascoteEncarte from "../../assets/mascote-encarte.png";
import { Container, Row, Col } from "react-bootstrap";

const EncartesHome = () => {
  return (
    <>
        <Container>
            <Row className="p-5">
                <Col>
                    <img src={MascoteEncarte} alt="Mascote Encarte" />
                </Col>
                
                <Col className="conteudo-encartes">
                    <h3 className="titulo-encarte">Encartes</h3>
                    <h3 className="subtitulo-encartes">Confira as ofertas do Medeiros Supermercado</h3>
                    <div className="btn-ofertas">OFETAS DA SEMANA</div>
                </Col>
            </Row>
        </Container>
    </>
  )
}
export default EncartesHome;
