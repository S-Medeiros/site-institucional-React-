import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import CardVacancies from "../../components/CardVacancies";
import jobsData from "../../data/jobsData";

const PageWork = () => {
  const [visiveis, setVisiveis] = useState({});

  const toggleLoja = (nome) => {
    setVisiveis((prev) => ({ ...prev, [nome]: !prev[nome] }));
  };

  return (
    <Container className="p-5 d-flex flex-column gap-5">
      <div className="text-dark-green">
        <h1>{jobsData.descricaoGeral.titulo}</h1>
        <h2>{jobsData.descricaoGeral.subtitulo}</h2>
      </div>
      <h4>
        Envie seu currículo para o E-MAIL <br />
        <span className="clubeSpan">{jobsData.descricaoGeral.email}</span>
      </h4>

      {jobsData.lojas.map((loja, index) => (
        <div key={index}>
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="m-0">{loja.nome}</h3>
            <Button
              variant="outline-success"
              onClick={() => toggleLoja(loja.nome)}
              size="sm"
            >
              {visiveis[loja.nome] ? "Ocultar vagas" : "Mostrar vagas"}
            </Button>
          </div>

          {visiveis[loja.nome] && (
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
              {loja.vagas.length > 0 ? (
                loja.vagas.map((vaga, idx) => (
                  <CardVacancies
                    key={idx}
                    imagem={vaga.imagem}
                    titulo={vaga.titulo}
                    detalhes={vaga.detalhes}
                  />
                ))
              ) : (
                <h4 className="red-color-text">Sem vagas abertas no momento.</h4>
              )}
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};

export default PageWork;
