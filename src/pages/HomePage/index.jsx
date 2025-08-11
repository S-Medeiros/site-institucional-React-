import React from 'react';
import ImageCarousel from '../../components/Carousel';
import BaixeApp from '../../components/BaixeApp';
import EncartesHome from '../../components/EncartesHome';
import MyStores from '../../components/MyStores';
import ClubeDeDesconto from "../../components/ClubDeDesconto"

const HomePage = () => {
    return ( <>

    <ImageCarousel />
    <BaixeApp />
    <EncartesHome />
    <MyStores />
    <ClubeDeDesconto/>

    </> );
}
 
export default HomePage;