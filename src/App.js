import "./styles.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomeMen from "./Pages/Home/HomeMen/HomeMen";
import HomeWomen from "./Pages/Home/HomeWomen/HomeWomen";
import HomeKids from "./Pages/Home/HomeKids/HomeKids";
import HomeBeauty from "./Pages/Home/HomeBeauty/HomeBeauty";
import HomeLifestyle from "./Pages/Home/HomeLifestyle/HomeLifestyle";
import HomeAccessories from "./Pages/Home/HomeAccessories/HomeAccessories";
import Products from "./Pages/Product/Products";
import PP from "./Pages/ProductsPage/pp";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMen />} />
        <Route path="/women" element={<HomeWomen />} />
        <Route path="/kids" element={<HomeKids />} />
        <Route path="/beauty" element={<HomeBeauty />} />
        <Route path="/lifestyle" element={<HomeLifestyle />} />
        <Route path="/accessories" element={<HomeAccessories />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products" element={<PP />} />
      </Routes>
      <Footer />
    </>
  );
}
