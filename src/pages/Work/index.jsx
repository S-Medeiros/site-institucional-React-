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
        <Container className="p-5 d-flex flex-column gap-5">
            <div className="text-dark-green">
                <h1>Venha fazer parte da família Medeiros!</h1>
                <h2>Oportunidades abertas:</h2>
            </div>

            {/* Vagas Pref. José Walter Av. J */}
            <div className="">
              <h3>Vagas Pref. José Walter Av. J :</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              
                <CardVacancies
                    imagem={Vaga1}
                    titulo="OPERADOR DE CAIXA (ESTÁGIO)"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="FRENTE DE LOJA"
                    detalhes={detalhesTexto3}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="(PCD)"
                    detalhes={detalhesTexto}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="ASSISTENTE FINANCEIRO"
                    detalhes={detalhesTexto3}
                  />
                  
              </div>
            </div>

            {/* Vagas Pref. José Walter Av. I */}
            <div className=""> 
              <h3>Vagas Pref. José Walter Av. I :</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              
                  <CardVacancies
                    imagem={Vaga1}
                    titulo="AJUDANTE DE ENTREGA"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="REPOSITOR"
                    detalhes={detalhesTexto}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="BALCONISTA DE FRIOS"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="OPERADOR DE CAIXA (HORISTA)"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="FRENTE DE LOJA"
                    detalhes={detalhesTexto2}
                  />


              </div>
            </div>

            {/* Vagas para loja 3 Jereissati-Pacayuba  */}
            <div>
            <div className="">
              <h3>Vagas para loja 3 - Pacatuba:</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              
                <h4>Sem vagas abertas no momento.</h4>

              </div>
            </div>
            </div>

          {/* Vagas para lojas 04 Siqueira */} 
            <div className="">
              <h3>Vagas para loja 4 - Siqueira:</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              
                  <CardVacancies
                    imagem={Vaga1}
                    titulo="OPERADOR DE CAIXA"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="FRENTE DE LOJA"
                    detalhes={detalhesTexto3}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="REPOSITOR FLV"
                    detalhes={detalhesTexto}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="ESTAGIARIO"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="APRENDIZ"
                    detalhes={detalhesTexto2}
                  />

              </div>
            </div>

            {/* Vagas para Conj. Palmeiras */}
            <div className=""> 
              <h3>Vagas para loja 5 - Conj. Palmeiras :</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
              
                  <CardVacancies
                    imagem={Vaga1}
                    titulo="APRENDIZ"
                    detalhes={detalhesTexto2}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="OP.CAIXA (ESTÁGIO / INTEGRAL)"
                    detalhes={detalhesTexto}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="PREVENÇÃO DE PERDAS"
                    detalhes={detalhesTexto3}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="AUX. DEPOSITO"
                    detalhes={detalhesTexto3}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="REPOSITOR DE FRIOS"
                    detalhes={detalhesTexto3}
                  />

                  <CardVacancies
                    imagem={Vaga1}
                    titulo="FRENTE DE LOJA"
                    detalhes={detalhesTexto3}
                  />
              </div>
            </div>


        </Container>
    </> );
}
 
export default PageWork;