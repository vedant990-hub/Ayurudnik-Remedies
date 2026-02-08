import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { CookieConsent } from "./components/CookieConsent";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Manufacturing } from "./pages/Manufacturing";
import { Contact } from "./pages/Contact";
import { Cosmetics } from "./pages/Cosmetics";
import { SoftChews } from "./pages/SoftChews";
import { Tablets } from "./pages/Tablets";
import { Liquids } from "./pages/Liquids";
import { Powders } from "./pages/Powders";
import { DogsCats } from "./pages/DogsCats";
import { Horses } from "./pages/Horses";
import { Cattle } from "./pages/Cattle";
import { Pigs } from "./pages/Pigs";
import { Poultry } from "./pages/Poultry";
import { PrivateLabelCustomSolutions } from "./pages/PrivateLabelCustomSolutions";
import { PrivateLabelReadyMarket } from "./pages/PrivateLabelReadyMarket";
import { PrivateLabelMinimumOrderQuantities } from "./pages/PrivateLabelMinimumOrderQuantities";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/cosmetics" element={<Cosmetics />} />
            <Route path="/products/soft-chews" element={<SoftChews />} />
            <Route path="/products/tablets" element={<Tablets />} />
            <Route path="/products/liquids" element={<Liquids />} />
            <Route path="/products/powders" element={<Powders />} />
            <Route path="/animals/dogs-cats" element={<DogsCats />} />
            <Route path="/animals/horses" element={<Horses />} />
            <Route path="/animals/cattle" element={<Cattle />} />
            <Route path="/animals/pigs" element={<Pigs />} />
            <Route path="/animals/poultry" element={<Poultry />} />
            <Route path="/private-label" element={<Manufacturing />} />
            <Route
              path="/private-label/custom-solutions"
              element={<PrivateLabelCustomSolutions />}
            />
            <Route
              path="/private-label/ready-market"
              element={<PrivateLabelReadyMarket />}
            />
            <Route
              path="/private-label/minimum-order-quantities"
              element={<PrivateLabelMinimumOrderQuantities />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppFloat />
      </BrowserRouter>
    </div>
  );
}

export default App;
