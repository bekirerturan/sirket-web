import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Search,
  Users,
  Target,
  BarChart3,
  Mail,
  Palette,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  TrendingDown,
  Eye,
  MessageCircle,
  Heart
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.9
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <div className={`
        relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-2 ${service.borderColor} ${service.bgColor}
        backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
        hover:shadow-blue-500/10 cursor-pointer overflow-hidden
      `}>
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-6">
            {/* Icon */}
            <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              {React.cloneElement(service.icon, { className: "w-8 h-8" })}
            </div>

            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hover Effect Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-200"></div>
      </div>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white w-fit mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
          </div>
          
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {feature.title}
          </h4>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function DijitalPazarlama() {
  const services = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "SEO (Arama Motoru Optimizasyonu)",
      description: "Web sitenizin Google'da üst sıralarda yer almasını sağlıyor, organik trafiğinizi artırıyoruz. Teknik SEO, içerik optimizasyonu ve site hızı geliştirmeleriyle arama motorlarında kalıcı başarı hedefliyoruz.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Sosyal Medya Yönetimi",
      description: "Markanız için profesyonel sosyal medya hesap yönetimi yapıyor, içerik planlamasından reklam yönetimine kadar tüm süreci sizin adınıza takip ediyoruz. Etkili görseller ve içeriklerle markanızı daha geniş kitlelere tanıtıyoruz.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Google Ads ve Dijital Reklam Yönetimi",
      description: "Bütçenizi en verimli şekilde kullanarak Google, YouTube ve sosyal medya reklamlarınızı yönetiyoruz. Ölçülebilir ve sonuç odaklı reklam kampanyalarıyla yüksek dönüşüm oranı sağlıyoruz.",
      gradient: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40"
    },
    {
      id: 4,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "İçerik Pazarlama ve Strateji",
      description: "Hedef kitlenize değer katan, SEO uyumlu ve dönüşüm odaklı içerikler üretiyoruz. Blog yazıları, kampanya metinleri ve yaratıcı içeriklerle markanızın bilinirliğini artırıyoruz.",
      gradient: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    },
    {
      id: 5,
      icon: <Mail className="w-8 h-8" />,
      title: "E-Posta Pazarlama",
      description: "Potansiyel müşterilerinize doğrudan ulaşabileceğiniz e-posta kampanyaları planlıyor, markanızın mesajını etkili şekilde iletiyoruz.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 6,
      icon: <Palette className="w-8 h-8" />,
      title: "Grafik Tasarım ve Görsel İletişim",
      description: "Reklam görselleri, sosyal medya paylaşımları, banner ve kampanya tasarımlarıyla markanızın görsel dünyasını güçlendiriyoruz.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    }
  ];

  const features = [
    {
      icon: <Target />,
      title: "Özel Strateji",
      description: "Her işletmeye özel dijital pazarlama stratejileri geliştiriyoruz."
    },
    {
      icon: <TrendingDown />,
      title: "Verimli Bütçe",
      description: "Bütçenizi en verimli şekilde kullanarak maksimum getiri sağlıyoruz."
    },
    {
      icon: <BarChart3 />,
      title: "Ölçülebilir Sonuçlar",
      description: "Tüm çalışmalarımızı detaylı raporlarla ölçülebilir hale getiriyoruz."
    },
    {
      icon: <Zap />,
      title: "Trend Takibi",
      description: "Dijital pazarlama trendlerini ve yeni teknolojileri yakından takip ediyoruz."
    },
    {
      icon: <Eye />,
      title: "Güçlü Konumlandırma",
      description: "Markanızı dijital dünyada güçlü bir şekilde konumlandırıyoruz."
    },
    {
      icon: <Heart />,
      title: "Müşteri Odaklı",
      description: "Müşteri memnuniyetini her zaman ön planda tutarak çalışıyoruz."
    }
  ];

  const stats = [
    { number: "500+", label: "Başarılı Proje", icon: <Award /> },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: <Heart /> },
    { number: "5+", label: "Yıllık Deneyim", icon: <Star /> },
    { number: "24/7", label: "Destek Hizmeti", icon: <Shield /> }
  ];

  const [heroRef, heroInView] = useInView({
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
            <source src="/Dijital.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto relative z-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <TrendingUp className="w-8 h-8" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">Dijital Pazarlama</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Dijital Pazarlama
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Hizmetleri
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6 drop-shadow-lg">
              Dijital dünyada başarılı olmanın yolu, markanızı doğru stratejilerle tanıtmak ve hedef kitlenize 
              en uygun kanallardan ulaşmaktan geçer. Markanızın dijitalde güçlü bir şekilde konumlanması için 
              kapsamlı <strong className="text-blue-400">dijital pazarlama hizmetleri</strong> sunuyoruz.
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4 sm:px-0"
            >
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Ücretsiz Konsültasyon
              </button>
              
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                Hizmetlerimizi İnceleyin
              </button>
            </motion.div>

            {/* Stats in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-2xl group hover:scale-105 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white w-fit mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(stat.icon, { className: "w-4 h-4" })}
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 font-medium text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Dijital Pazarlama Kapsamında
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Neler Sunuyoruz?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Markanızın dijital dünyada başarılı olması için ihtiyaç duyduğu tüm hizmetleri 
              profesyonel ekibimizle sunuyoruz.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Neden Bizimle
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Dijital Pazarlama?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              İşletmenizin dijital dünyadaki başarısı için size özel çözümler sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              Dijital Pazarlama Yolculuğunuza
              <span className="block">Başlayalım</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed">
              Markanızın dijital dünyada güçlü bir şekilde konumlanması ve hedef kitlenize 
              ulaşması için hemen iletişime geçin. Ücretsiz konsültasyon ile başlayalım.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Ücretsiz Konsültasyon
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                Portfolyomuzu İnceleyin
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ücretsiz İlk Görüşme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Kişiye Özel Strateji</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Destek</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}