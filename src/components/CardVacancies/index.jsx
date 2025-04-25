const CardVacancies = ({ imagem, titulo, detalhes }) => {
  return (
    <div className="card-vaga expanded">
      <img src={imagem} alt={titulo} className="imagem-vaga" />

      <h5 className="titulo-vaga">{titulo}</h5>

      <div className="detalhes-vaga">
        <h5 className="text-center bg-danger p-1 border-2">Detalhes da vaga</h5>
        {detalhes.split('\n').map((linha, i) => (
          <p key={i}>{linha}</p>
        ))}
      </div>
    </div>
  );
};

export default CardVacancies;
