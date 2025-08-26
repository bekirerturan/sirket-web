import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  Star
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "Web Geliştirme",
      description: "Modern web teknolojileri ile hızlı ve güvenli web siteleri geliştiriyoruz."
    },
    {
      icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "Sosyal Medya Yönetimi",
      description: "Markanızı dijital dünyada öne çıkaran etkili ve yaratıcı sosyal medya stratejileri üretiyoruz."
    },
    {
      icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "Yazılım Geliştirme",
      description: "Standart değil, size özel yazılım çözümleriyle fark yaratıyoruz."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "100+", label: "Mutlu Müşteri" },
    { icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "100+", label: "Proje Tamamlandı" },
    { icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "3+", label: "Yıl Deneyim" },
    { icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "4.9", label: "Müşteri Memnuniyeti" }
  ];

  const features = [
    "Modern ve Responsive Tasarım",
    "Hızlı ve Güvenli Kod Yapısı",
    "SEO Optimizasyonu",
    "7/24 Destek Hizmeti",
    "Uygun Fiyat Garantisi",
    "Zamanında Teslimat"
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto text-center relative z-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-6 sm:mb-8"
          >
            <h1
              className="font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl"
              style={{ fontSize: "3.5rem", lineHeight: 1.2 }}
            >
              HEFA ile Dijital Dünyada
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Fark Yaratın
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0 drop-shadow-lg">
              Modern web teknolojileri ve yaratıcı tasarımlarla işletmenizi dijital dünyada öne çıkarıyoruz. 
              Profesyonel çözümlerimizle markanızı geleceğe taşıyın.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group backdrop-blur-sm">
              Hemen Başlayın
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-xl">
              Hizmetlerimizi İnceleyin
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center px-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-white">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-pulse" />
                <span className="font-semibold">Hızlı • Güvenilir • Modern</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 sm:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Hizmetlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="mb-2">{stat.icon}</div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Öne Çıkan Özelliklerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-white font-semibold text-center"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
