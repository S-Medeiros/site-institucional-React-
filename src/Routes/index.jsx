import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/index.jsx";
import HomePage from "../pages/HomePage";
import Offers from "../pages/Offers/index.jsx"

const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ofertas" element={<Offers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;
