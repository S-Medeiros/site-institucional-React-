import { Link } from "react-router-dom";

const MyStoreCard = ({ store }) => {
  return (
    <div className="card-mystore">
      <div className="content-card-store">
        <p><strong>Endereço:</strong> {store.endereco}</p>
        <p><strong>Horário de funcionamento:</strong> {store.horario}</p>
        <p><strong>Tel:</strong> {store.telefone}</p>
      </div>

      <Link
        className="d-flex justify-content-center btn-card"
        to={store.link}
        target="_blank"
      >
        VER LOJA
      </Link>
    </div>
  );
};

export default MyStoreCard;
