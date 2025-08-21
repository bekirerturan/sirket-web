import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Portfolyo", href: "/portfolyo" },
    { name: "İletişim", href: "/iletisim" },
    { name: "Blog", href: "/blog" }
  ];

  const serviceLinks = [
    { name: "Web Tasarım", href: "/kurumsal-web-tasarim" },
    { name: "E-ticaret", href: "/e-ticaret" },
    { name: "Mobil Uygulama", href: "/mobil-uygulama" },
    { name: "SEO Hizmetleri", href: "/seo" },
    { name: "Grafik Tasarım", href: "/grafik-tasarim" },
    { name: "Danışmanlık", href: "/danismanlik" }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-white mb-6 inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Şirketim
              </span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Modern web teknolojileri ve yaratıcı tasarımlarla işletmenizi dijital dünyada öne çıkarıyoruz. 
              Profesyonel çözümlerimizle markanızı geleceğe taşıyın.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@sirketim.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 mr-4">Bizi Takip Edin:</span>
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">
            © 2025 Şirketim. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/gizlilik" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Gizlilik Politikası
            </Link>
            <Link to="/kullanim-kosullari" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Kullanım Koşulları
            </Link>
            <Link to="/kvkk" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}