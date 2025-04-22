import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MyStoreCard from '../MyStoreCard';
const MyStores = () => {
    return ( <>

        <section className='custom-more-dark-green p-5'>
            <div className="container">
                <div className="d-flex flex-wrap">
                    {/* Coluna do título - fixa na esquerda */}
                    <div className="col-12 col-lg-2 mb-4">
                        <h3 className='titulo-secao-lojas'>
                            Nossas <br />
                            <span className='strong-titulo-store'>Lojas</span>
                        </h3>
                    </div>
            
                    {/* Coluna dos cards - ocupa o restante */}
                    <div className="col-12 col-lg-10 d-flex gap-4 flex-wrap">
                        <MyStoreCard endereco={'Av. J, 130 - Pref. José Walter, Fortaleza - CE'} horario={'Todos os dias: 6:00 até as 22:00'} />
                        <MyStoreCard endereco={'Av. I, 1313 - Pref. José Walter, Fortaleza - CE'} horario={'Todos os dias: 6:00 até as 22:00'} />
                        <MyStoreCard endereco={'Av. XX, n 230 - Cj - Jereissati II, Pacatuba - CE'} horario={'Todos os dias: 6:00 até as 22:00'} />
                        <MyStoreCard endereco={'R. Gen. Rabelo, 447 - Siqueira, Fortaleza - CE'} horario={'Todos os dias: 6:00 até as 22:00'} />
                        <MyStoreCard endereco={'R. Evaldo Braga, 821 - Conj. Palmeiras, Fortaleza - CE, 60870-210'} horario={'Todos os dias: 6:00 até as 22:00'} />
                        <MyStoreCard endereco={'R. Roque Medeiros, 1151 - Mondubim , Fortaleza - CE'} horario={'Seg a Sex: 7:00 até às 17:00'} />
                    </div>
                </div>
            </div>
        </section>


    </> );
}
 
export default MyStores;