


const Store__pageStore = ({imagem, endereco, localizacao}) => {
    return ( <>

        <div className="card-loja">
            <div className="">
                <img src={imagem} alt="fachada loja" className="imagem-card-loja"/>
            </div>

            <div class="d-flex flex-column align-items-center justify-content-center conteudo-card-loja">
                <div className="d-flex align-items-center gap-2">
                    <ion-icon name="location-sharp"></ion-icon>
                    <p className="white-color-text">{endereco}</p>
                </div>
                
                <a class="btn-card-store" href={localizacao} target="_blank">Como chegar</a>
            </div>
        </div>
    </> );
}
 
export default Store__pageStore;