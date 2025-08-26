import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-4 border-b border-gray-800' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            HEFA
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  location.pathname === item.href 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  location.pathname === item.href 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/iletisim"
          className="hidden md:block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Teklif Al
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-gray-800/50 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-2xl transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`block font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === item.href 
                  ? 'text-white bg-gray-800/50' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/iletisim"
            className="block w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </nav>
  );
}