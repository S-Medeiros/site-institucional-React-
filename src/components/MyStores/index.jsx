import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import storesData from "../../data/storesData"; // ajuste conforme seu caminho
import MyStoreCard from "../MyStoreCard";

const MyStores = () => {
  return (
    <section className="custom-more-dark-green p-5">
      <div className="container">
        <div className="d-flex flex-wrap">
          {/* Coluna do título */}
          <div className="col-12 col-lg-2 mb-4">
            <h3 className="titulo-secao-lojas">
              Nossas <br />
              <span className="strong-titulo-store">Lojas</span>
            </h3>
          </div>

          {/* Coluna dos cards - dinamicamente via JSON */}
          <div className="col-12 col-lg-10 d-flex gap-4 flex-wrap">
            {storesData.map((store) => (
              <MyStoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStores;
