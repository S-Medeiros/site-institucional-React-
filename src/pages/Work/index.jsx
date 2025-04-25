import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import CardVacancies from "../../components/CardVacancies/index.jsx";
import Vaga1 from "../../assets/Frame2.jpg";

const detalhesTexto = `Atividades: Realizar o atendimento aos clientes usando os sistemas da loja...`;
const detalhesTexto2 = `Atividades: Organizar e repor mercadorias nas gôndolas, prateleiras...`;
const detalhesTexto3 = `Atividades: Receber, analisar e classificar documentos de contas a pagar...`;

// Estrutura com todas as lojas e vagas
const lojas = [
  {
    nome: "Loja 1 - Pref. José Walter Av. J",
    vagas: [
      { titulo: "OPERADOR DE CAIXA (ESTÁGIO)", detalhes: detalhesTexto2 },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesTexto3 },
      { titulo: "(PCD)", detalhes: detalhesTexto },
      { titulo: "ASSISTENTE FINANCEIRO", detalhes: detalhesTexto3 },
    ],
  },
  {
    nome: "Loja 2 - Pref. José Walter Av. I",
    vagas: [
      { titulo: "AJUDANTE DE ENTREGA", detalhes: detalhesTexto2 },
      { titulo: "REPOSITOR", detalhes: detalhesTexto },
      { titulo: "BALCONISTA DE FRIOS", detalhes: detalhesTexto2 },
      { titulo: "OPERADOR DE CAIXA (HORISTA)", detalhes: detalhesTexto2 },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesTexto2 },
    ],
  },
  {
    nome: "Loja 3 - Pacatuba",
    vagas: [],
  },
  {
    nome: "Loja 4 - Siqueira",
    vagas: [
      { titulo: "OPERADOR DE CAIXA", detalhes: detalhesTexto2 },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesTexto3 },
      { titulo: "REPOSITOR FLV", detalhes: detalhesTexto },
      { titulo: "ESTAGIARIO", detalhes: detalhesTexto2 },
      { titulo: "APRENDIZ", detalhes: detalhesTexto2 },
    ],
  },
  {
    nome: "Loja 5 - Conj. Palmeiras",
    vagas: [
      { titulo: "APRENDIZ", detalhes: detalhesTexto2 },
      { titulo: "OP.CAIXA (ESTÁGIO / INTEGRAL)", detalhes: detalhesTexto },
      { titulo: "PREVENÇÃO DE PERDAS", detalhes: detalhesTexto3 },
      { titulo: "AUX. DEPOSITO", detalhes: detalhesTexto3 },
      { titulo: "REPOSITOR DE FRIOS", detalhes: detalhesTexto3 },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesTexto3 },
    ],
  },
];

const PageWork = () => {
  const [visiveis, setVisiveis] = useState({});

  const toggleLoja = (nome) => {
    setVisiveis((prev) => ({ ...prev, [nome]: !prev[nome] }));
  };

  return (
    <Container className="p-5 d-flex flex-column gap-5">
      <div className="text-dark-green">
        <h1>Venha fazer parte da família Medeiros!</h1>
        <h2>Oportunidades abertas:</h2>
      </div>

      {lojas.map((loja, index) => (
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
                    imagem={Vaga1}
                    titulo={vaga.titulo}
                    detalhes={vaga.detalhes}
                  />
                ))
              ) : (
                <h4>Sem vagas abertas no momento.</h4>
              )}
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};

export default PageWork;
