import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Recycle,
  TrendingUp,
  Users,
  Rocket,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Zap
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Value Card Component
const ValueCard = ({ value, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px"
  });

  const icons = {
    "Yenilikçilik": <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    "Şeffaflık": <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    "Sürdürülebilirlik": <Recycle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    "Gelişim": <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
    "İşbirliği": <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
  };

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-violet-500", 
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-pink-500 to-rose-500"
  ];

  const bgColors = [
    "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
    "bg-gradient-to-br from-green-500/10 to-emerald-500/10", 
    "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    "bg-gradient-to-br from-pink-500/10 to-rose-500/10"
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <div className={`
        relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/10 ${bgColors[index]}
        backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl
        hover:shadow-blue-500/20 hover:border-white/30 overflow-hidden h-full
      `}>
        {/* Background Animation */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
            <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${colors[index]} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              {icons[value.title]}
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {value.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default function Hakkimizda() {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const values = [
    {
      title: "Yenilikçilik",
      description: "Her projeye özgün ve yaratıcı bir bakış açısıyla yaklaşırız."
    },
    {
      title: "Şeffaflık", 
      description: "Müşterilerimizle güvene dayalı, açık ve dürüst iletişim kurarız."
    },
    {
      title: "Sürdürülebilirlik",
      description: "Kısa vadeli değil, uzun vadeli başarı için çalışırız."
    },
    {
      title: "Gelişim",
      description: "Hem kendimizi hem de müşterilerimizi sürekli geliştirmeyi hedefleriz."
    },
    {
      title: "İşbirliği", 
      description: "Başarıya giden yolda müşterilerimizi birer iş ortağı olarak görürüz."
    }
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-sm sm:text-base text-white font-semibold">Bizi Tanıyın</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-6 sm:mb-8">
  <span className="text-white">Hakkı</span>
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
    mızda
  </span>
</h1>

            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
              Dijital çağın hızla gelişen dünyasında var olmak, sadece teknolojiyi takip etmekle değil, 
              aynı zamanda onu doğru şekilde kullanabilmekle mümkündür.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="font-semibold text-sm sm:text-base">Yenilikçi Yaklaşım</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                <span className="font-semibold text-sm sm:text-base">Müşteri Odaklı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Biz de tam bu noktada, markaların ve işletmelerin dijital yolculuklarında yanlarında olmak için yola çıktık. 
                  Amacımız; yenilikçi bakış açımız, yaratıcı çözümlerimiz ve profesyonel ekibimizle, iş ortaklarımızın 
                  hedeflerine ulaşmalarını sağlamak ve onları geleceğe hazırlamaktır.
                </p>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Henüz genç bir oluşum olmamıza rağmen, girişimci ruhumuz ve enerjimizle sektörde kalıcı bir iz bırakmayı hedefliyoruz. 
                  Bizim için her müşteri, birlikte büyüdüğümüz bir yol arkadaşıdır.
                </p>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Her proje, markaların potansiyelini en iyi şekilde ortaya çıkarabilmek için attığımız yeni bir adımdır.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl font-bold text-white">∞</div>
                  <div className="text-xs sm:text-sm text-gray-400">Büyüme</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl font-bold text-white">%100</div>
                  <div className="text-xs sm:text-sm text-gray-400">Kalite</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-xl font-bold text-white">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Destek</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-10 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 sm:mb-8">
                    <Star className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Güçlü Vizyon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Başarı sadece ortaya çıkan sonuçla değil, birlikte geçirilen süreçle de ölçülür. 
                    Bu nedenle her müşterimizin markasını kendi markamız gibi benimseriz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Vision Card */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-blue-600/10 to-cyan-500/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border-2 border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                      <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      Vizyonumuz
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Dijital dünyada fark yaratan, güvenilir ve sürdürülebilir çözümler üreterek, 
                    ulusal ve uluslararası alanda markaların ilk tercihi olmak.
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group">
              <div className="relative bg-gradient-to-br from-purple-600/10 to-pink-500/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border-2 border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                      <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      Misyonumuz
                    </h2>
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Markaların büyüme yolculuklarına rehberlik etmek, onların hedef kitlelerine en doğru ve etkili şekilde 
                    ulaşmalarını sağlamak ve dijital dünyada güçlü bir kimlik oluşturmalarına katkıda bulunmak.
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              <span className="text-sm sm:text-base text-white font-semibold">Değerlerimiz</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
              Bizi Biz Yapan
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Değerler
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Her adımımızda bize rehberlik eden ve kimliğimizi oluşturan temel değerlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Yolculuğa Başlamaya Hazır Mısınız?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              Bugün attığımız her adım, yarının güçlü dijital markalarını inşa etmek için atılıyor. 
              Siz de bu yolculukta bizimle birlikte yürümeye hazır mısınız?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white text-blue-600 font-bold text-base sm:text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 sm:gap-3 group">
                <span>Projemizi Konuşalım</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                İletişime Geçin
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}