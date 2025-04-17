
const MyStoreCard = ({endereco}) => {
    return ( <>
            <div className="card-mystore">
                <div className=".content-card-store">
                    <p><strong>Endereço:</strong> {endereco}</p>
                    <p><strong>Horario de funcionamento:</strong> Horário de funcionamento todos os dias: 6:00 até as 22:00</p>
                    <p><strong>Tel:</strong> (85)3291-2233</p>
                    
                    <button className="btn-card">VER LOJA</button>
                </div>

            </div>
    </> );
}
 
export default MyStoreCard;