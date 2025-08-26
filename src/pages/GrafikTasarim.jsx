import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Palette,
  Eye,
  Lightbulb,
  Users,
  TrendingUp,
  Globe,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Monitor,
  Image,
  FileText,
  Share2,
  Edit3,
  Layers,
  PenTool,
  Camera,
  Brush
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
        hover:shadow-purple-500/10 cursor-pointer overflow-hidden
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
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
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
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white w-fit mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
          </div>
          
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
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
      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-500/30">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
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

export default function GrafikTasarimHizmetleri() {
  const services = [
    {
      id: 1,
      icon: <PenTool className="w-8 h-8" />,
      title: "Logo Tasarımı",
      description: "Markanızı yansıtan özgün ve güçlü logolar tasarlıyoruz. Akılda kalıcı, profesyonel ve her platformda uyumlu çalışan logo tasarımları ile marka kimliğinizi güçlendiriyoruz.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 2,
      icon: <Layers className="w-8 h-8" />,
      title: "Kurumsal Kimlik Tasarımı",
      description: "Kartvizit, antetli kağıt, katalog ve tüm kurumsal materyallerinizin profesyonel tasarımını gerçekleştiriyoruz. Tutarlı marka kimliği ile güvenilirliğinizi artırıyoruz.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    },
    {
      id: 3,
      icon: <Share2 className="w-8 h-8" />,
      title: "Sosyal Medya Tasarımları",
      description: "Hedef kitlenize uygun, dikkat çekici ve özgün sosyal medya içerik tasarımları yapıyoruz. Instagram, Facebook, LinkedIn ve diğer platformlar için özel tasarımlar sunuyoruz.",
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 4,
      icon: <Monitor className="w-8 h-8" />,
      title: "Web ve Mobil Uygulama Tasarımları",
      description: "Kullanıcı deneyimi odaklı modern web ve mobil uygulama tasarımları sunuyoruz. Responsive, kullanıcı dostu ve çağdaş tasarımlarla dijital varlığınızı güçlendiriyoruz.",
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-500/20 hover:border-indigo-500/40"
    },
    {
      id: 5,
      icon: <Zap className="w-8 h-8" />,
      title: "Reklam Tasarımları",
      description: "Google Ads, sosyal medya ve diğer dijital reklam kampanyaları için etkili görsel tasarımlar yapıyoruz. Dönüşüm odaklı, dikkat çekici reklam materyalleri sunuyoruz.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 6,
      icon: <FileText className="w-8 h-8" />,
      title: "Broşür, Afiş ve Banner Tasarımı",
      description: "Basılı ve dijital tüm reklam ihtiyaçlarınıza yönelik profesyonel çözümler sunuyoruz. Etkileyici broşürler, göz alıcı afişler ve etkili banner tasarımları yapıyoruz.",
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/40"
    }
  ];

  const benefits = [
    {
      icon: <Award />,
      title: "Marka İmajınızı Güçlendirirsiniz",
      description: "Profesyonel tasarımlarla markanızın güvenilirliğini ve prestijini artırarak müşteriler nezdinde olumlu bir imaj oluşturursunuz."
    },
    {
      icon: <Users />,
      title: "Hedef Kitlenizle Güvenilir Bir Bağ Kurarsınız",
      description: "Doğru tasarım dili ile hedef kitlenizin beğenisini kazanır ve onlarla duygusal bir bağlantı kurarsınız."
    },
    {
      icon: <Eye />,
      title: "Mesajınızı Daha Etkili Aktarırsınız",
      description: "Görsel iletişimin gücüyle mesajlarınızı daha anlaşılır, akılda kalıcı ve etkili bir şekilde hedef kitlenize ulaştırırsınız."
    },
    {
      icon: <TrendingUp />,
      title: "Pazarlama Çalışmalarınızı Verimli Hale Getirirsiniz",
      description: "Profesyonel tasarımlarla dijital ve geleneksel pazarlama kampanyalarınızın başarı oranını önemli ölçüde artırırsınız."
    },
    {
      icon: <Globe />,
      title: "Rakiplerinizden Ayrışırsınız",
      description: "Özgün ve yaratıcı tasarımlarla sektörünüzde öne çıkar, rakiplerinizden farklılaşarak müşteri tercihini kazanırsınız."
    }
  ];

  const features = [
    {
      icon: <Lightbulb />,
      title: "Yaratıcı ve Özgün Tasarım",
      description: "Her projede yaratıcı ve özgün tasarım anlayışımızla markanıza değer katıyoruz."
    },
    {
      icon: <Award />,
      title: "Profesyonel Bakış Açısı",
      description: "Markanızı rakiplerinizden ayıracak profesyonel tasarım bakış açımız bulunuyor."
    },
    {
      icon: <Monitor />,
      title: "Her Platform İçin Uyumlu",
      description: "Tüm platformlarda uyumlu ve etkili görsel çözümler sunuyoruz."
    },
    {
      icon: <TrendingUp />,
      title: "Stratejik Yaklaşım",
      description: "İşinizi büyütmeye odaklı stratejik yaklaşımımızla grafik tasarımda fark yaratıyoruz."
    }
  ];

  const highlights = [
    { number: "90%", label: "İlk İzlenim", description: "Görsel Tasarıma Bağlı", icon: <Eye /> },
    { number: "65%", label: "İnsan Beyninin", description: "Görsel Öğrenme Yönelimi", icon: <Palette /> },
    { number: "3x", label: "Daha Fazla", description: "Paylaşım Alır Görsel İçerik", icon: <Share2 /> },
    { number: "24/7", label: "Marka Temsilcisi", description: "Sürekli Çalışan Görsellik", icon: <Globe /> }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Palette className="w-8 h-8" />
              </div>
              <span className="text-purple-400 font-semibold text-lg">Grafik Tasarım Hizmeti</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="text-white">Güçlü Bir Marka</span>
  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Kimliği Oluşturun
  </span>
</h1>

            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Günümüz dijital dünyasında markaların güçlü bir kimlik oluşturabilmesi için <strong className="text-purple-400">grafik tasarım</strong> en 
              önemli unsurlardan biridir. <strong className="text-pink-400">Görsellik</strong>, hem müşterilerinizle kurduğunuz ilk temas noktası 
              hem de markanızın akılda kalıcılığını sağlayan en güçlü iletişim aracıdır.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Profesyonel ve yaratıcı grafik tasarım hizmetleri ile işletmenizin hedef kitlesine etkili bir şekilde 
              ulaşmasını, rakiplerinden ayrışmasını ve güçlü bir marka imajı oluşturmasını sağlıyoruz.
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
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(highlight.icon, { className: "w-6 h-6" })}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {highlight.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{highlight.label}</div>
                <div className="text-gray-500 text-xs mt-1">{highlight.description}</div>
              </div>
            ))}
          </motion.div>
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
              Grafik Tasarım
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Profesyonel ekibimizle işletmenizin ihtiyaçlarına yönelik geniş kapsamlı 
              grafik tasarım hizmetleri sunuyoruz.
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
              Neden Grafik Tasarım
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Önemlidir?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Bir markanın müşteriye ilk yansıması genellikle görseller üzerinden olur. 
              Profesyonel grafik tasarım ile elde edeceğiniz avantajlar:
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
              Neden Bizi
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tercih Etmelisiniz?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Grafik tasarımda fark yaratan yaklaşımımız ve profesyonel hizmet anlayışımız
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-800 relative overflow-hidden">
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
              Markanızın Gücünü
              <span className="block">Artırın</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-purple-100 mb-12 leading-relaxed">
              Markanızın gücünü artırmak, hedef kitlenize en doğru şekilde ulaşmak ve rakiplerinizden öne çıkmak için 
              profesyonel <strong>grafik tasarım hizmeti</strong> büyük önem taşır. 
              Biz, işletmenizin görsel dünyasını en güçlü şekilde temsil etmek ve markanızı bir adım öne çıkarmak için buradayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Palette className="w-6 h-6" />
                Ücretsiz Tasarım Danışmanlığı
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                Tasarım Portföyümüz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-400" />
                <span>Ücretsiz Tasarım Danışmanlığı</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-400" />
                <span>Sınırsız Revizyon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-400" />
                <span>Hızlı Teslimat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}