import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PenTool,
  TrendingUp,
  Target,
  Globe,
  BarChart3,
  FileText,
  Users,
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
  Video,
  Mail,
  Camera,
  BookOpen,
  Edit3,
  Share2,
  Layers,
  Compass
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

// Strategy Step Component
const StrategyStep = ({ step, index }) => {
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
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 min-w-[3rem]">
          <span className="text-lg font-bold">{index + 1}</span>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {step.title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
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
      <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 hover:border-orange-500/30">
        <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(benefit.icon, { className: "w-5 h-5" })}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
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

export default function IcerikPazarlama() {
  const strategySteps = [
    {
      title: "Marka Analizi",
      description: "İşletmenizin değerlerini, hedeflerini ve pazardaki konumunu detaylı olarak inceliyoruz."
    },
    {
      title: "Hedef Kitle Belirleme",
      description: "İçeriklerinizin kimlere hitap edeceğini, hangi sorunlarına çözüm sunacağını tespit ediyoruz."
    },
    {
      title: "Anahtar Kelime ve SEO Analizi",
      description: "İçeriklerinizin Google'da üst sıralara çıkmasını sağlayacak anahtar kelimeleri belirliyoruz."
    },
    {
      title: "İçerik Planı Oluşturma",
      description: "Blog yazıları, sosyal medya içerikleri, e-bültenler, video senaryoları gibi farklı kanallara özel bir içerik planı hazırlıyoruz."
    },
    {
      title: "Üretim ve Yayınlama",
      description: "Profesyonel içerik yazarlarımız ve tasarım ekibimizle hedef kitlenize hitap eden, özgün ve kaliteli içerikler üretiyoruz."
    },
    {
      title: "Performans Takibi",
      description: "Hazırlanan içeriklerin etkisini analiz ederek sürekli iyileştirme yapıyoruz."
    }
  ];

  const contentSolutions = [
    {
      id: 1,
      icon: <BookOpen className="w-8 h-8" />,
      title: "SEO Uyumlu Blog Yazıları ve Makaleler",
      description: "Arama motorlarında üst sıralarda yer alacak, değer katacak ve hedef kitlenizi etkileyecek blog yazıları ve makaleler hazırlıyoruz.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/40"
    },
    {
      id: 2,
      icon: <Share2 className="w-8 h-8" />,
      title: "Sosyal Medya İçerikleri",
      description: "Marka kimliğinize uygun, etkileşim odaklı sosyal medya içerikleri ile takipçilerinizle güçlü bağlar kuruyoruz.",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/20 hover:border-purple-500/40"
    },
    {
      id: 3,
      icon: <Mail className="w-8 h-8" />,
      title: "E-posta Pazarlama İçerikleri",
      description: "Müşterilerinizle düzenli iletişim kurmanızı ve sadakat oluşturmanızı sağlayan e-posta içerikleri üretiyoruz.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/40"
    },
    {
      id: 4,
      icon: <Video className="w-8 h-8" />,
      title: "Video ve Görsel İçerik Fikirleri",
      description: "Dikkat çeken, paylaşılabilir video senaryoları ve görsel içerik konseptleri geliştiriyoruz.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20 hover:border-orange-500/40"
    },
    {
      id: 5,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Kurumsal İletişim ve Marka Hikayeleri",
      description: "Markanızın değerlerini ve hikayesini etkili bir şekilde anlatan kurumsal iletişim içerikleri hazırlıyoruz.",
      gradient: "from-teal-500 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-500/10 to-green-600/10",
      borderColor: "border-teal-500/20 hover:border-teal-500/40"
    },
    {
      id: 6,
      icon: <Compass className="w-8 h-8" />,
      title: "Uzun Vadeli İçerik Stratejileri",
      description: "Sürdürülebilir başarı için uzun vadeli içerik stratejileri ve yol haritaları oluşturuyoruz.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20 hover:border-pink-500/40"
    }
  ];

  const benefits = [
    {
      icon: <Eye />,
      title: "Marka Bilinirliğini Artırır",
      description: "Değerli içeriklerle hedef kitlenizin zihninde güçlü bir yer edinirsiniz."
    },
    {
      icon: <TrendingUp />,
      title: "SEO Uyumluluğunu Güçlendirir",
      description: "Arama motorları için optimize edilmiş içeriklerle organik trafiğinizi artırırız."
    },
    {
      icon: <Users />,
      title: "Web Sitenize Organik Trafik Çeker",
      description: "Kaliteli içerikler sayesinde doğal yollarla daha fazla ziyaretçi elde edersiniz."
    },
    {
      icon: <Heart />,
      title: "Müşteri Sadakati Oluşturur",
      description: "Değer katan içeriklerle müşterilerinizle duygusal bağ kurarak sadakat yaratırız."
    },
    {
      icon: <Trophy />,
      title: "Satış Dönüşümlerini Artırır",
      description: "Doğru içerik stratejisi ile potansiyel müşterilerinizi gerçek alıcılara dönüştürürüz."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target />,
      title: "Deneyimli Ekip",
      description: "Sadece içerik üretmiyor, dijital başarı için yol haritası sunuyoruz."
    },
    {
      icon: <Shield />,
      title: "Güven Odaklı Yaklaşım",
      description: "Her içerik markanızın sesini yansıtarak hedef kitlenizde güven oluşturur."
    },
    {
      icon: <BarChart3 />,
      title: "SEO Odaklı İçerik",
      description: "İçerikleriniz yalnızca okunmakla kalmaz, Google'da da üst sıralarda yer bulur."
    },
    {
      icon: <Lightbulb />,
      title: "Yaratıcı Çözümler",
      description: "Markanıza özel, yaratıcı ve etkili içerik çözümleri geliştiriyoruz."
    }
  ];

  const highlights = [
    { 
      number: "%70+", 
      label: "Marka Güveni", 
      description: "Kaliteli İçerikle Artar", 
      icon: <Heart /> 
    },
    { 
      number: "3x", 
      label: "Daha Fazla", 
      description: "Organik Trafik Potansiyeli", 
      icon: <TrendingUp /> 
    },
    { 
      number: "%62", 
      label: "Daha Az Maliyet", 
      description: "Geleneksel Pazarlamaya Göre", 
      icon: <BarChart3 /> 
    },
    { 
      number: "24/7", 
      label: "Sürekli", 
      description: "Marka Bilinirliği", 
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
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
                <PenTool className="w-8 h-8" />
              </div>
              <span className="text-purple-400 font-semibold text-lg">İçerik Pazarlama</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="text-white">İçerik ile</span>
  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Markanızı Güçlendirin
  </span>
</h1>

            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Dijital dünyada markaların başarısı artık yalnızca reklam bütçeleriyle değil, ürettikleri 
              <strong className="text-purple-400"> değerli içeriklerle</strong> ölçülüyor. İçerik pazarlama, 
              markaların hedef kitleleriyle güven ve sadakat temelli bir ilişki kurmalarının en etkili yollarından biridir.
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Biz de içerik pazarlama ve strateji geliştirme hizmetimizle işletmenizin dijital dünyada 
              <strong className="text-pink-400"> fark yaratmasını</strong> sağlıyoruz.
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

      {/* Why Content Marketing Section */}
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
  Neden
  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    İçerik Pazarlama?
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              İçerik pazarlama, potansiyel müşterilere yalnızca ürün veya hizmeti tanıtmakla kalmaz, 
              aynı zamanda onlara fayda sağlayan bilgi ve deneyimler sunar. Böylece kullanıcılar markanıza 
              sadece bir satıcı olarak değil, <strong className="text-purple-400">güvenilir bir kaynak</strong> olarak da bakar.
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

      {/* Strategy Process Section */}
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
  Stratejik İçerik
  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Geliştirme Sürecimiz
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Her markanın kendine özgü bir dili ve hedef kitlesi vardır. Bu nedenle, içerik pazarlama çalışmalarımızı 
              rastgele değil, <strong className="text-purple-400">veriye ve analize dayalı bir strateji</strong> ile yürütüyoruz.
            </p>
          </motion.div>

          <div className="space-y-4">
            {strategySteps.map((step, index) => (
              <StrategyStep 
                key={index} 
                step={step} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Solutions Section */}
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
  Sunduğumuz İçerik
  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Pazarlama Çözümleri
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Markanızın ihtiyaçlarına uygun, çok kanallı içerik çözümleri ile dijital dünyada fark yaratın.
            </p>
          </motion.div>

          <div className="space-y-6">
            {contentSolutions.map((solution, index) => (
              <ServiceCard 
                key={solution.id} 
                service={solution} 
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
  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-1">
    Çalışmalısınız?
  </span>
</h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              İçerik pazarlamasında başarılı olmak için ihtiyacınız olan tüm uzmanlığa sahibiz.
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-800 relative overflow-hidden">
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
              İçerik ile Dijital Dünyada
              <span className="block">Güçlü Bir İz Bırakın</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-purple-100 mb-12 leading-relaxed">
              İçerik pazarlama ve strateji geliştirme, dijital dünyada rekabetçi olmanın ve kalıcı başarı elde etmenin 
              en güçlü yollarından biridir. Eğer markanızı rakiplerinizden bir adım öne çıkarmak, hedef kitlenizle güçlü bir bağ kurmak 
              ve sürdürülebilir bir dijital başarı sağlamak istiyorsanız, <strong>doğru yerdesiniz</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3">
                <PenTool className="w-6 h-6" />
                Ücretsiz İçerik Analizi
              </button>
              
              <button className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <ArrowRight className="w-6 h-6" />
                İçerik Başarı Hikayelerimiz
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-purple-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Ücretsiz Marka Analizi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Kişiye Özel İçerik Stratejisi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sürdürülebilir Başarı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}