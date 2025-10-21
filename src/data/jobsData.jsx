// src/data/jobsData.js

import trabalheConosco from "../assets/trabalhe-conosco-mascote.jpg"; 

const jobsData = {
  descricaoGeral: {
    titulo: "Venha fazer parte da família Medeiros!",
    subtitulo: "Oportunidades abertas:",
    email: "vagas@medeirossupermercado.com.br",
  },
  lojas: [
    {
      nome: "Loja 1 - Pref. José Walter Av. J",
      vagas: [
        {
          titulo: "OPERADOR DE CAIXA",
          detalhes: "Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.",
          imagem: trabalheConosco,
        },
        {
          titulo: "EMPACOTADOR (APRENDIZ)",
          detalhes: "Responsável por embalar as compras dos clientes, garantindo a organização e a qualidade dos produtos.",
          imagem: trabalheConosco,
        },
        {
          titulo: "REPOSITOR DE FRIOS",
          detalhes: "Organiza e repõe produtos nas prateleiras da loja.",
          imagem: trabalheConosco,
        },
        ,
        {
          titulo: "REPOSITOR MERCEARIA",
          detalhes: "Organiza e repõe produtos nas prateleiras da loja.",
          imagem: trabalheConosco,
        }
      ],
    },
    {
      nome: "Loja 2 - Pref. José Walter Av. I",
      vagas: [
        {
          titulo: "OPERADOR DE CAIXA (ESTÁGIO)",
          detalhes: "Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.",
          imagem: trabalheConosco,
        },
        {
          titulo: "ENTREGADOR (HORISTA)",
          detalhes: "Realiza a entrega de mercadorias aos clientes, garantindo a pontualidade e a qualidade no atendimento.",
          imagem: trabalheConosco,
        }
      ],
    },
    {
      nome: "Loja 3 - Pacatuba",
      vagas: [],
    },
    {
      nome: "Loja 4 - Siqueira",
      vagas: [
        {
          titulo: "OPERADOR DE CAIXA",
          detalhes: "Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.",
          imagem: trabalheConosco,
        },
        {
          titulo: "REPOSITOR DE FRIOS",
          detalhes: "Organiza e repõe produtos nas prateleiras da loja.",
          imagem: trabalheConosco,
        },
      ],
    },
    {
      nome: "Loja 5 - Conj. Palmeiras",
      vagas: [
        {
          titulo: "APRENDIZ SETOR QUALIDADE",
          detalhes: "Qualidade: Setor essencial que verifica a qualidade dos produtos, controla o estoque e assegura as condições ideais de armazenamento em nossa loja.",
          imagem: trabalheConosco,
        },
        {
          titulo: "OPERADOR DE CAIXA",
          detalhes: "Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.",
          imagem: trabalheConosco,
        },
      ],
    },
  ],
};

export default jobsData;
