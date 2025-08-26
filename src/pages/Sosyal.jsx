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
  FileSearch,
  Camera,
  Video,
  BarChart2,
  Layout,
  Share2,
  Megaphone,
  HeartHandshake,
  Calendar,
  ThumbsUp,
  Play,
  Image,
  PieChart
} from "lucide-react";

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

export default function SosyalMedyaYonetimi() {
  // SERVICES
  const services = [
    {
      id: 1,
      icon: <Target className="w-8 h-8" />,
      title: "Strateji ve Planlama",
      description: "Markanızın hedeflerini ve sektörel ihtiyaçlarını analiz ederek size özel bir sosyal medya planı oluşturuyoruz.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 2,
      icon: <Camera className="w-8 h-8" />,
      title: "Profesyonel İçerik Üretimi",
      description: "Grafik tasarım, video, görsel ve metin içerikleri profesyonel bir şekilde hazırlıyoruz.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Hedef Kitle Analizi",
      description: "Potansiyel müşterilerinizi tanımlayarak içerikleri onların ilgisine uygun hale getiriyoruz.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 4,
      icon: <Share2 className="w-8 h-8" />,
      title: "Düzenli Paylaşımlar",
      description: "Markanızın sosyal medya hesaplarında düzenli, özgün ve etkileşim odaklı içerikler paylaşıyoruz.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 5,
      icon: <Megaphone className="w-8 h-8" />,
      title: "Reklam Yönetimi",
      description: "Facebook, Instagram, TikTok ve LinkedIn reklam kampanyalarıyla satışlarınızı ve marka bilinirliğinizi artırıyoruz.",
      gradient: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    },
    {
      id: 6,
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Raporlama ve Analiz",
      description: "Düzenli raporlamalarla sosyal medya performansınızı ölçüyor, gelişim için yeni stratejiler öneriyoruz.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    }
  ];

  // BENEFITS
  const benefits = [
    {
      icon: <Eye />,
      title: "Marka Bilinirliğini Artırır",
      description: "Güçlü sosyal medya stratejileri ile markanız daha geniş kitlelere ulaşır."
    },
    {
      icon: <MessageCircle />,
      title: "Doğrudan İletişim Sağlar",
      description: "Hedef kitlenizle hızlı ve etkili şekilde iletişim kurmanızı mümkün kılar."
    },
    {
      icon: <HeartHandshake />,
      title: "Güven ve Bağlılık Oluşturur",
      description: "Sürekli ve değerli etkileşimler müşteri sadakatini artırır."
    },
    {
      icon: <TrendingUp />,
      title: "Rakiplerinizin Önüne Geçersiniz",
      description: "Dijital dünyada sürdürülebilir rekabet avantajı elde edersiniz."
    },
    {
      icon: <Trophy />,
      title: "Satış ve Dönüşümleri Artırır",
      description: "Doğru hedefleme ve içerik ile etkileşimler satışa dönüşür."
    }
  ];

  // FEATURES (Why Choose Us)
  const features = [
    {
      icon: <Lightbulb />,
      title: "Yaratıcı Stratejiler",
      description: "Markanıza özel yaratıcı fikirlerle dikkat çekici kampanyalar kurguluyoruz."
    },
    {
      icon: <Clock />,
      title: "Uzun Vadeli Başarı",
      description: "Kısa vadeli artışlardan ziyade sürdürülebilir büyümeye odaklanıyoruz."
    },
    {
      icon: <BarChart3 />,
      title: "Şeffaf Raporlama",
      description: "Düzenli ve anlaşılır raporlar ile tüm metrikleri sizinle paylaşıyoruz."
    },
    {
      icon: <Shield />,
      title: "Güvenli Marka Yönetimi",
      description: "Kriz anlarında doğru iletişim ve marka güvenliği politikaları uyguluyoruz."
    }
  ];

  // HIGHLIGHTS (Hero Stats)
  const highlights = [
    { number: "%80+", label: "Tüketici", description: "Markaları Sosyal Medyada Takip Ediyor", icon: <Eye /> },
    { number: "24/7", label: "İletişim", description: "Sürekli Etkileşim ve Destek", icon: <MessageCircle /> },
    { number: "4.5M+", label: "Günlük Kullanıcı", description: "Türkiye Sosyal Medya Ekosistemi", icon: <Globe /> },
    { number: "ROI", label: "Getiri", description: "Reklam ve İçerik Yatırımı", icon: <TrendingUp /> }
  ];

  // PROCESS TIMELINE (extra rich section similar complexity)
  const process = [
    {
      icon: <FileSearch />,
      title: "Analiz ve Keşif",
      desc: "Mevcut hesaplarınız, rakipler ve hedef kitle detaylı biçimde analiz edilir."
    },
    {
      icon: <Target />,
      title: "Strateji ve Hedefler",
      desc: "SMART hedeflerle platform bazlı strateji ve içerik takvimi oluşturulur."
    },
    {
      icon: <Layout />,
      title: "İçerik Tasarımı",
      desc: "Görsel, video ve metin içerikler marka kimliğine uygun şekilde üretilir."
    },
    {
      icon: <Megaphone />,
      title: "Reklam Kurulumu",
      desc: "Meta, TikTok ve LinkedIn üzerinde dönüşüm odaklı kampanyalar tasarlanır."
    },
    {
      icon: <PieChart />,
      title: "Ölçümleme",
      desc: "Etkileşim, erişim ve dönüşüm metrikleri raporlanır ve yorumlanır."
    },
    {
      icon: <Zap />,
      title: "Sürekli İyileştirme",
      desc: "A/B testleriyle içerik ve bütçe optimizasyonu sürekli güncellenir."
    }
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-900 min-h-screen">
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
            <source src="/Sosyal.mp4" type="video/mp4" />
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
                <Share2 className="w-8 h-8" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">Sosyal Medya Yönetimi</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Markanızı Sosyal Medyada
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Güçlendirin
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6 drop-shadow-lg">
              Günümüzde markaların büyümesi, hedef kitlelerine ulaşması ve güçlü bir dijital imaj oluşturması için 
              en etkili araçlardan biri <strong className="text-green-400">sosyal medyadır.</strong>
            </p>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              Sosyal medya yönetimi yalnızca paylaşım yapmak değildir; doğru strateji ile bilinirliği artırmayı, 
              bağ kurmayı ve satışları desteklemeyi amaçlayan <strong className="text-blue-400">profesyonel bir süreçtir.</strong>
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4 sm:px-0"
            >
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-green-600 to-blue-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group backdrop-blur-sm">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
                Ücretsiz Hesap Analizi
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
              Sosyal Medya Yönetimi ile
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Neler Sunuyoruz?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              İşletmenize özel hazırladığımız stratejiyle hesaplarınızı düzenli, etkili ve hedefe yönelik şekilde yönetiyoruz.
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
              Sosyal Medya Yönetimi
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Neden Önemlidir?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Marka bilinirliğini artırır, doğrudan iletişim sağlar, güven ve bağlılık oluşturur, rakiplerinizin önüne geçmenize ve satışlarınızı artırmanıza yardımcı olur.
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

      {/* Process / How We Work */}
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
              Nasıl Çalışıyoruz?
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
                Uçtan Uca Süreç Yönetimi
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Analizden stratejiye, içerik üretiminden reklam ve raporlamaya kadar tüm süreci profesyonelce yönetiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white w-fit mb-4">
                      {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
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
                Sosyal Medya Yönetimi Yapmalısınız?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Markanızı yalnızca sosyal medyada var etmekle kalmıyor; güçlü bir dijital kimlik, bağlı bir topluluk ve satışa dönüşen etkileşimler inşa ediyoruz.
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
              Sosyal Medyada
              <span className="block">Fark Yaratın</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed">
              Sosyal medyanın gücünü profesyonel bir şekilde kullanmak, markanızı dijitalde zirveye taşır. Uzman ekibimizle işletmenizi başarıya taşıyacak stratejiler üretelim.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Share2 className="w-6 h-6" />
                Ücretsiz Hesap Analizi
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                Başarı Hikayelerimiz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Özel Strateji ve Planlama</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Profesyonel İçerik Üretimi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Şeffaf Raporlama</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}