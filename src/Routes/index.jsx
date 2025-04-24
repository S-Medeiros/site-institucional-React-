import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/index.jsx";
import HomePage from "../pages/HomePage";
import Offers from "../pages/Offers/index.jsx"
import PageStore from "../pages/Stores/index.jsx";
import About from "../pages/About/index.jsx";


const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ofertas" element={<Offers />} />
          <Route path="lojas" element={<PageStore />} />
          <Route path="sobre" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;
