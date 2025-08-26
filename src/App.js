import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hizmetler from "./pages/Hizmetler";
import ScrollToTop from './components/ScrollToTop';
import Hakkimizda from "./pages/Hakkimizda";
import Blog from "./pages/Blog"; // Blog sayfasını import et
import Iletisim from "./pages/Iletisim"; 
import Dijital from "./pages/Dijital";
import Seo from "./pages/Seo";
import Kurumsal from "./pages/Kurumsal";
import ETicaret from "./pages/ETicaret";
import Sosyal from "./pages/Sosyal";
import Googleads from "./pages/Googleads";
import GrafikTasarim from "./pages/GrafikTasarim";
import IcerikPazarlama from "./pages/IcerikPazarlama";
import Crm from "./pages/Crm";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        {/* Blog route'unu düzelt */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/iletisim" element={<Iletisim />} />
        
        {/* Hizmet detay sayfaları için route'lar */}
        <Route path="/dijital" element={<Dijital />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/kurumsal" element={<Kurumsal />} />
        <Route path="/eticaret" element={<ETicaret />} />
        <Route path="/sosyal" element={<Sosyal />} />
        <Route path="/googleads" element={<Googleads />} />
        <Route path="/grafiktasarim" element={<GrafikTasarim />} />
        <Route path="/icerikpazarlama" element={<IcerikPazarlama />} />
        <Route path="/crm" element={<Crm />} />
      </Routes>
    </Router>
  );
}

export default App;