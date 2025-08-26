import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  TrendingUp,
  Eye,
  Globe,
  BarChart3,
  Users,
  Clock,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
  MousePointer,
  DollarSign,
  Smartphone,
  Monitor,
  PieChart,
  Shield,
  Lightbulb,
  Award
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
        hover:shadow-red-500/10 cursor-pointer overflow-hidden
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
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-300">
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
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white w-fit mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
          </div>
          
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
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
      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500/10 hover:to-orange-500/10 hover:border-red-500/30">
        <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
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

export default function GoogleAdsHizmetleri() {
  const services = [
    {
      id: 1,
      icon: <Target className="w-8 h-8" />,
      title: "Google Arama Reklamları",
      description: "Potansiyel müşterileriniz Google'da arama yaptığında markanız en üst sıralarda görünsün. Anahtar kelime bazlı reklamlarla doğru kitleye ulaşın ve satışlarınızı artırın.",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/20 hover:border-red-500/40"
    },
    {
      id: 2,
      icon: <Monitor className="w-8 h-8" />,
      title: "Görüntülü Reklam Kampanyaları",
      description: "Milyonlarca web sitesi ve uygulamada görsel reklamlarınızla markanızın bilinirliğini artırın. Banner reklamları ile geniş kitlelere ulaşın ve marka farkındalığı yaratın.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "YouTube Video Reklamları",
      description: "YouTube'da milyonlarca izleyiciye ulaşın. Video reklamları ile markanızı daha etkileyici şekilde tanıtın ve müşterilerinizle duygusal bağ kurun.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 4,
      icon: <MousePointer className="w-8 h-8" />,
      title: "Remarketing Kampanyaları",
      description: "Web sitenizi daha önce ziyaret eden kullanıcıları tekrar hedefleyerek dönüşüm oranlarınızı artırın. Potansiyel müşterilerinizi geri kazanın.",
      gradient: "from-blue-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 5,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Kampanya Analizi ve Optimizasyonu",
      description: "Reklam kampanyalarınızın performansını sürekli izler, analiz eder ve optimize ederiz. En yüksek ROI'yi elde etmeniz için düzenli raporlamalar yapılır.",
      gradient: "from-green-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-blue-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 6,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Bütçe Yönetimi ve Strateji",
      description: "Reklam bütçenizi en verimli şekilde kullanmanız için profesyonel strateji geliştiriyoruz. Her kuruşunuzun karşılığını alın ve ROI'nizi maksimize edin.",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20 hover:border-yellow-500/40"
    }
  ];

  const benefits = [
    {
      icon: <Target />,
      title: "Hedef Kitle Odaklı Reklamlar",
      description: "Google Ads, reklamlarınızı sadece ilgili kitleye göstererek dönüşüm oranlarınızı artırır."
    },
    {
      icon: <BarChart3 />,
      title: "Ölçülebilir Sonuçlar",
      description: "Reklam bütçenizin her kuruşunu takip edebilir, hangi kampanyaların daha verimli olduğunu görebilirsiniz."
    },
    {
      icon: <Zap />,
      title: "Anında Görünürlük",
      description: "SEO çalışmaları uzun vadeli sonuçlar sağlarken, Google Ads ile kısa sürede üst sıralarda yer alabilirsiniz."
    },
    {
      icon: <Settings />,
      title: "Esnek Bütçe Yönetimi",
      description: "Küçük ya da büyük ölçekli işletmeler için uygun bütçelerle reklam stratejisi geliştirmek mümkündür."
    },
    {
      icon: <TrendingUp />,
      title: "Yüksek Dönüşüm Oranları",
      description: "Doğru hedefleme ile satın alma niyeti yüksek kullanıcılara ulaşarak dönüşüm oranlarınızı artırın."
    }
  ];

  const features = [
    {
      icon: <Target />,
      title: "Anahtar Kelime Araştırması",
      description: "Doğru anahtar kelime araştırması yapıyoruz ve rekabetçi analiz gerçekleştiriyoruz."
    },
    {
      icon: <Eye />,
      title: "Dikkat Çekici İçerikler",
      description: "Reklamlarınızı dikkat çekici içeriklerle hazırlayarak tıklama oranlarını artırıyoruz."
    },
    {
      icon: <PieChart />,
      title: "Sürekli Optimizasyon",
      description: "Kampanyalarınızı sürekli optimize ediyor, en yüksek geri dönüşümü elde etmenizi sağlıyoruz."
    },
    {
      icon: <Globe />,
      title: "Çok Kanallı Reklam",
      description: "Google Arama Ağı ve Görüntülü Reklam Ağı üzerinden markanızı doğru kitlelere ulaştırıyoruz."
    }
  ];

  const highlights = [
    { number: "90%", label: "Kullanıcı", description: "Google'da Arama Yapıyor", icon: <Target /> },
    { number: "3.5M", label: "Arama/Saniye", description: "Google'da Gerçekleşiyor", icon: <TrendingUp /> },
    { number: "200%", label: "ROI Artışı", description: "Ortalama Başarı Oranımız", icon: <DollarSign /> },
    { number: "24/7", label: "Reklam Gösterimi", description: "Sürekli Çalışan Pazarlama", icon: <Clock /> }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <Target className="w-8 h-8" />
              </div>
              <span className="text-red-400 font-semibold text-lg">Google Ads ve Dijital Reklam Yönetimi</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="text-white">Dijital Dünyada</span>
  <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-purple-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Hedef Kitlenize Ulaşın
  </span>
</h1>

            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Dijital dünyada başarılı olmanın en önemli yollarından biri <strong className="text-red-400">doğru hedef kitleye ulaşmak</strong> 
              ve markanızı potansiyel müşterilerle buluşturmaktır. <strong className="text-orange-400">Google Ads ve Dijital Reklam Yönetimi</strong> 
              hizmetimiz, işletmenizin online görünürlüğünü artırmak için profesyonel çözümler sunar.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Google Ads, dünyanın en büyük arama motoru olan Google üzerinden hedef kitlenize ulaşmanızı sağlayan 
              en etkili reklam platformlarından biridir.
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
                <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(highlight.icon, { className: "w-6 h-6" })}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
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
  Google Ads Hizmetlerimizle
  <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Neler Yapıyoruz?
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Markanızı dijital dünyada öne çıkarmak ve potansiyel müşterilerinizle 
              buluşturmak için profesyonel Google Ads ve reklam yönetimi hizmetleri sunuyoruz.
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
  Neden Google Ads ve
  <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Dijital Reklam Yönetimi?
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Google Ads ile işletmenizin dijital dünyada elde edeceği avantajlar
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

      {/* Process Section */}
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
              Profesyonel Reklam
              <span className="block bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Yönetimi Sürecimiz
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              İşletmenizin hedeflerini analiz ederek en uygun reklam stratejilerini belirliyoruz.
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 via-orange-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              Google Ads ile
              <span className="block">Öne Çıkın</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-red-100 mb-12 leading-relaxed">
              İşletmenizin dijitalde büyümesini istiyorsanız, <strong>doğru reklam yönetimi</strong> en önemli adımdır. 
              Uzman ekibimizle sunduğumuz <strong>Google Ads ve Dijital Reklam Yönetimi</strong> hizmetimiz sayesinde 
              daha fazla ziyaretçi çekebilir, satışlarınızı artırabilir ve markanızı hedef kitlenizin gözünde daha görünür hale getirebilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-red-600 font-bold text-lg rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Target className="w-6 h-6" />
                Ücretsiz Reklam Analizi
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                Reklam Başarı Hikayelerimiz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-red-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>Ücretsiz Kampanya Analizi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>Kişiye Özel Reklam Stratejisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-400" />
                <span>Yüksek ROI Garantisi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}