
import { Link } from "react-router-dom";

const MyStoreCard = ({endereco, horario}) => {
    return ( <>
            <div className="card-mystore">
                <div className=".content-card-store">
                    <p><strong>Endereço:</strong> {endereco}</p>
                    <p><strong>Horario de funcionamento:</strong> {horario}</p>
                    <p><strong>Tel:</strong> (85)3291-2233</p>
                    
                </div>
                
                    <Link className="d-flex justify-content-center" to="./lojas">
                        <button className="btn-card">VER LOJA</button>
                    </Link>

            </div>
    </> );
}
 
export default MyStoreCard;