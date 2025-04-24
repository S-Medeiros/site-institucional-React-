import { Container, Row, Col } from "react-bootstrap";
import Store__pageStore from "../../components/Store__pageStore/index.jsx";
import Loja01 from "../../assets/loja_01.jpg"
import Loja02 from "../../assets/loja_02.jpg"
import Loja03 from "../../assets/loja_03.jpeg"
import Loja04 from "../../assets/loja_04.jpeg"

const PageStore = () => {
  return (
    <Container className="mb-5">
      <h1 className="text-dark-green pb-5 mt-5 text-center">
        Encontre nossa loja mais próxima de você!
      </h1>

      <Row className="g-4 justify-content-center">
        <Col xs={12} xl={6}>
          <Store__pageStore
            imagem={Loja01}
            endereco="Endereço: Av. J, 130 - Pref. José Walter, Fortaleza - CE"
            localizacao="https://maps.app.goo.gl/ku4fR96rSrr2sRwk6"
          />
        </Col>
        <Col xs={12} xl={6}>
          <Store__pageStore
            imagem={Loja02}
            endereco="Endereço: Av. I, 1313 - Pref. José Walter, Fortaleza - CE"
            localizacao="https://maps.app.goo.gl/ku4fR96rSrr2sRwk6"
          />
        </Col>
        <Col xs={12} xl={6}>
          <Store__pageStore
            imagem={Loja03}
            endereco="Endereço: Av. XX, n 230 - Cj - Jereissati II, Pacatuba - CE"
            localizacao="https://maps.app.goo.gl/wk2upoHmCNjz8XgJ8"
          />
        </Col>
        <Col xs={12} xl={6}>
          <Store__pageStore
            imagem={Loja04}
            endereco="Endereço: R. Gen. Rabelo, 447 - Siqueira, Fortaleza - CE"
            localizacao="https://maps.app.goo.gl/6ABSApyN1iz8Sngn9"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PageStore;
