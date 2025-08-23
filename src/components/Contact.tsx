import React from 'react';
import { Mail, Phone, MapPin, Download, Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const content = {
    en: {
      title: 'Get In Touch',
      subtitle: 'Ready to collaborate on exciting projects or discuss opportunities in astronomy, mathematics, or software development.',
      downloadCV: 'Download Full CV',
      contact: 'Contact Information',
      connect: 'Let\'s Connect',
      message: 'Send Message'
    },
    ar: {
      title: 'تواصل معي',
      subtitle: 'مستعدة للتعاون في مشاريع مثيرة أو مناقشة الفرص في مجال الفلك، الرياضيات، أو تطوير البرمجيات.',
      downloadCV: 'تحميل السيرة الذاتية كاملة',
      contact: 'معلومات التواصل',
      connect: 'دعنا نتواصل',
      message: 'إرسال رسالة'
    }
  };

  return (
    <section className={`py-24 bg-gray-900 text-white ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 animate-fadeInUp">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
            {content[language].subtitle}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 animate-fadeInUp animation-delay-400"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fadeInUp animation-delay-600">
              <h3 className="text-3xl font-bold text-blue-400 mb-8">
                {content[language].contact}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                  <div className="bg-blue-600 p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:nagham1990m@hotmail.com" className="text-xl font-semibold hover:text-blue-400 transition-colors">
                      nagham1990m@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                  <div className="bg-green-600 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a href="tel:+963999025537" className="text-xl font-semibold hover:text-green-400 transition-colors">
                      +963 999 025 537
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                  <div className="bg-purple-600 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="text-xl font-semibold">Aleppo, Syria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-8 animate-fadeInUp animation-delay-800">
              <h3 className="text-3xl font-bold text-blue-400 mb-8">
                {content[language].connect}
              </h3>
              
              <div className="space-y-6">
                <button className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <Download className="w-6 h-6" />
                  <span className="text-lg">{content[language].downloadCV}</span>
                </button>

                <button className="w-full flex items-center justify-center space-x-3 px-8 py-6 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-700">
                  <Send className="w-6 h-6" />
                  <span className="text-lg">{content[language].message}</span>
                </button>

                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {language === 'en' 
                      ? 'Open to collaborations in academic research, software development projects, and educational initiatives. Available for consulting on astronomical heritage and digital education.'
                      : 'منفتحة للتعاون في البحث الأكاديمي، مشاريع تطوير البرمجيات، والمبادرات التعليمية. متاحة للاستشارة حول التراث الفلكي والتعليم الرقمي.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-lg">
            © 2025 Dr. Nagham Masharqeh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;