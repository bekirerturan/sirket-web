import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hizmetler from "./pages/Hizmetler";
import ScrollToTop from './components/ScrollToTop';
import Hakkimizda from "./pages/Hakkimizda";
import Blog from "./pages/Blog"; // Blog sayfasını import et
import Iletisim from "./pages/Iletisim"; 

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
        <Route path="/dijital-pazarlama" element={<div>Dijital Pazarlama detay sayfası yakında...</div>} />
        <Route path="/seo" element={<div>SEO detay sayfası yakında...</div>} />
        <Route path="/kurumsal-web-tasarim" element={<div>Kurumsal Web Tasarım detay sayfası yakında...</div>} />
        <Route path="/e-ticaret" element={<div>E-Ticaret detay sayfası yakında...</div>} />
        <Route path="/sosyal-medya" element={<div>Sosyal Medya detay sayfası yakında...</div>} />
        <Route path="/google-ads" element={<div>Google Ads detay sayfası yakında...</div>} />
        <Route path="/grafik-tasarim" element={<div>Grafik Tasarım detay sayfası yakında...</div>} />
        <Route path="/icerik-pazarlama" element={<div>İçerik Pazarlama detay sayfası yakında...</div>} />
        <Route path="/crm" element={<div>CRM detay sayfası yakında...</div>} />
      </Routes>
    </Router>
  );
}

export default App;