import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MyStoreCard from '../MyStoreCard';
const MyStores = () => {
    return ( <>

        <section className='custom-more-dark-green p-5'>
            <Container>
                <Row className='d-flex w-100'>
                    <Col className='d-flex gap-5' sm={12} md={12} lg={2}>
                        <h3 className='titulo-secao-lojas'>Nossas <br/><span className='strong-titulo-store'>Lojas</span></h3>
                    </Col>
                    <Col className='d-flex gap-5 w-100' sm={12} md={12} lg={10}>
                        <MyStoreCard endereco={'Av. J, 130 - Pref. José Walter, Fortaleza - CE'}/>
                        <MyStoreCard endereco={'Av. I, 1313 - Pref. José Walter, Fortaleza - CE'}/>
                        <MyStoreCard endereco={'Av. XX, n 230 - Cj - Jereissati II, Pacatuba - CE'}/>
                        <MyStoreCard endereco={'R. Gen. Rabelo, 447 - Siqueira, Fortaleza - CE'}/>
                        <MyStoreCard endereco={'R. Evaldo Braga, 821 - Conj. Palmeiras, Fortaleza - CE, 60870-210'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    </> );
}
 
export default MyStores;