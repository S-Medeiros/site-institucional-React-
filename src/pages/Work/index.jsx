import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import CardVacancies from "../../components/CardVacancies/index.jsx";
import Vaga1 from "../../assets/Frame2.jpg";
import trabalheConosco from "../../assets/trabalhe-conosco-mascote.jpg"

const detalhesOpCaixa = `Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.`;
const detalhesFrenteDeLoja = `Responsável pelo auxilio aos operadores e gerente de loja. Realiza sangria, cancelamentos e atendimento ao cliente.`;
const detalhesAjudanteEntregas = `Auxilia na carga, descarga e entrega de mercadorias.`;
const detalhesRepositor = `Organiza e repõe produtos nas prateleiras da loja.`
const detalhesRepositorFlv = `Cuida da organização, reposição e qualidade de frutas, verduras e legumes.`
const detalhesPrevencao = `Monitora a loja para evitar furtos, perdas e garantir a segurança.`
const detalhesAuxDeposito = `Auxilia na organização, movimentação e controle de mercadorias no depósito.`
const detalhesFinanceiro = `Auxilia nas atividades financeiras, como contas a pagar/receber, lançamentos e organização de documentos.`
const detalhesBalconistaFrios = `Atender clientes no balcão de frios, manter a organização e a higiene do balcão, garantindo a correta exposição e conservação dos queijos, embutidos e outros itens., informações e realizando a pesagem e embalagem.`
const detalhesEmpacotador = `Responsável por embalar as compras dos clientes, garantindo a organização e a qualidade dos produtos.`;


// Estrutura com todas as lojas e vagas
const lojas = [
  {
    nome: "Loja 1 - Pref. José Walter Av. J",
    vagas: [
      { titulo: "OPERADOR DE CAIXA (ESTÁGIO)", detalhes: detalhesOpCaixa },
      { titulo: "EMPACOTADOR", detalhes: detalhesEmpacotador },
      { titulo: "PREVENÇÃO DE PERDAS", detalhes: detalhesPrevencao },
      { titulo: "AUX. DEPOSITO", detalhes: detalhesAuxDeposito },
    ],
  },
  {
    nome: "Loja 2 - Pref. José Walter Av. I",
    vagas: [
      { titulo: "AJUDANTE DE ENTREGA", detalhes: detalhesAjudanteEntregas },
      { titulo: "REPOSITOR", detalhes: detalhesRepositor },
      { titulo: "BALCONISTA DE FRIOS", detalhes: detalhesBalconistaFrios },
      { titulo: "OPERADOR DE CAIXA (HORISTA)", detalhes: detalhesOpCaixa },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesFrenteDeLoja },
    ],
  },
  {
    nome: "Loja 3 - Pacatuba",
    vagas: [],
  },
  {
    nome: "Loja 4 - Siqueira",
    vagas: [
      { titulo: "OPERADOR DE CAIXA", detalhes: detalhesOpCaixa },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesFrenteDeLoja },
      { titulo: "REPOSITOR FLV", detalhes: detalhesRepositorFlv },
      { titulo: "ESTAGIARIO", detalhes: detalhesOpCaixa },
      { titulo: "APRENDIZ", detalhes: detalhesPrevencao },
    ],
  },
  {
    nome: "Loja 5 - Conj. Palmeiras",
    vagas: [
      { titulo: "APRENDIZ", detalhes: detalhesPrevencao },
      { titulo: "OP.CAIXA (ESTÁGIO / INTEGRAL)", detalhes: detalhesOpCaixa },
      { titulo: "PREVENÇÃO DE PERDAS", detalhes: detalhesPrevencao },
      { titulo: "AUX. DEPOSITO", detalhes: detalhesAuxDeposito },
      { titulo: "REPOSITOR DE FRIOS", detalhes: detalhesRepositor },
      { titulo: "FRENTE DE LOJA", detalhes: detalhesFrenteDeLoja },
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
      <h4>Envie seu currículo para o E-MAIL <br /><span className="clubeSpan" >vagas@medeirossupermercado.com.br</span></h4>

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
                    imagem={trabalheConosco}
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
