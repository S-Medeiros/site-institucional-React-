import { useState } from 'react';

const CardVacancies = ({ imagem, titulo, detalhes }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className={`card-vaga ${showDetails ? 'expanded' : ''}`}>
      <img src={imagem} alt={titulo} className="imagem-vaga" />

      <h5 className="titulo-vaga">{titulo}</h5>

      <button className="botao-detalhes" onClick={toggleDetails}>
        DETALHES
      </button>

      {showDetails && (
        <div className="detalhes-vaga">
          {detalhes.split('\n').map((linha, i) => (
            <p key={i}>{linha}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardVacancies;
