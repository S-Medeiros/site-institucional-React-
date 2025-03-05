import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/index.jsx";
import HomePage from "../pages/HomePage";


const RouterPages = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouterPages;