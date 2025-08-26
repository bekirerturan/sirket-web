import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Search,
  Globe,
  ShoppingCart,
  MessageCircle,
  Target,
  Palette,
  PenTool,
  Users,
  ArrowRight,
  Star,
  CheckCircle
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
        y: 100,
        scale: 0.8
      }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <div className={`
        relative p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl sm:rounded-3xl border-2 ${service.borderColor} ${service.bgColor}
        backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] lg:hover:scale-[1.02] hover:shadow-2xl
        hover:shadow-blue-500/10 cursor-pointer overflow-hidden
      `}>
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Icon and Title */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-4 sm:gap-6 lg:gap-0">
                <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} text-white transform group-hover:scale-110 transition-transform duration-300 mb-0 sm:mb-0 lg:mb-6`}>
                  {React.cloneElement(service.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" })}
                </div>
                
                <div className="text-center sm:text-left lg:text-center lg:hidden">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 sm:space-y-6">
              <div>
                {/* Desktop Title - Hidden on mobile */}
                <h2 className="hidden lg:block text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h2>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <button 
                onClick={() => window.location.href = service.link}
                className={`
                  w-full lg:w-auto group/btn px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${service.color} 
                  text-white font-bold text-sm sm:text-base rounded-full transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3
                  hover:shadow-blue-500/25
                `}
              >
                <span>Detaylar</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
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

export default function Hizmetler() {
  const services = [
    {
      id: 1,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "DİJİTAL PAZARLAMA",
      description: "Markanızı dijital dünyada öne çıkararak hedef kitlenize ulaşmanızı sağlıyoruz. Kapsamlı dijital pazarlama stratejileriyle satışlarınızı artırın.",
      features: ["Dijital Strateji Geliştirme", "Marka Konumlandırma", "Hedef Kitle Analizi", "ROI Optimizasyonu"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40",
      link: "/Dijital"
    },
    {
      id: 2,
      icon: <Search className="w-12 h-12" />,
      title: "SEO",
      description: "Google'da üst sıralarda yer alarak organik trafiğinizi artırıyoruz. Profesyonel SEO hizmetleriyle rakiplerinizin önüne geçin.",
      features: ["Teknik SEO Analizi", "İçerik Optimizasyonu", "Link Building", "Yerel SEO"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40",
      link: "/Seo"
    },
    {
      id: 3,
      icon: <Globe className="w-12 h-12" />,
      title: "Kurumsal Web Tasarımı",
      description: "Profesyonel ve modern web siteleri ile markanızı dijital dünyada güçlü bir şekilde temsil edin. Kullanıcı dostu tasarımlarla fark yaratın.",
      features: ["Responsive Tasarım", "CMS Entegrasyonu", "Hız Optimizasyonu", "Güvenlik Sertifikası"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40",
      link: "/Kurumsal"
    },
    {
      id: 4,
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-Ticaret",
      description: "Online satış potansiyelinizi maksimuma çıkarın. Kullanıcı dostu e-ticaret siteleri ile dijital satış kanalınızı güçlendirin.",
      features: ["Ödeme Sistemi Entegrasyonu", "Envanter Yönetimi", "Sipariş Takibi", "Mobil Uyumluluk"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40",
      link: "/ETicaret"
    },
    {
      id: 5,
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Sosyal Medya Yönetimi",
      description: "Sosyal medya hesaplarınızı profesyonel olarak yönetiyor, takipçi sayınızı artırarak marka bilinirliğinizi yükseltiyoruz.",
      features: ["İçerik Planlama", "Görsel Tasarım", "Topluluk Yönetimi", "Analiz ve Raporlama"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40",
      link: "/Sosyal"
    },
    {
      id: 6,
      icon: <Target className="w-12 h-12" />,
      title: "Google Ads ve Dijital Reklam Yönetimi",
      description: "Google Ads, Facebook Ads ve diğer platformlarda etkili reklam kampanyalarıyla hedef kitlenize doğrudan ulaşın.",
      features: ["Kampanya Stratejisi", "Anahtar Kelime Araştırması", "A/B Testing", "Bütçe Optimizasyonu"],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
      link: "/Googleads"
    },
    {
      id: 7,
      icon: <Palette className="w-12 h-12" />,
      title: "Grafik Tasarım",
      description: "Markanızın görsel kimliğini güçlendiren yaratıcı tasarımlar ile rakiplerinizden farklılaşın. Profesyonel grafik tasarım hizmetleri.",
      features: ["Logo Tasarımı", "Kurumsal Kimlik", "Baskı Tasarımları", "Dijital Görseller"],
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-blue-600/10",
      borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
      link: "/GrafikTasarim"
    },
    {
      id: 8,
      icon: <PenTool className="w-12 h-12" />,
      title: "İçerik Pazarlama ve Strateji Geliştirme",
      description: "Kaliteli içeriklerle hedef kitlenizle güçlü bağlar kurun. İçerik pazarlama stratejileriyle markanızı öne çıkarın.",
      features: ["İçerik Stratejisi", "Blog Yazıları", "Video İçerik", "E-mail Marketing"],
      color: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40",
      link: "/IcerikPazarlama"
    },
    {
      id: 9,
      icon: <Users className="w-12 h-12" />,
      title: "CRM",
      description: "Müşteri ilişkileri yönetimi sistemi ile müşterilerinizle daha güçlü bağlar kurun. Satış süreçlerinizi optimize edin.",
      features: ["Müşteri Takibi", "Satış Yönetimi", "Otomasyonlar", "Raporlama Sistemleri"],
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gradient-to-br from-gray-600/10 to-gray-800/10",
      borderColor: "border-gray-600/20 hover:border-gray-600/40",
      link: "/Crm"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8">
  <span className="text-white">Hizmet</span>
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
    lerimiz
  </span>
</h1>

            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
              Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz. 
              Profesyonel ekibimizle işinizi bir üst seviyeye taşıyın.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <span className="font-semibold text-sm sm:text-base">9 Farklı Hizmet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="font-semibold text-sm sm:text-base">Profesyonel Çözümler</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
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

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Projenizi Konuşalım
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Hangi hizmete ihtiyacınız olursa olsun, uzman ekibimizle ücretsiz görüşme yaparak 
              size özel çözümler geliştirebiliriz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-blue-600 font-bold text-base sm:text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Ücretsiz Konsültasyon
              </button>
              
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Portfolyomuzu İnceleyin
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}