import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  User,
  Building,
  Globe,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // 3 saniye sonra success mesajını kaldır
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent("Şehitler Mahallesi, Gölcük/Kocaeli, Türkiye");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+90 (262) 555 0123",
      subInfo: "Haftaiçi 09:00 - 18:00",
      action: "tel:+902625550123"
    },
    {
      icon: Mail,
      title: "E-posta",
      info: "info@sirketim.com",
      subInfo: "7/24 destek",
      action: "mailto:info@sirketim.com"
    },
    {
      icon: MapPin,
      title: "Adres",
      info: "Şehitler Mahallesi",
      subInfo: "Gölcük/Kocaeli, Türkiye",
      action: openGoogleMaps
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      info: "Pazartesi - Cuma",
      subInfo: "09:00 - 18:00",
      action: null
    }
  ];

  const services = [
    "Web Tasarım & Geliştirme",
    "E-ticaret Çözümleri",
    "Mobil Uygulama",
    "SEO & Dijital Pazarlama",
    "Grafik Tasarım",
    "Kurumsal Danışmanlık"
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-normal">
  İletişime{" "}
  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Geçin
  </span>
</h1>

            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Dijital projeleriniz için profesyonel çözümler sunuyoruz. 
              Hayalinizdeki projeyi birlikte gerçekleştirelim!
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24 Saat İçinde Yanıt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Profesyonel Destek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700/50 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Proje Hakkında Konuşalım
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Formu doldurun, size en kısa sürede dönüş yapalım. Projenizin detaylarını öğrenmek için sabırsızlanıyoruz!
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300">Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Ad Soyad *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                          placeholder="Adınız ve Soyadınız"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Telefon
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                          placeholder="+90 (5xx) xxx xx xx"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        E-posta *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Şirket
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
                          placeholder="Şirket Adı"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Konu *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-colors duration-300 appearance-none"
                      >
                        <option value="">Hizmet Seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Mesajınız *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none"
                        placeholder="Projeniz hakkında detaylı bilgi verin..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Mesaj Gönder
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                        contact.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={contact.action && typeof contact.action === 'function' ? contact.action : 
                               contact.action && typeof contact.action === 'string' ? () => window.open(contact.action, '_blank') : undefined}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">{contact.title}</h3>
                          <p className="text-gray-300 text-sm font-medium">{contact.info}</p>
                          <p className="text-gray-400 text-xs mt-1">{contact.subInfo}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Map */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
                <div className="p-6 border-b border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-2">Ofis Konumumuz</h3>
                  <p className="text-gray-400">Haritaya tıklayarak Google Maps'te açın</p>
                </div>
                
                <div 
                  className="relative h-80 cursor-pointer group overflow-hidden"
                  onClick={openGoogleMaps}
                >
                  {/* Map placeholder with Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.834836287!2d29.8185!3d40.6589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb5e6a7c0001%3A0x1a0d8e6e8e5c0001!2zxZ5laGl0bGVyIE1haCwgR8O2bGPDvGsvS29jYWVsaQ!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
                    width="100%"
                    height="320"
                    style={{ border: 0, filter: 'grayscale(30%) brightness(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-300 group-hover:filter-none group-hover:brightness-100"
                  ></iframe>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="text-gray-900 font-semibold text-sm">Google Maps'te Aç</p>
                          <p className="text-gray-600 text-xs">Yol tarifi al</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+902625550123"
                  className="flex-1 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-xl p-4 text-center transition-colors duration-300 group"
                >
                  <Phone className="w-6 h-6 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold">Hemen Ara</p>
                  <p className="text-green-300 text-sm">+90 (262) 555 0123</p>
                </a>

                <a
                  href="https://wa.me/902625550123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 rounded-xl p-4 text-center transition-colors duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-emerald-300 text-sm">Mesaj Gönder</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Müşterilerimizin en çok merak ettiği konular
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Proje süreçleri nasıl işliyor?",
                a: "Her proje için önce detaylı analiz yapıyoruz, sonra tasarım ve geliştirme aşamalarını planlıyoruz. Süreç boyunca düzenli güncellemeler paylaşıyor, geri bildirimlerinizi alıyoruz."
              },
              {
                q: "Fiyatlandırma nasıl belirleniyor?",
                a: "Her projenin kendine özgü ihtiyaçları olduğu için fiyatlandırmayı proje kapsamına göre belirliyoruz. Ücretsiz danışmanlık görüşmesinde detaylı teklif sunuyoruz."
              },
              {
                q: "Proje teslim süreleri ne kadar?",
                a: "Basit web siteleri 1-2 hafta, kurumsal projeler 4-8 hafta, e-ticaret siteleri 6-10 hafta sürebilir. Kesin süre, proje kapsamına göre belirlenir."
              },
              {
                q: "Proje sonrası destek hizmeti var mı?",
                a: "Evet! Tüm projelerimizde 1 yıl garanti ve teknik destek sunuyoruz. Ayrıca bakım ve güncellemeler için paketlerimiz bulunuyor."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group"
              >
                <summary className="p-6 cursor-pointer hover:bg-gray-700/30 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{faq.q}</h3>
                    <div className="text-blue-400 group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        details[open] summary {
          border-bottom: 1px solid rgba(75, 85, 99, 0.3);
        }
      `}</style>
    </div>
  );
}