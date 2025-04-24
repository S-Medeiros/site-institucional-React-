import { Container } from "react-bootstrap";
import CardVacancies from "../../components/CardVacancies/index.jsx";
import Vaga1 from "../../assets/Frame2.jpg";

const detalhesTexto = `
Atividades: Realizar o atendimento aos clientes usando os sistemas da loja

Local: Mercantil Medeiros

Disponibilidade de horários: 44 horas semanais

Desejável: Ter 18 anos ou mais; Ensino médio completo;

Remuneração Salarial: De acordo com o Plano de Cargos e Salários.

Prazo para envio dos currículos: Sem prazo definido

*Enviar com telefone atualizado*
`;

const detalhesTexto2 = `
Atividades: Organizar e repor mercadorias nas gôndolas, prateleiras e demais áreas de exposição da loja, seguindo o layout estabelecido.

Local: Mercantil Medeiros Filial Pacatuba

Disponibilidade de horários: 44 horas semanais

Desejável: Ter 18 anos ou mais; Ensino médio completo;

Remuneração Salarial: De acordo com o Plano de Cargos e Salários.

Prazo para envio dos currículos: Sem prazo definido

*Enviar com telefone atualizado*
`;

const detalhesTexto3 = `
Atividades: Receber, analisar e classificar documentos de contas a pagar, como boletos, notas fiscais e faturas.
Realizar o lançamento e o controle de todas as obrigações financeiras da empresa no sistema de gestão.
Preparar e executar os pagamentos aos fornecedores, garantindo o cumprimento dos prazos e condições negociadas.

Local: Mercantil Medeiros Filial José Walter (Matriz)

Disponibilidade de horários: 44 horas semanais

Desejável: Ter 18 anos ou mais; Ensino médio completo;

Remuneração Salarial: De acordo com o Plano de Cargos e Salários.

Prazo para envio dos currículos: Sem prazo definido

*Enviar com telefone atualizado*
`;

const PageWork = () => {
    return ( <>
        <Container className="p-5">
            <div className="text-dark-green">
                <h1>Venha fazer parte da família Medeiros!</h1>
                <h2>Oportunidades abertas:</h2>
            </div>



            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                <CardVacancies
                  imagem={Vaga1}
                  titulo="OPERADOR DE CAIXA"
                  detalhes={detalhesTexto2}
                />
                <CardVacancies
                  imagem={Vaga1}
                  titulo="REPOSITOR"
                  detalhes={detalhesTexto}
                />

                <CardVacancies
                  imagem={Vaga1}
                  titulo="ASSISTENTE FINANCEIRO"
                  detalhes={detalhesTexto3}
                />

                <CardVacancies
                  imagem={Vaga1}
                  titulo="ASSISTENTE FINANCEIRO"
                  detalhes={detalhesTexto3}
                />

                <CardVacancies
                  imagem={Vaga1}
                  titulo="ASSISTENTE FINANCEIRO"
                  detalhes={detalhesTexto3}
                />
            </div>
        </Container>
    </> );
}
 
export default PageWork;