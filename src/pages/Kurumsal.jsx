import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Monitor,
  Palette,
  Shield,
  Smartphone,
  Search,
  Code,
  Users,
  Trophy,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Eye,
  Star,
  Lightbulb,
  Target,
  Settings,
  TrendingUp
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

export default function KurumsalWebTasarim() {
  const importancePoints = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilirlik",
      description: "Profesyonel tasarlanmış bir web sitesi, müşterilerinize markanızın güvenilir olduğunu gösterir ve ilk izlenimde güçlü bir etki yaratır.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "Kurumsal Kimlik",
      description: "Renk, tipografi ve tasarım dili markanızın karakterini yansıtarak rakiplerinizden ayrışmanızı sağlar ve fark yaratır.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Müşteri Deneyimi",
      description: "Kullanıcı dostu bir yapı sayesinde ziyaretçiler sitenizde kolayca aradıklarını bulur ve daha uzun süre kalır.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 4,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobil Uyum",
      description: "Günümüzde web trafiğinin büyük bölümü mobil cihazlardan geldiği için responsive tasarım olmazsa olmazdır.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 5,
      icon: <Search className="w-8 h-8" />,
      title: "SEO Uyumlu Yapı",
      description: "Doğru altyapı ve teknik düzenlemeler ile web siteniz arama motorlarında üst sıralara çıkar ve daha çok bulunur.",
      gradient: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    }
  ];

  const benefits = [
    {
      icon: <Star />,
      title: "Şirketinize Özel Özgün Tasarım",
      description: "Markanıza ve sektörünüze özel, rakiplerden farklılaşan ve size özel tasarlanmış web sitesi."
    },
    {
      icon: <Zap />,
      title: "Hızlı ve Güvenli Altyapı",
      description: "Modern teknolojiler kullanarak hızlı yüklenen ve güvenli web siteleri oluşturuyoruz."
    },
    {
      icon: <Search />,
      title: "Google Uyumlu SEO Altyapısı",
      description: "Arama motorlarında görünürlüğünüzü artırmak için SEO dostu kod yapısı ve optimizasyon."
    },
    {
      icon: <Code />,
      title: "Profesyonel İçerik Entegrasyonu",
      description: "Markanızı en iyi şekilde tanıtan, profesyonel olarak hazırlanmış içerik yapısı."
    },
    {
      icon: <Settings />,
      title: "Kullanıcı Dostu Arayüz ve Kolay Yönetim Paneli",
      description: "Sitenizi kolayca güncelleyebileceğiniz sade ve anlaşılır yönetim paneli."
    },
    {
      icon: <Palette />,
      title: "Marka Kimliğinize Uygun Kreatif Çözümler",
      description: "Markanızın değerlerini yansıtan ve hedef kitlenize hitap eden yaratıcı tasarım çözümleri."
    }
  ];

  const features = [
    {
      icon: <Target />,
      title: "Özel Tasarım Yaklaşımı",
      description: "Her projeyi benzersiz olarak değerlendirip size özel çözümler üretiyoruz."
    },
    {
      icon: <Globe />,
      title: "Modern Teknolojiler",
      description: "En güncel web teknolojileri ve standartlarını kullanıyoruz."
    },
    {
      icon: <Eye />,
      title: "Kullanıcı Odaklı Tasarım",
      description: "Kullanıcı deneyimini ön planda tutarak tasarım kararları alıyoruz."
    },
    {
      icon: <TrendingUp />,
      title: "Sürekli Destek",
      description: "Projeniz tamamlandıktan sonra da yanınızda olmaya devam ediyoruz."
    }
  ];

  const highlights = [
    { number: "100+", label: "Tamamlanan Proje", description: "Başarıyla Gerçekleştirildi", icon: <Trophy /> },
    { number: "%98", label: "Müşteri Memnuniyeti", description: "Güven ve Kalite", icon: <Star /> },
    { number: "24/7", label: "Teknik Destek", description: "Her Zaman Yanınızda", icon: <Settings /> },
    { number: "SEO", label: "Dostu Altyapı", description: "Arama Motoru Uyumlu", icon: <Search /> }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

       {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
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
            <source src="/Kurumsal.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <Monitor className="w-8 h-8" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">Kurumsal Web Tasarım</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="text-white">Dijital Dünyada</span>
  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Güçlü Marka İmajı
  </span>
</h1>

            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Dijital dünyada güçlü bir marka imajı oluşturmanın en önemli adımlarından biri, 
              <strong className="text-blue-400"> profesyonel bir web sitesine </strong>sahip olmaktır. 
              <strong className="text-purple-400"> Kurumsal web tasarım</strong>, yalnızca estetik bir görsellik sunmakla kalmaz; 
              aynı zamanda marka kimliğinizi en iyi şekilde yansıtır.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Firmamız, kullanıcı deneyimini ön planda tutarak modern, mobil uyumlu ve SEO dostu 
              <strong className="text-green-400"> kurumsal web tasarım hizmetleri </strong>sunmaktadır.
            </p>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(highlight.icon, { className: "w-6 h-6" })}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {highlight.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{highlight.label}</div>
                <div className="text-gray-500 text-xs mt-1">{highlight.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Importance Section */}
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
              Kurumsal Web Tasarımın
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Önemi
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profesyonel web tasarımın işletmeniz için neden kritik önemde olduğunu keşfedin
            </p>
          </motion.div>

          <div className="space-y-6">
            {importancePoints.map((point, index) => (
              <ServiceCard 
                key={point.id} 
                service={point} 
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
  Bizimle Çalıştığınızda
  <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Elde Edeceğiniz Avantajlar
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profesyonel kurumsal web tasarım hizmetimizle işletmenizin dijital dünyada elde edeceği avantajlar
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
  <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Çalışmalısınız?
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Kurumsal web tasarımında başarılı olmak için ihtiyacınız olan tüm uzmanlığa sahibiz.
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              Dijitalde Güçlü Bir
              <span className="block">Marka İmajı Oluşturun</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed">
              Günümüzde ilk izlenimlerin büyük bölümü dijital ortamda oluşuyor. Profesyonel bir 
              <strong> kurumsal web tasarım </strong>ile markanız hem rakiplerinden ayrışır hem de 
              potansiyel müşterilerinize güven verir. Biz, işletmenizin dijitaldeki gücünü artırmak 
              ve sizi en iyi şekilde temsil eden web sitesini oluşturmak için yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Monitor className="w-6 h-6" />
                Ücretsiz Teklif Al
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                Portfolyomuzü İncele
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ücretsiz Tasarım Konsültasyonu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Size Özel Tasarım</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>SEO Dostu Altyapı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}