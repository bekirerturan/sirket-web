import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  TrendingUp,
  Target,
  Globe,
  BarChart3,
  FileText,
  MapPin,
  Settings,
  Eye,
  Users,
  Trophy,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  Lightbulb,
  Link,
  FileSearch
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

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/30">
        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
            {benefit.title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SEOHizmetleri() {
  const services = [
    {
      id: 1,
      icon: <Settings className="w-8 h-8" />,
      title: "Teknik SEO Analizi ve Optimizasyon",
      description: "Web sitenizin teknik altyapısını analiz ediyor, site hızı, mobil uyumluluk, URL yapısı ve indeksleme gibi kritik konularda iyileştirmeler yapıyoruz.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8" />,
      title: "Anahtar Kelime Analizi",
      description: "İşletmenize en uygun, yüksek arama hacmine sahip ve rekabet gücü olan anahtar kelimeleri belirleyerek stratejinizi oluşturuyoruz.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 3,
      icon: <FileSearch className="w-8 h-8" />,
      title: "On-Page SEO (Site İçi Optimizasyon)",
      description: "Meta başlıklar, açıklamalar, içerik düzenlemeleri, görsel optimizasyonları ve dahili link yapısı gibi site içi tüm çalışmaları gerçekleştiriyoruz.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 4,
      icon: <Link className="w-8 h-8" />,
      title: "Off-Page SEO (Site Dışı Optimizasyon)",
      description: "Güvenilir ve otoriter sitelerden alınan backlink çalışmalarıyla web sitenizin arama motorları gözünde değerini artırıyoruz.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8" />,
      title: "İçerik Optimizasyonu ve Üretimi",
      description: "SEO uyumlu blog yazıları, ürün açıklamaları ve içeriklerle hem kullanıcı deneyimini hem de organik trafiğinizi yükseltiyoruz.",
      gradient: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    },
    {
      id: 6,
      icon: <MapPin className="w-8 h-8" />,
      title: "Yerel SEO",
      description: "İşletmenizin bulunduğu bölgedeki potansiyel müşterilere ulaşabilmesi için Google My Business optimizasyonu ve yerel arama çalışmaları yapıyoruz.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    },
    {
      id: 7,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Raporlama ve Sürekli İyileştirme",
      description: "SEO çalışmalarının performansını düzenli raporlarla takip ediyor, elde edilen verilere göre sürekli iyileştirmeler yapıyoruz.",
      gradient: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40"
    }
  ];

  const benefits = [
    {
      icon: <Eye />,
      title: "Google'da Üst Sıralarda Görünürlük",
      description: "Arama sonuçlarında rakiplerinizin önünde yer alarak daha fazla kullanıcıya ulaşın."
    },
    {
      icon: <Users />,
      title: "Daha Fazla Organik Trafik",
      description: "Ücretli reklamlara bağımlı kalmadan sürekli ziyaretçi akışı sağlayın."
    },
    {
      icon: <Trophy />,
      title: "Güçlü Marka Bilinirliği ve Güvenilirlik",
      description: "Arama motorlarında üst sıralarda olmak markanızın güvenilirliğini artırır."
    },
    {
      icon: <TrendingUp />,
      title: "Daha Yüksek Dönüşüm Oranları",
      description: "Doğru anahtar kelimelerle hedef kitlenize ulaşarak satış şansınızı artırın."
    },
    {
      icon: <Zap />,
      title: "Rakiplerinize Karşı Dijital Avantaj",
      description: "SEO ile uzun vadeli rekabet avantajı elde edin ve sektörünüzde öncü olun."
    }
  ];

  const features = [
    {
      icon: <Target />,
      title: "Özel SEO Stratejileri",
      description: "İşletmenizin ihtiyaçlarına özel SEO stratejileri geliştiriyoruz."
    },
    {
      icon: <Clock />,
      title: "Uzun Vadeli Başarı",
      description: "Kısa vadeli değil, uzun vadeli başarı odaklı çalışıyoruz."
    },
    {
      icon: <BarChart3 />,
      title: "Şeffaf Raporlama",
      description: "Ölçülebilir ve şeffaf raporlama ile sonuçları takip edin."
    },
    {
      icon: <Lightbulb />,
      title: "Trend Takibi",
      description: "Trendleri ve Google algoritmalarını yakından takip ediyoruz."
    }
  ];

  const highlights = [
    { number: "%90+", label: "İnternet Kullanıcısı", description: "Google'da Arama Yapıyor", icon: <Search /> },
    { number: "1-3", label: "Sayfa Sırası", description: "Trafik Potansiyeli En Yüksek", icon: <Eye /> },
    { number: "24/7", label: "Organik Trafik", description: "Sürekli Çalışan Pazarlama", icon: <Globe /> },
    { number: "ROI", label: "Yüksek Getiri", description: "Uzun Vadeli Yatırım", icon: <TrendingUp /> }
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
            <source src="/Seo.mp4" type="video/mp4" />
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
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <Search className="w-8 h-8" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">SEO Hizmetleri</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Arama Motorlarında
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Zirveye Çıkın
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6 drop-shadow-lg">
              Günümüzde internet kullanıcılarının <strong className="text-green-400">%90'ından fazlası</strong> aradıkları ürün ve hizmeti 
              Google'da aratarak buluyor. Web sitenizin arama motorlarında görünür olması, işletmeniz için en güçlü 
              pazarlama kanallarından biridir.
            </p>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              İşte tam da bu noktada devreye giren <strong className="text-blue-400">SEO (Search Engine Optimization)</strong>, 
              markanızın dijitalde öne çıkmasını sağlar.
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4 sm:px-0"
            >
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-green-600 to-blue-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group backdrop-blur-sm">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                Ücretsiz SEO Analizi
              </button>
              
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                Hizmetlerimizi İnceleyin
              </button>
            </motion.div>

            {/* Highlights in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30 shadow-2xl group hover:scale-105 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white w-fit mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(highlight.icon, { className: "w-4 h-4" })}
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {highlight.number}
                  </div>
                  <div className="text-gray-200 font-medium text-xs">{highlight.label}</div>
                  <div className="text-gray-300 text-xs">{highlight.description}</div>
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
              SEO Hizmetlerimizle
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Neler Yapıyoruz?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Markanızı arama motorlarında daha üst sıralara taşımak ve potansiyel müşterilerinizle 
              buluşturmak için profesyonel SEO hizmetleri sunuyoruz.
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

      {/* Benefits Section */}
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
              SEO Hizmetinin
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                İşletmenize Katkıları
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profesyonel SEO çalışmalarıyla işletmenizin dijital dünyada elde edeceği avantajlar
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                benefit={benefit} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Neden Bizimle
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                SEO Çalışmalısınız?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Arama motorlarında başarılı olmak için ihtiyacınız olan tüm uzmanlığa sahibiz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              Arama Motorlarında
              <span className="block">Rakiplerinizi Geçin</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed">
              Arama motorlarında rakiplerinizden öne çıkmak, daha fazla ziyaretçi çekmek ve satışlarınızı 
              artırmak istiyorsanız, profesyonel <strong>SEO hizmetlerimiz</strong> ile markanızı dijitalde zirveye taşıyabiliriz.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Search className="w-6 h-6" />
                Ücretsiz SEO Analizi
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                SEO Başarı Hikayelerimiz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ücretsiz Site Analizi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Kişiye Özel SEO Stratejisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Uzun Vadeli Başarı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}