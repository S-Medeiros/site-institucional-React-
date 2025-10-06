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
          titulo: "OPERADOR DE CAIXA (ESTÁGIO)",
          detalhes: "Atividades: Registra vendas, recebe pagamentos e fornece troco aos clientes.",
          imagem: trabalheConosco,
        },
        {
          titulo: "EMPACOTADOR",
          detalhes: "Responsável por embalar as compras dos clientes, garantindo a organização e a qualidade dos produtos.",
          imagem: trabalheConosco,
        },
        {
          titulo: "PREVENÇÃO DE PERDAS",
          detalhes: "Monitora a loja para evitar furtos, perdas e garantir a segurança.",
          imagem: trabalheConosco,
        },
        {
          titulo: "AUX. DEPOSITO",
          detalhes: "Auxilia na organização, movimentação e controle de mercadorias no depósito.",
          imagem: trabalheConosco,
        },
      ],
    },
    {
      nome: "Loja 2 - Pref. José Walter Av. I",
      vagas: [
        {
          titulo: "AUX. DEPOSITO",
          detalhes: "Auxilia na organização, movimentação e controle de mercadorias no depósito.",
          imagem: trabalheConosco,
        },
        {
          titulo: "REPOSITOR DE FLV",
          detalhes: "Cuida da organização, reposição e qualidade de frutas, verduras e legumes.",
          imagem: trabalheConosco,
        },
        {
          titulo: "ESTAGIARIO",
          detalhes: "Auxilia nas atividades diárias da loja, aprendendo sobre o funcionamento do setor e contribuindo com tarefas diversas.",
          imagem: trabalheConosco,
        },
        {
          titulo: "ENTREGADOR (HORISTA)",
          detalhes: "Realiza a entrega de mercadorias aos clientes, garantindo a pontualidade e a qualidade no atendimento.",
          imagem: trabalheConosco,
        },
        {
          titulo: "REPOSITOR (APRENDIZ)",
          detalhes: "Organiza e repõe produtos nas prateleiras da loja.",
          imagem: trabalheConosco,
        },
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
          titulo: "FRENTE DE LOJA",
          detalhes: "Responsável pelo auxilio aos operadores e gerente de loja. Realiza sangria, cancelamentos e atendimento ao cliente.",
          imagem: trabalheConosco,
        },
        {
          titulo: "REPOSITOR",
          detalhes: "Organiza e repõe produtos nas prateleiras da loja.",
          imagem: trabalheConosco,
        },
      ],
    },
    {
      nome: "Loja 5 - Conj. Palmeiras",
      vagas: [
        {
          titulo: "PREVENÇÃO DE PERDAS",
          detalhes: "Monitora a loja para evitar furtos, perdas e garantir a segurança.",
          imagem: trabalheConosco,
        },
      ],
    },
  ],
};

export default jobsData;
