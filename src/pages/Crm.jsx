import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  TrendingUp,
  Target,
  Globe,
  BarChart3,
  FileText,
  Settings,
  Eye,
  Heart,
  Trophy,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  Shield,
  Clock,
  Lightbulb,
  Database,
  Workflow,
  UserCheck,
  Activity,
  Link,
  Filter,
  PieChart,
  Calendar,
  Mail,
  Phone
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
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white w-fit mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
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
      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-500/30">
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

export default function CRMHizmeti() {
  const crmAdvantages = [
    {
      icon: <Database />,
      title: "Merkezi Veri Yönetimi",
      description: "Tüm müşteri bilgilerinizi tek bir platformda toplayarak kolay erişim sağlar ve veri tutarlılığı sunar."
    },
    {
      icon: <Workflow />,
      title: "Satış Süreçlerinin Otomasyonu",
      description: "Satış ekiplerinizin daha verimli çalışmasına yardımcı olur ve manuel işlemleri minimize eder."
    },
    {
      icon: <Heart />,
      title: "Müşteri Memnuniyetinin Artışı",
      description: "Daha kişiselleştirilmiş bir iletişim ile müşterilerinizin sadakatini artırır ve deneyimlerini geliştirir."
    },
    {
      icon: <BarChart3 />,
      title: "Stratejik Raporlama",
      description: "Detaylı analiz ve raporlar sayesinde işletmenize doğru karar alma süreçlerinde destek olur."
    },
    {
      icon: <Link />,
      title: "Entegrasyon Kolaylığı",
      description: "Mevcut sistemlerinizle uyumlu çalışarak iş akışınızı kesintiye uğratmaz ve sorunsuz geçiş sağlar."
    }
  ];

  const crmFeatures = [
    {
      id: 1,
      icon: <UserCheck className="w-8 h-8" />,
      title: "Müşteri Profil Yönetimi",
      description: "Müşterilerinizin detaylı profillerini oluşturun, geçmiş etkileşimlerini takip edin ve gelecekteki ihtiyaçlarını öngörün.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Satış Fırsat Takibi",
      description: "Satış fırsatlarını etkili bir şekilde yönetin, ilerleme durumlarını izleyin ve dönüşüm oranlarınızı artırın.",
      gradient: "from-emerald-500 to-green-600",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-green-600/10",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/40"
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8" />,
      title: "Randevu ve Görev Yönetimi",
      description: "Müşteri randevularınızı planlayın, görevlerinizi organize edin ve hiçbir önemli aktiviteyi kaçırmayın.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 4,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "İletişim Geçmişi Takibi",
      description: "Müşterilerinizle yapılan tüm iletişimleri kayıt altına alın ve ekip üyeleri arasında bilgi paylaşımını sağlayın.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 5,
      icon: <PieChart className="w-8 h-8" />,
      title: "Performans Analizi ve Raporlama",
      description: "Satış performansınızı analiz edin, müşteri davranışlarını inceleyin ve stratejik kararlar için detaylı raporlar alın.",
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-cyan-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    },
    {
      id: 6,
      icon: <Mail className="w-8 h-8" />,
      title: "Otomatik E-posta Kampanyaları",
      description: "Hedeflenmiş e-posta kampanyaları oluşturun, müşteri segmentasyonu yapın ve pazarlama etkinliğinizi artırın.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target />,
      title: "Özelleştirilmiş Çözümler",
      description: "İşletmenizin ihtiyaçlarına göre özelleştirilmiş CRM çözümleri geliştiriyoruz."
    },
    {
      icon: <Users />,
      title: "Müşteri Odaklı Yaklaşım",
      description: "Müşteri ilişkilerinizi güçlendiren, sürdürülebilir stratejiler sunuyoruz."
    },
    {
      icon: <Shield />,
      title: "Güvenli Veri Yönetimi",
      description: "Müşteri verilerinizin güvenliğini en üst düzeyde koruyoruz."
    },
    {
      icon: <Lightbulb />,
      title: "Sürekli Destek",
      description: "Implementasyon sonrası sürekli teknik destek ve eğitim hizmeti sunuyoruz."
    }
  ];

  const highlights = [
    { 
      number: "%40+", 
      label: "Satış Artışı", 
      description: "Ortalama CRM Kullanımıyla", 
      icon: <TrendingUp /> 
    },
    { 
      number: "24/7", 
      label: "Müşteri Takibi", 
      description: "Kesintisiz Hizmet", 
      icon: <Eye /> 
    },
    { 
      number: "%60+", 
      label: "Zaman Tasarrufu", 
      description: "Otomatik Süreçlerle", 
      icon: <Clock /> 
    },
    { 
      number: "360°", 
      label: "Müşteri Görünümü", 
      description: "Tek Platformda", 
      icon: <Globe /> 
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
                <Users className="w-8 h-8" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">CRM Hizmeti</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="text-white">Müşteri İlişkilerini</span>
  <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Güçlendirin
  </span>
</h1>

            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Müşteri ilişkileri, her işletmenin büyüme ve sürdürülebilirlik yolculuğunun merkezinde yer alır. 
              <strong className="text-blue-400"> CRM (Customer Relationship Management) hizmetimiz</strong>, 
              markaların müşterileriyle daha güçlü, verimli ve uzun vadeli ilişkiler kurmasını sağlamak için geliştirilmiştir.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              İşletmelerin müşteri verilerini düzenli şekilde yönetmesi, satış süreçlerini optimize etmesi, müşteri sadakatini artırması 
              ve doğru zamanda doğru fırsatları yakalaması artık bir zorunluluk haline gelmiştir. 
              <strong className="text-emerald-400"> Biz de bu noktada devreye giriyoruz.</strong>
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
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(highlight.icon, { className: "w-6 h-6" })}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {highlight.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{highlight.label}</div>
                <div className="text-gray-500 text-xs mt-1">{highlight.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CRM Advantages Section */}
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
  CRM Hizmetimizin
  <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Sunduğu Avantajlar
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Modern CRM sistemimiz ile müşteri ilişkilerinizi daha etkili yönetin ve işletmenizin verimliliğini artırın.
            </p>
          </motion.div>

          <div className="space-y-4">
            {crmAdvantages.map((advantage, index) => (
              <BenefitCard 
                key={index} 
                benefit={advantage} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
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
              CRM Çözümümüzün
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Ana Özellikleri
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Müşteri ilişkilerinizi yönetmek için ihtiyacınız olan tüm araçlar tek bir platformda.
            </p>
          </motion.div>

          <div className="space-y-6">
            {crmFeatures.map((feature, index) => (
              <ServiceCard 
                key={feature.id} 
                service={feature} 
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
              Neden Bizim CRM
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Hizmetimizi Tercih Etmelisiniz?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Müşteri odaklı bir yaklaşımı benimseyen ekibimiz, işletmenizin ihtiyaçlarına göre özelleştirilmiş CRM çözümleri geliştirir. 
              Hedefimiz yalnızca bir yazılım sunmak değil; aynı zamanda işletmenizin müşterileriyle kurduğu bağı 
              <strong className="text-blue-400"> daha güçlü, verimli ve sürdürülebilir</strong> hale getirmektir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, index) => (
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-800 relative overflow-hidden">
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
              Müşteri İlişkilerinizi
              <span className="block">Geleceğe Taşıyın</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-12 leading-relaxed">
              CRM hizmetimiz sayesinde işletmeniz, müşteri ilişkilerini sadece yönetmekle kalmaz; 
              aynı zamanda onları <strong>geliştirir, güçlendirir ve geleceğe taşır</strong>. 
              Müşterilerinizle kurduğunuz bağı daha da güçlendirmek için bugün harekete geçin.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Users className="w-6 h-6" />
                Ücretsiz CRM Danışmanlığı
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                CRM Başarı Hikayelerimiz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ücretsiz Sistem Analizi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Özelleştirilmiş CRM Çözümü</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sürekli Teknik Destek</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}