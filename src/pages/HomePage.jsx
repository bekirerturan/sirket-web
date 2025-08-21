import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Rocket, 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Pause
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      // Video hazır olduğunda otomatik başlat
      setTimeout(() => {
        if (isReady) {
          setIsPlaying(true);
        }
      }, 1000);
    }, 200);
    return () => clearTimeout(timer);
  }, [isReady]);

  const handlePlayPause = () => {
    if (!isReady) return;
    
    try {
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.log("Video kontrol hatası:", error);
    }
  };

  const handleVideoReady = () => {
    setIsReady(true);
    // Video hazır olduğunda 2 saniye sonra başlat
    setTimeout(() => {
      setIsPlaying(true);
    }, 2000);
  };

  const handleVideoError = (error) => {
    console.log("Video yükleme hatası:", error);
    setIsReady(false);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "Web Geliştirme",
      description: "Modern web teknolojileri ile hızlı ve güvenli web siteleri geliştiriyoruz."
    },
    {
      icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "Mobil Uygulama",
      description: "iOS ve Android platformları için kullanıcı dostu mobil uygulamalar."
    },
    {
      icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />,
      title: "UI/UX Tasarım",
      description: "Kullanıcı deneyimini önceleyen, modern ve etkileyici tasarımlar."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "500+", label: "Mutlu Müşteri" },
    { icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "1000+", label: "Proje Tamamlandı" },
    { icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, number: "5+", label: "Yıl Deneyim" },
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
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=ecTqFLS-9mg"
            playing={isPlaying}
            loop={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
            onReady={handleVideoReady}
            onError={handleVideoError}
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  controls: 0,
                  modestbranding: 1,
                  rel: 0,
                  iv_load_policy: 3,
                  cc_load_policy: 0,
                  disablekb: 1,
                  fs: 0,
                  playsinline: 1
                }
              }
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover'
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10"></div>
        </div>

        {/* Video Control Button */}
        {isReady && (
          <button
            onClick={handlePlayPause}
            className="absolute top-20 sm:top-24 right-4 sm:right-8 z-30 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          >
            {isPlaying ? <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        )}

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto text-center relative z-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Dijital Dünyada
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fark Yaratın
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
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
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 sm:gap-3 group">
              Hemen Başlayın
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              Portfolyomuzu İnceleyin
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center px-4"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-white">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
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
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Hizmetlerimiz
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
              Dijital dünyadaki ihtiyaçlarınız için kapsamlı çözümler sunuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                  <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group-hover:gap-4 text-sm sm:text-base">
                    Daha Fazla Bilgi
                    <ArrowRight className="w-4 h-4 transition-all duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Rakamlarla Başarımız
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 px-4 sm:px-0">Müşterilerimizle birlikte elde ettiğimiz başarılar</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">{stat.number}</div>
                <div className="text-blue-100 text-sm sm:text-base lg:text-lg font-medium px-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                Neden Bizi 
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Seçmelisiniz?
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-blue-500/20">
                <Rocket className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-6 sm:mb-8 text-blue-200" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Projenizi Hayata Geçirelim!
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                  Uzman ekibimizle birlikte dijital dönüşüm yolculuğunuzu başlatın. 
                  Size özel çözümlerle başarıya ulaşın.
                </p>
                <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Ücretsiz Konsültasyon
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}