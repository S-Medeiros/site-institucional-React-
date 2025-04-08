import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoApp from "../../assets/logo.png"; // Importação do logo do app
import AppStore from "../../assets/app-store.png"; // Importação do logo da App Store
import PlayStore from "../../assets/play-store.png"; // Importação do logo da Play Store
import MascoteApp from "../../assets/baixe-agora.png"; // Importação do mascote do app

const BaixeApp = () => {
  return (
    <section className="secao-baixe-app">
      <Container className="container-baixe-app text-center">


        <Row className="d-flex justify-content-center">
          <Col className="d-flex align-items-center" md={12} lg={12}>
            <p className="paragrafo-app">
              FAÇA SUAS COMPRAS NO MEDEIROS SUPERMERCADO SEM SAIR DE CASA
            </p>
            <img
              src={LogoApp}
              alt="logo app"
              className="img-logo-app mb-3" style={{ width: "100px" }}
            />
          </Col>
        </Row>

        <Row className="d-flex">
          <Col md={2} lg={2} className="text-center">
            <p className="paragrafo-app">BAIXE O APLICATIVO: MEDEIROS</p>
          </Col>
        </Row>


        <Row className="botao-mascote-store align-items-center">
          <Col md={4} className="text-center">
            <div className="botao-store d-flex flex-column">
              <a
                href="https://apps.apple.com/br/app/medeiros/id1383747653"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={AppStore}
                  alt="app store"
                  className="img-logo-app"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=mercadapp.fgl.com.medeiros&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={PlayStore}
                  alt="play store"
                  className="img-logo-app mt-2"
                />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <img
              src={MascoteApp}
              alt="mascote app"
              className="img-mascote-app"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BaixeApp;
