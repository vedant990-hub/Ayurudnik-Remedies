import React, { Suspense, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { CookieConsent } from "./components/CookieConsent";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

// Lazy load pages for code splitting
const Home = React.lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = React.lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Products = React.lazy(() => import("./pages/Products").then(m => ({ default: m.Products })));
const Manufacturing = React.lazy(() => import("./pages/Manufacturing").then(m => ({ default: m.Manufacturing })));
const Contact = React.lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const Cosmetics = React.lazy(() => import("./pages/Cosmetics").then(m => ({ default: m.Cosmetics })));
const SoftChews = React.lazy(() => import("./pages/SoftChews").then(m => ({ default: m.SoftChews })));
const Tablets = React.lazy(() => import("./pages/Tablets").then(m => ({ default: m.Tablets })));
const Liquids = React.lazy(() => import("./pages/Liquids").then(m => ({ default: m.Liquids })));
const Powders = React.lazy(() => import("./pages/Powders").then(m => ({ default: m.Powders })));
const DogsCats = React.lazy(() => import("./pages/DogsCats").then(m => ({ default: m.DogsCats })));
const Horses = React.lazy(() => import("./pages/Horses").then(m => ({ default: m.Horses })));
const Cattle = React.lazy(() => import("./pages/Cattle").then(m => ({ default: m.Cattle })));
const Pigs = React.lazy(() => import("./pages/Pigs").then(m => ({ default: m.Pigs })));
const Poultry = React.lazy(() => import("./pages/Poultry").then(m => ({ default: m.Poultry })));
const PrivateLabelCustomSolutions = React.lazy(() => import("./pages/PrivateLabelCustomSolutions").then(m => ({ default: m.PrivateLabelCustomSolutions })));
const PrivateLabelReadyMarket = React.lazy(() => import("./pages/PrivateLabelReadyMarket").then(m => ({ default: m.PrivateLabelReadyMarket })));
const PrivateLabelMinimumOrderQuantities = React.lazy(() => import("./pages/PrivateLabelMinimumOrderQuantities").then(m => ({ default: m.PrivateLabelMinimumOrderQuantities })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B0B0B]"></div>
      <p className="mt-4 text-zinc-600">Loading...</p>
    </div>
  </div>
);

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
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <WhatsAppFloat />
      </BrowserRouter>
    </div>
  );
}

export default App;
