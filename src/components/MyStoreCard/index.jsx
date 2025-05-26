
import { Link } from "react-router-dom";

const MyStoreCard = ({endereco, horario, telefone}) => {
    return ( <>
            <div className="card-mystore">
                <div className=".content-card-store">
                    <p><strong>Endereço:</strong> {endereco}</p>
                    <p><strong>Horario de funcionamento:</strong> {horario}</p>
                    <p><strong>Tel:</strong> {telefone}</p>

                </div>
                
                    <Link
                    className="d-flex justify-content-center btn-card"
                    to="./lojas" 
                    target="_blank"
                    >
                        VER LOJA
                    </Link>

            </div>
    </> );
}
 
export default MyStoreCard;