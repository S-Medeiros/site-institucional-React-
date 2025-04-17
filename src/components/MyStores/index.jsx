import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const MyStores = () => {
    return ( <>

        <section className='custom-more-dark-green p-5'>
            <Container>
                <Row>
                    <h3 className='titulo-secao-lojas'>Nossas <br/><span className='strong-titulo-store'>Lojas</span></h3>
                </Row>

                
            </Container>
        </section>
    </> );
}
 
export default MyStores;