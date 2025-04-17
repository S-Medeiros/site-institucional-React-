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
      <Container className="d-flex container-baixe-app text-center">


        <Row className="d-flex">
          <Col className="d-flex flex-coloum justify-content-center" sm={12} md={12} lg={4}>
            <Col className="d-flex align-items-center gap-3" sm={12} md={12} lg={12}>
              <p className="paragrafo-app">
                FAÇA SUAS COMPRAS NO MEDEIROS SUPERMERCADO SEM SAIR DE CASA
              </p>
              <img
                src={LogoApp}
                alt="logo app"
                className="img-logo-app mb-3" style={{ width: "100px" }}
              />
            </Col>
          </Col>
          <Col className="d-flex" sm={12} md={12} lg={4}>
            <Col sm={12} md={4} lg={12} className="text-center d-flex align-items-center">
              <p className="paragrafo-app">BAIXE O APLICATIVO: MEDEIROS SUPERMERCADO</p>
            </Col>
          </Col>
          <Col className="botao-mascote-store" sm={12} md={12} lg={4}>
            <Col sm={4} md={4} lg={4} className="text-center">
              <div className="botao-store">
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
          
            <Col md={6} className="text-center">
              <img
                src={MascoteApp}
                alt="mascote app"
                className="img-mascote-app"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BaixeApp;
